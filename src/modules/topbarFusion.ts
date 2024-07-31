import { protyleWidthChange } from ".";
import { isOverlapping, querySelectorPromise } from "../util/misc";
import { asriDoms as doms, environment as env } from "../util/rsc";
import { isFullScreen, wndElements } from "../util/state";

// added toolbar elements
let pluginsDivider: AsriDomsExtended, leftSpacing: AsriDomsExtended, rightSpacing: AsriDomsExtended;

let topbar = doms.toolbar as HTMLElement;

let topbarRect: DOMRect, dragRect: DOMRect, layoutsCenterRect: DOMRect, leftSpacingRect: DOMRect, rightSpacingRect: DOMRect, barForwardRect: DOMRect, barSyncRect: DOMRect;
let dragRectInitialLeft: number, dragRectInitialRight: number;

let fromFullscreen = false;

export async function updateDragRect(mode: 'rect' | 'initials' = 'rect', ...dir: ElDir[]): Promise<number> {
    const drag = doms.drag || await querySelectorPromise('#drag');
    if (!drag) {
        throw new Error('updateDragRect(): drag not found');
    }
    return new Promise((resolve) => {
        if (mode === 'initials') {
            if (!dir.length || dir.includes('L')) {
                dragRectInitialLeft = drag.getBoundingClientRect().left;
                resolve(dragRectInitialLeft);
                // console.log('dragRectInitialLeft', dragRectInitialLeft)
            }
            if (!dir.length || dir.includes('R')) {
                dragRectInitialRight = drag.getBoundingClientRect().right;
                resolve(dragRectInitialRight);
                // console.log('dragRectInitialRight', dragRectInitialRight)
            }
        } else {
            dragRect = drag.getBoundingClientRect();
            resolve(-1);
        }
    })
}

export async function handleMacFullScreen() {
    if (!env.isMacOS) return;

    if (isFullScreen()) {
        document.body.classList.add('body--fullscreen');
        dragRectInitialLeft -= fromFullscreen ? 0 : 80 + 8;
        dragRectInitialRight += protyleWidthChange;
        fromFullscreen = true;
    } else {
        document.body.classList.remove('body--fullscreen');
        leftSpacing?.style.setProperty('width', '0px');
        dragRectInitialLeft = await updateDragRect('initials', 'L');
        // dragRectInitialRight -= protyleWidthChange;
        leftSpacing?.style.removeProperty('width');
        fromFullscreen = false;
    }
}

export async function calcTopbarSpacings(widthChange = 0, isWinResizing = false, doesTopBarOverflow = false) {
    if (env.isMiniWindow || env.isMobile) return false;
    let layoutsCenter = doms.layoutCenter ? doms.layoutCenter : await querySelectorPromise('.layout__center');

    // calcAndApply();

    // if (!isWinResizing) calcAndApply(); // otherwise would cause dragRightInitial to be at unexpected position 
    // else dragRectRightInitial = dragRectRightInitial + widthChange;

    return new Promise<boolean>(async resolve => {
        if (isWinResizing) {
            dragRectInitialRight += widthChange;
        }

        if (!dragRectInitialLeft || !dragRectInitialRight) await updateDragRect();

        layoutsCenterRect = layoutsCenter!.getBoundingClientRect();
        barSyncRect = doms.barSync!.getBoundingClientRect();
        barForwardRect = doms.barForward!.getBoundingClientRect();

        let centerRectLeft = layoutsCenterRect.left,
            centerRectRight = layoutsCenterRect.right,
            barSearchRectLeft = doms.barSearch!.getBoundingClientRect().left,
            winWidth = window.innerWidth;

        // console.log('measure: topbar spacings')

        if (!isWinResizing) {
            // left side
            if (centerRectLeft > dragRectInitialLeft + 8) {
                topbar?.style.setProperty('--topbar-left-spacing', '0');
                // dragRectInitialLeft = fromFullscreen ? dragRectLeftInitial : asriDoms.drag.getBoundingClientRect().left;
                if (!(env.isMacOS && fromFullscreen)) {
                    await updateDragRect('initials', 'L');
                }
                // recalc initial everytime
                leftSpacing?.classList.remove('asri-expanded');
            }

            else if (env.isMacOS && !env.isInBrowser) {
                topbar.style.setProperty('--topbar-left-spacing', centerRectLeft - barSyncRect.right + 4 + 'px');
                leftSpacing?.classList.add('asri-expanded');
            }
            else {
                topbar.style.setProperty('--topbar-left-spacing', centerRectLeft - barForwardRect.right + 4 + 'px');
                leftSpacing?.classList.add('asri-expanded');
            }

            // right side
            if (centerRectRight < dragRectInitialRight - 8 && !doesTopBarOverflow) {
                topbar.style.setProperty('--topbar-right-spacing', '0');

                await updateDragRect('initials', 'R');

                // css related 
                doms.dockR?.style.removeProperty('--avoid-topbar');
                doms.layoutDockR?.style.removeProperty('--avoid-topbar');
            } else {
                if (env.isMacOS || env.isInBrowser) {
                    topbar.style.setProperty('--topbar-right-spacing', window.innerWidth - centerRectRight + 1 + 'px');
                    // windowControls element takes up 2px

                    doms.dockR?.style.setProperty('--avoid-topbar', '4px');
                    doms.layoutDockR?.style.setProperty('--avoid-topbar', '4px')
                } else {
                    topbar.style.setProperty('--topbar-right-spacing', barSearchRectLeft - centerRectRight + 6 + 'px');

                    doms.dockR?.style.setProperty('--avoid-topbar', 'calc(var(--toolbar-height) - 6px)');
                    doms.layoutDockR?.style.setProperty('--avoid-topbar', 'calc(var(--toolbar-height) - 6px)')
                };
            }

            console.log("center right:",centerRectRight, 'drag initial right',dragRectInitialRight)
        }

        // set divider style
        if (centerRectRight < dragRectInitialRight - 8) {
            // horisontal divider
            pluginsDivider!.style.setProperty('--container-bg', 'var(--b3-list-hover)');
            pluginsDivider!.style.left = centerRectRight + 'px';
            pluginsDivider!.style.right = '0';
            pluginsDivider!.style.removeProperty('height');
            pluginsDivider!.style.removeProperty('top');
        }
        else {
            // vertical divider
            await updateDragRect('rect'); // fastdom + async cause update lag, but acceptable
            pluginsDivider?.style.setProperty('--container-bg', 'var(--b3-border-color-trans)');
            pluginsDivider!.style.left = dragRect.right - 10 + 'px';
            pluginsDivider!.style.right = winWidth - dragRect.right + 8 + 'px';
            pluginsDivider!.style.height = '21px';
            pluginsDivider!.style.top = '13.5px';
        }
        // console.log('mutate: topbar spacings')
        resolve(true);
    })
}

/**
 * calculates tabbar spacings & positions, always comes after topbar spacings calculation
 */
export function calcTabbarSpacings(execute = true) {
    // console.log('tabbar spacings')
    if (!execute) return;
    topbarRect = doms.toolbar?.getBoundingClientRect() as DOMRect;
    dragRect = doms.drag?.getBoundingClientRect() as DOMRect;
    layoutsCenterRect = doms.layoutCenter?.getBoundingClientRect() as DOMRect;

    wndElements?.forEach(async wnd => {
        let tabbarContainer = wnd.querySelector('.fn__flex-column[data-type="wnd"] > .fn__flex:first-child') as HTMLElement;
        let tabbarContainerRect: DOMRect;

        tabbarContainerRect = tabbarContainer?.getBoundingClientRect() as DOMRect;

        let paddingLeftValue = (tabbarContainerRect.left < dragRect.left) ? dragRect.left - tabbarContainerRect.left - 4 : 0;
        let paddingRightValue = (tabbarContainerRect.right > dragRect.right) ? tabbarContainerRect.right - dragRect.right + 8 : 0;

        // console.log('measure: tabbar spacings inner')
        if (await isOverlapping(tabbarContainer, doms.drag) || await isOverlapping(tabbarContainer, doms.toolbar)) {
            tabbarContainer.style.paddingLeft = paddingLeftValue + 'px';
            tabbarContainer.style.paddingRight = paddingRightValue + 'px';

            // asriDoms.drag = document.getElementById('drag');

            // add top padding in extremely narrow width
            if ((tabbarContainerRect.right - paddingRightValue - 240 < dragRect.left && tabbarContainerRect.left < dragRect.left) || (tabbarContainerRect.left + paddingLeftValue + 240 > dragRect.right && tabbarContainerRect.right > dragRect.right)) {
                tabbarContainer.style.paddingTop = '42px';
                tabbarContainer.style.paddingLeft = '0';
                tabbarContainer.style.paddingRight = '0';
            } else {
                tabbarContainer.style.removeProperty('padding-top');
            }
        } else {
            tabbarContainer.style.removeProperty('padding-left');
            tabbarContainer.style.removeProperty('padding-right');
        }
    })
}

export async function loadTopbarFusion() {
    createTopbarElements();
}

export function unloadTopbarFusion() {
    removeTopbarElements();
    wndElements?.forEach(wnd => {
        let tabbarContainer = wnd.querySelector('.fn__flex-column[data-type="wnd"] > .fn__flex:first-child') as HTMLElement;

        tabbarContainer.style.removeProperty('padding-top');
        tabbarContainer.style.removeProperty('padding-left');
        tabbarContainer.style.removeProperty('padding-right');
    })

    doms.layoutCenter.dataset.prevWidth = undefined;
}

function createTopbarElements() {
    if (env.isMobile) return;

    pluginsDivider = createTopbarElementById('AsriPluginsIconsDivider', undefined, doms.drag);

    leftSpacing = (env.isMacOS && !env.isInBrowser)
        ? createTopbarElementById('AsriTopbarLeftSpacing', undefined, doms.barSync)
        : createTopbarElementById('AsriTopbarLeftSpacing', undefined, doms.barForward);

    rightSpacing = (env.isMacOS || env.isInBrowser)
        ? createTopbarElementById('AsriTopbarRightSpacing')
        : createTopbarElementById('AsriTopbarRightSpacing', doms.barSearch);

    // add svg to toolbar elements to fix barMore menu issue
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    rightSpacing?.appendChild(svg.cloneNode(true));
    pluginsDivider?.appendChild(svg.cloneNode(true));
    leftSpacing?.appendChild(svg.cloneNode(true));
}

function createTopbarElementById(newId: string, before: AsriDomsExtended = undefined, after: AsriDomsExtended = undefined) {
    if (document.getElementById(newId)) return;
    if (!doms.toolbar) return;

    let newDiv = document.createElement('div');
    newDiv.id = newId;
    if (before) {
        doms.toolbar.insertBefore(newDiv, before);
    } else if (after) {
        doms.toolbar.insertBefore(newDiv, after.nextSibling);
    } else {
        doms.toolbar.appendChild(newDiv);
    }

    return newDiv;
}

export async function recalcDragInitials() {
    leftSpacing?.style.setProperty('width', '0px');
    rightSpacing?.style.setProperty('width', '0px');
    await updateDragRect('initials');
    leftSpacing?.style.removeProperty('width');
    rightSpacing?.style.removeProperty('width');
}

function removeTopbarElements() {
    if (pluginsDivider) {
        pluginsDivider.remove();
        pluginsDivider = undefined;
    }
    if (leftSpacing) {
        leftSpacing.remove();
        leftSpacing = undefined;
    }
    if (rightSpacing) {
        rightSpacing.remove();
        rightSpacing = undefined;
    }
}
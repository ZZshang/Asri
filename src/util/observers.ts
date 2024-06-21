export class AsriResizeObserver {

}

export class AsriMutationObserver {

    public mo: MutationObserver;
    public callback: MutationCallback;

    constructor(callback: MutationCallback) {
        this.callback = (mutationList, observer) => callback(mutationList, observer);
        this.mo = new MutationObserver(this.callback);
    }

    observe(target: Node, options?: MutationObserverInit) {
        this.mo.observe(target, options);
    }

    disconnect(fn?: () => void) {
        // const mutations = this.mo.takeRecords();
        // if (mutations) {
        //     this.callback(mutations, this.mo);
        // }
        this.mo.disconnect();
        if(fn) fn();
    }
}

export const MOConfigForClassNames: MutationObserverInit = {
    attributes: true, // 监视属性变化
    subtree: true, // 包含目标节点的后代节点
    attributeFilter: ['class'] // 只关注"class"属性的变化
  };
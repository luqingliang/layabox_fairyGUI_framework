/**
 * FairyGUI组件对象池
 */
export default class FObjectPool extends fgui.GObjectPool {
    private static _objectPool: FObjectPool = new FObjectPool();

    constructor() {
        super();
    }

    /**
     * 根据传入URL，获取一个对象，如果项目中没有此URL对应的FGUI对象，则返回 null 
     * @param url 
     * @returns 
     */
    public static getItem(url: string): any {
        return this._objectPool.getObject(url);
    }

    /**
     * 将一个FGUI对象回收到对象池中
     * @param obj 
     */
    public static recover(obj: fgui.GObject) {
        this._objectPool.returnObject(obj);
    }

    /**
     * 根据对象URL标识清除对象池中该类型的所有对象（垃圾回收）
     * @param url 
     */
    public static clearByURL(url: string) {
        let arr: fgui.GObject[] = this._objectPool.getPoolByUrl(url);
        if (arr && arr.length > 0) {
            this._objectPool.setCount(this._objectPool.count - arr.length);
            for (let obj of arr) {
                obj.dispose();
            }
            arr.length = 0;
        }
    }

    private getPoolByUrl(url: string): fgui.GObject[] | null {
        return this["_pool"][url];
    }

    private setCount(val): void {
        this["_count"] = val;
    }
}
/**
 * spine动画模板管理器
 * @author luqingliang
 */
export class SpineTempletManager {
    private static _inst: SpineTempletManager;
    public static get inst(): SpineTempletManager {
        if (!this._inst) {
            this._inst = new SpineTempletManager();
        }
        Laya.Browser.window["spineTempletMap"] = this._inst.spineTemplets;
        return this._inst;
    }

    /**spine动画模板字典 */
    private spineTemplets: Map<string, SpineTempletData> = new Map();
    /**正在加载的动画 */
    private onLoading: Map<string, SpineTempletData> = new Map();

    constructor() { }

    /**创建一个UI特效 */
    public createUIAnim(name: string, module: string, gameName?: string, cb?: Laya.Handler): void {
        if (this.onLoading.has(name)) {
            if (cb) {
                this.onLoading.get(name).callBackArr.push(cb);
            }
            return;
        }
        if (!this.spineTemplets.has(name)) {
            let tpd: SpineTempletData = new SpineTempletData();
            let sptp: Laya.SpineTemplet = new Laya.SpineTemplet(Laya.SpineVersion.v3_8);

            tpd.templet = sptp;
            tpd.name = name;
            if (cb) {
                tpd.callBackArr = [cb];
            } else {
                tpd.callBackArr = [];
            }
            this.onLoading.set(name, tpd);

            sptp.on(Laya.Event.COMPLETE, this, this.parseComplete, [tpd]);
            sptp.on(Laya.Event.ERROR, this, this.onError, [tpd]);

            if (gameName) {
                sptp.loadAni("res/sk/" + module + "/" + gameName + "/" + name + "/" + name + ".json");
            }
            else {
                sptp.loadAni("res/sk/" + module + "/" + name + "/" + name + ".json");
            }
            return;
        }
        if (cb) {
            Laya.timer.callLater(this, (name) => {
                if (this.spineTemplets.has(name)) {
                    let sk: Laya.SpineSkeleton = this.spineTemplets.get(name).getSkeleton();
                    let res = cb.runWith(sk);
                } else {
                    cb.runWith(null);
                }
            }, [name]);
        }
    }

    /**
     * 获取动画模板字典
     */
    public getSpineTemplets(): Map<string, SpineTempletData> {
        return this.spineTemplets;
    }

    /**
     * 加载动画完毕
     * @param tdata 
     * @param Templet 
     * @returns 
     */
    private parseComplete(tdata: SpineTempletData, Templet: Laya.SpineTemplet): void {
        if (this.onLoading.has(tdata.name)) {
            this.onLoading.delete(tdata.name);
        }
        if (!tdata || !tdata.templet) {
            if (Templet) {
                Templet.destroy();
            }
            return;
        }

        this.spineTemplets.set(tdata.name, tdata);
        tdata.loadEnd();
    }

    /**
     * 加载动画出错
     * @param tdata 
     * @param error 
     * @returns 
     */
    private onError(tdata: SpineTempletData, error?: any): void {
        console.error("加载动画出错", error);
        if (!tdata || !tdata.templet) {
            return
        }
        if (this.onLoading.has(tdata.name)) {
            this.onLoading.delete(tdata.name)
        }
        if (tdata.callBackArr.length > 0) {
            for (let i = 0; i < tdata.callBackArr.length; i++) {
                const cb = tdata.callBackArr[i];
                if (cb) {
                    cb.once = true;
                    cb.runWith(null);
                }
            }
        }
        tdata.destroy();
    }
}

/**
 * spine动画模板数据
 */
export class SpineTempletData {
    public name: string = null;
    public templet: Laya.SpineTemplet = null;
    public callBackArr: Laya.Handler[] = [];
    public getSkeleton(): Laya.SpineSkeleton {
        if (this.templet) {
            let sk = this.templet.buildArmature();
            return sk;
        }
        return null;
    }

    /**
     * 加载结束执行回调
     */
    public loadEnd(): void {
        if (this.callBackArr.length > 0) {
            for (let i = 0; i < this.callBackArr.length; i++) {
                const cb = this.callBackArr[i];
                if (cb) {
                    cb.once = true;
                    cb.runWith(this.getSkeleton());
                    cb.recover();
                }
            }
        }
        this.callBackArr = [];
    }

    /**
     * 销毁动画模板
     */
    public destroy(): void {
        this.callBackArr = [];
        if (this.templet) {
            this.templet.destroy();
            this.templet = null;
        }
    }

}

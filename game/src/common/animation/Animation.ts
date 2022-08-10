

export class Animation extends Laya.Sprite {

    private _ani: Laya.Animation;

    constructor() {
        super();
    }



    /**加载序列帧动画
     *  @param aniName  资源名称 
     *  @param obj   执行域
     * @param fun   回调方法
     *  @param cacheName   缓存动画名称
     */
    public loadAni(aniName: string, obj: any, fun: Function, cacheName?: string): void {
        if (!this._ani) {
            this._ani = new Laya.Animation();
            this.addChild(this._ani);
        }
        this._ani.loadAtlas("res/ani/" + aniName + ".atlas", Laya.Handler.create(obj, fun), cacheName);
    }

    /**播放动画 
     *  @param start  动画的索引 
     *  @param loop   是否循环播放
     *  @param name   动画模板名称
     */
    public playAni(index: number, loop: boolean, name?: string): void {
        if (this._ani) {
            this._ani.play(index, loop, name);
        }
    }


    /**停止播放*/
    public stop(): void {
        if (this._ani) {
            this._ani.stop();
        }
    }

    /**停止在指定的帧*/
    public gotoAndStop(index: number): void {
        if (this._ani) {
            this._ani.gotoAndStop(index);
        }
    }


    /** 侦听播完成(非循环播放)*/
    public oncePlayStop(obj: any, fun: Function): void {
        if (this._ani) {
            this._ani.once(Laya.Event.STOPPED, obj, fun);
        }
    }

    /** 侦听播完成(非循环播放)*/
    public onPlayStop(obj: any, fun: Function): void {
        if (this._ani) {
            this._ani.on(Laya.Event.STOPPED, obj, fun);
        }
    }

    /** 侦听播完成(循环播放)*/
    public onPlayComplete(obj: any, fun: Function): void {
        if (this._ani) {
            this._ani.on(Laya.Event.COMPLETE, obj, fun);
        }
    }

    public offPlayComplete(obj: any, fun: Function): void {
        if (this._ani) {
            this._ani.off(Laya.Event.COMPLETE, obj, fun);
        }
    }

    public offPlayStop(obj: any, fun: Function): void {
        if (this._ani) {
            this._ani.off(Laya.Event.STOPPED, obj, fun);
        }
    }
}
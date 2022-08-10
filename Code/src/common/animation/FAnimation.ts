import { Animation } from "./Animation";


export class FAnimation extends fairygui.GObject {

    private _ani: Laya.Animation;
    protected _displayObject: Animation;

    constructor() {
        super();
    }

    protected createDisplayObject(): void {
        this._displayObject = new Animation();
        this._displayObject["$owner"] = this;
        this._displayObject.mouseEnabled = false;
    }

    /**加载序列帧动画
     *  @param aniName  资源名称 
     *  @param obj   执行域
     *  @param fun   回调方法
     *  @param cacheName   缓存动画名称
     */
    public loadAni(aniName: string, obj: any, fun: Function, cacheName?: string): void {
        this._displayObject.loadAni(aniName, obj, fun, cacheName);
    }


    /**停止播放*/
    public stop(): void {
        this._displayObject.stop();
    }


    /**停止在指定的帧*/
    public gotoAndStop(index: number): void {
        this._displayObject.gotoAndStop(index);
    }


    /**播放动画 
     *  @param start  动画的索引 
     *  @param loop   是否循环播放
     *  @param name   动画模板名称
     */
    public playAni(start: number, loop: boolean, name?: string): void {
        this._displayObject.playAni(start, loop, name);
    }

    /** 侦听播完成(非循环播放)*/
    public oncePlayStop(obj: any, fun: Function): void {
        this._displayObject.oncePlayStop(obj, fun);
    }

    /** 侦听播完成(非循环播放)*/
    public onPlayStop(obj: any, fun: Function): void {
        this._displayObject.onPlayStop(obj, fun);
    }

    /** 侦听播完成(循环播放)*/
    public onPlayComplete(obj: any, fun: Function): void {
        this._displayObject.onPlayComplete(obj, fun);
    }

    public offPlayComplete(obj: any, fun: Function): void {
        this._displayObject.offPlayComplete(obj, fun)
    }

    public offPlayStop(obj: any, fun: Function): void {
        this._displayObject.offPlayStop(obj, fun);
    }


}
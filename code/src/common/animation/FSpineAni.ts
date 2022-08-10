import IAnimation from "../interface/IAnimation";
import SpineAni from "./SpineAni";

/**
 * 直接解析spine json atlas 作为fgui.GObject对象使用
 * 要使用需要把spine导出的 [name].png [name].json [name].atlas 三个文件放入 res/sk/[name]/ 路径下
 * @author luqingliang
 */
export default class FSpineAni extends fgui.GObject implements IAnimation {
    protected _displayObject: SpineAni;

    constructor(skName: string, module: string, gameName?: string, complete?: Laya.Handler) {
        super();
        if (skName) {
            this.loadAni(skName, module, gameName, complete);
        }
    }

    protected createDisplayObject(): void {
        this._displayObject = new SpineAni();
        this._displayObject["$owner"] = this;
        this._displayObject.mouseEnabled = false;
    }

    /**
     * 加载动画
     * @param skName 
     * @param complete 
     */
    public loadAni(skName: string, module: string, gameName?: string, complete?: Laya.Handler): void {
        if (!this._displayObject) {
            this._displayObject = new SpineAni();
            this._displayObject["$owner"] = this;
            this._displayObject.mouseEnabled = false;
        }
        this._displayObject.loadAni(skName, module, gameName, complete);
    }

    /**
     * 播放龙骨动画
     * @param actName 
     * @param loop 
     * @param lighter
     * @param scaleX 
     * @param scaleY 
     * @param startTime 动画播放起始时间
     */
    public play(actName: string, loop: boolean, lighter?: boolean, scaleX?: number, scaleY?: number, startTime?: number): void {
        this._displayObject.play(actName, loop, lighter, scaleX, scaleY, startTime);
    }

    /**
     * 切换皮肤
     * @param name 
     */
    public changeSkin(name: string): void {
        this._displayObject.changeSkin(name);
    }

    /**
     * 停止特效
     */
    public stop(): void {
        this._displayObject.stop();
    }

    /**
     * 暂停播放
     */
    public paused(): void {
        this._displayObject.paused();
    }

    /**
     * 改变播放速率
     * @param speed 
     */
    public playbackRate(speed: number): void {
        this._displayObject.playbackRate(speed);
    }

    /**
     * 注册播放完毕回调
     * @param caller 
     * @param func 
     * @param params
     * @param once false的话循环动画每次都会执行回调
     */
    public onStopped(caller: any, func: Function, params: any[] = null, once: boolean = true): void {
        this._displayObject.onStopped(caller, func, params, once);
    }

    /**
     * 注销所有播放完毕回调
     */
    public offStopped(): void {
        this._displayObject.offStopped();
    }

    /**
     * setSkWh
     */
    public setSkPos(x: number, y: number) {
        this._displayObject.setSkXY(x, y);


    }


    destroy() {
        // this._displayObject.destroy();
        this.dispose();
    }
}
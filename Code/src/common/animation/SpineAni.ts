import IAnimation from "../interface/IAnimation";
import { SpineTempletManager } from "./SpineTempletManager";

/**
 * 直接解析spine json atlas 作为Laya.Sprite对象使用
 * 要使用需要把spine导出的 [name].png [name].json [name].atlas 三个文件放入 res/sk/[name]/ 路径下
 * @author luqingliang
 */
export default class SpineAni extends Laya.Sprite implements IAnimation {

    private _sk: Laya.SpineSkeleton;

    private _complete: Laya.Handler;
    private _onceStopCallBack: Laya.Handler;
    private _stopCallBack: Laya.Handler;

    /**
     * 两个参数可填可不填，填了就直接加载动画
     * @param skName
     * @param complete 创建成功回调
     */
    constructor(skName?: string, module?: string, gameName?: string, complete?: Laya.Handler) {
        super();

        if (skName) {
            this.loadAni(skName, module, gameName, complete);
        }
    }

    /**
     * 加载动画
     * @param skName 
     * @param complete 
     */
    public loadAni(skName: string, module: string, gameName?: string, complete?: Laya.Handler): void {
        this._complete = complete;
        SpineTempletManager.inst.createUIAnim(skName, module, gameName, Laya.Handler.create(this, this.parseComplete));
    }

    /**
     * 加载解析spine成功
     * @param sk 
     */
    private parseComplete(sk: Laya.SpineSkeleton): number {
        this._sk = sk;
        this.addChild(this._sk);
        this._sk.on(Laya.Event.STOPPED, this, this.onStop);
        if (this._complete) {
            this._complete.run();
            this._complete = null;
        }
        return 99;
    }


    public setSkXY(x: number, y: number) {
        this._sk.x = x;
        this._sk.y = y;

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
        if (this._sk) {
            if (lighter) {
                this._sk.blendMode = Laya.BlendMode.LIGHTER;
            }
            if (startTime) {
                this._sk.play(actName, loop, false, startTime);
            } else {
                this._sk.play(actName, loop, true);
            }
            if (scaleX || scaleY) {
                this._sk.scale(scaleX, scaleY, true);
            }
        }
    }

    /**
     * 切换皮肤
     * @param name 
     */
    public changeSkin(name: string): void {
        if (this._sk) {
            this._sk.showSkinByName(name);
        }
    }

    /**
     * 停止特效
     */
    public stop(): void {
        if (this._sk) {
            this._sk.stop();
        }
    }

    /**
     * 暂停播放
     */
    public paused(): void {
        if (this._sk) {
            this._sk.paused();
        }
    }

    /**
     * 改变播放速率
     * @param speed 
     */
    public playbackRate(speed: number): void {
        if (this._sk) {
            this._sk.playbackRate(speed);
        }
    }

    /**
     * 注册播放完毕回调
     * @param caller 
     * @param func 
     * @param params
     * @param once 为false 动画播放完毕执行，为true  动画第一次播放完毕执行，再次播放完不会执行
     */
    public onStopped(caller: any, func: Function, params: any[] = null, once: boolean = true): void {
        if (once) {
            this._onceStopCallBack = Laya.Handler.create(caller, func, params, once);
        } else {
            this._stopCallBack = Laya.Handler.create(caller, func, params, once);

        }
    }

    /**
     * 注销所有播放完毕回调
     */
    public offStopped(): void {
        if (this._stopCallBack) {
            this._stopCallBack.recover();
            this._stopCallBack = null;
        }
        if (this._onceStopCallBack) {
            this._onceStopCallBack.recover();
            this._onceStopCallBack = null;
        }
    }

    /**
     * 播放完一个动作
     */
    private onStop(): void {
        if (this._onceStopCallBack) {
            let handler: Laya.Handler = this._onceStopCallBack;
            this._onceStopCallBack = null;
            handler.run();
        }
        if (this._stopCallBack) {
            this._stopCallBack.run();
        }
    }

    destroy() {
        if (this._sk) {
            this._sk.offAllCaller(this);
            this._sk.stop();//停止动画播放
            this._sk.removeSelf();
            this._sk.destroy(true);//从显存销毁龙骨动画及其子对象
            this._sk = null;
        }
        if (this._complete) {
            this._complete.recover();
            this._complete = null;
        }
        if (this._onceStopCallBack) {
            this._onceStopCallBack.recover();
            this._onceStopCallBack = null;
        }

        if (this._stopCallBack) {
            this._stopCallBack.recover();
            this._stopCallBack = null;
        }
        super.destroy(true);
    }
}
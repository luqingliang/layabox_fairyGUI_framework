import FSpineAni from "../../common/animation/FSpineAni";

/**
 * 生命值组件
 * @author luqingliang
 */
export default class LifeValueComp {

    private _contentPane: fgui.GComponent;
    private _lifeSkArr: FSpineAni[] = [];
    private _lifeValue: number = 3;
    private _guideController: fgui.Controller = null;

    /**
     * @param contentPane 要添加生命值的ui对象
     * @param lifeValue 爱心数量
     * @param initComplete 初始化完成后的回调
     */
    constructor(contentPane: fgui.GComponent, lifeValue: number, initComplete?: Laya.Handler) {
        this._lifeValue = lifeValue;
        this._contentPane = contentPane;
        this._guideController = contentPane.getController("guide");
        let initCount: number = 0;
        for (let i = 0; i < this._lifeValue; i++) {
            let sk: FSpineAni = new FSpineAni("aixin", "common", null, Laya.Handler.create(this, () => {
                this._lifeSkArr.push(sk);
                this.initLifeSk(sk, i);
                initCount++;
                if (initCount >= this._lifeValue && initComplete) {
                    initComplete.run();
                }
            }));
        }
    }

    /**
     * 播放扣生命值动画
     * @param index 
     * @param caller 
     * @param callBack 
     * @returns 
     */
    public showLoseLife(index: number, caller: any, callBack: Function) {
        if (index < 0 || index >= this._lifeSkArr.length) return;
        this._lifeSkArr[index].play("heart_broken", false);
        this._lifeSkArr[index].changeSkin("white_heart");
        this._lifeSkArr[index].onStopped(caller, callBack);
    }

    /**
     * 初始化心
     * @param sk 
     * @param index 
     */
    private initLifeSk(sk: FSpineAni, index: number): void {
        sk.offStopped();
        sk.x = this._contentPane.width / 2 - 100 + index * 100;
        sk.y = 20;
        this._contentPane.addChild(sk);
        sk.play("heart_idle", true);
        sk.changeSkin("white_heart");
        if (this._guideController && this._guideController.selectedIndex === 1) {
            sk.visible = false;
        } else {
            sk.visible = true;
        }
    }

    /**
     * 重置所有心
     */
    public resetAll(): void {
        for (let i = 0; i < this._lifeSkArr.length; i++) {
            this.initLifeSk(this._lifeSkArr[i], i);
        }
    }

    /**
     * 销毁爱心动画
     */
    public destroy(): void {
        for (let sk of this._lifeSkArr) {
            sk.destroy();
        }
    }
}
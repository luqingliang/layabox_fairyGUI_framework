import FObjectPool from "../../../utils/FObjectPool";
import { LayerType } from "../../core/view/UIRegister";
import UI_FloatScore from "../../../ui/fgui/common/UI_FloatScore";

/**
 * 飘字组件
 * @author luqingliang
 */
export default class FloatTips {
    private static _inst: FloatTips;
    public static get inst(): FloatTips {
        if (!this._inst) {
            this._inst = new FloatTips();
        }
        return this._inst;
    }
    constructor() { }

    /**
     * 显示飘字
     * @param txt 内容 
     * @param x 舞台上的坐标
     * @param y 舞台上的坐标
     * @param state 颜色状态 0 白色 1 红色，默认白色
     */
    public showTips(txt: string, x: number, y: number, state: number = 0): void {
        let obj: UI_FloatScore = FObjectPool.getItem(UI_FloatScore.URL);
        obj.state.selectedIndex = state;
        obj.title = txt;
        for (let i = 0; i < 10; i++) {
            let lable: fgui.GTextField = <fgui.GTextField>obj.getChild("title" + i);
            if (lable) {
                lable.text = txt;
            }
        }
        obj.sortingOrder = LayerType.Float;
        fgui.GRoot.inst.addChild(obj);
        obj.setXY(x, y);
        obj.show.play(Laya.Handler.create(this, () => {
            fgui.GRoot.inst.removeChild(obj);
            FObjectPool.recover(obj);
        }));
    }

    /**
     * 显示分数飘字
     * @param score 分数
     * @param x 舞台上的坐标
     * @param y 舞台上的坐标
     */
    public showScoreTips(score: number, x: number, y: number): void {
        let state: number = score < 0 ? 1 : 0;
        let sign: string = score < 0 ? "" : "+";
        this.showTips(sign + score, x, y, state);
    }

    /**
     * 显示指定ui组件的飘字
     * @param txt 
     * @param x 
     * @param y 
     * @param state 
     * @param classs 类
     */
    public showTipsClass(txt: string, x: number, y: number, state: number, classs: any): void {
        let obj = FObjectPool.getItem(classs.URL);
        obj.state.selectedIndex = state;
        obj.title = txt;
        for (let i = 0; i < 10; i++) {
            let lable: fgui.GTextField = obj.getChild("title" + i);
            if (lable) {
                lable.text = txt;
            }
        }
        obj.sortingOrder = LayerType.Float;
        fgui.GRoot.inst.addChild(obj);
        obj.setXY(x, y);
        obj.getTransition("show").play(Laya.Handler.create(this, () => {
            fgui.GRoot.inst.removeChild(obj);
            FObjectPool.recover(obj);
        }));
    }
}
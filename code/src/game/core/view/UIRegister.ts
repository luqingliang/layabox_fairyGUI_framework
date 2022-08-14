import UIManager from "./UIManager";
import ClimbingMan from "../../module/climbingman/ClimbingMan";
import DialogWindow from "../../module/common/DialogWindow";
import MainUI from "../../module/main/MainUI";
import climbingmanBinder from "../../../ui/fgui/climbingman/climbingmanBinder";
import commonBinder from "../../../ui/fgui/common/CommonBinder";
import mainBinder from "../../../ui/fgui/main/mainBinder";



export enum UIType {

    //----------1~99 游戏场景 ------------

    ClimbingMan = 35,// 爬楼玩法

    //----------100~199 全屏界面 ------------

    Main = 101,

    //----------200~299 窗口 ------------

    //----------300~399 弹窗 ------------

    DialogWindow = 301,

    //----------400~499 tips ------------

    //----------500~599 飘字等 ------------
}


/**
 * UI界面注册
 */
export class UIRegister {
    public static init(cb: Laya.Handler): void {
        const uc: Map<number, any> = new Map();

        uc.set(UIType.Main, MainUI);
        uc.set(UIType.ClimbingMan, ClimbingMan);

        uc.set(UIType.DialogWindow, DialogWindow);

        UIManager.inst.init(uc, cb);

        // 关闭窗口点击自动排序
        fgui.UIConfig.bringWindowToFrontOnClick = false;

        this.bindAll();
    }

    /**
     * 注册默认ui组件
     */
    private static bindAll(): void {
        commonBinder.bindAll();
        mainBinder.bindAll();
        climbingmanBinder.bindAll();
    }
}

/**
 * UI层级类型
 */
export enum LayerType {
    /**游戏场景 */
    Scenes = 0,
    /**全屏界面 */
    Interface = 99,
    /**窗口 */
    Window = 199,
    /**弹窗 */
    PopWindow = 299,
    /**提示框 */
    Tips = 499,
    /**飘字 */
    Float = 599
}

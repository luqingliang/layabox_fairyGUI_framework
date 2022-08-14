import UIManager from "./view/UIManager";
import { DataDrive } from "../data/DateDriver";
import { UIRegister, UIType } from "./view/UIRegister";

/**
 * 游戏控制器
 * @author luqingliang
 */
export class GameControl {
    constructor() { }
    private static _inst: GameControl;
    public static get inst(): GameControl {
        if (!this._inst) {
            this._inst = new GameControl();
        }
        return this._inst;
    }

    /**
     * 启动游戏
     */
    public start(): void {
        // 预加载Common包
        fgui.UIPackage.loadPackage(["res/fgui/common/common"], Laya.Handler.create(this, () => {
            UIRegister.init(Laya.Handler.create(this, this.initGame));
        }));
    }

    /**
     * 初始化游戏
     */
    private initGame() {
        DataDrive.init();
        UIManager.inst.openUI(UIType.Main);
    }

    /**
     * 重新进入游戏
     */
    public reloadGame() {
        Laya.Browser.window.location.reload();
        console.debug("重新进入游戏---------------");
    }

    /**
     * 游戏退出
     */
    public exitGame(): void {
        UIManager.inst.exitGame();
    }
}
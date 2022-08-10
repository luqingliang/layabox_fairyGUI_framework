import UIBase from "../../common/view/UIBase";
import UIManager from "../../common/view/UIManager";
import { LayerType, UIType } from "../../core/UIRegister";
import UI_Main from "../../ui/fgui/main/UI_Main";

export default class MainUI extends UIBase {
    public contentPane: UI_Main;
    constructor() {
        super("main", "", LayerType.Interface);
    }
    protected Start(): void {
        this.contentPane.btnAlert.onClick(this, this.onClickAlert);
        this.contentPane.btnEnterGame.onClick(this, this.onClickEnterGame);
    }

    private onClickAlert(): void {
        //
    }

    private onClickEnterGame(): void {
        UIManager.inst.openUI(UIType.ClimbingMan);
    }
}
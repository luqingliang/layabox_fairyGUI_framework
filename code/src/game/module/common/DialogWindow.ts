import UIBase from "../../core/view/UIBase";
import UIManager from "../../core/view/UIManager";
import { LayerType, UIType } from "../../core/view/UIRegister";
import UI_DialogWindow from "../../../ui/fgui/common/UI_DialogWindow";

/**
 * 提示弹窗
 * @author luqingliang
 */
export default class DialogWindow extends UIBase {

    /**
     * 打开对话框
     * @param text 对话框文本
     * @param btnName 按钮名称
     * @param confirmHandler 确认回调
     * @param cancelHandler 取消回调
     */
    public static showDialog(text: string, btnName: string[] = null, confirmHandler: Laya.Handler = null, cancelHandler: Laya.Handler = null): void {
        UIManager.inst.openUI(UIType.DialogWindow, { text: text, btnName: btnName, confirmHandler: confirmHandler, cancelHandler: cancelHandler });
    }

    /**
     * 关闭弹窗
     */
    public static closeDialog(): void {
        UIManager.inst.closeUI(UIType.DialogWindow);
    }

    /**
     * 是否正在显示弹窗
     * @returns 
     */
    public static isShowing(): boolean {
        return UIManager.inst.isShowing(UIType.DialogWindow);
    }

    public contentPane: UI_DialogWindow;

    private _confirmHandler: Laya.Handler;
    private _cancelHandler: Laya.Handler;

    constructor() {
        super("common", "DialogWindow", LayerType.PopWindow, true);
    }

    protected Start(): void {
        this.contentPane.btnConfirm.onClick(this, this.onClickConfirm);
        this.contentPane.btnCancel.onClick(this, this.onClickCancel);
    }

    public updateUI(data?: any): void {
        if (data) {
            if (data.confirmHandler) {
                this._confirmHandler = data.confirmHandler;
            }
            if (data.cancelHandler) {
                this._cancelHandler = data.cancelHandler;
            }
            if (data.text) {
                this.contentPane.textContent.text = data.text;
            }
            if (data.btnName && data.btnName.length === 2) {
                this.contentPane.btnConfirm.title = data.btnName[0];
                this.contentPane.btnCancel.title = data.btnName[1];
            }
        }
    }

    /**
     * 点击确认
     */
    private onClickConfirm(): void {
        this.close();
        if (this._confirmHandler) {
            this._confirmHandler.run();
            this._confirmHandler = null;
        }
    }

    /**
     * 点击取消
     */
    private onClickCancel(): void {
        this.close();
        if (this._cancelHandler) {
            this._cancelHandler.run();
            this._cancelHandler = null;
        }
    }
}
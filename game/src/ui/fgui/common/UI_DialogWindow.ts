/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_DialogWindow extends fgui.GComponent {

	public btnConfirm:fgui.GButton;
	public btnCancel:fgui.GButton;
	public textContent:fgui.GTextField;
	public static URL:string = "ui://wkgp8jzcg5vsjq";

	public static createInstance():UI_DialogWindow {
		return <UI_DialogWindow>(fgui.UIPackage.createObject("common", "DialogWindow"));
	}

	protected onConstruct():void {
		this.btnConfirm = <fgui.GButton>(this.getChild("btnConfirm"));
		this.btnCancel = <fgui.GButton>(this.getChild("btnCancel"));
		this.textContent = <fgui.GTextField>(this.getChild("textContent"));
	}
}
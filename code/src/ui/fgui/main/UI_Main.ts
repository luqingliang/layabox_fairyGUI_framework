/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Main extends fgui.GComponent {

	public btnEnterGame:fgui.GButton;
	public btnAlert:fgui.GButton;
	public static URL:string = "ui://1w640g96cesm0";

	public static createInstance():UI_Main {
		return <UI_Main>(fgui.UIPackage.createObject("main", "Main"));
	}

	protected onConstruct():void {
		this.btnEnterGame = <fgui.GButton>(this.getChild("btnEnterGame"));
		this.btnAlert = <fgui.GButton>(this.getChild("btnAlert"));
	}
}
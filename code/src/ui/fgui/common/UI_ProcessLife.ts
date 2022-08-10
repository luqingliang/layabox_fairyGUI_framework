/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_ProcessLife extends fgui.GProgressBar {

	public img:fgui.Controller;
	public barBg:fgui.GLoader;
	public static URL:string = "ui://wkgp8jzc89hi9o";

	public static createInstance():UI_ProcessLife {
		return <UI_ProcessLife>(fgui.UIPackage.createObject("common", "ProcessLife"));
	}

	protected onConstruct():void {
		this.img = this.getController("img");
		this.barBg = <fgui.GLoader>(this.getChild("barBg"));
	}
}
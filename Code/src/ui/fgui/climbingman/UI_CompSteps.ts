/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_CompUnderLand from "./UI_CompUnderLand";

export default class UI_CompSteps extends fgui.GComponent {

	public bg:fgui.GImage;
	public underLand:UI_CompUnderLand;
	public static URL:string = "ui://8p08ilxilgl11";

	public static createInstance():UI_CompSteps {
		return <UI_CompSteps>(fgui.UIPackage.createObject("climbingman", "CompSteps"));
	}

	protected onConstruct():void {
		this.bg = <fgui.GImage>(this.getChild("bg"));
		this.underLand = <UI_CompUnderLand>(this.getChild("underLand"));
	}
}
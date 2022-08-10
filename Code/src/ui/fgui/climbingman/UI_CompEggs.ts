/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CompEggs extends fgui.GComponent {

	public img:fgui.GImage;
	public static URL:string = "ui://8p08ilxicq0p2b";

	public static createInstance():UI_CompEggs {
		return <UI_CompEggs>(fgui.UIPackage.createObject("climbingman", "CompEggs"));
	}

	protected onConstruct():void {
		this.img = <fgui.GImage>(this.getChild("img"));
	}
}
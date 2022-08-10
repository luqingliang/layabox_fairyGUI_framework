/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CompTree extends fgui.GComponent {

	public img:fgui.GImage;
	public static URL:string = "ui://8p08ilxicq0p22";

	public static createInstance():UI_CompTree {
		return <UI_CompTree>(fgui.UIPackage.createObject("climbingman", "CompTree"));
	}

	protected onConstruct():void {
		this.img = <fgui.GImage>(this.getChild("img"));
	}
}
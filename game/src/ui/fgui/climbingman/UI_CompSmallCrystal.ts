/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CompSmallCrystal extends fgui.GComponent {

	public img:fgui.GImage;
	public static URL:string = "ui://8p08ilxicq0p2f";

	public static createInstance():UI_CompSmallCrystal {
		return <UI_CompSmallCrystal>(fgui.UIPackage.createObject("climbingman", "CompSmallCrystal"));
	}

	protected onConstruct():void {
		this.img = <fgui.GImage>(this.getChild("img"));
	}
}
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CompBigCrystal extends fgui.GComponent {

	public img:fgui.GImage;
	public static URL:string = "ui://8p08ilxicq0p2g";

	public static createInstance():UI_CompBigCrystal {
		return <UI_CompBigCrystal>(fgui.UIPackage.createObject("climbingman", "CompBigCrystal"));
	}

	protected onConstruct():void {
		this.img = <fgui.GImage>(this.getChild("img"));
	}
}
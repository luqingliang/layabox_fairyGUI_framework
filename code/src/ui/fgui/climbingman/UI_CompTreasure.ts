/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CompTreasure extends fgui.GComponent {

	public img:fgui.GImage;
	public static URL:string = "ui://8p08ilxicq0p2i";

	public static createInstance():UI_CompTreasure {
		return <UI_CompTreasure>(fgui.UIPackage.createObject("climbingman", "CompTreasure"));
	}

	protected onConstruct():void {
		this.img = <fgui.GImage>(this.getChild("img"));
	}
}
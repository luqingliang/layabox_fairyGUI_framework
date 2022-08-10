/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CompSmallStone extends fgui.GComponent {

	public img:fgui.GImage;
	public static URL:string = "ui://8p08ilxicq0p27";

	public static createInstance():UI_CompSmallStone {
		return <UI_CompSmallStone>(fgui.UIPackage.createObject("climbingman", "CompSmallStone"));
	}

	protected onConstruct():void {
		this.img = <fgui.GImage>(this.getChild("img"));
	}
}
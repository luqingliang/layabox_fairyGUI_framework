/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CompBigStone extends fgui.GComponent {

	public img:fgui.GImage;
	public static URL:string = "ui://8p08ilxicq0p28";

	public static createInstance():UI_CompBigStone {
		return <UI_CompBigStone>(fgui.UIPackage.createObject("climbingman", "CompBigStone"));
	}

	protected onConstruct():void {
		this.img = <fgui.GImage>(this.getChild("img"));
	}
}
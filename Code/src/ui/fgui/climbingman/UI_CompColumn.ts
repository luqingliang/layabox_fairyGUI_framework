/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CompColumn extends fgui.GComponent {

	public img:fgui.GImage;
	public static URL:string = "ui://8p08ilxicq0p24";

	public static createInstance():UI_CompColumn {
		return <UI_CompColumn>(fgui.UIPackage.createObject("climbingman", "CompColumn"));
	}

	protected onConstruct():void {
		this.img = <fgui.GImage>(this.getChild("img"));
	}
}
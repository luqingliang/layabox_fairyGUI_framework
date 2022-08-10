/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CompUnderLand extends fgui.GComponent {

	public rightLand:fgui.GImage;
	public leftLand:fgui.GImage;
	public static URL:string = "ui://8p08ilxi81s31t";

	public static createInstance():UI_CompUnderLand {
		return <UI_CompUnderLand>(fgui.UIPackage.createObject("climbingman", "CompUnderLand"));
	}

	protected onConstruct():void {
		this.rightLand = <fgui.GImage>(this.getChild("rightLand"));
		this.leftLand = <fgui.GImage>(this.getChild("leftLand"));
	}
}
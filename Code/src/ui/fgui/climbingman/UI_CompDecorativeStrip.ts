/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CompDecorativeStrip extends fgui.GComponent {

	public isRight:fgui.Controller;
	public static URL:string = "ui://8p08ilxifkdm7";

	public static createInstance():UI_CompDecorativeStrip {
		return <UI_CompDecorativeStrip>(fgui.UIPackage.createObject("climbingman", "CompDecorativeStrip"));
	}

	protected onConstruct():void {
		this.isRight = this.getController("isRight");
	}
}
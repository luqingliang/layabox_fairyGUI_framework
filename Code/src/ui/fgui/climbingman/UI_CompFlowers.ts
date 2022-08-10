/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CompFlowers extends fgui.GComponent {

	public ani:fgui.GMovieClip;
	public static URL:string = "ui://8p08ilxicq0p1w";

	public static createInstance():UI_CompFlowers {
		return <UI_CompFlowers>(fgui.UIPackage.createObject("climbingman", "CompFlowers"));
	}

	protected onConstruct():void {
		this.ani = <fgui.GMovieClip>(this.getChild("ani"));
	}
}
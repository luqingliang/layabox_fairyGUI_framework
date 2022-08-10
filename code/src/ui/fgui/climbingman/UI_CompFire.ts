/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CompFire extends fgui.GComponent {

	public ani:fgui.GMovieClip;
	public static URL:string = "ui://8p08ilxicq0p1u";

	public static createInstance():UI_CompFire {
		return <UI_CompFire>(fgui.UIPackage.createObject("climbingman", "CompFire"));
	}

	protected onConstruct():void {
		this.ani = <fgui.GMovieClip>(this.getChild("ani"));
	}
}
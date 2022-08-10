/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CompBird extends fgui.GComponent {

	public ani0:fgui.GMovieClip;
	public ani1:fgui.GMovieClip;
	public ani2:fgui.GMovieClip;
	public static URL:string = "ui://8p08ilxicq0p1y";

	public static createInstance():UI_CompBird {
		return <UI_CompBird>(fgui.UIPackage.createObject("climbingman", "CompBird"));
	}

	protected onConstruct():void {
		this.ani0 = <fgui.GMovieClip>(this.getChild("ani0"));
		this.ani1 = <fgui.GMovieClip>(this.getChild("ani1"));
		this.ani2 = <fgui.GMovieClip>(this.getChild("ani2"));
	}
}
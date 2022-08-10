/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CompHeart extends fgui.GComponent {

	public ani:fgui.GMovieClip;
	public static URL:string = "ui://8p08ilxifkdmq";

	public static createInstance():UI_CompHeart {
		return <UI_CompHeart>(fgui.UIPackage.createObject("climbingman", "CompHeart"));
	}

	protected onConstruct():void {
		this.ani = <fgui.GMovieClip>(this.getChild("ani"));
	}
}
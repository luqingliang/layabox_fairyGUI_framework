/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CompDangerousProgress extends fgui.GComponent {

	public imgProgress:fgui.GImage;
	public imgProgress_2:fgui.GImage;
	public imgProgress_3:fgui.GImage;
	public static URL:string = "ui://8p08ilxi81s31q";

	public static createInstance():UI_CompDangerousProgress {
		return <UI_CompDangerousProgress>(fgui.UIPackage.createObject("climbingman", "CompDangerousProgress"));
	}

	protected onConstruct():void {
		this.imgProgress = <fgui.GImage>(this.getChild("imgProgress"));
		this.imgProgress_2 = <fgui.GImage>(this.getChild("imgProgress"));
		this.imgProgress_3 = <fgui.GImage>(this.getChild("imgProgress"));
	}
}
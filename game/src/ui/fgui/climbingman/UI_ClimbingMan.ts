/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_CompSpeedUp from "./UI_CompSpeedUp";
import UI_CompDangerous from "./UI_CompDangerous";
import UI_CompScoreUIPanel from "./UI_CompScoreUIPanel";

export default class UI_ClimbingMan extends fgui.GComponent {

	public speedUp:UI_CompSpeedUp;
	public cloud0:fgui.GImage;
	public cloud2:fgui.GImage;
	public cloud1:fgui.GImage;
	public cloud3:fgui.GImage;
	public cloud4:fgui.GImage;
	public cloud5:fgui.GImage;
	public compDangerous:UI_CompDangerous;
	public scoreUI:UI_CompScoreUIPanel;
	public static URL:string = "ui://8p08ilxiph4w0";

	public static createInstance():UI_ClimbingMan {
		return <UI_ClimbingMan>(fgui.UIPackage.createObject("climbingman", "ClimbingMan"));
	}

	protected onConstruct():void {
		this.speedUp = <UI_CompSpeedUp>(this.getChild("speedUp"));
		this.cloud0 = <fgui.GImage>(this.getChild("cloud0"));
		this.cloud2 = <fgui.GImage>(this.getChild("cloud2"));
		this.cloud1 = <fgui.GImage>(this.getChild("cloud1"));
		this.cloud3 = <fgui.GImage>(this.getChild("cloud3"));
		this.cloud4 = <fgui.GImage>(this.getChild("cloud4"));
		this.cloud5 = <fgui.GImage>(this.getChild("cloud5"));
		this.compDangerous = <UI_CompDangerous>(this.getChild("compDangerous"));
		this.scoreUI = <UI_CompScoreUIPanel>(this.getChild("scoreUI"));
	}
}
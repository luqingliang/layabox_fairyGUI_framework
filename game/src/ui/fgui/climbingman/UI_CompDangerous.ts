/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_CompDangerousProgress from "./UI_CompDangerousProgress";

export default class UI_CompDangerous extends fgui.GComponent {

	public imgProgress:UI_CompDangerousProgress;
	public dangerous:fgui.Transition;
	public static URL:string = "ui://8p08ilxifkdma";

	public static createInstance():UI_CompDangerous {
		return <UI_CompDangerous>(fgui.UIPackage.createObject("climbingman", "CompDangerous"));
	}

	protected onConstruct():void {
		this.imgProgress = <UI_CompDangerousProgress>(this.getChild("imgProgress"));
		this.dangerous = this.getTransition("dangerous");
	}
}
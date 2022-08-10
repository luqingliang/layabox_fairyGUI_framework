/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_ProcessLife from "./UI_ProcessLife";
import UI_DialogWindow from "./UI_DialogWindow";
import UI_FloatScore from "./UI_FloatScore";

export default class commonBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_ProcessLife.URL, UI_ProcessLife);
		fgui.UIObjectFactory.setExtension(UI_DialogWindow.URL, UI_DialogWindow);
		fgui.UIObjectFactory.setExtension(UI_FloatScore.URL, UI_FloatScore);
	}
}
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_CompHeart from "./UI_CompHeart";

export default class UI_CompScoreUIPanel extends fgui.GComponent {

	public lifeValue:fgui.Controller;
	public textScore:fgui.GTextField;
	public heart2:UI_CompHeart;
	public heart1:UI_CompHeart;
	public heart0:UI_CompHeart;
	public heart3:UI_CompHeart;
	public heart4:UI_CompHeart;
	public static URL:string = "ui://8p08ilxifkdmr";

	public static createInstance():UI_CompScoreUIPanel {
		return <UI_CompScoreUIPanel>(fgui.UIPackage.createObject("climbingman", "CompScoreUIPanel"));
	}

	protected onConstruct():void {
		this.lifeValue = this.getController("lifeValue");
		this.textScore = <fgui.GTextField>(this.getChild("textScore"));
		this.heart2 = <UI_CompHeart>(this.getChild("heart2"));
		this.heart1 = <UI_CompHeart>(this.getChild("heart1"));
		this.heart0 = <UI_CompHeart>(this.getChild("heart0"));
		this.heart3 = <UI_CompHeart>(this.getChild("heart3"));
		this.heart4 = <UI_CompHeart>(this.getChild("heart4"));
	}
}
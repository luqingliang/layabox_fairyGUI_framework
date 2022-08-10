/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_FloatScore extends fgui.GLabel {

	public state:fgui.Controller;
	public title1:fgui.GTextField;
	public show:fgui.Transition;
	public static URL:string = "ui://wkgp8jzcjhc40";

	public static createInstance():UI_FloatScore {
		return <UI_FloatScore>(fgui.UIPackage.createObject("common", "FloatScore"));
	}

	protected onConstruct():void {
		this.state = this.getController("state");
		this.title1 = <fgui.GTextField>(this.getChild("title1"));
		this.show = this.getTransition("show");
	}
}
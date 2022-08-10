/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CompTrees extends fgui.GComponent {

	public img:fgui.GImage;
	public static URL:string = "ui://8p08ilxicq0p21";

	public static createInstance():UI_CompTrees {
		return <UI_CompTrees>(fgui.UIPackage.createObject("climbingman", "CompTrees"));
	}

	protected onConstruct():void {
		this.img = <fgui.GImage>(this.getChild("img"));
	}
}
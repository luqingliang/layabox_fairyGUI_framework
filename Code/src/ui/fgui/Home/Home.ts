/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import HomeBottom from "./HomeBottom";

export default class Home extends fairygui.GComponent {

	public _text:fairygui.GTextField;
	public _bottom:HomeBottom;

	public static URL:string = "ui://4h44hmx7empj3";

	public static createInstance():Home {
		return <Home><any>(fairygui.UIPackage.createObject("Home","Home"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this._text = <fairygui.GTextField><any>(this.getChild("text"));
		this._bottom = <HomeBottom><any>(this.getChild("bottom"));
	}
}
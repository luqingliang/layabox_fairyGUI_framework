/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Home extends fairygui.GComponent {

	public _menu:fairygui.Controller;
	public _text:fairygui.GTextField;
	public _labUser:fairygui.GLabel;
	public _btnBack:fairygui.GButton;

	public static URL:string = "ui://4h44hmx7empj3";

	public static createInstance():Home {
		return <Home><any>(fairygui.UIPackage.createObject("Home","Home"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this._menu = this.getControllerAt(0);
		this._text = <fairygui.GTextField><any>(this.getChildAt(1));
		this._labUser = <fairygui.GLabel><any>(this.getChildAt(2));
		this._btnBack = <fairygui.GButton><any>(this.getChildAt(7));
	}
}
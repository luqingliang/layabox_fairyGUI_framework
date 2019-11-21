/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Item extends fairygui.GButton {

	public _ItemQuality:fairygui.Controller;
	public _showName:fairygui.Controller;
	public _effect:fairygui.GLoader;
	public _textNum:fairygui.GTextField;

	public static URL:string = "ui://ie8na7w3h3iw1";

	public static createInstance():Item {
		return <Item><any>(fairygui.UIPackage.createObject("Bag","Item"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this._ItemQuality = this.getControllerAt(0);
		this._showName = this.getControllerAt(1);
		this._effect = <fairygui.GLoader><any>(this.getChildAt(3));
		this._textNum = <fairygui.GTextField><any>(this.getChildAt(4));
	}
}
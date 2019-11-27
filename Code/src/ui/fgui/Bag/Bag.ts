/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Bag extends fairygui.GComponent {

	public _itemList:fairygui.GList;
	public _btnBack:fairygui.GButton;

	public static URL:string = "ui://ie8na7w3h3iw0";

	public static createInstance():Bag {
		return <Bag><any>(fairygui.UIPackage.createObject("Bag","Bag"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this._itemList = <fairygui.GList><any>(this.getChild("itemList"));
		this._btnBack = <fairygui.GButton><any>(this.getChild("btnBack"));
	}
}
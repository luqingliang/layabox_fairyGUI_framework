/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class HomeBottom extends fairygui.GComponent {

	public _menu:fairygui.Controller;

	public static URL:string = "ui://4h44hmx7eu8o7";

	public static createInstance():HomeBottom {
		return <HomeBottom><any>(fairygui.UIPackage.createObject("Home","HomeBottom"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this._menu = this.getController("menu");
	}
}
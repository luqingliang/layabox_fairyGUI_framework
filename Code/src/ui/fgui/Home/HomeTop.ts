/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class HomeTop extends fairygui.GComponent {

	public _labUser:fairygui.GLabel;

	public static URL:string = "ui://4h44hmx7eu8o6";

	public static createInstance():HomeTop {
		return <HomeTop><any>(fairygui.UIPackage.createObject("Home","HomeTop"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this._labUser = <fairygui.GLabel><any>(this.getChild("labUser"));
	}
}
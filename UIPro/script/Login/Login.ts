/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Login extends fairygui.GComponent {

	public _text:fairygui.GTextField;
	public _btnStart:fairygui.GButton;
	public _inputUsername:fairygui.GTextInput;

	public static URL:string = "ui://wgdhhfkrr71t0";

	public static createInstance():Login {
		return <Login><any>(fairygui.UIPackage.createObject("Login","Login"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this._text = <fairygui.GTextField><any>(this.getChildAt(1));
		this._btnStart = <fairygui.GButton><any>(this.getChildAt(2));
		this._inputUsername = <fairygui.GTextInput><any>(this.getChildAt(3));
	}
}
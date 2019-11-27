import HomeView from "../home/HomeView";
import BaseView from "../../common/mvc/view/BaseView";
import LoginMediator from "./LoginMediator";
import WordFilter from "../../common/utils/WordFilter";

export default class LoginView extends BaseView {
    public _text:fgui.GTextField;
    public _btnStart:fgui.GButton;
    public _inputUsername:fgui.GTextInput;

    constructor() {
        super();
        this._packageName = "Login";
        this._compName = "Login";
        this._closeClearRes = true;
    }

    protected onUICreated():void {

        this._text = this.getText("text");
        this._inputUsername = this.getInput("inputUsername");
        this._btnStart = this.getButton("btnStart");
        
        this._mediator = new LoginMediator(this);

        this._text.text = "Hello World";
        this._btnStart.onClick(this, this.startHandler);
    }

    private startHandler():void {
        let name:string = this._inputUsername.text;
        let newStr:string = WordFilter.filter(name);
        if(newStr != name) {
            console.error("含有敏感词，请重新输入！");
            return;
        }
        this.mediator.login(this._inputUsername.text);
    }

    get mediator():LoginMediator {
        return this._mediator as LoginMediator;
    }

}
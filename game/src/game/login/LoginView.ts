import HomeView from "../home/HomeView";
import BaseView from "../../common/mvc/view/BaseView";
import LoginMediator from "./LoginMediator";
import WordFilter from "../../common/utils/WordFilter";
import Login from "../../ui/fgui/Login/Login";
import LoginBinder from "../../ui/fgui/Login/LoginBinder";

export default class LoginView extends BaseView {
    public view:Login;

    constructor() {
        super();
        LoginBinder.bindAll();
        this._packageName = "Login";
        this._compName = "Login";
        this._closeClearRes = true;
    }

    protected onUICreated():void {
        
        this._mediator = new LoginMediator(this);

        this.view._text.text = "Hello World";
        this.view._btnStart.onClick(this, this.startHandler);
    }

    private startHandler():void {
        let name:string = this.view._inputUsername.text;
        let newStr:string = WordFilter.filter(name);
        if(newStr != name) {
            console.error("含有敏感词，请重新输入！");
            return;
        }
        this.mediator.login(name);
    }

    get mediator():LoginMediator {
        return this._mediator as LoginMediator;
    }

}
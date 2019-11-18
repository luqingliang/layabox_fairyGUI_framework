import LoginView from "../login/LoginView";
import BaseView from "../../common/mvc/view/BaseView";
import Model from "../../common/mvc/model/Model";
import ViewManager from "../../common/mvc/view/ViewManager";
import HomeMediator from "./HomeMediator";
import UserModel from "../../common/mvc/model/UserModel";

export default class HomeView extends BaseView {

    public _btnBack:fgui.GButton;
    public _labUser:fgui.GLabel;
    public _text:fgui.GTextField;

    public _menuCtrl:fgui.Controller;

    constructor() {
        super();
        this._packageName = "Home";
        this._compName = "Home";
    }

    get otherRes():Array<any> {
        return [
            {url: "res/img/test.png", type: Laya.Loader.IMAGE}
        ];
    }

    protected onUICreated():void {
        this._btnBack = this.getButton("btnBack").asButton;
        this._labUser = this.getChild("labUser").asLabel;
        this._text = this.getChild("text").asTextField;
        this._menuCtrl = this.getController("menu");

        this._mediator = new HomeMediator(this);

        this._btnBack.onClick(this, this.backHandler);
        this._labUser.title = Model.User.userData.uid;
        this._text.text = "我是玩家：" + Model.User.userData.username;
        this._menuCtrl.on(fgui.Events.STATE_CHANGED, this, () => {
            ViewManager.instance.open(HomeView, Math.floor(Math.random() * 100).toString());
        });
    }

    opening():void {
        console.log("反复打开界面HomeView，data：", this.data);
        this._mediator.sendNotification(UserModel.EVENT_RENAMETEST, this.data);
    }

    private backHandler():void {
        this.close();
        ViewManager.instance.open(LoginView);
    }
}
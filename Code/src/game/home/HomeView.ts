import LoginView from "../login/LoginView";
import BaseView from "../../common/mvc/view/BaseView";
import { Model } from "../../common/mvc/model/Model";
import HomeMediator from "./HomeMediator";
import UserModel from "../../common/mvc/model/UserModel";
import BagView from "../bag/BagView";
import ViewManager from "../../common/mvc/view/ViewManager";

export default class HomeView extends BaseView {

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
        this._text = this.getChild("text").asTextField;
        this._menuCtrl = this.getController("menu");

        this._mediator = new HomeMediator(this);

        this._text.text = "我是玩家：" + Model.User.userData.username;
        this._menuCtrl.on(fgui.Events.STATE_CHANGED, this, () => {
            // ViewManager.instance.open(HomeView, Math.floor(Math.random() * 100).toString()); //测试反复打开界面
            if(this,this._menuCtrl.selectedIndex == 2) {
                ViewManager.instance.open(BagView);
            }
        });
    }

    opening():void {
        console.log("反复打开界面HomeView，data：", this.data);
    }
}
import LoginView from "../login/LoginView";
import BaseView from "../../common/mvc/view/BaseView";
import { Model } from "../../common/mvc/model/Model";
import HomeMediator from "./HomeMediator";
import UserModel from "../../common/mvc/model/UserModel";
import BagView from "../bag/BagView";
import ViewManager from "../../common/mvc/view/ViewManager";
import Home from "../../ui/fgui/Home/Home";
import HomeBinder from "../../ui/fgui/Home/HomeBinder";

export default class HomeView extends BaseView {
    public view:Home;

    constructor() {
        super();
        HomeBinder.bindAll();
        this._packageName = "Home";
        this._compName = "Home";
    }

    get otherRes():Array<any> {
        return [
            {url: "res/img/test.png", type: Laya.Loader.IMAGE}
        ];
    }

    protected onUICreated():void {

        this._mediator = new HomeMediator(this); //注册中介者

        this.view._text.text = "我是玩家：" + Model.User.userData.username;
        this.view._bottom._menu.on(fgui.Events.STATE_CHANGED, this, () => {
            // ViewManager.instance.open(HomeView, Math.floor(Math.random() * 100).toString()); //测试反复打开界面
            if(this.view._bottom._menu.selectedIndex == 2) {
                ViewManager.instance.open(BagView);
                console.log("?????????")
            }
        });
    }

    opening():void {
        console.log("反复打开界面HomeView，data：", this.data);
    }
}
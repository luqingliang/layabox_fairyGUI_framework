import Mediator from "../../common/mvc/patterns/Mediator";
import IView from "../../common/mvc/interface/IView";
import ViewManager from "../../common/mvc/view/ViewManager";
import Model from "../../common/mvc/model/Model";
import UserModel from "../../common/mvc/model/UserModel";
import HomeView from "../home/HomeView";

export default class LoginMediator extends Mediator {
    constructor(view:IView) {
        super(view)
        this._mediatorName = "LoginMediator";
        ViewManager.registerMediator(this);
    }

    eventList():Array<string> {
        return [
            UserModel.EVENT_LOGINSUCCESS
        ];
    }

    onEvent(eventName:string, data:any):void {
        if(eventName == UserModel.EVENT_LOGINSUCCESS) {
            this.view.close();
            ViewManager.instance.open(HomeView);
        }
    }

    public login(username:string):void {
        Model.User.login(username);
    }
}
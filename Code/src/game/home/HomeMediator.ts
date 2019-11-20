import Mediator from "../../common/mvc/patterns/Mediator";
import IView from "../../common/mvc/interface/IView";
import ViewManager from "../../common/mvc/view/ViewManager";
import UserModel from "../../common/mvc/model/UserModel";
import HomeView from "./HomeView";

export default class HomeMediator extends Mediator {

    constructor(view:IView) {
        super(view);
        this._mediatorName = "HomeMediator";
        ViewManager.registerMediator(this);
    }

    eventList():Array<string> {
        return [
            UserModel.EVENT_RENAMETEST
        ];
    }
    onEvent(eventName:string, data:any):void {
        if(eventName == UserModel.EVENT_RENAMETEST) {
            this.view._text.text = "我是玩家：" + data;
        }
    }

    onRegister():void {
        console.log("HomeMediator Event Registed!");
    }

    onRemove():void {
        console.log("HomeMediator Event Removed!");
    }

    get view():HomeView {
        return this._view as HomeView;
    }
}
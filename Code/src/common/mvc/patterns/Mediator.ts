import IMediator from "../interface/IMediator";
import IView from "../interface/IView";
import Observer from "./Observer";

export default class Mediator implements IMediator {
    protected _view:IView;
    protected _mediatorName:string;

    constructor(view:IView) {
        this._view = view;
    }

    public get view():IView {
        return this._view;
    }

    public getMediatorName():string {
        return this._mediatorName;
    }

    public eventList():Array<string> {
        return [];
    }

    public onRegister():void {

    }
    public onEvent(eventName:string, data:any):void {

    }
    public onRemove():void {

    }

    /**
     * 派发事件
     * @param name 
     * @param data 
     */
    public sendNotification(name:string, data:any = null):void {
        Observer.instance.notify(name, data);
    }
}
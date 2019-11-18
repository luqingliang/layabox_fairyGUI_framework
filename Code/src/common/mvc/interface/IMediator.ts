import IView from "./IView";

export default interface IMediator {
    view:IView;
    getMediatorName():string;
    eventList():Array<string>;
    onRegister():void;
    onEvent(eventName:string, data:any):void;
    onRemove():void;
    sendNotification(name:string, data:any):void;
}
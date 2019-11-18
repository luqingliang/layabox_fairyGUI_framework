export default interface IObserver {
    notify(eventName:string, data:any):void;
    register(eventName:string, caller:any, callBack:Function, data:any):void;
    off(eventName:string, caller:any, callBack:Function):void;
    offAll(eventName?:string):void;
    offAllCaller(caller:any):void;
}
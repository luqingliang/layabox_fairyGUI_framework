import IObserver from "../interface/IObserver";

export default class Observer implements IObserver {
    private static _instance:Observer;
    public static get instance():Observer {
        if(!this._instance) {
            this._instance = new Observer();
        }
        return this._instance;
    }

    private _eventDispatcher:Laya.EventDispatcher;

    constructor() {
        this._eventDispatcher = new Laya.EventDispatcher();
    }

    public notify(eventName:string, data:any):void {
        this._eventDispatcher.event(eventName, data);
    }

    public register(eventName:string, caller:any, callBack:Function, args?:any[]):void {
        this._eventDispatcher.on(eventName, caller, callBack, args);
    }

    public off(eventName:string, caller:any, callBack:Function):void {
        this._eventDispatcher.off(eventName, caller, callBack);
    }

    public offAll(eventName?:string):void {
        this._eventDispatcher.offAll(eventName);
    }

    public offAllCaller(caller:any):void {
        this._eventDispatcher.offAllCaller(caller);
    }
}
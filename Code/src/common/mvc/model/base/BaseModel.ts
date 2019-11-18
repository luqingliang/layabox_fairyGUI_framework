import IModel from "../../interface/IModel";
import Observer from "../../patterns/Observer";

export default class BaseModel implements IModel {
    constructor() {
        this.initialize();
    }

    protected initialize():void {
        //
    }

    /**
     * 派发一个事件
     * @param name 
     * @param data 
     */
    public sendNotification(name:string, data:any = null):void {
        Observer.instance.notify(name, data);
    }

    public destroy():void {
        //
    }
}
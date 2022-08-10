import { IObserver } from "../interface/IObserver";
import { ISubject } from "../interface/ISubject";

export default class DataBase implements ISubject {
    constructor() { }

    private _observers: IObserver[] = [];

    /**
     * 添加观察者
     * @param observer 
     */
    public addObserver(observer: IObserver) {
        if (this._observers.indexOf(observer) == -1) {
            this._observers.push(observer);
        }
    }

    /**
     * 移除观察者
     * @param observer 
     */
    public removeObserver(observer: IObserver) {
        const index: number = this._observers.indexOf(observer);
        if (index > -1) {
            this._observers.splice(index, 1);
        }
    }

    /**
     * 发送通知
     * @param cmd 
     * @param data 
     */
    public sendNotification(cmd, data = null) {
        const len: number = this._observers.length;
        for (let i = len - 1; i >= 0; i--) {
            const obs: IObserver = this._observers[i];
            if (!obs) {
                this._observers.splice(i, 1);
                continue;
            }
            if (obs instanceof fgui.GObject && (!obs.visible || obs.isDisposed)) {
                continue;
            }
            obs.updateDB(cmd, data);
        }
    }
}
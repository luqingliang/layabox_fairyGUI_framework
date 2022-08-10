import IEventHandler from "../interface/ICenterEventHandler";

/**
 * 事件中心
 */
export default class EventCenter {
    public static readonly inst: EventCenter = new EventCenter();
    public constructor() {
    }

    private _listeners: { [etype: number]: Array<IEventHandler> } = {};

    /**
     * 派发事件
     * @param etype 
     * @param data 
     */
    public dispatcher(etype: number, data: any = null): void {
        if (this._listeners[etype] != null) {
            let handlers: Array<IEventHandler> = this._listeners[etype];
            const len: number = handlers.length;
            for (let i = len - 1; i >= 0; i--) {
                let handler = handlers[i];
                handler.eventHandler(etype, data);
            }
        }
    }

    /**
     * 监听事件
     * @param etype 
     * @param handler 
     * @returns 
     */
    public addListener(etype: number, handler: IEventHandler): void {
        if (this._listeners[etype] == null) {
            this._listeners[etype] = [];
        } else {
            if (this._listeners[etype].indexOf(handler) != -1) {
                return;
            }
        }
        this._listeners[etype].push(handler);
    }

    /**
     * 移除事件监听
     * @param etype 
     * @param handler 
     */
    public removeListener(etype: number, handler: IEventHandler): void {
        if (this._listeners[etype] != null) {
            let index: number = this._listeners[etype].indexOf(handler);
            if (index >= 0) {
                this._listeners[etype].splice(index, 1);
            }
        }
    }
}
import { ICMDHandler } from "../../../common/interface/ICMDHandler";
import SocketManager from "../../SocketManager";

export default class ModelBase implements ICMDHandler {

    private _msgHandlers: Map<number, Laya.Handler>;
    private _callBackMap: Map<number, Array<Laya.Handler>>;

    constructor() {
        this._msgHandlers = new Map();
        this._callBackMap = new Map();
    }

    /**
     * 发送消息
     * @param cmd 
     * @param data 
     * @param callBack 
     * @returns 
     */
    protected sendMessage(cmd: number, data: object, callBack: Laya.Handler = null): void {
        if (callBack) {
            let arr: Laya.Handler[] = this._callBackMap.get(cmd);
            if (!arr) {
                arr = [];
                this._callBackMap.set(cmd, arr);
            }
            arr.push(callBack);
        }
        SocketManager.inst.sendMsg(cmd, data);
    }

    /**
     * 注册消息的业务逻辑回调方法
     * @param cmd 
     * @param handler 
     */
    public registRspHandler(cmd: number, handler: Laya.Handler): void {
        handler.once = false;
        this._msgHandlers.set(cmd, handler);
    }

    /**
     * 解析收到的消息
     * @param cmd 
     * @param msgObj 
     * @returns 
     */
    public dealBufferMessage(cmd: number, msgObj: object): void {
        const code: number = msgObj["code"];
        if (code && code !== 1) {
            console.error("接口返回错误, CMD:" + cmd + ", MSG:" + msgObj["msg"]);
            return;
        }
        let handler = this._msgHandlers.get(cmd);
        if (handler) {
            handler.runWith(msgObj);
        }
        let arr = this._callBackMap.get(cmd);
        if (arr && arr.length > 0) {
            let callBack = arr.shift();
            callBack.run();
        }
    }
}
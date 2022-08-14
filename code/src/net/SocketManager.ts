import { ICMDHandler } from "../common/interface/ICMDHandler";
import GameSocket from "../common/net/GameSocket";
import { GameData } from "../game/data/DateDriver";
import ModelBase from "./msg/base/ModelBase";

/**
 * 处理长连接接口数据收发
 * @author luqingliang
 */
export default class SocketManager {
    private static _inst: SocketManager;
    public static get inst(): SocketManager {
        if (!this._inst) {
            this._inst = new SocketManager();
        }
        return this._inst;
    }

    private readonly URL: string = "192.168.0.213:11006/games/ws?userId=";

    private _socket: GameSocket;

    /**复用的发送消息二进制对象 */
    private _sendingByte: Laya.Byte;

    /**协议号跟model类对应关系 */
    private _cmdHandler: Map<number, ICMDHandler>;
    /**协议号跟协议名对应关系 */
    private _messageMap: Map<number, string>;
    /**连接断开回调 */
    private _closeHandler: Laya.Handler;

    constructor() {
        this._cmdHandler = new Map();
        this._messageMap = new Map();

        this._socket = new GameSocket();
        this._sendingByte = new Laya.Byte();
        this._sendingByte.endian = Laya.Byte.BIG_ENDIAN;
    }

    /**
     * 注册消息模块
     * @param cmd 
     * @param msgHandler 
     */
    public registCMDModel(cmd: number, msgHandler: ModelBase): void {
        this._cmdHandler.set(cmd, msgHandler);
    }

    /**
     * 注册协议号跟消息的对应关系
     * @param cmd 
     * @param msgName 
     */
    public registMessage(cmd: number, msgName: string): void {
        this._messageMap.set(cmd, msgName);
    }

    /**
     * 连接服务器
     * @param connectedHandler 
     * @param closeHandler 
     * @param reconnectCount 
     */
    public connectServer(connectedHandler?: Laya.Handler, closeHandler?: Laya.Handler): void {
        this._closeHandler = closeHandler;
        this._socket.connectByUrl(this.URL + (!GameData.common.userId ? "1" : GameData.common.userId), Laya.Handler.create(this, this.parseData), connectedHandler, Laya.Handler.create(this, this.onSocketClosed));
    }

    /**
     * 与服务器断开连接
     */
    public disconnect(): void {
        this._socket.close();
    }

    /**
     * 连接断开
     */
    private onSocketClosed(): void {
        this.disconnect();
        if (this._closeHandler) {
            this._closeHandler.run();
            this._closeHandler = null;
        }
    }

    /**
     * 解析消息
     * @param data 
     */
    private parseData(data: Laya.Byte): void {
        const cmd = data.readInt32();
        const buf = data.readUint8Array(4, data.length);
        const protoObj = gameProto[this._messageMap.get(cmd) + "Rsp"];
        if (!protoObj) {
            console.error("收到未知消息：" + cmd);
            return;
        }
        const msgObj = protoObj.decode(buf);
        const handler: ICMDHandler = this._cmdHandler.get(cmd);
        if (handler) {
            handler.dealBufferMessage(cmd, msgObj);
        }
    }

    /**
     * 发送消息
     * @param cmd 
     * @param msg 
     * @returns 
     */
    public sendMsg(cmd: number, msg: object): void {
        if (!this.connected) {
            console.error("发送消息失败：socket没有连接");
            this.onSocketClosed();
            return;
        }

        const protoObj = gameProto[this._messageMap.get(cmd) + "Req"];
        if (!protoObj) {
            console.error("发送未知消息：" + cmd, msg);
            return;
        }

        const msgObj = protoObj.create(msg);
        const buf = protoObj.encode(msgObj).finish();

        this._sendingByte.clear();
        this._sendingByte.pos = 0;
        this._sendingByte.writeInt32(cmd);
        this._sendingByte.writeArrayBuffer(buf);
        this._socket.sendMsg(this._sendingByte);
    }

    /**
     * 连接状态
     */
    public get connected(): boolean {
        return this._socket && this._socket.connected;
    }
}
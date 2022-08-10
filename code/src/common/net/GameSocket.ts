
/**
 * WebSocket
 * @author luqingliang
 */
export default class GameSocket {

    /**socket对象 */
    private _socket: Laya.Socket;
    /**用来接受二进制数据流 */
    private _receiveByte: Laya.Byte;

    /**收到消息的回调 */
    private _receiveHandler: Laya.Handler;

    /**连接建立的回调 */
    private _connectedHandler: Laya.Handler;

    /**链接关闭的回调 */
    private _closedHandler: Laya.Handler;

    /**请求超时时间 */
    private _timeOut: number = 3000;

    constructor() {
        this._socket = new Laya.Socket();
        this._socket.endian = Laya.Byte.BIG_ENDIAN;

        this._receiveByte = new Laya.Byte();
        this._receiveByte.endian = Laya.Byte.BIG_ENDIAN;

        this._socket.on(Laya.Event.OPEN, this, this.onOpen);//连接正常打开抛出的事件   
        this._socket.on(Laya.Event.MESSAGE, this, this.onReceive);//接收到消息抛出的事件    
        this._socket.on(Laya.Event.CLOSE, this, this.onClose);//socket关闭抛出的事件    
        this._socket.on(Laya.Event.ERROR, this, this.onError);//连接出错抛出的事件
    }

    /**
     * 去连接一个url
     * @param url 
     * @param receiveHandler
     * @param connectedHandler
     */
    public connectByUrl(url: string, receiveHandler?: Laya.Handler, connectedHandler?: Laya.Handler, closedHandler?: Laya.Handler) {
        this._connectedHandler = connectedHandler;
        this._closedHandler = closedHandler;
        this._receiveHandler = receiveHandler;
        this._receiveHandler.once = false;
        if (url.indexOf("ws:") >= 0 || url.indexOf("wss:") >= 0) {
            this._socket.connectByUrl(url);
        } else {
            this._socket.connectByUrl("ws://" + url);
        }
    }

    /**
     * 发送消息
     * @param msg 
     */
    public sendMsg(msg: Laya.Byte) {
        this._socket.send(msg.buffer);
        Laya.timer.once(this._timeOut, this, this.onTimeOut);
    }

    /**
     * 接收到消息
     * @param msg 
     * @returns 
     */
    private onReceive(msg: any = null) {
        Laya.timer.clear(this, this.onTimeOut);
        if (!msg) {
            return;
        }
        this._receiveByte.clear();
        this._receiveByte.writeArrayBuffer(msg)
        this._receiveByte.pos = 0;
        if (this._receiveHandler) {
            this._receiveHandler.runWith(this._receiveByte);
        }
    }

    /**
     * 关闭连接。
     */
    public close() {
        if (this._socket != null) {
            this._socket.close();
        }
    }
    /**
     * 清理Socket：关闭Socket链接，关闭事件监听，重置Socket
     */
    public cleanSocket() {
        this.close();
        this._socket.cleanSocket();
        this._socket = null;
    }

    private onOpen(event) {
        console.log("服务器连接成功", event);
        if (this._connectedHandler) {
            this._connectedHandler.run();
            this._connectedHandler = null;
        }
    }
    private onError(event) {
        console.error("服务器连接错误", event);
        if (this._closedHandler) {
            this._closedHandler.run();
            this._closedHandler = null;
        }
    }
    private onClose(event) {
        console.error("服务器连接关闭", event);
        if (this._closedHandler) {
            this._closedHandler.run();
            this._closedHandler = null;
        }
    }
    private onTimeOut() {
        console.error("消息发送超时");
        if (this._closedHandler) {
            this._closedHandler.run();
            this._closedHandler = null;
        }
    }

    /**
     * 连接状态
     */
    public get connected(): boolean {
        return this._socket ? this._socket.connected : false;
    }

    /**
     * 超时时间(毫秒)
     */
    public set timeOut(val: number) {
        this._timeOut = val;
    }
}
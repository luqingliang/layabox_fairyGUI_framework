export default class GameSocket extends Laya.Socket {
    private _byte:Laya.Byte;
    private _host:string;
    private _port:number;

    constructor() {
        super();
        this._byte = new Laya.Byte();
        this._byte.endian = Laya.Byte.LITTLE_ENDIAN;
        this.endian = Laya.Byte.LITTLE_ENDIAN;
    }

    /**
     * 建立连接
     * @param host 
     * @param port 
     * @param isTLS 
     */
    public connect(host:string, port:number, isTLS:boolean = false):void {
        this._host = host;
        this._port = port;
        let url:string = (!isTLS ? "ws://" : "wss://") + host + ":" + port;
        super.connectByUrl(url);
    }

    protected _onError(event:any = null):void {
        console.error("Socket IO Error: ", event);
    }

    /**
     * 监听socket连接建立
     * @param call 
     * @param callback 
     */
    public onConnected(call:any, callback:Function):void {
        this.on(Laya.Event.OPEN, call, callback);
    }
    /**
     * 监听socket关闭
     * @param caller 
     * @param callback 
     */
    public onSocketClose(caller:any, callback:Function):void {
        this.on(Laya.Event.CLOSE, caller, callback);
    }
    /**
     * 监听消息数据
     * @param caller 
     * @param callback 
     */
    public onMessage(caller:any, callback:Function):void {
        this.on(Laya.Event.MESSAGE, caller, callback);
    }

    public sendMsg(msg:any):void {
        let by:Laya.Byte = new Laya.Byte();
        by.endian = Laya.Byte.LITTLE_ENDIAN;
        //然后将数据写入临时变量by
        this._byte.writeArrayBuffer(by.buffer);
        this.send(this._byte.buffer); //发送和写入的都是arrayBuffer
        this._byte.clear(); //每次发送完清空数据
    }

    public get host():string {
        return this._host;
    }
    public get port():number {
        return this._port;
    }

    /**
     * 关闭连接
     */
    public close():void {
        this.offAll(Laya.Event.OPEN);
        this.offAll(Laya.Event.ERROR);
        this.offAll(Laya.Event.MESSAGE);
        this.offAll(Laya.Event.CLOSE);
        this.cleanSocket();

        this._byte = null;
        this._host = null;
        this._port = null;
    }
}
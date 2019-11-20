import GameSocket from "./GameSocket";

export default class NetManager extends Laya.EventDispatcher {
    private static _instance:NetManager;
    public static get instance():NetManager {
        if(!this._instance)
            this._instance = new NetManager();
        return this._instance;
    }

    private _gameSocket:GameSocket;

    constructor() {
        super();
    }

    public connect(host:string, port:number, caller:any = null, complete:Function = null, isTLS:boolean = false):void {
        if(this._gameSocket) {
            console.warn("重复发起WebSocket连接请求");
            return;
        }
        this._gameSocket = new GameSocket();
        this._gameSocket.connect(host, port, isTLS);
        this._gameSocket.onConnected(this, () => {
            complete.call(caller);
        });

        this._gameSocket.onSocketClose(this, (e:any) => {
            console.error("Socket连接关闭");
        });
    }

    public close():void {
        this._gameSocket.close();
        this._gameSocket = null;
    }
}
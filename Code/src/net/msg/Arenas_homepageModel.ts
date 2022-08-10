import SocketManager from "../SocketManager";
import ModelBase from "./base/ModelBase";

/**
 * 此文件为自动生成，请不要手动修改 
 */
export default class Arenas_homepageModel extends ModelBase {
    private static _inst: Arenas_homepageModel;
    public static get inst(): Arenas_homepageModel {
        if (!this._inst) {
            this._inst = new Arenas_homepageModel();
        }
        return this._inst;
    }

    constructor() {
        super();

        // 注册消息号跟消息的对应关系
        SocketManager.inst.registMessage(gameProto.ArenasMessageEnum.ARENAS_HOMEPAGE, "ArenasHomepage");

        // 注册消息跟model的对应关系
        SocketManager.inst.registCMDModel(gameProto.ArenasMessageEnum.ARENAS_HOMEPAGE, this);
    }

    /**
     * @param {gameProto.IArenasHomepageReq} msg 
     * @param {Laya.Handler} callBack 
     */
    public sendArenasHomepageReqMsg(msg: gameProto.IArenasHomepageReq, callBack: Laya.Handler = null): void {
        this.sendMessage(gameProto.ArenasMessageEnum.ARENAS_HOMEPAGE, msg, callBack);
    }

}
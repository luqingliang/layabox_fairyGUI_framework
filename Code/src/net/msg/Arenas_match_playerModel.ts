import SocketManager from "../SocketManager";
import ModelBase from "./base/ModelBase";

/**
 * 此文件为自动生成，请不要手动修改 
 */
export default class Arenas_match_playerModel extends ModelBase {
    private static _inst: Arenas_match_playerModel;
    public static get inst(): Arenas_match_playerModel {
        if (!this._inst) {
            this._inst = new Arenas_match_playerModel();
        }
        return this._inst;
    }

    constructor() {
        super();

        // 注册消息号跟消息的对应关系
        SocketManager.inst.registMessage(gameProto.ArenasMessageEnum.MATCH_PLAYER, "ArenasMatchPlayer");

        // 注册消息跟model的对应关系
        SocketManager.inst.registCMDModel(gameProto.ArenasMessageEnum.MATCH_PLAYER, this);
    }

    /**
     * @param {gameProto.IArenasMatchPlayerReq} msg 
     * @param {Laya.Handler} callBack 
     */
    public sendArenasMatchPlayerReqMsg(msg: gameProto.IArenasMatchPlayerReq, callBack: Laya.Handler = null): void {
        this.sendMessage(gameProto.ArenasMessageEnum.MATCH_PLAYER, msg, callBack);
    }

}
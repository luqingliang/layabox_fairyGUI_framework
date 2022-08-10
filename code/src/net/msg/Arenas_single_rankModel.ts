import SocketManager from "../SocketManager";
import ModelBase from "./base/ModelBase";

/**
 * 此文件为自动生成，请不要手动修改 
 */
export default class Arenas_single_rankModel extends ModelBase {
    private static _inst: Arenas_single_rankModel;
    public static get inst(): Arenas_single_rankModel {
        if (!this._inst) {
            this._inst = new Arenas_single_rankModel();
        }
        return this._inst;
    }

    constructor() {
        super();

        // 注册消息号跟消息的对应关系
        SocketManager.inst.registMessage(gameProto.ArenasMessageEnum.SINGLE_RANk, "ArenasSingleRank");

        // 注册消息跟model的对应关系
        SocketManager.inst.registCMDModel(gameProto.ArenasMessageEnum.SINGLE_RANk, this);
    }

    /**
     * @param {gameProto.IArenasSingleRankReq} msg 
     * @param {Laya.Handler} callBack 
     */
    public sendArenasSingleRankReqMsg(msg: gameProto.IArenasSingleRankReq, callBack: Laya.Handler = null): void {
        this.sendMessage(gameProto.ArenasMessageEnum.SINGLE_RANk, msg, callBack);
    }

}
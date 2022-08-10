import SocketManager from "../SocketManager";
import ModelBase from "./base/ModelBase";

/**
 * 此文件为自动生成，请不要手动修改 
 */
export default class Arenas_game_overModel extends ModelBase {
    private static _inst: Arenas_game_overModel;
    public static get inst(): Arenas_game_overModel {
        if (!this._inst) {
            this._inst = new Arenas_game_overModel();
        }
        return this._inst;
    }

    constructor() {
        super();

        // 注册消息号跟消息的对应关系
        SocketManager.inst.registMessage(gameProto.ArenasMessageEnum.GAME_OVER, "ArenasGameOver");

        // 注册消息跟model的对应关系
        SocketManager.inst.registCMDModel(gameProto.ArenasMessageEnum.GAME_OVER, this);
    }

    /**
     * @param {gameProto.IArenasGameOverReq} msg 
     * @param {Laya.Handler} callBack 
     */
    public sendArenasGameOverReqMsg(msg: gameProto.IArenasGameOverReq, callBack: Laya.Handler = null): void {
        this.sendMessage(gameProto.ArenasMessageEnum.GAME_OVER, msg, callBack);
    }

}
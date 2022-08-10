import SocketManager from "../SocketManager";
import ModelBase from "./base/ModelBase";

/**
 * 此文件为自动生成，请不要手动修改 
 */
export default class Arenas_enter_battleModel extends ModelBase {
    private static _inst: Arenas_enter_battleModel;
    public static get inst(): Arenas_enter_battleModel {
        if (!this._inst) {
            this._inst = new Arenas_enter_battleModel();
        }
        return this._inst;
    }

    constructor() {
        super();

        // 注册消息号跟消息的对应关系
        SocketManager.inst.registMessage(gameProto.ArenasMessageEnum.ENTER_BATTLE, "ArenasEnterBattle");

        // 注册消息跟model的对应关系
        SocketManager.inst.registCMDModel(gameProto.ArenasMessageEnum.ENTER_BATTLE, this);
    }

    /**
     * @param {gameProto.IArenasEnterBattleReq} msg 
     * @param {Laya.Handler} callBack 
     */
    public sendArenasEnterBattleReqMsg(msg: gameProto.IArenasEnterBattleReq, callBack: Laya.Handler = null): void {
        this.sendMessage(gameProto.ArenasMessageEnum.ENTER_BATTLE, msg, callBack);
    }

}
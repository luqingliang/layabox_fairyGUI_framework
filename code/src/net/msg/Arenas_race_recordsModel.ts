import SocketManager from "../SocketManager";
import ModelBase from "./base/ModelBase";

/**
 * 此文件为自动生成，请不要手动修改 
 */
export default class Arenas_race_recordsModel extends ModelBase {
    private static _inst: Arenas_race_recordsModel;
    public static get inst(): Arenas_race_recordsModel {
        if (!this._inst) {
            this._inst = new Arenas_race_recordsModel();
        }
        return this._inst;
    }

    constructor() {
        super();

        // 注册消息号跟消息的对应关系
        SocketManager.inst.registMessage(gameProto.ArenasMessageEnum.RACE_RECORDS, "ArenasRaceRecords");

        // 注册消息跟model的对应关系
        SocketManager.inst.registCMDModel(gameProto.ArenasMessageEnum.RACE_RECORDS, this);
    }

    /**
     * @param {gameProto.IArenasRaceRecordsReq} msg 
     * @param {Laya.Handler} callBack 
     */
    public sendArenasRaceRecordsReqMsg(msg: gameProto.IArenasRaceRecordsReq, callBack: Laya.Handler = null): void {
        this.sendMessage(gameProto.ArenasMessageEnum.RACE_RECORDS, msg, callBack);
    }

}
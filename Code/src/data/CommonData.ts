import DataBase from "../common/model/DataBase";
import CookieUtil from "../common/utils/CookieUtil";

/**
 * 一些通用数据逻辑
 */
export default class CommonData extends DataBase {

    /**用户id */
    private _userId: string;

    /**原生发来的游戏开始数据 */
    private _gameStartData: any;

    constructor() {
        super();
        this._userId = CookieUtil.getItem("Account");
    }

    /**
     * 用户id
     */
    public get userId(): string {
        return this._userId;
    }
    /**
     * 用户id
     */
    public set userId(id: string) {
        this._userId = id;
    }

    /**
     * 原生发来的游戏开始数据
     */
    public get gameStartData(): any {
        return this._gameStartData;
    }
    /**
     * 原生发来的游戏开始数据
     */
    public set gameStartData(data: any) {
        this._gameStartData = data;
    }
}
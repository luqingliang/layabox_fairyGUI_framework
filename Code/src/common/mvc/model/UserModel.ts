import BaseModel from "./base/BaseModel";
import UserVO from "./vo/UserVO";
import { ObjectPool } from "../../utils/ObjectPool";

export default class UserModel extends BaseModel {
    public static readonly EVENT_RENAMETEST:string = "EVENT_RENAMETEST";
    public static readonly EVENT_LOGINSUCCESS:string = "EVENT_LOGINSUCCESS";

    private _userData:UserVO;

    constructor() {
        super();
    }

    protected initialize():void {
        //
    }

    public login(username:string):void {
        Laya.timer.once(400, this, () => {
            this._userData = ObjectPool.from(UserVO, {
                uid: "1001",
                username: !username ? "游客" : username,
                lv: 99,
            });
            console.log("登陆成功，用户信息：", this._userData);
            this.sendNotification(UserModel.EVENT_LOGINSUCCESS);
        });
    }

    public get userData():UserVO {
        return this._userData;
    }
}
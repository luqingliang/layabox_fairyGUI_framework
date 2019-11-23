import UserModel from "./UserModel";

export namespace Model {
    /**协议别名 方便调用 */
    export let protocol = com.tingtong.server.game.proto;

    export let User:UserModel;
}

export class GameModel {

    // public static User:UserModel;

    public static initialize():void {
        // Model.User = new UserModel();
        Model.User = new UserModel();
    }
}
import UserModel from "./UserModel";

export namespace Model {
    export let User:UserModel;
}

export class GameModel {

    // public static User:UserModel;

    public static initialize():void {
        // Model.User = new UserModel();
        Model.User = new UserModel();
    }
}
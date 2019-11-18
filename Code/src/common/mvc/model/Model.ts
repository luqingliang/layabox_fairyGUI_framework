import UserModel from "./UserModel";

export default class Model {

    public static User:UserModel;

    public static initialize():void {
        Model.User = new UserModel();
    }
}
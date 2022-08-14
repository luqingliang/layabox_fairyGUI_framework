import GameConfig from "../../GameConfig";
import CommonData from "./CommonData";
import MainData from "./MainData";

export namespace GameData {
    export let common: CommonData;
    export let main: MainData;
}

export class DataDrive {
    public static init() {
        GameData.common = new CommonData();
        GameData.main = new MainData();
    }
}
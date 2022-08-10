import GameConfig from "../GameConfig";
import CommonData from "./CommonData";
import MainData from "./MainData";

export namespace GameData {
    export let common: CommonData;
    export let main: MainData;
}

export class DataDrive {
    /**
     * 初始化游戏数据类
     */
    public static init() {
        if (GameConfig.debug || GameConfig.stat) {
            Laya.Browser.window.GameData = GameData;
        }
        GameData.common = new CommonData();
        GameData.main = new MainData();
    }
}
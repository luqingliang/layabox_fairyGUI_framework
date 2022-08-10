import DataBase from "../common/model/DataBase";
import ColliderUtil from "../common/utils/ColliderUtil";
import { DataUpdateType } from "../core/CustomConsts";
import { PosePoint } from "../core/PosePart";
import GameConfig from "../GameConfig";

export default class MainData extends DataBase {

    /**算法传过来的点位数据 */
    private _poseDataArr: number[][] = [];

    private _realHeight: number;

    constructor() {
        super();
        this._realHeight = Laya.Browser.onIOS ? Laya.stage.height : Laya.stage.width / GameConfig.height * GameConfig.height;
        this.setPoseData();
        this.setActionData();
        this.setActionResultData();
    }


    /**
     * 人物肢体点位数据处理
     */
    private setPoseData(): void {
        if (GameConfig.isTest) {
            Laya.timer.frameLoop(1, this, () => {
                this.sendNotification(DataUpdateType.PoseDataUpdate);
            });
            return;
        }
        Laya.Browser.window.setPoseData = (data: { landmarks: string }) => {
            this.parsePointData(data);
            this.sendNotification(DataUpdateType.PoseDataUpdate);
        };
    }


    /**
     * 人物动作数据处理
     */
    private setActionData(): void {
        Laya.Browser.window.setActionData = (data: { actionId: number }) => {
            this.sendNotification(DataUpdateType.ActionDataUpdate, data);
        };
    }

    /**
     * 人物动作结果数据处理
     */
    private setActionResultData(): void {
        if (GameConfig.isTest) {
            Laya.timer.loop(1000, this, () => {
                const data = { result: 10 }
                this.sendNotification(DataUpdateType.ActionResultDataUpdate, data);
            });
            return;
        }
        Laya.Browser.window.setActionResultData = (data: { actionId: number, result: number, other: number }) => {
            this.sendNotification(DataUpdateType.ActionResultDataUpdate, data);
        };
    }



    /**
     * 把算法数据转换为游戏中的坐标数据
     * @param data 
     */
    private parsePointData(data: { landmarks: string }): void {
        let arr: number[] = data.landmarks.split(",").map((val, index) => {
            if ((index & 1) === 0) {
                return +val * Laya.stage.width;
            } else {
                return +val * Laya.stage.height; // * this._realHeight - (this._realHeight - GameConfig.height) / 2;
            }
        });
        this._poseDataArr.push(arr);
    }

    /**
     * 获取某个关节点相对屏幕的坐标
     * @param part 
     * @returns 
     */
    public getPartPos(part: PosePoint): Laya.Point {
        if (GameConfig.isTest) {
            return Laya.Point.create().setTo(Laya.stage.mouseX, Laya.stage.mouseY);
        }
        let res: Laya.Point = new Laya.Point();
        const len: number = this._poseDataArr.length;
        if (len > 0) {
            let arr: number[] = this._poseDataArr[len - 1];
            res.x = arr[part * 2];
            res.y = arr[part * 2 + 1];
        }
        return res;
    }

    public exitGame(): void {
        this._poseDataArr.length = 0;
    }

    /**
     * 判断生成圆点是否跟ui面板重叠
     * @param UIComp 
     * @param center 
     * @param r 
     * @returns 
     */
    public hitUIPanel(UIComp: fgui.GComponent, center: Laya.Point, r: number): boolean {
        let scorePanel: fgui.GObject = UIComp.getChild("scorePanel");
        let timePanel: fgui.GObject = UIComp.getChild("timePanel");
        let levelPanel: fgui.GObject = UIComp.getChild("levelPanel");
        let rect: Laya.Rectangle = new Laya.Rectangle(scorePanel.x, scorePanel.y, scorePanel.width, scorePanel.height);
        if (ColliderUtil.circleHitRect(center, r, rect)) {
            return true;
        }
        rect.setTo(timePanel.x, timePanel.y, timePanel.width, timePanel.height);
        if (ColliderUtil.circleHitRect(center, r, rect)) {
            return true;
        }
        rect.setTo(levelPanel.x, levelPanel.y, levelPanel.width, levelPanel.height);
        if (ColliderUtil.circleHitRect(center, r, rect)) {
            return true;
        }
        return false;
    }
}
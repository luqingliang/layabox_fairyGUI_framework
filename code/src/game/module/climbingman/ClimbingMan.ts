import UIBase from "../../core/view/UIBase";
import { ActionType, DataUpdateType, GameEventType } from "../../core/CustomConsts";
import { LayerType } from "../../core/view/UIRegister";
import { GameData } from "../../data/DateDriver";
import UI_ClimbingMan from "../../../ui/fgui/climbingman/UI_ClimbingMan";
import CompBird from "./comp/CompBird";
import CompClimbingRole from "./comp/CompClimbingRole";
import CompClouds from "./comp/CompClouds";
import CompDangerousNotice from "./comp/CompDangerousNotice";
import CompScoreUI from "./comp/CompScoreUI";
import CompSpeedUp from "./comp/CompSpeedUp";
import CompSteps from "./comp/CompSteps";

/**
 * 爬楼玩法
 * @author luqingliang
 */
export default class ClimbingMan extends UIBase {
    public contentPane: UI_ClimbingMan;
    private _stepsList: CompSteps[] = [];
    private _gameTime: number = 0;
    private _score: number = 0;
    private _level: number = 0;
    private _role: CompClimbingRole;

    private _rebirthTime: number = 0;

    private _scoreUI: CompScoreUI;
    private _dangerousNotice: CompDangerousNotice;
    private _compClouds: CompClouds;
    private _compSpeedUp: CompSpeedUp;

    /**上一个台阶 */
    private _lastStep: CompSteps = null;

    private _config = {
        lifeValue: 3,
        storeyHeight: 250,
        roleDropSpeed: 550,
        rebirthTime: 1000, // 重生无敌时间
        levelInfo: [
            { speed: 150, width: 0.5 },
            { speed: 200, width: 0.4 },
            { speed: 250, width: 0.35 },
            { speed: 300, width: 0.3 },
            { speed: 350, width: 0.25 },
        ]
    }

    constructor() {
        super("climbingman", "ClimbingMan", LayerType.Scenes, false, true);
        this.setExtension(CompScoreUI.URL, CompScoreUI);
        this.setExtension(CompSteps.URL, CompSteps);
        this.setExtension(CompBird.URL, CompBird);
        this.setExtension(CompSpeedUp.URL, CompSpeedUp);
    }

    protected Start(): void {
        this._role = new CompClimbingRole();
        this._scoreUI = this.contentPane.scoreUI as CompScoreUI;
        this._dangerousNotice = new CompDangerousNotice(this.contentPane.compDangerous);
        this._compClouds = new CompClouds(this.contentPane);
        this._compSpeedUp = this.contentPane.speedUp as CompSpeedUp;

        // 键盘测试
        Laya.stage.on(Laya.Event.KEY_DOWN, this, (e: Laya.Event) => {
            if (e.nativeEvent["key"] == "ArrowLeft") {
                // 左移动
                this._role.updateX(this._role.x - 10);
            } else if (e.nativeEvent["key"] == "ArrowRight") {
                // 右移动
                this._role.updateX(this._role.x + 10);
            } else if (e.nativeEvent["key"] == " ") {
                // 跳
                this._role.jump();
            }
        });
    }

    public updateDB(cmd: DataUpdateType, data: any): void {
        switch (cmd) {
            case DataUpdateType.PoseDataUpdate:
                this.updateRolePos();
                break;
            case DataUpdateType.ActionDataUpdate:
                this.setRoleAction(data);
                break;
        }
    }
    eventHandler(eventType: GameEventType, data: any) {
        switch (eventType) {
            case GameEventType.GameStart:
                this.gameStart();
                break;
            case GameEventType.GamePause:
                this._compSpeedUp.paused = true;
                break;
            case GameEventType.GameResume:
                this._compSpeedUp.paused = false;
                break;
        }
    }

    public updateUI(data?: any): void {
        this.addObs(GameData.main);
        this._role.init(this.contentPane, this._config.storeyHeight, Laya.Handler.create(this, () => {
            this.gameStart();
        }));
    }

    /**
     * 开始游戏
     */
    public gameStart(): void {
        this._gameTime = 0;
        this._score = 0;
        this._scoreUI.init(this._config.lifeValue);
        this._compSpeedUp.start();
    }

    public updateFrame(s: number, ms: number): void {

        const now: number = Date.now();
        const moveLength: number = this.levelInfo.speed * s;

        for (let obj of this._stepsList) {
            obj.updatePos(moveLength);
        }

        let isDeath: boolean = this._role.updateY(this._config.roleDropSpeed * s, this._stepsList);
        if (now - this._rebirthTime > this._config.rebirthTime && isDeath) {
            // 扣血
            this._rebirthTime = Date.now();
            this._scoreUI.deductLife();
            this._dangerousNotice.hideDangerous();
            this._role.rebirth();
        }

        this.createSteps();

        if (Laya.stage.height - this._role.stageY < 300) {
            this._dangerousNotice.showDangerous();
        } else {
            this._dangerousNotice.hideDangerous();
        }

        this._gameTime += ms;
        if (this._scoreUI.life <= 0) {
            this.gameOver();
        }
    }

    /**
     * 更新角色位置
     */
    private updateRolePos(): void {
        this._role.updateX(this.roleCenterX);
    }
    /**
     * 设置角色动作
     * @param data 
     */
    private setRoleAction(data: { actionId: number }): void {
        if (data.actionId == ActionType.Jump) {
            this._role.jump();
        }
    }

    /**
     * 创建台阶
     */
    private createSteps(): void {
        const info = this.levelInfo;
        if (!this._lastStep || this._lastStep.y > this._config.storeyHeight) {
            // 创建一个新的
            let obj: CompSteps = this.createObj();
            obj.init(this.contentPane, info.width);
            this._lastStep = obj;
        }
    }

    /**
     * 创建一个台阶对象
     * @returns 
     */
    private createObj(): CompSteps {
        for (let obj of this._stepsList) {
            if (!obj.isActive) {
                return obj;
            }
        }
        let comp: CompSteps = <CompSteps>CompSteps.createInstance();
        this._stepsList.push(comp);
        return comp;
    }

    /**
     * 游戏结束
     */
    public gameOver(): void {
        this.close();
    }

    /**
     * 获取人物身体的中心点
     * @returns 
     */
    private get roleCenterX(): number {
        let l2: Laya.Point// = //GameData.main.getPartPos(PosePoint.left_hip);
        let r2: Laya.Point// = //GameData.main.getPartPos(PosePoint.right_hip);
        return (l2.x + r2.x) / 2;
    }

    /**
     * 当前等级信息
     */
    private get levelInfo() {
        return this._config.levelInfo[this._level];
    }

    protected beforeClose(): void {
        this._dangerousNotice.hideDangerous();
        this._compSpeedUp.stop();
        this._compClouds.beforeClose();
    }
}
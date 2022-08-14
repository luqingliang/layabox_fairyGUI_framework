import SpineAni from "../../../../common/animation/SpineAni";
import UI_ClimbingMan from "../../../../ui/fgui/climbingman/UI_ClimbingMan";
import CompSteps from "./CompSteps";

/**
 * 爬楼角色
 * @author luqingliang
 */
export default class CompClimbingRole extends Laya.Sprite {

    private _contentPane: UI_ClimbingMan;

    private _role: SpineAni;

    private _step: CompSteps = null;

    private _jumpHeight: number;

    private _updateXTime: number = 0;

    private _roleState: RoleState = RoleState.Idle;

    /**宽度的一半 */
    private _r: number = 30;

    constructor() {
        super();
    }

    /**
     * 初始化
     * @param obj 
     * @param storeyHeight 
     * @param complete 
     */
    public init(obj: UI_ClimbingMan, storeyHeight: number, complete: Laya.Handler): void {
        this._contentPane = obj;
        this._jumpHeight = storeyHeight * 2 - 100;
        this._role = new SpineAni("leopard", "climbingman", null, Laya.Handler.create(this, () => {
            this.setState(RoleState.Idle);
            complete.run();
        }));
        this.addChild(this._role);
        this._role.y = -35;
        obj.displayObject.addChild(this);
        this.pos(Laya.stage.width / 2, -300);
    }

    public rebirth(): void {
        if (this._step) {
            this.offTheStep();
        }
        this.pos(Laya.stage.width / 2, -300);
    }

    /**
     * 更新x位置，具体值
     * @param x 
     */
    public updateX(x: number): void {
        const now: number = Date.now();
        const speed: number = (x - this.x) / (now - this._updateXTime);
        this._updateXTime = now;
        this.x = x;
        if (this._step) {
            if (this.x < 0 - this._r || this.x > this._step.width + this._r) {
                this.offTheStep(); // 自己走下台阶
            }
        } else {
            if (this.x < this._r) {
                this.x = this._r;
            } else if (this.x > this._contentPane.width - this._r) {
                this.x = this._contentPane.width - this._r;
            }
        }

        this.setState(this.getMoveState(speed));
    }

    private getMoveState(speed: number): RoleState {
        let state: RoleState = RoleState.Idle;
        if (speed !== 0) {
            switch (this._roleState) {
                case RoleState.LeftStandby:
                    state = speed < 0 ? RoleState.LeftStandby : RoleState.LeftToRight;
                    break;
                case RoleState.RightStandby:
                    state = speed < 0 ? RoleState.RightToLeft : RoleState.RightStandby;
                    break;
                default:
                    state = speed < 0 ? RoleState.TurnLeft : RoleState.TurnRight;
            }
        }
        return state;
    }

    /**
     * 更新y位置，增量
     * @param steps
     * @returns true 死亡 false 正常
     */
    public updateY(yIncreased: number, steps: CompSteps[]): boolean {
        if (this._onJump) {
            return false;
        }
        let realY: number = this.y;
        if (!this._step) { // 没有在台阶上
            this.y += yIncreased;
            for (let obj of steps) {
                if (obj.collision(this.x - this._r, this.y) || obj.collision(this.x + this._r, this.y)) {
                    // 落到台阶上
                    this.onTheStep(obj);
                    break;
                }
            }
        } else {
            realY = this._step.y;
            for (let obj of steps) {
                if (!obj.isActive) {
                    continue;
                }
            }
        }
        if (realY > this._contentPane.height + 180) { // 掉落出屏幕外死亡
            return true;
        }
        return false;
    }

    /**
     * 站上某个台阶
     * @param step 
     */
    public onTheStep(step: CompSteps): void {
        this.setState(this.getJumpState(1));
        this.removeSelf();
        step.displayObject.addChild(this);
        this.x = this.x - step.x;
        this.y = 0;
        this._step = step;
        step.onRoleStandUp();
    }

    /**
     * 更新角色状态
     * @param state 
     * @returns 
     */
    private setState(state: RoleState): void {
        if (state === this._roleState) {
            return;
        }
        this._roleState = state;
        this._role.offStopped();
        switch (state) {
            case RoleState.Idle:
                this._role.playbackRate(1);
                this._role.play("animation", true);
                break;
            case RoleState.Jumping:
                this._role.playbackRate(2);
                this._role.play("jump", false);
                this._role.onStopped(this, this.setState, [RoleState.Idle]);
                break;
            case RoleState.LeftJumping:
                this._role.playbackRate(2);
                this._role.play("left_jump", false);
                this._role.onStopped(this, this.setState, [RoleState.LeftStandby]);
                break;
            case RoleState.RightJumping:
                this._role.playbackRate(2);
                this._role.play("right_jump", false);
                this._role.onStopped(this, this.setState, [RoleState.RightStandby]);
                break;
            case RoleState.Landing:
                this._role.playbackRate(3);
                this._role.play("jump2", false);
                this._role.onStopped(this, this.setState, [RoleState.Idle]);
                break;
            case RoleState.LeftLanding:
                this._role.playbackRate(3);
                this._role.play("left_jump2", false);
                this._role.onStopped(this, this.setState, [RoleState.LeftStandby]);
                break;
            case RoleState.RightLanding:
                this._role.playbackRate(3);
                this._role.play("right_jump2", false);
                this._role.onStopped(this, this.setState, [RoleState.RightStandby]);
                break;
            case RoleState.TurnLeft:
                this._role.playbackRate(3);
                this._role.play("left1", false);
                this._role.onStopped(this, this.setState, [RoleState.LeftStandby]);
                break;
            case RoleState.TurnRight:
                this._role.playbackRate(3);
                this._role.play("right1", false);
                this._role.onStopped(this, this.setState, [RoleState.RightStandby]);
                break;
            case RoleState.LeftToIdle:
                this._role.playbackRate(3);
                this._role.play("left3", false);
                this._role.onStopped(this, this.setState, [RoleState.Idle]);
                break;
            case RoleState.RightToIdle:
                this._role.playbackRate(3);
                this._role.play("right3", false);
                this._role.onStopped(this, this.setState, [RoleState.Idle]);
                break;
            case RoleState.LeftToRight:
                this._role.playbackRate(3);
                this._role.play("left3", false);
                this._role.onStopped(this, () => {
                    this._role.play("right1", false);
                    this._role.onStopped(this, this.setState, [RoleState.RightStandby]);
                });
                break;
            case RoleState.RightToLeft:
                this._role.playbackRate(3);
                this._role.play("right3", false);
                this._role.onStopped(this, () => {
                    this._role.play("left1", false);
                    this._role.onStopped(this, this.setState, [RoleState.LeftStandby]);
                });
                break;
            case RoleState.LeftStandby:
                this._role.playbackRate(1);
                this._role.play("left2", true);
                break;
            case RoleState.RightStandby:
                this._role.playbackRate(1);
                this._role.play("right2", true);
                break;
        }
    }

    /**
     * 从台阶掉落
     */
    public offTheStep(): void {
        if (this._step) {
            this.removeSelf();
            this._contentPane.displayObject.addChild(this);
            this.x = this._step.x + this.x;
            this.y = this._step.y;
            this._step = null;
        }
    }

    private _onJump: boolean = false;
    private _jumpUpTime: number = 200;
    private _lastJumpTime: number = 0;
    public jump(): void {
        if (this._onJump) {
            return;
        }
        let now: number = Date.now();
        if (now - this._lastJumpTime < this._jumpUpTime * 2) {
            return;
        }
        this._onJump = true;
        this._lastJumpTime = now;
        this.offTheStep();
        this.setState(this.getJumpState(0));
        Laya.Tween.to(this, { y: this.y - this._jumpHeight }, this._jumpUpTime, null, Laya.Handler.create(this, () => {
            this._onJump = false;
        }));
    }

    /**
     * 获取应该以哪种状态起跳或落地
     * @param type 
     * @returns 
     */
    private getJumpState(type: number): RoleState {
        let res: RoleState;
        switch (this._roleState) {
            case RoleState.LeftStandby:
            case RoleState.LeftJumping:
            case RoleState.LeftLanding:
            case RoleState.TurnLeft:
            case RoleState.RightToLeft:
                res = type === 0 ? RoleState.LeftJumping : RoleState.LeftLanding;
                break;
            case RoleState.RightStandby:
            case RoleState.RightJumping:
            case RoleState.RightLanding:
            case RoleState.TurnRight:
            case RoleState.LeftToRight:
                res = type === 0 ? RoleState.RightJumping : RoleState.RightLanding;
                break;
            default:
                res = type === 0 ? RoleState.Jumping : RoleState.Landing;
                break;
        }
        return res;
    }

    public get stageY(): number {
        if (this._step) {
            return this._step.y;
        }
        return this.y;
    }
}

const enum RoleState {
    /**待机 */
    Idle,
    /**起跳 */
    Jumping,
    LeftJumping,
    RightJumping,
    /**落地 */
    Landing,
    LeftLanding,
    RightLanding,
    /**转向左边 */
    TurnLeft,
    /**转向右边 */
    TurnRight,
    /**左边转向中间 */
    LeftToIdle,
    /**右边转向中间 */
    RightToIdle,
    /**左边转向右边 */
    LeftToRight,
    /**右边转向左边 */
    RightToLeft,
    /**左边朝向待机 */
    LeftStandby,
    /**右边朝向待机 */
    RightStandby,
}
import MathUtil from "../../../common/utils/MathUtil";
import UI_CompSpeedUp from "../../../ui/fgui/climbingman/UI_CompSpeedUp";

/**
 * 加速效果
 */
export default class CompSpeedUp extends UI_CompSpeedUp {

    private _leftMovingLines: Set<number> = new Set();
    private _leftIdleLines: Set<number> = new Set();
    private _rightMovingLines: Set<number> = new Set();
    private _rightIdleLines: Set<number> = new Set();

    private _speed: number = 500;
    private _createInterval: number = 600;
    private _lastCreateTime: number = 0;

    private _paused: boolean = false;

    protected onConstruct(): void {
        super.onConstruct();
        this.resetLines(Laya.stage.width);
    }

    public start(): void {
        Laya.timer.frameLoop(1, this, this.updateFrame);
    }

    private updateFrame(): void {
        if (this._paused) {
            return;
        }
        const dt: number = Laya.timer.delta / 1000;
        this.doMove(dt, this._leftMovingLines, this._leftIdleLines, "left");
        this.doMove(dt, this._rightMovingLines, this._rightIdleLines, "right");

        // generate
        const now: number = Date.now();
        if (now - this._lastCreateTime > this._createInterval) {
            const partWidth: number = Laya.stage.width / 6;
            this.createLine(this._leftIdleLines, this._leftMovingLines, MathUtil.getRandom(partWidth, partWidth * 2), "left");
            this.createLine(this._rightIdleLines, this._rightMovingLines, MathUtil.getRandom(partWidth * 4, partWidth * 5), "right");
            this._lastCreateTime = now;
        }
    }

    private createLine(idleLines: Set<number>, movingLines: Set<number>, x: number, name: string): void {
        let arr: number[] = [...idleLines.keys()];
        if (arr.length > 0) {
            let obj: fgui.GObject = this[name + arr[0]];
            obj.x = x;
            idleLines.delete(arr[0]);
            movingLines.add(arr[0]);
        }
    }

    private doMove(dt: number, movingLines: Set<number>, idleLines: Set<number>, name: string): void {
        for (let index of movingLines) {
            let obj: fgui.GObject = this[name + index];
            obj.y -= dt * this._speed;
            if (obj.y < 0 - obj.height) {
                movingLines.delete(index);
                obj.y = Laya.stage.height;
                idleLines.add(index);
            }
        }
    }

    public stop(): void {
        Laya.timer.clear(this, this.updateFrame);
        this.resetLines(Laya.stage.height);
    }

    public set paused(val: boolean) {
        this._paused = val;
    }

    private resetLines(y: number): void {
        this._leftIdleLines.clear();
        this._leftMovingLines.clear();
        this._rightIdleLines.clear();
        this._rightMovingLines.clear();
        for (let i = 0; i < 8; i++) {
            this["left" + i].y = y;
            this["right" + i].y = y;
            this._leftIdleLines.add(i);
            this._rightIdleLines.add(i);
        }
    }
}
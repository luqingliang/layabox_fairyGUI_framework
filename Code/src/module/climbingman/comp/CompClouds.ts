import MathUtil from "../../../common/utils/MathUtil";
import UI_ClimbingMan from "../../../ui/fgui/climbingman/UI_ClimbingMan";

export default class CompClouds {

    private _context: UI_ClimbingMan;
    private _movingClouds: Set<number> = new Set();

    constructor(context: UI_ClimbingMan) {
        this._context = context;
        Laya.timer.loop(1000, this, this.updateTime);
    }

    private updateTime(): void {
        if ([...this._movingClouds.keys()].length < 2) {
            this.startANewMove();
        }
    }

    private startANewMove(): void {
        let index: number = MathUtil.getRandom(0, 5);
        while (this._movingClouds.has(index)) {
            index = MathUtil.getRandom(0, 5);
        }
        this._movingClouds.add(index);
        let obj = this._context["cloud" + index];
        if (obj.x < 0) {
            Laya.Tween.to(obj, { x: Laya.stage.width + 10 }, MathUtil.getRandom(3000, 5000), null, Laya.Handler.create(this, () => {
                this._movingClouds.delete(index);
            }));
        } else if (obj.x > Laya.stage.width) {
            Laya.Tween.to(obj, { x: 0 - obj.width }, MathUtil.getRandom(3000, 5000), null, Laya.Handler.create(this, () => {
                this._movingClouds.delete(index);
            }));
        }
    }

    public beforeClose(): void {
        Laya.timer.clear(this, this.updateTime);
    }
}
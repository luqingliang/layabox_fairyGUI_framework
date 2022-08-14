import UI_CompDangerous from "../../../../ui/fgui/climbingman/UI_CompDangerous";

export default class CompDangerousNotice {

    private _self: UI_CompDangerous;

    constructor(self: UI_CompDangerous) {
        this._self = self;
        this.hideDangerous();
    }

    public showDangerous(): void {
        if (this._self.visible === false) {
            this._self.visible = true;
            this._self.dangerous.play(null, -1);
            Laya.timer.frameLoop(1, this, this.moveProgress);
        }
    }

    private moveProgress(): void {
        this._self.imgProgress.x += 5;
        if (this._self.imgProgress.x >= 0) {
            this._self.imgProgress.x = -(this._self.imgProgress.width - Laya.stage.width);
        }
    }

    public hideDangerous(): void {
        Laya.timer.clear(this, this.moveProgress);
        this._self.visible = false;
        this._self.dangerous.stop();
        this._self.imgProgress.x = -(this._self.imgProgress.width - Laya.stage.width);
    }
}
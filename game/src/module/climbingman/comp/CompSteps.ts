import MathUtil from "../../../common/utils/MathUtil";
import UI_CompSteps from "../../../ui/fgui/climbingman/UI_CompSteps";
import StepDecorations from "./StepDecorations";

/**
 * 障碍物
 * @author luqingliang
 */
export default class CompSteps extends UI_CompSteps {

    private _landConfig = {
        leftWidth: 129,
        rightWidth: 143,
        margins: 20,
    }

    private _decorations: fgui.GComponent[];

    protected onConstruct(): void {
        super.onConstruct();
    }

    /**
     * 初始化
     * @param parent 
     * @param widthPercent 
     */
    public init(parent: fgui.GComponent, widthPercent: number): void {
        this.width = parent.width * widthPercent;
        this.x = MathUtil.getRandom(0, parent.width - this.width);
        this.y = 0 - this.height;
        this.createUanderLand();
        this._decorations = StepDecorations.instance.addDecorations(this);
        parent.addChild(this);
        this.visible = true;
    }

    /**
     * 更新位置
     * @param moveLength
     */
    public updatePos(moveLength: number): void {
        if (!this.visible) {
            return;
        }

        if (this.y > this.parent.height + 200) {
            this.recover();
        }

        this.y += moveLength;
    }

    /**
     * 判断某个点是否在台阶内
     * @param x 
     * @param y 
     * @returns 
     */
    public collision(x: number, y: number): boolean {
        if (x >= this.x && x <= this.x + this.width && y >= this.y && y < this.y + this.height) {
            return true
        }
        return false;
    }

    /**
     * 生成下面的岩石
     */
    private createUanderLand(): void {
        this.underLand.leftLand.visible = false
        this.underLand.rightLand.visible = false;
        this.underLand.leftLand.width = this._landConfig.leftWidth;
        this.underLand.rightLand.width = this._landConfig.rightWidth;
        this.underLand.x = 0;

        if (this.width <= this._landConfig.rightWidth + this._landConfig.margins * 2) {
            this.underLand.leftLand.x = this._landConfig.margins;
            this.underLand.leftLand.width = this.width - this._landConfig.margins * 2;
        } else if (this.width <= this._landConfig.rightWidth + this._landConfig.margins * 4) {
            this.underLand.rightLand.visible = true;
            this.underLand.rightLand.x = this._landConfig.margins;
            this.underLand.rightLand.width = this.width - this._landConfig.margins * 2;
        } else if (this.width <= this._landConfig.leftWidth + this._landConfig.rightWidth + this._landConfig.margins * 2) {
            this.underLand.leftLand.visible = true;
            this.underLand.rightLand.visible = true;
            this.underLand.leftLand.x = this._landConfig.margins;
            this.underLand.rightLand.x = this.width - this._landConfig.margins - this._landConfig.rightWidth;
        } else {
            this.underLand.leftLand.visible = true;
            this.underLand.rightLand.visible = true;
            let r: number = (this.width - this._landConfig.leftWidth - this._landConfig.rightWidth - this._landConfig.margins * 2) / 2;
            this.underLand.leftLand.width = this._landConfig.leftWidth + r;
            this.underLand.rightLand.width = this._landConfig.rightWidth + r;
            this.underLand.leftLand.x = this._landConfig.margins;
            this.underLand.rightLand.x = this.width - this._landConfig.margins - this.underLand.rightLand.width;
        }
    }

    private _isFirstStandUp: boolean = true;
    public onRoleStandUp(): void {
        if (this._isFirstStandUp) {
            this._isFirstStandUp = false;
            for (let obj of this._decorations) {
                if (obj["playAni"]) {
                    (obj as any).playAni();
                }
            }
        }
    }

    public get isActive(): boolean {
        return this.visible;
    }

    private recover(): void {
        this.visible = false;
        this._isFirstStandUp = true;
        for (let obj of this._decorations) {
            obj.dispose();
        }
        this._decorations.length = 0;
        this.removeFromParent();
    }
}
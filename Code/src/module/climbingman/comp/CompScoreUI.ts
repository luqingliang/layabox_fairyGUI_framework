import UI_CompHeart from "../../../ui/fgui/climbingman/UI_CompHeart";
import UI_CompScoreUIPanel from "../../../ui/fgui/climbingman/UI_CompScoreUIPanel";

/**
 * 计分和生命值面板
 */
export default class CompScoreUI extends UI_CompScoreUIPanel {

    private _score: number;
    private _life: number;

    protected onConstruct(): void {
        super.onConstruct();
    }

    public init(lifeValue: number, score: number = 0): void {
        this._life = lifeValue;
        this.score = score;
        this.lifeValue.selectedIndex = this._life;
        this.textScore.text = this.score.toString();
    }

    public deductLife(): void {
        this._life--;
        let obj: UI_CompHeart = this.getChild("heart" + this._life) as UI_CompHeart;
        if (obj) {
            obj.ani.setPlaySettings(null, null, 1, null, Laya.Handler.create(this, () => {
                obj.ani.visible = false;
            }));
            obj.ani.playing = true;
        }
    }
    public get life(): number {
        return this._life;
    }

    public set score(score: number) {
        if (score != this._score) {
            this._score = score;
            this.textScore.text = this._score.toString();
        }
    }
    public get score(): number {
        return this._score;
    }
}
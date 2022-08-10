/**
 * 粒子特效
 */
export default class ParticleEffect extends Laya.Sprite {
    private _sp: Laya.Particle2D;
    private _loadCB: Laya.Handler;
    constructor() {
        super();
    }

    public load(name: string, complete?: Laya.Handler): void {
        Laya.loader.load("res/particles/" + name + ".part", Laya.Handler.create(this, this.onAssetsLoaded), null, Laya.Loader.JSON);
        if (complete) {
            this._loadCB = complete;
        }
    }

    private onAssetsLoaded(settings: Laya.ParticleSetting): void {
        this._sp = new Laya.Particle2D(settings);
        this._sp.emitter.start();
        this.addChild(this._sp);
        if (this._loadCB) {
            this._loadCB.run();
            this._loadCB = null;
        }
    }

    public play(): void {
        this._sp.play();
    }

    public stop(): void {
        this._sp.stop();
    }

    public destroy(): void {
        this._sp.destroy();
        super.destroy();
    }
}
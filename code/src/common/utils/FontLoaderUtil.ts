export class FontLoaderUtil extends Laya.TTFLoader {
    constructor() {
        super();
    }

    public loadFont(fontPath: string, handler: Laya.Handler): void {
        this.load(fontPath);
        this.complete = handler;

    }
}
/**
 * 声音管理器
 * 背景音乐默认路径：res/audio/music
 * 音效默认路径：res/audio/sound
 * @author luqingliang
 */
export default class SoundManager {

    private static _inst: SoundManager;
    public static inst(): SoundManager {
        if (!this._inst) {
            this._inst = new SoundManager();
        }
        return this._inst;
    }

    /**
     * 播放背景音乐
     * @param url 
     * @param loop 
     */
    public playMusic(url: string, loop: number): void {
        Laya.SoundManager.playMusic("res/audio/music/" + url, loop);
    }

    /**
     * 关闭背景音乐
     */
    public stopMusic(): void {
        Laya.SoundManager.stopMusic();
    }

    /**
     * 播放音效
     * @param url 
     * @param loop 
     * @param complete 
     * @return {Laya.SoundChannel}
     */
    public playSound(url: string, loop: number, complete?: Laya.Handler): Laya.SoundChannel {
        return Laya.SoundManager.playSound("res/audio/sound" + url, loop, complete);
    }

    /**
     * 关闭音效
     * @param url
     */
    public stopSound(url: string): void {
        Laya.SoundManager.stopSound("res/audio/sound/" + url);
    }
}
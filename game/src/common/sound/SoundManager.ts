export default class SoundManager {

    static _instance: SoundManager;
    // private _playType: string = "mp3";
    private _playType: string = "wav";

    static instance(): SoundManager {
        if (!SoundManager._instance) {
            SoundManager._instance = new SoundManager();
        }
        return SoundManager._instance;

    }


    /**
     * 播放背景音乐
     * @param name 背景音乐名
     * @param loop 循环次数,0表示无限循环。
     * @param type 背景音乐文件类型
     * @param module 模块名称
     * @param gameName 动作名称（游戏名称）或者模块中的公共资源
     * @param complete 播放完成
     */
    public playMusic(name: string, loop: number, type: string, module: string, gameName?: string, isPlay?: boolean) {
        if (!isPlay) return;
        // let master = "master://*/"
        if (gameName) {
            Laya.SoundManager.playMusic("res/sound/" + module + "/" + gameName + "/" + name + "." + type, loop);
        }
        else {
            Laya.SoundManager.playMusic("res/sound/" + module + "/" + name + "." + type, loop);
        }
    }

    /**
     * 播放音效
     * @param name 音效名
     * @param loop 循环次数,0表示无限循环。
     * @param type 背景音乐文件类型
     * @param module 模块名称
     * @param gameName 动作名称（游戏名称）或者模块中的公共资源
     * @param isPlay 是否播放
     * @param complete 播放完成
    */
    public playSound(name: string, loop: number, type: string, module: string, gameName?: string, isPlay?: boolean, complete?: Laya.Handler) {
        if (!isPlay) return;
        if (gameName) {
            Laya.SoundManager.playSound("res/sound/" + module + "/" + gameName + "/" + name + "." + type, loop, complete);
        }
        else {
            Laya.SoundManager.playSound("res/sound/" + module + "/" + name + "." + type, loop, complete);
        }
    }

    /**
     * 关闭背景音乐
     */
    public stopMusic() {
        Laya.SoundManager.stopMusic();
    }

    /**
     * 关闭音效
     */
    public stopSound(name: string, type: string, module: string, gameName?: string) {
        if (gameName) {
            Laya.SoundManager.stopSound("res/sound/" + module + "/" + gameName + "/" + name + "." + type);
        }
        else {
            Laya.SoundManager.stopSound("res/sound/" + module + "/" + name + "." + type);
        }
    }
}
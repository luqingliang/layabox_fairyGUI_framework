export default interface IAnimation {
    /**
     * 加载动画
     * @param name 
     * @param complete 
     */
    loadAni(name: string, module: string, actionName?: string, complete?: Laya.Handler);
    /**
     * 播放
     * @param actName 
     * @param loop 
     * @param lighter 
     * @param scaleX 
     * @param scaleY 
     * @param startTime
     */
    play(actName: string, loop: boolean, lighter?: boolean, scaleX?: number, scaleY?: number, startTime?: number);
    /**
     * 停止播放
     */
    stop();
    /**
     * 暂停播放
     */
    paused();
    /**
     * 设置播放速度
     * @param speed 
     */
    playbackRate(speed: number);
    /**
     * 设置播放完成回调
     * @param caller 
     * @param func 
     * @param params
     * @param once 
     */
    onStopped(caller: any, func: Function, params: any[], once: boolean);
    /**
     * 切换皮肤，整体切换
     * @param name 
     */
    changeSkin(name: string);
    destroy();
}
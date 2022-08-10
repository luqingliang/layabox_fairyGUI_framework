/**
 * 数据更新消息类型
 */
export enum DataUpdateType {
    /**人物肢体点位数据更新 */
    PoseDataUpdate = 1,
    /**人物动作数据更新*/
    ActionDataUpdate,
    /**人物动作结果数据更新*/
    ActionResultDataUpdate,

    /**竞技场首页数据更新 */
    ArenaHomeDateUpdate = 10,
    /**进入战场 */
    ArenaEnterBattle,
    /**匹配玩家成功 */
    ArenaMatchSuccess,
    /**比赛记录更新 */
    ArenaRecordUpdate,
    /**结算数据更新 */
    ArenaResultUpdate,
    /**竞技场连接成功 */
    ArenaConnected,
    /**竞技场断开连接 */
    ArenaDisconnected,
}

/**
 * 游戏全局自定义事件类型
 */
export enum GameEventType {
    /**游戏开始 */
    GameStart = 1,
    /**游戏暂停*/
    GamePause = 2,
    /**游戏恢复*/
    GameResume = 3,
    /**游戏结束 */
    GameOver = 4,
    /**（提前）退出游戏 */
    GameExit = 5,

    /**引导开始 */
    GameGuideStart,
    /**完成引导 */
    GameGuideFinish,
    /**引导结束 */
    GameGuideOver,

    /**游戏过程数据更新 */
    GameProcessUpdate,
}

/**
 * 人物动作类型
 */
export enum ActionType {
    /**跳绳 */
    JumpRope = 1,
    /**蹲起*/
    Squat = 2,
    /**开合跳*/
    JumpingJack = 3,
    /**双臂环绕*/
    ArmCircles = 4,
    /**平板支撑*/
    Plank = 5,
    /**仰卧起坐*/
    SitUp = 6,
    /**俯卧撑*/
    PushUp = 7,
    /**跑步*/
    Running = 8,
    /**坐位体前屈*/
    SitAndReach = 9,
    /**眼球向前看*/
    front = 10,
    /**眼球向上看*/
    up = 11,
    /**眼球向下看*/
    down = 12,
    /**眼球向左看*/
    left = 13,
    /**眼球向右看*/
    right = 14,
    /**闭眼*/
    close = 15,
    /**跳*/
    Jump = 16,
}

/**
 *  通知原生事件类型
 */
export enum NativeEventType {
    /**动作数据类型*/
    MovementsDataType = "movementsDataType",
    /**游戏已准备完成*/
    GameReady = "gameReady",
    /**游戏引导结束*/
    GameGuideFinish = "gameGuideFinish",
    /**游戏生命值*/
    GameLifeValue = "gameLifeValue",
    /**游戏开始*/
    GameStart = "gameStart",
    /**游戏结束*/
    GameOver = "gameOver",
    /**人物入框*/
    IntoBox = "intoBox",
    /**退回到原生界面 */
    NavigateBack = "navigateBack",
    /**截图*/
    ImgBase64 = "imgBase64",
    /**眼部事件*/
    EyesEvent = "eyesEvent",
    /**竞技场游戏加载转场展开动画播放完毕 */
    GameTransitionComplete = "gameTransitionComplete",
    /**竞技场首页准备完毕 */
    GameArenaReady = "gameArenaReady",
    /**游戏倒计时结束,游戏正式开始*/
    GameCountDownOver = "gameCountDownOver",
}

/**
 *  动作数据类型
 */
export enum ActionDataType {
    /**人的肢体点位*/
    BaseActionPointData = "BaseActionPointData",
    /**人的动作*/
    BaseActionData = "BaseActionData",
    /**人的动作结果*/
    ActionResultData = "ActionResultData"
}



/**
   * 通知篮球事件类型
   */
export class MonitorCmd {
    static readonly PlayBaskcketball: string = 'PlayBaskcketball';//投篮
    static readonly BasketBallIn: string = 'BasketBallIn';//篮球进了
    static readonly BasketBallReset: string = 'BasketBallReset';//篮球重置

    static readonly SetGuideMask: string = 'SetGuideMask';//设置引导遮罩
}
export interface IUIComponent {
    /**
     * 每次ui打开后执行，如果已打开也会重复执行该方法
     * @param data 
     */
    updateUI(data?: any): void;
    /**
     * 游戏主循环方法
     * @param s 间隔，单位秒
     * @param ms 间隔，单位毫秒
     */
    updateFrame(s: number, ms: number): void;
}
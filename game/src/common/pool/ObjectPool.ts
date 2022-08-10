
/**对象类型标识符 */
export enum ObjectSign {
    StarFly = "StarFly",
    FloatScore = "FloatScore",
    MissCircles = "MissCircles",
    ComboFloat = "ComboFloat",
    MissFrame = "MissFrame",
    AddScoreFloat = "AddScoreFloat",
    BallFloatText = "BallFloatText",
    CatchScoreFloatText = "CatchScoreFloatText",
    CatchScoreFloatText2 = "CatchScoreFloatText2",
    ReactionFloatText = "ReactionFloatText",
    ReactionComboFloat = " ReactionComboFloat"

}

export default class ObjectPool {

    /**根据对象类型标识符从对象池中获取该类型标识的一个对象,当对象池中无此类型标识的对象时，则根据传入的类型，创建一个新的对象返回
     * @param sign  对象类型标识符
     * @param className 
     * @return 此类型标识的一个对象。  
     */
    public static getItemByClass(sign: string, className: any): any {
        return Laya.Pool.getItemByClass(sign, className);

    }

    /**根据传入的对象类型标识字符，获取对象池中已存储的此类型的一个对象，如果对象池中无此类型的对象，则返回 null 。
     * @param sign  对象的类型标识符
     * @return 此类型标识的一个对象。
     */
    public static getItem(sign: string): any {
        return Laya.Pool.getItem(sign);
    }


    /**根据对象类型标识符获取该类型标识对象池
     * @param sign  对象的类型标识符
     * @return 该类型标识对象池。
     */
    public static getPoolBySign(sign: string): any[] {
        return Laya.Pool.getPoolBySign(sign);
    }


    /**根据对象类型标识符清除对象池中该类型标识符的所有对象（垃圾回收）
     * @param sign  对象的类型标识符
     */
    public static clearBySign(sign: string) {
        Laya.Pool.clearBySign(sign);
    }


    /**根据类名从对象池中获取一个该类型的对象
     * @param  className 类名
     * @return 该类一个对象。
     */
    public static createByClass(className: any): any {
        return Laya.Pool.createByClass(className);
    }


    /** <p>根据传入的对象类型标识字符，获取对象池中此类型标识的一个对象实例。
     * <p>当对象池中无此类型标识的对象时，则使用传入的创建此类型对象的函数，新建一个对象返回。
     * @param sign 对象类型标识字符。
     * @param createFun 用于创建该类型对象的方法。
     * @param caller this对象
     * @return 此类型标识的一个对象
     */
    public static getItemByCreateFun(sign: string, createFun: Function, caller?: any): any {
        return Laya.Pool.getItemByCreateFun(sign, createFun, caller);
    }


    /**将对象放到对应类型标识的对象池中
     * @param sign  对象的类型标识符
     * @param obj  对象
     */
    public static recover(sign: string, obj: any) {
        Laya.Pool.recover(sign, obj);
    }

    /**根据类名进行回收，如果类有类名才进行回收，没有则不回收
     * @param obj  对象
     */
    public static recoverByClass(obj: any) {
        Laya.Pool.recoverByClass(obj);
    }

}

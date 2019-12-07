import LoginBinder from "../../ui/fgui/Login/LoginBinder";
import HomeBinder from "../../ui/fgui/Home/HomeBinder";
import BagBinder from "../../ui/fgui/Bag/BagBinder";
import Item from "../../ui/fgui/Bag/Item";
import ItemIcon from "../../game/bag/ItemIcon";

/**
 * 场景管理器
 * @author luqingliang1996[at]foxmail.com
 */
export default class SceneManager {

    public static initialize():void {
        this.bindFgui();
    }
    
    private static bindFgui():void {
        LoginBinder.bindAll();
        HomeBinder.bindAll();
        BagBinder.bindAll();

        //下面放自定义的扩展类，注意顺序一定要在bindAll下面
        fairygui.UIObjectFactory.setPackageItemExtension(Item.URL, ItemIcon);
    }
}
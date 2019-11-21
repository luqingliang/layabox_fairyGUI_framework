import BaseView from "../../common/mvc/view/BaseView";
import Item from "./Item";
import ItemTemplate from "../../common/templates/ItemTemplate";
import JsonTemplate from "../../common/templates/core/JsonTemplate";
import JsonTemplateMap from "../../common/templates/core/JsonTemplateMap";

export default class BagView extends BaseView {
    private _itemList:fgui.GList;
    private _btnBack:fgui.GButton;

    constructor() {
        super();
        this._packageName = "Bag";
        this._compName = "Bag";
        this._closeClearRes = true;
    }

    protected onUICreated():void {
        this._itemList = this.getList("itemList");
        this._btnBack = this.getButton("btnBack");
        this._btnBack.onClick(this, () => {
            this.close();
        });
        this._itemList.on(fgui.Events.CLICK_ITEM, this, this.onClickItem);
        this._itemList.itemRenderer = Laya.Handler.create(this, this.itemListHandler, null, false);
        this._itemList.setVirtual(); //虚拟列表，动态调度创建加载item对象
    }

    private itemListHandler(index:number, obj:Item):void {
        let itemJson:ItemTemplate;
        if(index < this._itemArr.length) {
            itemJson = this._itemArr[index];
        } else {
            //添加大量模拟数据
            let randomNum:number = Math.floor(Math.random() * this._itemArr.length);
            itemJson = this._itemArr[randomNum];
        }
        obj.icon = "res/icon/item/" + itemJson.icon + ".png";
        obj.getChild("textNum").asTextField.text = itemJson.stackingCount > 99999999 ? "99999999" : itemJson.stackingCount.toString();
        obj.title = itemJson.itemName;
    }

    private onClickItem(item:Item):void {
        let newItem:Item = Item.createInstance();
        newItem.icon = item.icon;
        this.viewComponent.addChild(newItem);
    }

    private _itemArr:Array<ItemTemplate>;
    opening():void {
        this._itemArr = JsonTemplate.instance.getTemplates(JsonTemplateMap.ITEM_JSON);
        // this._itemList.numItems = this._itemArr.length < 25 ? 25 : this._itemArr.length;
        //测试物品特别多的情况虚拟列表的效果
        this._itemList.numItems = 10000;
    }
}
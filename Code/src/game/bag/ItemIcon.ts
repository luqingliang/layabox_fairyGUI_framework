import Item from "../../ui/fgui/Bag/Item";
import ItemTemplate from "../../common/templates/ItemTemplate";

export default class ItemIcon extends Item {
	public setData(config:ItemTemplate):void {
		this.icon = "res/icon/item/" + config.icon + ".png";
        this._textNum.text = config.stackingCount > 99999999 ? "99999999" : config.stackingCount.toString();
        this.title = config.itemName;
	}
}
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import Bag from "./Bag";
import Item from "./Item";

export default class BagBinder{
	public static bindAll():void {
		fairygui.UIObjectFactory.setPackageItemExtension(Bag.URL, Bag);
		fairygui.UIObjectFactory.setPackageItemExtension(Item.URL, Item);
	}
}
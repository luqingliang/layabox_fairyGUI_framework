/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import Home from "./Home";
import HomeTop from "./HomeTop";
import HomeBottom from "./HomeBottom";

export default class HomeBinder{
	public static bindAll():void {
		fairygui.UIObjectFactory.setPackageItemExtension(Home.URL, Home);
		fairygui.UIObjectFactory.setPackageItemExtension(HomeTop.URL, HomeTop);
		fairygui.UIObjectFactory.setPackageItemExtension(HomeBottom.URL, HomeBottom);
	}
}
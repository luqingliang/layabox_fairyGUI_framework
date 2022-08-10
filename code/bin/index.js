/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----

loadLib("libs/laya.core.js")
loadLib("libs/fairygui.js")
loadLib("libs/spine-core-3.7.js")
loadLib("libs/laya.spine.js")
loadLib("protobuf/library/protobuf-library.min.js")
loadLib("protobuf/bundles/protobuf-bundles.min.js")

//-----libs-end-------
loadLib("js/bundle.js");

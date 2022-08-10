declare module laya.layaspine {
	class SpineGLTexture extends laya.resource.Texture {
		private _image: any;

		constructor(tex: laya.resource.Texture2D, img: HTMLImageElement);
		getImage(): HTMLImageElement;
		setFilters(minFilter: spine.TextureFilter, magFilter: spine.TextureFilter): void;
		setWraps(uWrap: spine.TextureWrap, vWrap: spine.TextureWrap): void;
	}

}

declare module laya.layaspine {

	/**
	 * 动画开始播放调度
	 * @eventType Event.PLAYED
	 */

	/**
	 * 动画停止播放调度
	 * @eventType Event.STOPPED
	 */

	/**
	 * 动画暂停播放调度
	 * @eventType Event.PAUSED
	 */

	/**
	 * 自定义事件。
	 * @eventType Event.LABEL
	 */

	/**
	 * spine动画由<code>SpineTemplet</code>，<code>SpineSkeletonRender</code>，<code>SpineSkeleton</code>三部分组成。
	 */
	class SpineSkeleton extends laya.display.Sprite {
		static stopped: number;
		static paused: number;
		static playing: number;
		private _templet: any;
		private timeKeeper: any;
		private skeleton: any;
		private state: any;
		private stateData: any;
		private currentPlayTime: any;
		private skeletonRenderer: any;
		_ins: SpineSkeleton;

		/**
		 * 播放速率
		 */
		private _playbackRate: any;

		/**
		 * 创建一个Skeleton对象
		 * @param templet 骨骼动画模板
		 */

		constructor(templet?: laya.layaspine.SpineTemplet);
		init(templet: laya.layaspine.SpineTemplet): void;

		/**
		 * 播放动画
		 * @param nameOrIndex 动画名字或者索引
		 * @param loop 是否循环播放
		 * @param force false,如果要播的动画跟上一个相同就不生效,true,强制生效
		 * @param start 起始时间
		 * @param end 结束时间
		 * @param freshSkin 是否刷新皮肤数据
		 * @param playAudio 是否播放音频
		 */
		play(nameOrIndex: any, loop: boolean, force?: boolean, start?: number, end?: number, freshSkin?: boolean, playAudio?: boolean): void;
		private _update: any;

		/**
		 * 得到当前动画的数量
		 * @return 当前动画的数量
		 */
		getAnimNum(): number;

		/**
		 * 得到指定动画的名字
		 * @param index 动画的索引
		 */
		getAniNameByIndex(index: number): string;

		/**
		 * 通过名字得到插槽的引用
		 * @param slotName 
		 */
		getSlotByName(slotName: any): spine.Slot;

		/**
		 * 设置动画播放速率
		 * @param value 1为标准速率
		 */
		playbackRate(value: number): void;

		/**
		 * 通过名字显示一套皮肤
		 * @param name 皮肤的名字
		 */
		showSkinByName(name: string): void;

		/**
		 * 通过索引显示一套皮肤
		 * @param skinIndex 皮肤索引
		 */
		showSkinByIndex(skinIndex: number): void;

		/**
		 * 停止动画
		 */
		stop(): void;

		/**
		 * 暂停动画的播放
		 */
		paused(): void;

		/**
		 * 恢复动画的播放
		 */
		resume(): void;

		/**
		 * 销毁当前动画
		 * @override 
		 */
		destroy(destroyChild?: boolean): void;

		/**
		 * 得到动画模板的引用
		 * @return templet
		 */
		readonly templet: laya.layaspine.SpineTemplet;

		/**
		 * 添加一个动画
		 * @param trackIndex 轨道索引
		 * @param nameOrIndex 动画名字或者索引
		 * @param loop 是否循环播放
		 * @param delay 延迟调用，可以为负数
		 */
		addAnimation(trackIndex: number, nameOrIndex: any, loop?: boolean, delay?: number): void;

		/**
		 * 设置当动画被改变时，存储混合(交叉淡出)的持续时间
		 * @param fromNameOrIndex 
		 * @param toNameOrIndex 
		 * @param duration 
		 */
		setMix(fromNameOrIndex: any, toNameOrIndex: any, duration: number): void;

		/**
		 * 获取骨骼信息(spine.Bone)
		 * 注意: 获取到的是spine运行时的骨骼信息(spine.Bone)，不适用引擎的方法
		 * @param boneName 
		 */
		getBoneByName(boneName: any): spine.Bone;

		/**
		 * 获取Skeleton(spine.Skeleton)
		 */
		getSkeleton(): spine.Skeleton;

		/**
		 * 替换插槽皮肤
		 * @param slotName 
		 * @param attachmentName 
		 */
		setSlotAttachment(slotName: any, attachmentName: any): void;

		/**
		 * 设置当前播放位置
		 * @param value 当前时间
		 */
		currentTime: number;

		/**
		 * 获取当前播放状态
		 * @return 当前播放状态
		 */
		readonly playState: number;
	}

}

declare module laya.layaspine {
	class SpineSkeletonRenderer {
		static QUAD_TRIANGLES: number[];
		premultipliedAlpha: boolean;
		vertexEffect: spine.VertexEffect;
		private tempColor: any;
		private tempColor2: any;
		private vertices: any;
		private vertexSize: any;
		private twoColorTint: any;
		private renderable: any;
		private clipper: any;
		private temp: any;
		private temp2: any;
		private temp3: any;
		private temp4: any;

		constructor(twoColorTint?: boolean);
		draw(skeleton: spine.Skeleton, slotRangeStart: number, slotRangeEnd: number, spineSkeletonIns: laya.layaspine.SpineSkeleton, textureList: Array<laya.layaspine.SpineGLTexture>): void;
	}

}

declare module laya.layaspine {

	/**
	 * 数据解析完成后的调度。
	 * @eventType Event.COMPLETE
	 */

	/**
	 * 数据解析错误后的调度。
	 * @eventType Event.ERROR
	 */

	/**
	 * spine动画模板类
	 */
	class SpineTemplet extends laya.resource.Resource {
		public clientId: any;
		private assetManager: any;
		skeletonData: spine.SkeletonData;
		public atlasUrl: any;
		public jsonUrl: any;
		private _textureUrlList: any;
		private _layaPremultipliedAlpha: any;
		_spinePremultipliedAlpha: boolean;

		constructor(layaPremultipliedAlpha?: boolean, spinePremultipliedAlpha?: boolean);
		loadAni(jsonUrl: string, textureUrlList?: Array<string>): void;
		private textureLoader: any;
		private loop: any;
		private parseSpineAni: any;

		/**
		 * 创建动画
		 * @return 
		 */
		buildArmature(): laya.layaspine.SpineSkeleton;

		/**
		 * 通过索引得动画名称
		 * @param index 
		 * @return 
		 */
		getAniNameByIndex(index: number): string;

		/**
		 * 通过皮肤名字得到皮肤索引
		 * @param skinName 皮肤名称
		 * @return 
		 */
		getSkinIndexByName(skinName: string): number;

		/**
		 * 释放纹理
		 * @override 
		 */
		destroy(): void;
	}

}

declare module Laya {
	class SpineGLTexture extends laya.layaspine.SpineGLTexture { }

	/**
	 * 动画开始播放调度
	 * @eventType Event.PLAYED
	 */

	/**
	 * 动画停止播放调度
	 * @eventType Event.STOPPED
	 */

	/**
	 * 动画暂停播放调度
	 * @eventType Event.PAUSED
	 */

	/**
	 * 自定义事件。
	 * @eventType Event.LABEL
	 */

	/**
	 * spine动画由<code>SpineTemplet</code>，<code>SpineSkeletonRender</code>，<code>SpineSkeleton</code>三部分组成。
	 */
	class SpineSkeleton extends laya.layaspine.SpineSkeleton { }

	class SpineSkeletonRenderer extends laya.layaspine.SpineSkeletonRenderer { }

	/**
	 * 数据解析完成后的调度。
	 * @eventType Event.COMPLETE
	 */

	/**
	 * 数据解析错误后的调度。
	 * @eventType Event.ERROR
	 */

	/**
	 * spine动画模板类
	 */

	class SpineTemplet extends laya.layaspine.SpineTemplet { }

}
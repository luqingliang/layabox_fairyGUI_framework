export class ObjectPool {
    private static _pools:Map<string, any> = new Map();

	/**
	 * 从缓存池中取出一个对象
	 * @param classConstructor 
	 * @param data 
	 * @param initializeMethod 
	 */
    public static from(classConstructor:any, data:any, initializeMethod:string = "initialize"):any {
        let className:string = classConstructor.prototype.constructor.name;
        if(!this._pools.get(className)) {
			this._pools.set(className, new Pool(className, classConstructor));
		}
		let pool:Pool = this._pools.get(className);
		return pool.from(data, initializeMethod);
	}
	
	/**
	 * 回收一个对象
	 * @param obj 
	 * @param resetMethod 
	 */
	public static to(obj:any, resetMethod:string = "reset"):void {
		if(!obj) return;
		let className:string = obj.__proto__.constructor.name;
		if(!className) {
			throw("[ObjectPool] Is not a valid pool type!");
		}
		let pool:Pool = this._pools.get(className);
		if(pool) {
			pool.to(obj, resetMethod);
		}
	}

	/**
	 * 销毁某个缓存池
	 * @param classConstructor 
	 */
	public static destroy(classConstructor:any):void {
		let className:string = classConstructor.prototype.constructor.name;
		let pool:Pool = this._pools.get(className);
		if(pool) {
			pool.destroy();
		}
	}
}

export class Pool {
	private _className:String;
    private _classConstructor:any;
    private _pool:Array<any>;
    private _maxLength:number;

    constructor(className:String, classConstructor:any, maxLength:number = 0) {
        this._classConstructor = classConstructor;
        this._className = className;
        this._maxLength = maxLength;
        this._pool = [];
    }
	
	/**
	 * 从缓存池取出 
	 */	
	public from(data:any, initializeMethod:string = null):any {
		let obj:any;
		if(this._pool.length > 0) {
			obj = this._pool.shift();
		} else {
			obj = new this._classConstructor();
		}
		if(initializeMethod && obj[initializeMethod]) {
			obj[initializeMethod].call(obj, data);
		}
		return obj;
	}
	
	/**
	 * 存入缓存池 
	 */	
	public to(obj:any, resetMethod:string = null):void {
		if(resetMethod && obj[resetMethod]) {
			obj[resetMethod].call(obj);
		}
		if(this._pool.indexOf(obj) < 0) {
			if(this._maxLength > 0 && this._pool.length >= this._maxLength) {
				this._pool.pop();
			}
			this._pool.push(obj);
		}
	}
	
	/**
	 *  销毁缓存池 
	 */	
	public destroy():void {
		for(let i:number = 0; i < this._pool.length; i ++) {
			let obj:any = this._pool[i];
			if(obj["reset"]) {
				obj["reset"].call(obj);
			}
		}
		this._pool.length = 0;
	}
}
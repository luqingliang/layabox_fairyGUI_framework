var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.tingtong = (function() {

        /**
         * Namespace tingtong.
         * @memberof com
         * @namespace
         */
        var tingtong = {};

        tingtong.server = (function() {

            /**
             * Namespace server.
             * @memberof com.tingtong
             * @namespace
             */
            var server = {};

            server.game = (function() {

                /**
                 * Namespace game.
                 * @memberof com.tingtong.server
                 * @namespace
                 */
                var game = {};

                game.proto = (function() {

                    /**
                     * Namespace proto.
                     * @memberof com.tingtong.server.game
                     * @namespace
                     */
                    var proto = {};

                    /**
                     * LoginType enum.
                     * @name com.tingtong.server.game.proto.LoginType
                     * @enum {string}
                     * @property {number} ACCOUNT=1 ACCOUNT value
                     * @property {number} DEVICE=2 DEVICE value
                     * @property {number} PLATFORM=3 PLATFORM value
                     */
                    proto.LoginType = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[1] = "ACCOUNT"] = 1;
                        values[valuesById[2] = "DEVICE"] = 2;
                        values[valuesById[3] = "PLATFORM"] = 3;
                        return values;
                    })();

                    proto.LoginMsg = (function() {

                        /**
                         * Properties of a LoginMsg.
                         * @memberof com.tingtong.server.game.proto
                         * @interface ILoginMsg
                         * @property {com.tingtong.server.game.proto.LoginType|null} [loginType] LoginMsg loginType
                         * @property {string|null} [accountName] LoginMsg accountName
                         * @property {string|null} [password] LoginMsg password
                         * @property {number|null} [serverId] LoginMsg serverId
                         * @property {string|null} [version] LoginMsg version
                         * @property {string|null} [ext] LoginMsg ext
                         * @property {string|null} [deviceId] LoginMsg deviceId
                         * @property {number|Long|null} [uid] LoginMsg uid
                         * @property {number|null} [platformId] LoginMsg platformId
                         * @property {number|null} [appId] LoginMsg appId
                         * @property {string|null} [os] LoginMsg os
                         * @property {string|null} [source] LoginMsg source
                         */

                        /**
                         * Constructs a new LoginMsg.
                         * @memberof com.tingtong.server.game.proto
                         * @classdesc Represents a LoginMsg.
                         * @implements ILoginMsg
                         * @constructor
                         * @param {com.tingtong.server.game.proto.ILoginMsg=} [properties] Properties to set
                         */
                        function LoginMsg(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * LoginMsg loginType.
                         * @member {com.tingtong.server.game.proto.LoginType} loginType
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @instance
                         */
                        LoginMsg.prototype.loginType = 1;

                        /**
                         * LoginMsg accountName.
                         * @member {string} accountName
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @instance
                         */
                        LoginMsg.prototype.accountName = "";

                        /**
                         * LoginMsg password.
                         * @member {string} password
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @instance
                         */
                        LoginMsg.prototype.password = "";

                        /**
                         * LoginMsg serverId.
                         * @member {number} serverId
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @instance
                         */
                        LoginMsg.prototype.serverId = 1;

                        /**
                         * LoginMsg version.
                         * @member {string} version
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @instance
                         */
                        LoginMsg.prototype.version = "";

                        /**
                         * LoginMsg ext.
                         * @member {string} ext
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @instance
                         */
                        LoginMsg.prototype.ext = "";

                        /**
                         * LoginMsg deviceId.
                         * @member {string} deviceId
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @instance
                         */
                        LoginMsg.prototype.deviceId = "";

                        /**
                         * LoginMsg uid.
                         * @member {number|Long} uid
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @instance
                         */
                        LoginMsg.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * LoginMsg platformId.
                         * @member {number} platformId
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @instance
                         */
                        LoginMsg.prototype.platformId = 0;

                        /**
                         * LoginMsg appId.
                         * @member {number} appId
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @instance
                         */
                        LoginMsg.prototype.appId = 0;

                        /**
                         * LoginMsg os.
                         * @member {string} os
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @instance
                         */
                        LoginMsg.prototype.os = "";

                        /**
                         * LoginMsg source.
                         * @member {string} source
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @instance
                         */
                        LoginMsg.prototype.source = "";

                        /**
                         * Creates a new LoginMsg instance using the specified properties.
                         * @function create
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @static
                         * @param {com.tingtong.server.game.proto.ILoginMsg=} [properties] Properties to set
                         * @returns {com.tingtong.server.game.proto.LoginMsg} LoginMsg instance
                         */
                        LoginMsg.create = function create(properties) {
                            return new LoginMsg(properties);
                        };

                        /**
                         * Encodes the specified LoginMsg message. Does not implicitly {@link com.tingtong.server.game.proto.LoginMsg.verify|verify} messages.
                         * @function encode
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @static
                         * @param {com.tingtong.server.game.proto.ILoginMsg} message LoginMsg message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        LoginMsg.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.loginType != null && message.hasOwnProperty("loginType"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.loginType);
                            if (message.accountName != null && message.hasOwnProperty("accountName"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.accountName);
                            if (message.password != null && message.hasOwnProperty("password"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
                            if (message.serverId != null && message.hasOwnProperty("serverId"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.serverId);
                            if (message.version != null && message.hasOwnProperty("version"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.version);
                            if (message.ext != null && message.hasOwnProperty("ext"))
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ext);
                            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                                writer.uint32(/* id 7, wireType 2 =*/58).string(message.deviceId);
                            if (message.uid != null && message.hasOwnProperty("uid"))
                                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.uid);
                            if (message.platformId != null && message.hasOwnProperty("platformId"))
                                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.platformId);
                            if (message.appId != null && message.hasOwnProperty("appId"))
                                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.appId);
                            if (message.os != null && message.hasOwnProperty("os"))
                                writer.uint32(/* id 11, wireType 2 =*/90).string(message.os);
                            if (message.source != null && message.hasOwnProperty("source"))
                                writer.uint32(/* id 12, wireType 2 =*/98).string(message.source);
                            return writer;
                        };

                        /**
                         * Encodes the specified LoginMsg message, length delimited. Does not implicitly {@link com.tingtong.server.game.proto.LoginMsg.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @static
                         * @param {com.tingtong.server.game.proto.ILoginMsg} message LoginMsg message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        LoginMsg.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a LoginMsg message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.tingtong.server.game.proto.LoginMsg} LoginMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        LoginMsg.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.tingtong.server.game.proto.LoginMsg();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.loginType = reader.int32();
                                    break;
                                case 2:
                                    message.accountName = reader.string();
                                    break;
                                case 3:
                                    message.password = reader.string();
                                    break;
                                case 4:
                                    message.serverId = reader.int32();
                                    break;
                                case 5:
                                    message.version = reader.string();
                                    break;
                                case 6:
                                    message.ext = reader.string();
                                    break;
                                case 7:
                                    message.deviceId = reader.string();
                                    break;
                                case 8:
                                    message.uid = reader.int64();
                                    break;
                                case 9:
                                    message.platformId = reader.int32();
                                    break;
                                case 10:
                                    message.appId = reader.int32();
                                    break;
                                case 11:
                                    message.os = reader.string();
                                    break;
                                case 12:
                                    message.source = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a LoginMsg message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.tingtong.server.game.proto.LoginMsg} LoginMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        LoginMsg.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a LoginMsg message.
                         * @function verify
                         * @memberof com.tingtong.server.game.proto.LoginMsg
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        LoginMsg.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.loginType != null && message.hasOwnProperty("loginType"))
                                switch (message.loginType) {
                                default:
                                    return "loginType: enum value expected";
                                case 1:
                                case 2:
                                case 3:
                                    break;
                                }
                            if (message.accountName != null && message.hasOwnProperty("accountName"))
                                if (!$util.isString(message.accountName))
                                    return "accountName: string expected";
                            if (message.password != null && message.hasOwnProperty("password"))
                                if (!$util.isString(message.password))
                                    return "password: string expected";
                            if (message.serverId != null && message.hasOwnProperty("serverId"))
                                if (!$util.isInteger(message.serverId))
                                    return "serverId: integer expected";
                            if (message.version != null && message.hasOwnProperty("version"))
                                if (!$util.isString(message.version))
                                    return "version: string expected";
                            if (message.ext != null && message.hasOwnProperty("ext"))
                                if (!$util.isString(message.ext))
                                    return "ext: string expected";
                            if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                                if (!$util.isString(message.deviceId))
                                    return "deviceId: string expected";
                            if (message.uid != null && message.hasOwnProperty("uid"))
                                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                                    return "uid: integer|Long expected";
                            if (message.platformId != null && message.hasOwnProperty("platformId"))
                                if (!$util.isInteger(message.platformId))
                                    return "platformId: integer expected";
                            if (message.appId != null && message.hasOwnProperty("appId"))
                                if (!$util.isInteger(message.appId))
                                    return "appId: integer expected";
                            if (message.os != null && message.hasOwnProperty("os"))
                                if (!$util.isString(message.os))
                                    return "os: string expected";
                            if (message.source != null && message.hasOwnProperty("source"))
                                if (!$util.isString(message.source))
                                    return "source: string expected";
                            return null;
                        };

                        return LoginMsg;
                    })();

                    proto.RspLogOut = (function() {

                        /**
                         * Properties of a RspLogOut.
                         * @memberof com.tingtong.server.game.proto
                         * @interface IRspLogOut
                         */

                        /**
                         * Constructs a new RspLogOut.
                         * @memberof com.tingtong.server.game.proto
                         * @classdesc Represents a RspLogOut.
                         * @implements IRspLogOut
                         * @constructor
                         * @param {com.tingtong.server.game.proto.IRspLogOut=} [properties] Properties to set
                         */
                        function RspLogOut(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Creates a new RspLogOut instance using the specified properties.
                         * @function create
                         * @memberof com.tingtong.server.game.proto.RspLogOut
                         * @static
                         * @param {com.tingtong.server.game.proto.IRspLogOut=} [properties] Properties to set
                         * @returns {com.tingtong.server.game.proto.RspLogOut} RspLogOut instance
                         */
                        RspLogOut.create = function create(properties) {
                            return new RspLogOut(properties);
                        };

                        /**
                         * Encodes the specified RspLogOut message. Does not implicitly {@link com.tingtong.server.game.proto.RspLogOut.verify|verify} messages.
                         * @function encode
                         * @memberof com.tingtong.server.game.proto.RspLogOut
                         * @static
                         * @param {com.tingtong.server.game.proto.IRspLogOut} message RspLogOut message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        RspLogOut.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };

                        /**
                         * Encodes the specified RspLogOut message, length delimited. Does not implicitly {@link com.tingtong.server.game.proto.RspLogOut.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.tingtong.server.game.proto.RspLogOut
                         * @static
                         * @param {com.tingtong.server.game.proto.IRspLogOut} message RspLogOut message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        RspLogOut.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a RspLogOut message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.tingtong.server.game.proto.RspLogOut
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.tingtong.server.game.proto.RspLogOut} RspLogOut
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RspLogOut.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.tingtong.server.game.proto.RspLogOut();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a RspLogOut message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.tingtong.server.game.proto.RspLogOut
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.tingtong.server.game.proto.RspLogOut} RspLogOut
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RspLogOut.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a RspLogOut message.
                         * @function verify
                         * @memberof com.tingtong.server.game.proto.RspLogOut
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        RspLogOut.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            return null;
                        };

                        return RspLogOut;
                    })();

                    return proto;
                })();

                return game;
            })();

            return server;
        })();

        return tingtong;
    })();

    return com;
})();
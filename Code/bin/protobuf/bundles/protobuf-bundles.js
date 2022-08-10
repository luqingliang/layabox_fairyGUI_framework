var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.gameProto = (function() {

    /**
     * Namespace gameProto.
     * @exports gameProto
     * @namespace
     */
    var gameProto = {};

    gameProto.Project = (function() {

        /**
         * Properties of a Project.
         * @memberof gameProto
         * @interface IProject
         * @property {number|Long|null} [projectId] Project projectId
         * @property {string|null} [projectName] Project projectName
         * @property {string|null} [pict] Project pict
         * @property {string|null} [pictPlus] Project pictPlus
         * @property {string|null} [pictBattle] Project pictBattle
         * @property {string|null} [pictEnd] Project pictEnd
         * @property {string|null} [pictProjectName] Project pictProjectName
         * @property {string|null} [pictProjectNamePlus] Project pictProjectNamePlus
         * @property {string|null} [pictHomepage] Project pictHomepage
         */

        /**
         * Constructs a new Project.
         * @memberof gameProto
         * @classdesc Represents a Project.
         * @implements IProject
         * @constructor
         * @param {gameProto.IProject=} [properties] Properties to set
         */
        function Project(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Project projectId.
         * @member {number|Long} projectId
         * @memberof gameProto.Project
         * @instance
         */
        Project.prototype.projectId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Project projectName.
         * @member {string} projectName
         * @memberof gameProto.Project
         * @instance
         */
        Project.prototype.projectName = "";

        /**
         * Project pict.
         * @member {string} pict
         * @memberof gameProto.Project
         * @instance
         */
        Project.prototype.pict = "";

        /**
         * Project pictPlus.
         * @member {string} pictPlus
         * @memberof gameProto.Project
         * @instance
         */
        Project.prototype.pictPlus = "";

        /**
         * Project pictBattle.
         * @member {string} pictBattle
         * @memberof gameProto.Project
         * @instance
         */
        Project.prototype.pictBattle = "";

        /**
         * Project pictEnd.
         * @member {string} pictEnd
         * @memberof gameProto.Project
         * @instance
         */
        Project.prototype.pictEnd = "";

        /**
         * Project pictProjectName.
         * @member {string} pictProjectName
         * @memberof gameProto.Project
         * @instance
         */
        Project.prototype.pictProjectName = "";

        /**
         * Project pictProjectNamePlus.
         * @member {string} pictProjectNamePlus
         * @memberof gameProto.Project
         * @instance
         */
        Project.prototype.pictProjectNamePlus = "";

        /**
         * Project pictHomepage.
         * @member {string} pictHomepage
         * @memberof gameProto.Project
         * @instance
         */
        Project.prototype.pictHomepage = "";

        /**
         * Creates a new Project instance using the specified properties.
         * @function create
         * @memberof gameProto.Project
         * @static
         * @param {gameProto.IProject=} [properties] Properties to set
         * @returns {gameProto.Project} Project instance
         */
        Project.create = function create(properties) {
            return new Project(properties);
        };

        /**
         * Encodes the specified Project message. Does not implicitly {@link gameProto.Project.verify|verify} messages.
         * @function encode
         * @memberof gameProto.Project
         * @static
         * @param {gameProto.IProject} message Project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Project.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.projectId != null && message.hasOwnProperty("projectId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.projectId);
            if (message.projectName != null && message.hasOwnProperty("projectName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.projectName);
            if (message.pict != null && message.hasOwnProperty("pict"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pict);
            if (message.pictPlus != null && message.hasOwnProperty("pictPlus"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.pictPlus);
            if (message.pictBattle != null && message.hasOwnProperty("pictBattle"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.pictBattle);
            if (message.pictEnd != null && message.hasOwnProperty("pictEnd"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.pictEnd);
            if (message.pictProjectName != null && message.hasOwnProperty("pictProjectName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.pictProjectName);
            if (message.pictProjectNamePlus != null && message.hasOwnProperty("pictProjectNamePlus"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.pictProjectNamePlus);
            if (message.pictHomepage != null && message.hasOwnProperty("pictHomepage"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.pictHomepage);
            return writer;
        };

        /**
         * Encodes the specified Project message, length delimited. Does not implicitly {@link gameProto.Project.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.Project
         * @static
         * @param {gameProto.IProject} message Project message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Project.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Project message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.Project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.Project} Project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Project.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.Project();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.int64();
                    break;
                case 2:
                    message.projectName = reader.string();
                    break;
                case 3:
                    message.pict = reader.string();
                    break;
                case 4:
                    message.pictPlus = reader.string();
                    break;
                case 5:
                    message.pictBattle = reader.string();
                    break;
                case 6:
                    message.pictEnd = reader.string();
                    break;
                case 7:
                    message.pictProjectName = reader.string();
                    break;
                case 8:
                    message.pictProjectNamePlus = reader.string();
                    break;
                case 9:
                    message.pictHomepage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Project message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.Project
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.Project} Project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Project.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Project message.
         * @function verify
         * @memberof gameProto.Project
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Project.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.projectId != null && message.hasOwnProperty("projectId"))
                if (!$util.isInteger(message.projectId) && !(message.projectId && $util.isInteger(message.projectId.low) && $util.isInteger(message.projectId.high)))
                    return "projectId: integer|Long expected";
            if (message.projectName != null && message.hasOwnProperty("projectName"))
                if (!$util.isString(message.projectName))
                    return "projectName: string expected";
            if (message.pict != null && message.hasOwnProperty("pict"))
                if (!$util.isString(message.pict))
                    return "pict: string expected";
            if (message.pictPlus != null && message.hasOwnProperty("pictPlus"))
                if (!$util.isString(message.pictPlus))
                    return "pictPlus: string expected";
            if (message.pictBattle != null && message.hasOwnProperty("pictBattle"))
                if (!$util.isString(message.pictBattle))
                    return "pictBattle: string expected";
            if (message.pictEnd != null && message.hasOwnProperty("pictEnd"))
                if (!$util.isString(message.pictEnd))
                    return "pictEnd: string expected";
            if (message.pictProjectName != null && message.hasOwnProperty("pictProjectName"))
                if (!$util.isString(message.pictProjectName))
                    return "pictProjectName: string expected";
            if (message.pictProjectNamePlus != null && message.hasOwnProperty("pictProjectNamePlus"))
                if (!$util.isString(message.pictProjectNamePlus))
                    return "pictProjectNamePlus: string expected";
            if (message.pictHomepage != null && message.hasOwnProperty("pictHomepage"))
                if (!$util.isString(message.pictHomepage))
                    return "pictHomepage: string expected";
            return null;
        };

        return Project;
    })();

    gameProto.ProjectAction = (function() {

        /**
         * Properties of a ProjectAction.
         * @memberof gameProto
         * @interface IProjectAction
         * @property {number|Long|null} [itemId] ProjectAction itemId
         * @property {number|Long|null} [actionId] ProjectAction actionId
         * @property {string|null} [actionName] ProjectAction actionName
         * @property {string|null} [pict] ProjectAction pict
         * @property {string|null} [labelName] ProjectAction labelName
         * @property {number|null} [model] ProjectAction model
         * @property {string|null} [value] ProjectAction value
         * @property {string|null} [actionInfoJson] ProjectAction actionInfoJson
         * @property {string|null} [pictLabel] ProjectAction pictLabel
         * @property {number|null} [gameId] ProjectAction gameId
         */

        /**
         * Constructs a new ProjectAction.
         * @memberof gameProto
         * @classdesc Represents a ProjectAction.
         * @implements IProjectAction
         * @constructor
         * @param {gameProto.IProjectAction=} [properties] Properties to set
         */
        function ProjectAction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProjectAction itemId.
         * @member {number|Long} itemId
         * @memberof gameProto.ProjectAction
         * @instance
         */
        ProjectAction.prototype.itemId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ProjectAction actionId.
         * @member {number|Long} actionId
         * @memberof gameProto.ProjectAction
         * @instance
         */
        ProjectAction.prototype.actionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ProjectAction actionName.
         * @member {string} actionName
         * @memberof gameProto.ProjectAction
         * @instance
         */
        ProjectAction.prototype.actionName = "";

        /**
         * ProjectAction pict.
         * @member {string} pict
         * @memberof gameProto.ProjectAction
         * @instance
         */
        ProjectAction.prototype.pict = "";

        /**
         * ProjectAction labelName.
         * @member {string} labelName
         * @memberof gameProto.ProjectAction
         * @instance
         */
        ProjectAction.prototype.labelName = "";

        /**
         * ProjectAction model.
         * @member {number} model
         * @memberof gameProto.ProjectAction
         * @instance
         */
        ProjectAction.prototype.model = 0;

        /**
         * ProjectAction value.
         * @member {string} value
         * @memberof gameProto.ProjectAction
         * @instance
         */
        ProjectAction.prototype.value = "";

        /**
         * ProjectAction actionInfoJson.
         * @member {string} actionInfoJson
         * @memberof gameProto.ProjectAction
         * @instance
         */
        ProjectAction.prototype.actionInfoJson = "";

        /**
         * ProjectAction pictLabel.
         * @member {string} pictLabel
         * @memberof gameProto.ProjectAction
         * @instance
         */
        ProjectAction.prototype.pictLabel = "";

        /**
         * ProjectAction gameId.
         * @member {number} gameId
         * @memberof gameProto.ProjectAction
         * @instance
         */
        ProjectAction.prototype.gameId = 0;

        /**
         * Creates a new ProjectAction instance using the specified properties.
         * @function create
         * @memberof gameProto.ProjectAction
         * @static
         * @param {gameProto.IProjectAction=} [properties] Properties to set
         * @returns {gameProto.ProjectAction} ProjectAction instance
         */
        ProjectAction.create = function create(properties) {
            return new ProjectAction(properties);
        };

        /**
         * Encodes the specified ProjectAction message. Does not implicitly {@link gameProto.ProjectAction.verify|verify} messages.
         * @function encode
         * @memberof gameProto.ProjectAction
         * @static
         * @param {gameProto.IProjectAction} message ProjectAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProjectAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.itemId);
            if (message.actionId != null && message.hasOwnProperty("actionId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.actionId);
            if (message.actionName != null && message.hasOwnProperty("actionName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.actionName);
            if (message.pict != null && message.hasOwnProperty("pict"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.pict);
            if (message.labelName != null && message.hasOwnProperty("labelName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.labelName);
            if (message.model != null && message.hasOwnProperty("model"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.model);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.value);
            if (message.actionInfoJson != null && message.hasOwnProperty("actionInfoJson"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.actionInfoJson);
            if (message.pictLabel != null && message.hasOwnProperty("pictLabel"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.pictLabel);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified ProjectAction message, length delimited. Does not implicitly {@link gameProto.ProjectAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.ProjectAction
         * @static
         * @param {gameProto.IProjectAction} message ProjectAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProjectAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProjectAction message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.ProjectAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.ProjectAction} ProjectAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProjectAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.ProjectAction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemId = reader.int64();
                    break;
                case 2:
                    message.actionId = reader.int64();
                    break;
                case 3:
                    message.actionName = reader.string();
                    break;
                case 4:
                    message.pict = reader.string();
                    break;
                case 5:
                    message.labelName = reader.string();
                    break;
                case 6:
                    message.model = reader.int32();
                    break;
                case 7:
                    message.value = reader.string();
                    break;
                case 8:
                    message.actionInfoJson = reader.string();
                    break;
                case 9:
                    message.pictLabel = reader.string();
                    break;
                case 10:
                    message.gameId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProjectAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.ProjectAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.ProjectAction} ProjectAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProjectAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProjectAction message.
         * @function verify
         * @memberof gameProto.ProjectAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProjectAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                if (!$util.isInteger(message.itemId) && !(message.itemId && $util.isInteger(message.itemId.low) && $util.isInteger(message.itemId.high)))
                    return "itemId: integer|Long expected";
            if (message.actionId != null && message.hasOwnProperty("actionId"))
                if (!$util.isInteger(message.actionId) && !(message.actionId && $util.isInteger(message.actionId.low) && $util.isInteger(message.actionId.high)))
                    return "actionId: integer|Long expected";
            if (message.actionName != null && message.hasOwnProperty("actionName"))
                if (!$util.isString(message.actionName))
                    return "actionName: string expected";
            if (message.pict != null && message.hasOwnProperty("pict"))
                if (!$util.isString(message.pict))
                    return "pict: string expected";
            if (message.labelName != null && message.hasOwnProperty("labelName"))
                if (!$util.isString(message.labelName))
                    return "labelName: string expected";
            if (message.model != null && message.hasOwnProperty("model"))
                if (!$util.isInteger(message.model))
                    return "model: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            if (message.actionInfoJson != null && message.hasOwnProperty("actionInfoJson"))
                if (!$util.isString(message.actionInfoJson))
                    return "actionInfoJson: string expected";
            if (message.pictLabel != null && message.hasOwnProperty("pictLabel"))
                if (!$util.isString(message.pictLabel))
                    return "pictLabel: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            return null;
        };

        return ProjectAction;
    })();

    gameProto.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof gameProto
         * @interface IPlayer
         * @property {number|Long|null} [playerId] Player playerId
         * @property {number|Long|null} [userId] Player userId
         * @property {string|null} [nickName] Player nickName
         * @property {string|null} [avatarUrl] Player avatarUrl
         * @property {number|null} [winCount] Player winCount
         */

        /**
         * Constructs a new Player.
         * @memberof gameProto
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {gameProto.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player playerId.
         * @member {number|Long} playerId
         * @memberof gameProto.Player
         * @instance
         */
        Player.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Player userId.
         * @member {number|Long} userId
         * @memberof gameProto.Player
         * @instance
         */
        Player.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Player nickName.
         * @member {string} nickName
         * @memberof gameProto.Player
         * @instance
         */
        Player.prototype.nickName = "";

        /**
         * Player avatarUrl.
         * @member {string} avatarUrl
         * @memberof gameProto.Player
         * @instance
         */
        Player.prototype.avatarUrl = "";

        /**
         * Player winCount.
         * @member {number} winCount
         * @memberof gameProto.Player
         * @instance
         */
        Player.prototype.winCount = 0;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof gameProto.Player
         * @static
         * @param {gameProto.IPlayer=} [properties] Properties to set
         * @returns {gameProto.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link gameProto.Player.verify|verify} messages.
         * @function encode
         * @memberof gameProto.Player
         * @static
         * @param {gameProto.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickName);
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatarUrl);
            if (message.winCount != null && message.hasOwnProperty("winCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.winCount);
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link gameProto.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.Player
         * @static
         * @param {gameProto.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.Player();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.int64();
                    break;
                case 2:
                    message.userId = reader.int64();
                    break;
                case 3:
                    message.nickName = reader.string();
                    break;
                case 4:
                    message.avatarUrl = reader.string();
                    break;
                case 5:
                    message.winCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof gameProto.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                if (!$util.isString(message.avatarUrl))
                    return "avatarUrl: string expected";
            if (message.winCount != null && message.hasOwnProperty("winCount"))
                if (!$util.isInteger(message.winCount))
                    return "winCount: integer expected";
            return null;
        };

        return Player;
    })();

    gameProto.Medal = (function() {

        /**
         * Properties of a Medal.
         * @memberof gameProto
         * @interface IMedal
         * @property {string|null} [medalName] Medal medalName
         * @property {string|null} [medalPictUrl] Medal medalPictUrl
         * @property {string|null} [medalPictStarUrl] Medal medalPictStarUrl
         * @property {number|null} [starNum] Medal starNum
         * @property {number|null} [label] Medal label
         */

        /**
         * Constructs a new Medal.
         * @memberof gameProto
         * @classdesc Represents a Medal.
         * @implements IMedal
         * @constructor
         * @param {gameProto.IMedal=} [properties] Properties to set
         */
        function Medal(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Medal medalName.
         * @member {string} medalName
         * @memberof gameProto.Medal
         * @instance
         */
        Medal.prototype.medalName = "";

        /**
         * Medal medalPictUrl.
         * @member {string} medalPictUrl
         * @memberof gameProto.Medal
         * @instance
         */
        Medal.prototype.medalPictUrl = "";

        /**
         * Medal medalPictStarUrl.
         * @member {string} medalPictStarUrl
         * @memberof gameProto.Medal
         * @instance
         */
        Medal.prototype.medalPictStarUrl = "";

        /**
         * Medal starNum.
         * @member {number} starNum
         * @memberof gameProto.Medal
         * @instance
         */
        Medal.prototype.starNum = 0;

        /**
         * Medal label.
         * @member {number} label
         * @memberof gameProto.Medal
         * @instance
         */
        Medal.prototype.label = 0;

        /**
         * Creates a new Medal instance using the specified properties.
         * @function create
         * @memberof gameProto.Medal
         * @static
         * @param {gameProto.IMedal=} [properties] Properties to set
         * @returns {gameProto.Medal} Medal instance
         */
        Medal.create = function create(properties) {
            return new Medal(properties);
        };

        /**
         * Encodes the specified Medal message. Does not implicitly {@link gameProto.Medal.verify|verify} messages.
         * @function encode
         * @memberof gameProto.Medal
         * @static
         * @param {gameProto.IMedal} message Medal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Medal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.medalName != null && message.hasOwnProperty("medalName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.medalName);
            if (message.medalPictUrl != null && message.hasOwnProperty("medalPictUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.medalPictUrl);
            if (message.medalPictStarUrl != null && message.hasOwnProperty("medalPictStarUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.medalPictStarUrl);
            if (message.starNum != null && message.hasOwnProperty("starNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.starNum);
            if (message.label != null && message.hasOwnProperty("label"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.label);
            return writer;
        };

        /**
         * Encodes the specified Medal message, length delimited. Does not implicitly {@link gameProto.Medal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.Medal
         * @static
         * @param {gameProto.IMedal} message Medal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Medal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Medal message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.Medal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.Medal} Medal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Medal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.Medal();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.medalName = reader.string();
                    break;
                case 2:
                    message.medalPictUrl = reader.string();
                    break;
                case 3:
                    message.medalPictStarUrl = reader.string();
                    break;
                case 4:
                    message.starNum = reader.int32();
                    break;
                case 5:
                    message.label = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Medal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.Medal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.Medal} Medal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Medal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Medal message.
         * @function verify
         * @memberof gameProto.Medal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Medal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.medalName != null && message.hasOwnProperty("medalName"))
                if (!$util.isString(message.medalName))
                    return "medalName: string expected";
            if (message.medalPictUrl != null && message.hasOwnProperty("medalPictUrl"))
                if (!$util.isString(message.medalPictUrl))
                    return "medalPictUrl: string expected";
            if (message.medalPictStarUrl != null && message.hasOwnProperty("medalPictStarUrl"))
                if (!$util.isString(message.medalPictStarUrl))
                    return "medalPictStarUrl: string expected";
            if (message.starNum != null && message.hasOwnProperty("starNum"))
                if (!$util.isInteger(message.starNum))
                    return "starNum: integer expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isInteger(message.label))
                    return "label: integer expected";
            return null;
        };

        return Medal;
    })();

    gameProto.Score = (function() {

        /**
         * Properties of a Score.
         * @memberof gameProto
         * @interface IScore
         * @property {gameProto.IProjectAction|null} [action] Score action
         * @property {number|null} [score] Score score
         * @property {number|null} [bonusPoint] Score bonusPoint
         * @property {number|null} [rank] Score rank
         */

        /**
         * Constructs a new Score.
         * @memberof gameProto
         * @classdesc Represents a Score.
         * @implements IScore
         * @constructor
         * @param {gameProto.IScore=} [properties] Properties to set
         */
        function Score(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Score action.
         * @member {gameProto.IProjectAction|null|undefined} action
         * @memberof gameProto.Score
         * @instance
         */
        Score.prototype.action = null;

        /**
         * Score score.
         * @member {number} score
         * @memberof gameProto.Score
         * @instance
         */
        Score.prototype.score = 0;

        /**
         * Score bonusPoint.
         * @member {number} bonusPoint
         * @memberof gameProto.Score
         * @instance
         */
        Score.prototype.bonusPoint = 0;

        /**
         * Score rank.
         * @member {number} rank
         * @memberof gameProto.Score
         * @instance
         */
        Score.prototype.rank = 0;

        /**
         * Creates a new Score instance using the specified properties.
         * @function create
         * @memberof gameProto.Score
         * @static
         * @param {gameProto.IScore=} [properties] Properties to set
         * @returns {gameProto.Score} Score instance
         */
        Score.create = function create(properties) {
            return new Score(properties);
        };

        /**
         * Encodes the specified Score message. Does not implicitly {@link gameProto.Score.verify|verify} messages.
         * @function encode
         * @memberof gameProto.Score
         * @static
         * @param {gameProto.IScore} message Score message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Score.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && message.hasOwnProperty("action"))
                $root.gameProto.ProjectAction.encode(message.action, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.score);
            if (message.bonusPoint != null && message.hasOwnProperty("bonusPoint"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.bonusPoint);
            if (message.rank != null && message.hasOwnProperty("rank"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.rank);
            return writer;
        };

        /**
         * Encodes the specified Score message, length delimited. Does not implicitly {@link gameProto.Score.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.Score
         * @static
         * @param {gameProto.IScore} message Score message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Score.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Score message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.Score
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.Score} Score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Score.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.Score();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.action = $root.gameProto.ProjectAction.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.score = reader.double();
                    break;
                case 3:
                    message.bonusPoint = reader.int32();
                    break;
                case 4:
                    message.rank = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Score message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.Score
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.Score} Score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Score.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Score message.
         * @function verify
         * @memberof gameProto.Score
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Score.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action")) {
                var error = $root.gameProto.ProjectAction.verify(message.action);
                if (error)
                    return "action." + error;
            }
            if (message.score != null && message.hasOwnProperty("score"))
                if (typeof message.score !== "number")
                    return "score: number expected";
            if (message.bonusPoint != null && message.hasOwnProperty("bonusPoint"))
                if (!$util.isInteger(message.bonusPoint))
                    return "bonusPoint: integer expected";
            if (message.rank != null && message.hasOwnProperty("rank"))
                if (!$util.isInteger(message.rank))
                    return "rank: integer expected";
            return null;
        };

        return Score;
    })();

    gameProto.Page = (function() {

        /**
         * Properties of a Page.
         * @memberof gameProto
         * @interface IPage
         * @property {number|null} [pageNo] Page pageNo
         * @property {number|null} [pageSize] Page pageSize
         */

        /**
         * Constructs a new Page.
         * @memberof gameProto
         * @classdesc Represents a Page.
         * @implements IPage
         * @constructor
         * @param {gameProto.IPage=} [properties] Properties to set
         */
        function Page(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Page pageNo.
         * @member {number} pageNo
         * @memberof gameProto.Page
         * @instance
         */
        Page.prototype.pageNo = 0;

        /**
         * Page pageSize.
         * @member {number} pageSize
         * @memberof gameProto.Page
         * @instance
         */
        Page.prototype.pageSize = 0;

        /**
         * Creates a new Page instance using the specified properties.
         * @function create
         * @memberof gameProto.Page
         * @static
         * @param {gameProto.IPage=} [properties] Properties to set
         * @returns {gameProto.Page} Page instance
         */
        Page.create = function create(properties) {
            return new Page(properties);
        };

        /**
         * Encodes the specified Page message. Does not implicitly {@link gameProto.Page.verify|verify} messages.
         * @function encode
         * @memberof gameProto.Page
         * @static
         * @param {gameProto.IPage} message Page message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Page.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pageNo != null && message.hasOwnProperty("pageNo"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pageNo);
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
            return writer;
        };

        /**
         * Encodes the specified Page message, length delimited. Does not implicitly {@link gameProto.Page.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.Page
         * @static
         * @param {gameProto.IPage} message Page message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Page.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Page message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.Page
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.Page} Page
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Page.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.Page();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pageNo = reader.int32();
                    break;
                case 2:
                    message.pageSize = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Page message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.Page
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.Page} Page
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Page.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Page message.
         * @function verify
         * @memberof gameProto.Page
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Page.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageNo != null && message.hasOwnProperty("pageNo"))
                if (!$util.isInteger(message.pageNo))
                    return "pageNo: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            return null;
        };

        return Page;
    })();

    gameProto.ArenasEnterBattleReq = (function() {

        /**
         * Properties of an ArenasEnterBattleReq.
         * @memberof gameProto
         * @interface IArenasEnterBattleReq
         * @property {number|Long|null} [projectId] ArenasEnterBattleReq projectId
         */

        /**
         * Constructs a new ArenasEnterBattleReq.
         * @memberof gameProto
         * @classdesc Represents an ArenasEnterBattleReq.
         * @implements IArenasEnterBattleReq
         * @constructor
         * @param {gameProto.IArenasEnterBattleReq=} [properties] Properties to set
         */
        function ArenasEnterBattleReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArenasEnterBattleReq projectId.
         * @member {number|Long} projectId
         * @memberof gameProto.ArenasEnterBattleReq
         * @instance
         */
        ArenasEnterBattleReq.prototype.projectId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ArenasEnterBattleReq instance using the specified properties.
         * @function create
         * @memberof gameProto.ArenasEnterBattleReq
         * @static
         * @param {gameProto.IArenasEnterBattleReq=} [properties] Properties to set
         * @returns {gameProto.ArenasEnterBattleReq} ArenasEnterBattleReq instance
         */
        ArenasEnterBattleReq.create = function create(properties) {
            return new ArenasEnterBattleReq(properties);
        };

        /**
         * Encodes the specified ArenasEnterBattleReq message. Does not implicitly {@link gameProto.ArenasEnterBattleReq.verify|verify} messages.
         * @function encode
         * @memberof gameProto.ArenasEnterBattleReq
         * @static
         * @param {gameProto.IArenasEnterBattleReq} message ArenasEnterBattleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasEnterBattleReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.projectId != null && message.hasOwnProperty("projectId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.projectId);
            return writer;
        };

        /**
         * Encodes the specified ArenasEnterBattleReq message, length delimited. Does not implicitly {@link gameProto.ArenasEnterBattleReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.ArenasEnterBattleReq
         * @static
         * @param {gameProto.IArenasEnterBattleReq} message ArenasEnterBattleReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasEnterBattleReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArenasEnterBattleReq message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.ArenasEnterBattleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.ArenasEnterBattleReq} ArenasEnterBattleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasEnterBattleReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.ArenasEnterBattleReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArenasEnterBattleReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.ArenasEnterBattleReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.ArenasEnterBattleReq} ArenasEnterBattleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasEnterBattleReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArenasEnterBattleReq message.
         * @function verify
         * @memberof gameProto.ArenasEnterBattleReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArenasEnterBattleReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.projectId != null && message.hasOwnProperty("projectId"))
                if (!$util.isInteger(message.projectId) && !(message.projectId && $util.isInteger(message.projectId.low) && $util.isInteger(message.projectId.high)))
                    return "projectId: integer|Long expected";
            return null;
        };

        return ArenasEnterBattleReq;
    })();

    gameProto.ArenasEnterBattleRsp = (function() {

        /**
         * Properties of an ArenasEnterBattleRsp.
         * @memberof gameProto
         * @interface IArenasEnterBattleRsp
         * @property {number|null} [code] ArenasEnterBattleRsp code
         * @property {string|null} [msg] ArenasEnterBattleRsp msg
         * @property {number|Long|null} [projectId] ArenasEnterBattleRsp projectId
         * @property {Array.<gameProto.IProjectAction>|null} [actionList] ArenasEnterBattleRsp actionList
         */

        /**
         * Constructs a new ArenasEnterBattleRsp.
         * @memberof gameProto
         * @classdesc Represents an ArenasEnterBattleRsp.
         * @implements IArenasEnterBattleRsp
         * @constructor
         * @param {gameProto.IArenasEnterBattleRsp=} [properties] Properties to set
         */
        function ArenasEnterBattleRsp(properties) {
            this.actionList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArenasEnterBattleRsp code.
         * @member {number} code
         * @memberof gameProto.ArenasEnterBattleRsp
         * @instance
         */
        ArenasEnterBattleRsp.prototype.code = 0;

        /**
         * ArenasEnterBattleRsp msg.
         * @member {string} msg
         * @memberof gameProto.ArenasEnterBattleRsp
         * @instance
         */
        ArenasEnterBattleRsp.prototype.msg = "";

        /**
         * ArenasEnterBattleRsp projectId.
         * @member {number|Long} projectId
         * @memberof gameProto.ArenasEnterBattleRsp
         * @instance
         */
        ArenasEnterBattleRsp.prototype.projectId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ArenasEnterBattleRsp actionList.
         * @member {Array.<gameProto.IProjectAction>} actionList
         * @memberof gameProto.ArenasEnterBattleRsp
         * @instance
         */
        ArenasEnterBattleRsp.prototype.actionList = $util.emptyArray;

        /**
         * Creates a new ArenasEnterBattleRsp instance using the specified properties.
         * @function create
         * @memberof gameProto.ArenasEnterBattleRsp
         * @static
         * @param {gameProto.IArenasEnterBattleRsp=} [properties] Properties to set
         * @returns {gameProto.ArenasEnterBattleRsp} ArenasEnterBattleRsp instance
         */
        ArenasEnterBattleRsp.create = function create(properties) {
            return new ArenasEnterBattleRsp(properties);
        };

        /**
         * Encodes the specified ArenasEnterBattleRsp message. Does not implicitly {@link gameProto.ArenasEnterBattleRsp.verify|verify} messages.
         * @function encode
         * @memberof gameProto.ArenasEnterBattleRsp
         * @static
         * @param {gameProto.IArenasEnterBattleRsp} message ArenasEnterBattleRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasEnterBattleRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.projectId != null && message.hasOwnProperty("projectId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.projectId);
            if (message.actionList != null && message.actionList.length)
                for (var i = 0; i < message.actionList.length; ++i)
                    $root.gameProto.ProjectAction.encode(message.actionList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ArenasEnterBattleRsp message, length delimited. Does not implicitly {@link gameProto.ArenasEnterBattleRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.ArenasEnterBattleRsp
         * @static
         * @param {gameProto.IArenasEnterBattleRsp} message ArenasEnterBattleRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasEnterBattleRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArenasEnterBattleRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.ArenasEnterBattleRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.ArenasEnterBattleRsp} ArenasEnterBattleRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasEnterBattleRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.ArenasEnterBattleRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                case 3:
                    message.projectId = reader.int64();
                    break;
                case 4:
                    if (!(message.actionList && message.actionList.length))
                        message.actionList = [];
                    message.actionList.push($root.gameProto.ProjectAction.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArenasEnterBattleRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.ArenasEnterBattleRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.ArenasEnterBattleRsp} ArenasEnterBattleRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasEnterBattleRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArenasEnterBattleRsp message.
         * @function verify
         * @memberof gameProto.ArenasEnterBattleRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArenasEnterBattleRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.projectId != null && message.hasOwnProperty("projectId"))
                if (!$util.isInteger(message.projectId) && !(message.projectId && $util.isInteger(message.projectId.low) && $util.isInteger(message.projectId.high)))
                    return "projectId: integer|Long expected";
            if (message.actionList != null && message.hasOwnProperty("actionList")) {
                if (!Array.isArray(message.actionList))
                    return "actionList: array expected";
                for (var i = 0; i < message.actionList.length; ++i) {
                    var error = $root.gameProto.ProjectAction.verify(message.actionList[i]);
                    if (error)
                        return "actionList." + error;
                }
            }
            return null;
        };

        return ArenasEnterBattleRsp;
    })();

    gameProto.ArenasGameOverReq = (function() {

        /**
         * Properties of an ArenasGameOverReq.
         * @memberof gameProto
         * @interface IArenasGameOverReq
         * @property {number|Long|null} [matchId] ArenasGameOverReq matchId
         */

        /**
         * Constructs a new ArenasGameOverReq.
         * @memberof gameProto
         * @classdesc Represents an ArenasGameOverReq.
         * @implements IArenasGameOverReq
         * @constructor
         * @param {gameProto.IArenasGameOverReq=} [properties] Properties to set
         */
        function ArenasGameOverReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArenasGameOverReq matchId.
         * @member {number|Long} matchId
         * @memberof gameProto.ArenasGameOverReq
         * @instance
         */
        ArenasGameOverReq.prototype.matchId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ArenasGameOverReq instance using the specified properties.
         * @function create
         * @memberof gameProto.ArenasGameOverReq
         * @static
         * @param {gameProto.IArenasGameOverReq=} [properties] Properties to set
         * @returns {gameProto.ArenasGameOverReq} ArenasGameOverReq instance
         */
        ArenasGameOverReq.create = function create(properties) {
            return new ArenasGameOverReq(properties);
        };

        /**
         * Encodes the specified ArenasGameOverReq message. Does not implicitly {@link gameProto.ArenasGameOverReq.verify|verify} messages.
         * @function encode
         * @memberof gameProto.ArenasGameOverReq
         * @static
         * @param {gameProto.IArenasGameOverReq} message ArenasGameOverReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasGameOverReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.matchId);
            return writer;
        };

        /**
         * Encodes the specified ArenasGameOverReq message, length delimited. Does not implicitly {@link gameProto.ArenasGameOverReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.ArenasGameOverReq
         * @static
         * @param {gameProto.IArenasGameOverReq} message ArenasGameOverReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasGameOverReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArenasGameOverReq message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.ArenasGameOverReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.ArenasGameOverReq} ArenasGameOverReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasGameOverReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.ArenasGameOverReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.matchId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArenasGameOverReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.ArenasGameOverReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.ArenasGameOverReq} ArenasGameOverReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasGameOverReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArenasGameOverReq message.
         * @function verify
         * @memberof gameProto.ArenasGameOverReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArenasGameOverReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                if (!$util.isInteger(message.matchId) && !(message.matchId && $util.isInteger(message.matchId.low) && $util.isInteger(message.matchId.high)))
                    return "matchId: integer|Long expected";
            return null;
        };

        return ArenasGameOverReq;
    })();

    gameProto.ArenasGameOverRsp = (function() {

        /**
         * Properties of an ArenasGameOverRsp.
         * @memberof gameProto
         * @interface IArenasGameOverRsp
         * @property {number|null} [code] ArenasGameOverRsp code
         * @property {string|null} [msg] ArenasGameOverRsp msg
         * @property {Array.<gameProto.IPlayerFinalRank>|null} [rankList] ArenasGameOverRsp rankList
         * @property {gameProto.IProject|null} [project] ArenasGameOverRsp project
         * @property {Array.<gameProto.IPersonScore>|null} [personScore] ArenasGameOverRsp personScore
         */

        /**
         * Constructs a new ArenasGameOverRsp.
         * @memberof gameProto
         * @classdesc Represents an ArenasGameOverRsp.
         * @implements IArenasGameOverRsp
         * @constructor
         * @param {gameProto.IArenasGameOverRsp=} [properties] Properties to set
         */
        function ArenasGameOverRsp(properties) {
            this.rankList = [];
            this.personScore = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArenasGameOverRsp code.
         * @member {number} code
         * @memberof gameProto.ArenasGameOverRsp
         * @instance
         */
        ArenasGameOverRsp.prototype.code = 0;

        /**
         * ArenasGameOverRsp msg.
         * @member {string} msg
         * @memberof gameProto.ArenasGameOverRsp
         * @instance
         */
        ArenasGameOverRsp.prototype.msg = "";

        /**
         * ArenasGameOverRsp rankList.
         * @member {Array.<gameProto.IPlayerFinalRank>} rankList
         * @memberof gameProto.ArenasGameOverRsp
         * @instance
         */
        ArenasGameOverRsp.prototype.rankList = $util.emptyArray;

        /**
         * ArenasGameOverRsp project.
         * @member {gameProto.IProject|null|undefined} project
         * @memberof gameProto.ArenasGameOverRsp
         * @instance
         */
        ArenasGameOverRsp.prototype.project = null;

        /**
         * ArenasGameOverRsp personScore.
         * @member {Array.<gameProto.IPersonScore>} personScore
         * @memberof gameProto.ArenasGameOverRsp
         * @instance
         */
        ArenasGameOverRsp.prototype.personScore = $util.emptyArray;

        /**
         * Creates a new ArenasGameOverRsp instance using the specified properties.
         * @function create
         * @memberof gameProto.ArenasGameOverRsp
         * @static
         * @param {gameProto.IArenasGameOverRsp=} [properties] Properties to set
         * @returns {gameProto.ArenasGameOverRsp} ArenasGameOverRsp instance
         */
        ArenasGameOverRsp.create = function create(properties) {
            return new ArenasGameOverRsp(properties);
        };

        /**
         * Encodes the specified ArenasGameOverRsp message. Does not implicitly {@link gameProto.ArenasGameOverRsp.verify|verify} messages.
         * @function encode
         * @memberof gameProto.ArenasGameOverRsp
         * @static
         * @param {gameProto.IArenasGameOverRsp} message ArenasGameOverRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasGameOverRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.rankList != null && message.rankList.length)
                for (var i = 0; i < message.rankList.length; ++i)
                    $root.gameProto.PlayerFinalRank.encode(message.rankList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.project != null && message.hasOwnProperty("project"))
                $root.gameProto.Project.encode(message.project, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.personScore != null && message.personScore.length)
                for (var i = 0; i < message.personScore.length; ++i)
                    $root.gameProto.PersonScore.encode(message.personScore[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ArenasGameOverRsp message, length delimited. Does not implicitly {@link gameProto.ArenasGameOverRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.ArenasGameOverRsp
         * @static
         * @param {gameProto.IArenasGameOverRsp} message ArenasGameOverRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasGameOverRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArenasGameOverRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.ArenasGameOverRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.ArenasGameOverRsp} ArenasGameOverRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasGameOverRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.ArenasGameOverRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                case 3:
                    if (!(message.rankList && message.rankList.length))
                        message.rankList = [];
                    message.rankList.push($root.gameProto.PlayerFinalRank.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.project = $root.gameProto.Project.decode(reader, reader.uint32());
                    break;
                case 7:
                    if (!(message.personScore && message.personScore.length))
                        message.personScore = [];
                    message.personScore.push($root.gameProto.PersonScore.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArenasGameOverRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.ArenasGameOverRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.ArenasGameOverRsp} ArenasGameOverRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasGameOverRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArenasGameOverRsp message.
         * @function verify
         * @memberof gameProto.ArenasGameOverRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArenasGameOverRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.rankList != null && message.hasOwnProperty("rankList")) {
                if (!Array.isArray(message.rankList))
                    return "rankList: array expected";
                for (var i = 0; i < message.rankList.length; ++i) {
                    var error = $root.gameProto.PlayerFinalRank.verify(message.rankList[i]);
                    if (error)
                        return "rankList." + error;
                }
            }
            if (message.project != null && message.hasOwnProperty("project")) {
                var error = $root.gameProto.Project.verify(message.project);
                if (error)
                    return "project." + error;
            }
            if (message.personScore != null && message.hasOwnProperty("personScore")) {
                if (!Array.isArray(message.personScore))
                    return "personScore: array expected";
                for (var i = 0; i < message.personScore.length; ++i) {
                    var error = $root.gameProto.PersonScore.verify(message.personScore[i]);
                    if (error)
                        return "personScore." + error;
                }
            }
            return null;
        };

        return ArenasGameOverRsp;
    })();

    gameProto.PlayerFinalRank = (function() {

        /**
         * Properties of a PlayerFinalRank.
         * @memberof gameProto
         * @interface IPlayerFinalRank
         * @property {gameProto.IPlayer|null} [player] PlayerFinalRank player
         * @property {gameProto.IScore|null} [score] PlayerFinalRank score
         */

        /**
         * Constructs a new PlayerFinalRank.
         * @memberof gameProto
         * @classdesc Represents a PlayerFinalRank.
         * @implements IPlayerFinalRank
         * @constructor
         * @param {gameProto.IPlayerFinalRank=} [properties] Properties to set
         */
        function PlayerFinalRank(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerFinalRank player.
         * @member {gameProto.IPlayer|null|undefined} player
         * @memberof gameProto.PlayerFinalRank
         * @instance
         */
        PlayerFinalRank.prototype.player = null;

        /**
         * PlayerFinalRank score.
         * @member {gameProto.IScore|null|undefined} score
         * @memberof gameProto.PlayerFinalRank
         * @instance
         */
        PlayerFinalRank.prototype.score = null;

        /**
         * Creates a new PlayerFinalRank instance using the specified properties.
         * @function create
         * @memberof gameProto.PlayerFinalRank
         * @static
         * @param {gameProto.IPlayerFinalRank=} [properties] Properties to set
         * @returns {gameProto.PlayerFinalRank} PlayerFinalRank instance
         */
        PlayerFinalRank.create = function create(properties) {
            return new PlayerFinalRank(properties);
        };

        /**
         * Encodes the specified PlayerFinalRank message. Does not implicitly {@link gameProto.PlayerFinalRank.verify|verify} messages.
         * @function encode
         * @memberof gameProto.PlayerFinalRank
         * @static
         * @param {gameProto.IPlayerFinalRank} message PlayerFinalRank message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerFinalRank.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && message.hasOwnProperty("player"))
                $root.gameProto.Player.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.score != null && message.hasOwnProperty("score"))
                $root.gameProto.Score.encode(message.score, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerFinalRank message, length delimited. Does not implicitly {@link gameProto.PlayerFinalRank.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.PlayerFinalRank
         * @static
         * @param {gameProto.IPlayerFinalRank} message PlayerFinalRank message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerFinalRank.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerFinalRank message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.PlayerFinalRank
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.PlayerFinalRank} PlayerFinalRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerFinalRank.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.PlayerFinalRank();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = $root.gameProto.Player.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.score = $root.gameProto.Score.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerFinalRank message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.PlayerFinalRank
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.PlayerFinalRank} PlayerFinalRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerFinalRank.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerFinalRank message.
         * @function verify
         * @memberof gameProto.PlayerFinalRank
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerFinalRank.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.gameProto.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            if (message.score != null && message.hasOwnProperty("score")) {
                var error = $root.gameProto.Score.verify(message.score);
                if (error)
                    return "score." + error;
            }
            return null;
        };

        return PlayerFinalRank;
    })();

    gameProto.PersonScore = (function() {

        /**
         * Properties of a PersonScore.
         * @memberof gameProto
         * @interface IPersonScore
         * @property {gameProto.IScore|null} [score] PersonScore score
         * @property {number|null} [rank] PersonScore rank
         * @property {number|null} [bestActionId] PersonScore bestActionId
         */

        /**
         * Constructs a new PersonScore.
         * @memberof gameProto
         * @classdesc Represents a PersonScore.
         * @implements IPersonScore
         * @constructor
         * @param {gameProto.IPersonScore=} [properties] Properties to set
         */
        function PersonScore(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PersonScore score.
         * @member {gameProto.IScore|null|undefined} score
         * @memberof gameProto.PersonScore
         * @instance
         */
        PersonScore.prototype.score = null;

        /**
         * PersonScore rank.
         * @member {number} rank
         * @memberof gameProto.PersonScore
         * @instance
         */
        PersonScore.prototype.rank = 0;

        /**
         * PersonScore bestActionId.
         * @member {number} bestActionId
         * @memberof gameProto.PersonScore
         * @instance
         */
        PersonScore.prototype.bestActionId = 0;

        /**
         * Creates a new PersonScore instance using the specified properties.
         * @function create
         * @memberof gameProto.PersonScore
         * @static
         * @param {gameProto.IPersonScore=} [properties] Properties to set
         * @returns {gameProto.PersonScore} PersonScore instance
         */
        PersonScore.create = function create(properties) {
            return new PersonScore(properties);
        };

        /**
         * Encodes the specified PersonScore message. Does not implicitly {@link gameProto.PersonScore.verify|verify} messages.
         * @function encode
         * @memberof gameProto.PersonScore
         * @static
         * @param {gameProto.IPersonScore} message PersonScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PersonScore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.score != null && message.hasOwnProperty("score"))
                $root.gameProto.Score.encode(message.score, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.rank != null && message.hasOwnProperty("rank"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rank);
            if (message.bestActionId != null && message.hasOwnProperty("bestActionId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.bestActionId);
            return writer;
        };

        /**
         * Encodes the specified PersonScore message, length delimited. Does not implicitly {@link gameProto.PersonScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.PersonScore
         * @static
         * @param {gameProto.IPersonScore} message PersonScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PersonScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PersonScore message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.PersonScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.PersonScore} PersonScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PersonScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.PersonScore();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.score = $root.gameProto.Score.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.rank = reader.int32();
                    break;
                case 3:
                    message.bestActionId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PersonScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.PersonScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.PersonScore} PersonScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PersonScore.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PersonScore message.
         * @function verify
         * @memberof gameProto.PersonScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PersonScore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.score != null && message.hasOwnProperty("score")) {
                var error = $root.gameProto.Score.verify(message.score);
                if (error)
                    return "score." + error;
            }
            if (message.rank != null && message.hasOwnProperty("rank"))
                if (!$util.isInteger(message.rank))
                    return "rank: integer expected";
            if (message.bestActionId != null && message.hasOwnProperty("bestActionId"))
                if (!$util.isInteger(message.bestActionId))
                    return "bestActionId: integer expected";
            return null;
        };

        return PersonScore;
    })();

    gameProto.ArenasHomepageReq = (function() {

        /**
         * Properties of an ArenasHomepageReq.
         * @memberof gameProto
         * @interface IArenasHomepageReq
         */

        /**
         * Constructs a new ArenasHomepageReq.
         * @memberof gameProto
         * @classdesc Represents an ArenasHomepageReq.
         * @implements IArenasHomepageReq
         * @constructor
         * @param {gameProto.IArenasHomepageReq=} [properties] Properties to set
         */
        function ArenasHomepageReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ArenasHomepageReq instance using the specified properties.
         * @function create
         * @memberof gameProto.ArenasHomepageReq
         * @static
         * @param {gameProto.IArenasHomepageReq=} [properties] Properties to set
         * @returns {gameProto.ArenasHomepageReq} ArenasHomepageReq instance
         */
        ArenasHomepageReq.create = function create(properties) {
            return new ArenasHomepageReq(properties);
        };

        /**
         * Encodes the specified ArenasHomepageReq message. Does not implicitly {@link gameProto.ArenasHomepageReq.verify|verify} messages.
         * @function encode
         * @memberof gameProto.ArenasHomepageReq
         * @static
         * @param {gameProto.IArenasHomepageReq} message ArenasHomepageReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasHomepageReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ArenasHomepageReq message, length delimited. Does not implicitly {@link gameProto.ArenasHomepageReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.ArenasHomepageReq
         * @static
         * @param {gameProto.IArenasHomepageReq} message ArenasHomepageReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasHomepageReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArenasHomepageReq message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.ArenasHomepageReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.ArenasHomepageReq} ArenasHomepageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasHomepageReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.ArenasHomepageReq();
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
         * Decodes an ArenasHomepageReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.ArenasHomepageReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.ArenasHomepageReq} ArenasHomepageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasHomepageReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArenasHomepageReq message.
         * @function verify
         * @memberof gameProto.ArenasHomepageReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArenasHomepageReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return ArenasHomepageReq;
    })();

    gameProto.ArenasHomepageRsp = (function() {

        /**
         * Properties of an ArenasHomepageRsp.
         * @memberof gameProto
         * @interface IArenasHomepageRsp
         * @property {number|null} [code] ArenasHomepageRsp code
         * @property {string|null} [msg] ArenasHomepageRsp msg
         * @property {gameProto.IPlayer|null} [player] ArenasHomepageRsp player
         * @property {gameProto.IPlayerMedal|null} [playMedal] ArenasHomepageRsp playMedal
         * @property {gameProto.ILastGame|null} [lastGame] ArenasHomepageRsp lastGame
         * @property {Array.<gameProto.IProject>|null} [projectList] ArenasHomepageRsp projectList
         */

        /**
         * Constructs a new ArenasHomepageRsp.
         * @memberof gameProto
         * @classdesc Represents an ArenasHomepageRsp.
         * @implements IArenasHomepageRsp
         * @constructor
         * @param {gameProto.IArenasHomepageRsp=} [properties] Properties to set
         */
        function ArenasHomepageRsp(properties) {
            this.projectList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArenasHomepageRsp code.
         * @member {number} code
         * @memberof gameProto.ArenasHomepageRsp
         * @instance
         */
        ArenasHomepageRsp.prototype.code = 0;

        /**
         * ArenasHomepageRsp msg.
         * @member {string} msg
         * @memberof gameProto.ArenasHomepageRsp
         * @instance
         */
        ArenasHomepageRsp.prototype.msg = "";

        /**
         * ArenasHomepageRsp player.
         * @member {gameProto.IPlayer|null|undefined} player
         * @memberof gameProto.ArenasHomepageRsp
         * @instance
         */
        ArenasHomepageRsp.prototype.player = null;

        /**
         * ArenasHomepageRsp playMedal.
         * @member {gameProto.IPlayerMedal|null|undefined} playMedal
         * @memberof gameProto.ArenasHomepageRsp
         * @instance
         */
        ArenasHomepageRsp.prototype.playMedal = null;

        /**
         * ArenasHomepageRsp lastGame.
         * @member {gameProto.ILastGame|null|undefined} lastGame
         * @memberof gameProto.ArenasHomepageRsp
         * @instance
         */
        ArenasHomepageRsp.prototype.lastGame = null;

        /**
         * ArenasHomepageRsp projectList.
         * @member {Array.<gameProto.IProject>} projectList
         * @memberof gameProto.ArenasHomepageRsp
         * @instance
         */
        ArenasHomepageRsp.prototype.projectList = $util.emptyArray;

        /**
         * Creates a new ArenasHomepageRsp instance using the specified properties.
         * @function create
         * @memberof gameProto.ArenasHomepageRsp
         * @static
         * @param {gameProto.IArenasHomepageRsp=} [properties] Properties to set
         * @returns {gameProto.ArenasHomepageRsp} ArenasHomepageRsp instance
         */
        ArenasHomepageRsp.create = function create(properties) {
            return new ArenasHomepageRsp(properties);
        };

        /**
         * Encodes the specified ArenasHomepageRsp message. Does not implicitly {@link gameProto.ArenasHomepageRsp.verify|verify} messages.
         * @function encode
         * @memberof gameProto.ArenasHomepageRsp
         * @static
         * @param {gameProto.IArenasHomepageRsp} message ArenasHomepageRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasHomepageRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.player != null && message.hasOwnProperty("player"))
                $root.gameProto.Player.encode(message.player, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.playMedal != null && message.hasOwnProperty("playMedal"))
                $root.gameProto.PlayerMedal.encode(message.playMedal, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.lastGame != null && message.hasOwnProperty("lastGame"))
                $root.gameProto.LastGame.encode(message.lastGame, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.projectList != null && message.projectList.length)
                for (var i = 0; i < message.projectList.length; ++i)
                    $root.gameProto.Project.encode(message.projectList[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ArenasHomepageRsp message, length delimited. Does not implicitly {@link gameProto.ArenasHomepageRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.ArenasHomepageRsp
         * @static
         * @param {gameProto.IArenasHomepageRsp} message ArenasHomepageRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasHomepageRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArenasHomepageRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.ArenasHomepageRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.ArenasHomepageRsp} ArenasHomepageRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasHomepageRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.ArenasHomepageRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                case 3:
                    message.player = $root.gameProto.Player.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.playMedal = $root.gameProto.PlayerMedal.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.lastGame = $root.gameProto.LastGame.decode(reader, reader.uint32());
                    break;
                case 6:
                    if (!(message.projectList && message.projectList.length))
                        message.projectList = [];
                    message.projectList.push($root.gameProto.Project.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArenasHomepageRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.ArenasHomepageRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.ArenasHomepageRsp} ArenasHomepageRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasHomepageRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArenasHomepageRsp message.
         * @function verify
         * @memberof gameProto.ArenasHomepageRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArenasHomepageRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.gameProto.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            if (message.playMedal != null && message.hasOwnProperty("playMedal")) {
                var error = $root.gameProto.PlayerMedal.verify(message.playMedal);
                if (error)
                    return "playMedal." + error;
            }
            if (message.lastGame != null && message.hasOwnProperty("lastGame")) {
                var error = $root.gameProto.LastGame.verify(message.lastGame);
                if (error)
                    return "lastGame." + error;
            }
            if (message.projectList != null && message.hasOwnProperty("projectList")) {
                if (!Array.isArray(message.projectList))
                    return "projectList: array expected";
                for (var i = 0; i < message.projectList.length; ++i) {
                    var error = $root.gameProto.Project.verify(message.projectList[i]);
                    if (error)
                        return "projectList." + error;
                }
            }
            return null;
        };

        return ArenasHomepageRsp;
    })();

    gameProto.PlayerMedal = (function() {

        /**
         * Properties of a PlayerMedal.
         * @memberof gameProto
         * @interface IPlayerMedal
         * @property {gameProto.IMedal|null} [medal] PlayerMedal medal
         * @property {gameProto.IScore|null} [score] PlayerMedal score
         * @property {number|null} [total] PlayerMedal total
         * @property {number|null} [rate] PlayerMedal rate
         */

        /**
         * Constructs a new PlayerMedal.
         * @memberof gameProto
         * @classdesc Represents a PlayerMedal.
         * @implements IPlayerMedal
         * @constructor
         * @param {gameProto.IPlayerMedal=} [properties] Properties to set
         */
        function PlayerMedal(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerMedal medal.
         * @member {gameProto.IMedal|null|undefined} medal
         * @memberof gameProto.PlayerMedal
         * @instance
         */
        PlayerMedal.prototype.medal = null;

        /**
         * PlayerMedal score.
         * @member {gameProto.IScore|null|undefined} score
         * @memberof gameProto.PlayerMedal
         * @instance
         */
        PlayerMedal.prototype.score = null;

        /**
         * PlayerMedal total.
         * @member {number} total
         * @memberof gameProto.PlayerMedal
         * @instance
         */
        PlayerMedal.prototype.total = 0;

        /**
         * PlayerMedal rate.
         * @member {number} rate
         * @memberof gameProto.PlayerMedal
         * @instance
         */
        PlayerMedal.prototype.rate = 0;

        /**
         * Creates a new PlayerMedal instance using the specified properties.
         * @function create
         * @memberof gameProto.PlayerMedal
         * @static
         * @param {gameProto.IPlayerMedal=} [properties] Properties to set
         * @returns {gameProto.PlayerMedal} PlayerMedal instance
         */
        PlayerMedal.create = function create(properties) {
            return new PlayerMedal(properties);
        };

        /**
         * Encodes the specified PlayerMedal message. Does not implicitly {@link gameProto.PlayerMedal.verify|verify} messages.
         * @function encode
         * @memberof gameProto.PlayerMedal
         * @static
         * @param {gameProto.IPlayerMedal} message PlayerMedal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerMedal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.medal != null && message.hasOwnProperty("medal"))
                $root.gameProto.Medal.encode(message.medal, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.score != null && message.hasOwnProperty("score"))
                $root.gameProto.Score.encode(message.score, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.total != null && message.hasOwnProperty("total"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.total);
            if (message.rate != null && message.hasOwnProperty("rate"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.rate);
            return writer;
        };

        /**
         * Encodes the specified PlayerMedal message, length delimited. Does not implicitly {@link gameProto.PlayerMedal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.PlayerMedal
         * @static
         * @param {gameProto.IPlayerMedal} message PlayerMedal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerMedal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerMedal message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.PlayerMedal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.PlayerMedal} PlayerMedal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerMedal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.PlayerMedal();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.medal = $root.gameProto.Medal.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.score = $root.gameProto.Score.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.total = reader.int32();
                    break;
                case 4:
                    message.rate = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerMedal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.PlayerMedal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.PlayerMedal} PlayerMedal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerMedal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerMedal message.
         * @function verify
         * @memberof gameProto.PlayerMedal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerMedal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.medal != null && message.hasOwnProperty("medal")) {
                var error = $root.gameProto.Medal.verify(message.medal);
                if (error)
                    return "medal." + error;
            }
            if (message.score != null && message.hasOwnProperty("score")) {
                var error = $root.gameProto.Score.verify(message.score);
                if (error)
                    return "score." + error;
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            if (message.rate != null && message.hasOwnProperty("rate"))
                if (typeof message.rate !== "number")
                    return "rate: number expected";
            return null;
        };

        return PlayerMedal;
    })();

    gameProto.LastGame = (function() {

        /**
         * Properties of a LastGame.
         * @memberof gameProto
         * @interface ILastGame
         * @property {gameProto.IProject|null} [project] LastGame project
         * @property {gameProto.IScore|null} [score] LastGame score
         * @property {number|null} [rank] LastGame rank
         */

        /**
         * Constructs a new LastGame.
         * @memberof gameProto
         * @classdesc Represents a LastGame.
         * @implements ILastGame
         * @constructor
         * @param {gameProto.ILastGame=} [properties] Properties to set
         */
        function LastGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LastGame project.
         * @member {gameProto.IProject|null|undefined} project
         * @memberof gameProto.LastGame
         * @instance
         */
        LastGame.prototype.project = null;

        /**
         * LastGame score.
         * @member {gameProto.IScore|null|undefined} score
         * @memberof gameProto.LastGame
         * @instance
         */
        LastGame.prototype.score = null;

        /**
         * LastGame rank.
         * @member {number} rank
         * @memberof gameProto.LastGame
         * @instance
         */
        LastGame.prototype.rank = 0;

        /**
         * Creates a new LastGame instance using the specified properties.
         * @function create
         * @memberof gameProto.LastGame
         * @static
         * @param {gameProto.ILastGame=} [properties] Properties to set
         * @returns {gameProto.LastGame} LastGame instance
         */
        LastGame.create = function create(properties) {
            return new LastGame(properties);
        };

        /**
         * Encodes the specified LastGame message. Does not implicitly {@link gameProto.LastGame.verify|verify} messages.
         * @function encode
         * @memberof gameProto.LastGame
         * @static
         * @param {gameProto.ILastGame} message LastGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LastGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.project != null && message.hasOwnProperty("project"))
                $root.gameProto.Project.encode(message.project, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.score != null && message.hasOwnProperty("score"))
                $root.gameProto.Score.encode(message.score, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.rank != null && message.hasOwnProperty("rank"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.rank);
            return writer;
        };

        /**
         * Encodes the specified LastGame message, length delimited. Does not implicitly {@link gameProto.LastGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.LastGame
         * @static
         * @param {gameProto.ILastGame} message LastGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LastGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LastGame message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.LastGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.LastGame} LastGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LastGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.LastGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.project = $root.gameProto.Project.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.score = $root.gameProto.Score.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.rank = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LastGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.LastGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.LastGame} LastGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LastGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LastGame message.
         * @function verify
         * @memberof gameProto.LastGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LastGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.project != null && message.hasOwnProperty("project")) {
                var error = $root.gameProto.Project.verify(message.project);
                if (error)
                    return "project." + error;
            }
            if (message.score != null && message.hasOwnProperty("score")) {
                var error = $root.gameProto.Score.verify(message.score);
                if (error)
                    return "score." + error;
            }
            if (message.rank != null && message.hasOwnProperty("rank"))
                if (!$util.isInteger(message.rank))
                    return "rank: integer expected";
            return null;
        };

        return LastGame;
    })();

    gameProto.ArenasMatchPlayerReq = (function() {

        /**
         * Properties of an ArenasMatchPlayerReq.
         * @memberof gameProto
         * @interface IArenasMatchPlayerReq
         * @property {number|Long|null} [projectId] ArenasMatchPlayerReq projectId
         */

        /**
         * Constructs a new ArenasMatchPlayerReq.
         * @memberof gameProto
         * @classdesc Represents an ArenasMatchPlayerReq.
         * @implements IArenasMatchPlayerReq
         * @constructor
         * @param {gameProto.IArenasMatchPlayerReq=} [properties] Properties to set
         */
        function ArenasMatchPlayerReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArenasMatchPlayerReq projectId.
         * @member {number|Long} projectId
         * @memberof gameProto.ArenasMatchPlayerReq
         * @instance
         */
        ArenasMatchPlayerReq.prototype.projectId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ArenasMatchPlayerReq instance using the specified properties.
         * @function create
         * @memberof gameProto.ArenasMatchPlayerReq
         * @static
         * @param {gameProto.IArenasMatchPlayerReq=} [properties] Properties to set
         * @returns {gameProto.ArenasMatchPlayerReq} ArenasMatchPlayerReq instance
         */
        ArenasMatchPlayerReq.create = function create(properties) {
            return new ArenasMatchPlayerReq(properties);
        };

        /**
         * Encodes the specified ArenasMatchPlayerReq message. Does not implicitly {@link gameProto.ArenasMatchPlayerReq.verify|verify} messages.
         * @function encode
         * @memberof gameProto.ArenasMatchPlayerReq
         * @static
         * @param {gameProto.IArenasMatchPlayerReq} message ArenasMatchPlayerReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasMatchPlayerReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.projectId != null && message.hasOwnProperty("projectId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.projectId);
            return writer;
        };

        /**
         * Encodes the specified ArenasMatchPlayerReq message, length delimited. Does not implicitly {@link gameProto.ArenasMatchPlayerReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.ArenasMatchPlayerReq
         * @static
         * @param {gameProto.IArenasMatchPlayerReq} message ArenasMatchPlayerReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasMatchPlayerReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArenasMatchPlayerReq message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.ArenasMatchPlayerReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.ArenasMatchPlayerReq} ArenasMatchPlayerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasMatchPlayerReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.ArenasMatchPlayerReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArenasMatchPlayerReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.ArenasMatchPlayerReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.ArenasMatchPlayerReq} ArenasMatchPlayerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasMatchPlayerReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArenasMatchPlayerReq message.
         * @function verify
         * @memberof gameProto.ArenasMatchPlayerReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArenasMatchPlayerReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.projectId != null && message.hasOwnProperty("projectId"))
                if (!$util.isInteger(message.projectId) && !(message.projectId && $util.isInteger(message.projectId.low) && $util.isInteger(message.projectId.high)))
                    return "projectId: integer|Long expected";
            return null;
        };

        return ArenasMatchPlayerReq;
    })();

    gameProto.ArenasMatchPlayerRsp = (function() {

        /**
         * Properties of an ArenasMatchPlayerRsp.
         * @memberof gameProto
         * @interface IArenasMatchPlayerRsp
         * @property {number|null} [code] ArenasMatchPlayerRsp code
         * @property {string|null} [msg] ArenasMatchPlayerRsp msg
         * @property {Array.<gameProto.IMatchInfo>|null} [matchInfo] ArenasMatchPlayerRsp matchInfo
         * @property {number|Long|null} [matchId] ArenasMatchPlayerRsp matchId
         */

        /**
         * Constructs a new ArenasMatchPlayerRsp.
         * @memberof gameProto
         * @classdesc Represents an ArenasMatchPlayerRsp.
         * @implements IArenasMatchPlayerRsp
         * @constructor
         * @param {gameProto.IArenasMatchPlayerRsp=} [properties] Properties to set
         */
        function ArenasMatchPlayerRsp(properties) {
            this.matchInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArenasMatchPlayerRsp code.
         * @member {number} code
         * @memberof gameProto.ArenasMatchPlayerRsp
         * @instance
         */
        ArenasMatchPlayerRsp.prototype.code = 0;

        /**
         * ArenasMatchPlayerRsp msg.
         * @member {string} msg
         * @memberof gameProto.ArenasMatchPlayerRsp
         * @instance
         */
        ArenasMatchPlayerRsp.prototype.msg = "";

        /**
         * ArenasMatchPlayerRsp matchInfo.
         * @member {Array.<gameProto.IMatchInfo>} matchInfo
         * @memberof gameProto.ArenasMatchPlayerRsp
         * @instance
         */
        ArenasMatchPlayerRsp.prototype.matchInfo = $util.emptyArray;

        /**
         * ArenasMatchPlayerRsp matchId.
         * @member {number|Long} matchId
         * @memberof gameProto.ArenasMatchPlayerRsp
         * @instance
         */
        ArenasMatchPlayerRsp.prototype.matchId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ArenasMatchPlayerRsp instance using the specified properties.
         * @function create
         * @memberof gameProto.ArenasMatchPlayerRsp
         * @static
         * @param {gameProto.IArenasMatchPlayerRsp=} [properties] Properties to set
         * @returns {gameProto.ArenasMatchPlayerRsp} ArenasMatchPlayerRsp instance
         */
        ArenasMatchPlayerRsp.create = function create(properties) {
            return new ArenasMatchPlayerRsp(properties);
        };

        /**
         * Encodes the specified ArenasMatchPlayerRsp message. Does not implicitly {@link gameProto.ArenasMatchPlayerRsp.verify|verify} messages.
         * @function encode
         * @memberof gameProto.ArenasMatchPlayerRsp
         * @static
         * @param {gameProto.IArenasMatchPlayerRsp} message ArenasMatchPlayerRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasMatchPlayerRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.matchInfo != null && message.matchInfo.length)
                for (var i = 0; i < message.matchInfo.length; ++i)
                    $root.gameProto.MatchInfo.encode(message.matchInfo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.matchId);
            return writer;
        };

        /**
         * Encodes the specified ArenasMatchPlayerRsp message, length delimited. Does not implicitly {@link gameProto.ArenasMatchPlayerRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.ArenasMatchPlayerRsp
         * @static
         * @param {gameProto.IArenasMatchPlayerRsp} message ArenasMatchPlayerRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasMatchPlayerRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArenasMatchPlayerRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.ArenasMatchPlayerRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.ArenasMatchPlayerRsp} ArenasMatchPlayerRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasMatchPlayerRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.ArenasMatchPlayerRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                case 3:
                    if (!(message.matchInfo && message.matchInfo.length))
                        message.matchInfo = [];
                    message.matchInfo.push($root.gameProto.MatchInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.matchId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArenasMatchPlayerRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.ArenasMatchPlayerRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.ArenasMatchPlayerRsp} ArenasMatchPlayerRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasMatchPlayerRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArenasMatchPlayerRsp message.
         * @function verify
         * @memberof gameProto.ArenasMatchPlayerRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArenasMatchPlayerRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.matchInfo != null && message.hasOwnProperty("matchInfo")) {
                if (!Array.isArray(message.matchInfo))
                    return "matchInfo: array expected";
                for (var i = 0; i < message.matchInfo.length; ++i) {
                    var error = $root.gameProto.MatchInfo.verify(message.matchInfo[i]);
                    if (error)
                        return "matchInfo." + error;
                }
            }
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                if (!$util.isInteger(message.matchId) && !(message.matchId && $util.isInteger(message.matchId.low) && $util.isInteger(message.matchId.high)))
                    return "matchId: integer|Long expected";
            return null;
        };

        return ArenasMatchPlayerRsp;
    })();

    gameProto.MatchInfo = (function() {

        /**
         * Properties of a MatchInfo.
         * @memberof gameProto
         * @interface IMatchInfo
         * @property {gameProto.IPlayer|null} [player] MatchInfo player
         * @property {gameProto.IMedal|null} [medal] MatchInfo medal
         * @property {Array.<gameProto.IAction>|null} [actionList] MatchInfo actionList
         */

        /**
         * Constructs a new MatchInfo.
         * @memberof gameProto
         * @classdesc Represents a MatchInfo.
         * @implements IMatchInfo
         * @constructor
         * @param {gameProto.IMatchInfo=} [properties] Properties to set
         */
        function MatchInfo(properties) {
            this.actionList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchInfo player.
         * @member {gameProto.IPlayer|null|undefined} player
         * @memberof gameProto.MatchInfo
         * @instance
         */
        MatchInfo.prototype.player = null;

        /**
         * MatchInfo medal.
         * @member {gameProto.IMedal|null|undefined} medal
         * @memberof gameProto.MatchInfo
         * @instance
         */
        MatchInfo.prototype.medal = null;

        /**
         * MatchInfo actionList.
         * @member {Array.<gameProto.IAction>} actionList
         * @memberof gameProto.MatchInfo
         * @instance
         */
        MatchInfo.prototype.actionList = $util.emptyArray;

        /**
         * Creates a new MatchInfo instance using the specified properties.
         * @function create
         * @memberof gameProto.MatchInfo
         * @static
         * @param {gameProto.IMatchInfo=} [properties] Properties to set
         * @returns {gameProto.MatchInfo} MatchInfo instance
         */
        MatchInfo.create = function create(properties) {
            return new MatchInfo(properties);
        };

        /**
         * Encodes the specified MatchInfo message. Does not implicitly {@link gameProto.MatchInfo.verify|verify} messages.
         * @function encode
         * @memberof gameProto.MatchInfo
         * @static
         * @param {gameProto.IMatchInfo} message MatchInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && message.hasOwnProperty("player"))
                $root.gameProto.Player.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.medal != null && message.hasOwnProperty("medal"))
                $root.gameProto.Medal.encode(message.medal, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.actionList != null && message.actionList.length)
                for (var i = 0; i < message.actionList.length; ++i)
                    $root.gameProto.Action.encode(message.actionList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MatchInfo message, length delimited. Does not implicitly {@link gameProto.MatchInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.MatchInfo
         * @static
         * @param {gameProto.IMatchInfo} message MatchInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchInfo message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.MatchInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.MatchInfo} MatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.MatchInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = $root.gameProto.Player.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.medal = $root.gameProto.Medal.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.actionList && message.actionList.length))
                        message.actionList = [];
                    message.actionList.push($root.gameProto.Action.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MatchInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.MatchInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.MatchInfo} MatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchInfo message.
         * @function verify
         * @memberof gameProto.MatchInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.gameProto.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            if (message.medal != null && message.hasOwnProperty("medal")) {
                var error = $root.gameProto.Medal.verify(message.medal);
                if (error)
                    return "medal." + error;
            }
            if (message.actionList != null && message.hasOwnProperty("actionList")) {
                if (!Array.isArray(message.actionList))
                    return "actionList: array expected";
                for (var i = 0; i < message.actionList.length; ++i) {
                    var error = $root.gameProto.Action.verify(message.actionList[i]);
                    if (error)
                        return "actionList." + error;
                }
            }
            return null;
        };

        return MatchInfo;
    })();

    gameProto.Action = (function() {

        /**
         * Properties of an Action.
         * @memberof gameProto
         * @interface IAction
         * @property {gameProto.IProjectAction|null} [action] Action action
         * @property {string|null} [processUrl] Action processUrl
         */

        /**
         * Constructs a new Action.
         * @memberof gameProto
         * @classdesc Represents an Action.
         * @implements IAction
         * @constructor
         * @param {gameProto.IAction=} [properties] Properties to set
         */
        function Action(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Action action.
         * @member {gameProto.IProjectAction|null|undefined} action
         * @memberof gameProto.Action
         * @instance
         */
        Action.prototype.action = null;

        /**
         * Action processUrl.
         * @member {string} processUrl
         * @memberof gameProto.Action
         * @instance
         */
        Action.prototype.processUrl = "";

        /**
         * Creates a new Action instance using the specified properties.
         * @function create
         * @memberof gameProto.Action
         * @static
         * @param {gameProto.IAction=} [properties] Properties to set
         * @returns {gameProto.Action} Action instance
         */
        Action.create = function create(properties) {
            return new Action(properties);
        };

        /**
         * Encodes the specified Action message. Does not implicitly {@link gameProto.Action.verify|verify} messages.
         * @function encode
         * @memberof gameProto.Action
         * @static
         * @param {gameProto.IAction} message Action message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Action.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && message.hasOwnProperty("action"))
                $root.gameProto.ProjectAction.encode(message.action, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.processUrl != null && message.hasOwnProperty("processUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.processUrl);
            return writer;
        };

        /**
         * Encodes the specified Action message, length delimited. Does not implicitly {@link gameProto.Action.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.Action
         * @static
         * @param {gameProto.IAction} message Action message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Action.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.Action
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.Action} Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Action.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.Action();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.action = $root.gameProto.ProjectAction.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.processUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Action message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.Action
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.Action} Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Action.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Action message.
         * @function verify
         * @memberof gameProto.Action
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Action.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action")) {
                var error = $root.gameProto.ProjectAction.verify(message.action);
                if (error)
                    return "action." + error;
            }
            if (message.processUrl != null && message.hasOwnProperty("processUrl"))
                if (!$util.isString(message.processUrl))
                    return "processUrl: string expected";
            return null;
        };

        return Action;
    })();

    gameProto.ArenasRaceRecordsReq = (function() {

        /**
         * Properties of an ArenasRaceRecordsReq.
         * @memberof gameProto
         * @interface IArenasRaceRecordsReq
         * @property {gameProto.IPage|null} [page] ArenasRaceRecordsReq page
         */

        /**
         * Constructs a new ArenasRaceRecordsReq.
         * @memberof gameProto
         * @classdesc Represents an ArenasRaceRecordsReq.
         * @implements IArenasRaceRecordsReq
         * @constructor
         * @param {gameProto.IArenasRaceRecordsReq=} [properties] Properties to set
         */
        function ArenasRaceRecordsReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArenasRaceRecordsReq page.
         * @member {gameProto.IPage|null|undefined} page
         * @memberof gameProto.ArenasRaceRecordsReq
         * @instance
         */
        ArenasRaceRecordsReq.prototype.page = null;

        /**
         * Creates a new ArenasRaceRecordsReq instance using the specified properties.
         * @function create
         * @memberof gameProto.ArenasRaceRecordsReq
         * @static
         * @param {gameProto.IArenasRaceRecordsReq=} [properties] Properties to set
         * @returns {gameProto.ArenasRaceRecordsReq} ArenasRaceRecordsReq instance
         */
        ArenasRaceRecordsReq.create = function create(properties) {
            return new ArenasRaceRecordsReq(properties);
        };

        /**
         * Encodes the specified ArenasRaceRecordsReq message. Does not implicitly {@link gameProto.ArenasRaceRecordsReq.verify|verify} messages.
         * @function encode
         * @memberof gameProto.ArenasRaceRecordsReq
         * @static
         * @param {gameProto.IArenasRaceRecordsReq} message ArenasRaceRecordsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasRaceRecordsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && message.hasOwnProperty("page"))
                $root.gameProto.Page.encode(message.page, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ArenasRaceRecordsReq message, length delimited. Does not implicitly {@link gameProto.ArenasRaceRecordsReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.ArenasRaceRecordsReq
         * @static
         * @param {gameProto.IArenasRaceRecordsReq} message ArenasRaceRecordsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasRaceRecordsReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArenasRaceRecordsReq message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.ArenasRaceRecordsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.ArenasRaceRecordsReq} ArenasRaceRecordsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasRaceRecordsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.ArenasRaceRecordsReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.page = $root.gameProto.Page.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArenasRaceRecordsReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.ArenasRaceRecordsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.ArenasRaceRecordsReq} ArenasRaceRecordsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasRaceRecordsReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArenasRaceRecordsReq message.
         * @function verify
         * @memberof gameProto.ArenasRaceRecordsReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArenasRaceRecordsReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page != null && message.hasOwnProperty("page")) {
                var error = $root.gameProto.Page.verify(message.page);
                if (error)
                    return "page." + error;
            }
            return null;
        };

        return ArenasRaceRecordsReq;
    })();

    gameProto.ArenasRaceRecordsRsp = (function() {

        /**
         * Properties of an ArenasRaceRecordsRsp.
         * @memberof gameProto
         * @interface IArenasRaceRecordsRsp
         * @property {number|null} [code] ArenasRaceRecordsRsp code
         * @property {string|null} [msg] ArenasRaceRecordsRsp msg
         * @property {number|null} [total] ArenasRaceRecordsRsp total
         * @property {Array.<gameProto.IRaceRecords>|null} [records] ArenasRaceRecordsRsp records
         */

        /**
         * Constructs a new ArenasRaceRecordsRsp.
         * @memberof gameProto
         * @classdesc Represents an ArenasRaceRecordsRsp.
         * @implements IArenasRaceRecordsRsp
         * @constructor
         * @param {gameProto.IArenasRaceRecordsRsp=} [properties] Properties to set
         */
        function ArenasRaceRecordsRsp(properties) {
            this.records = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArenasRaceRecordsRsp code.
         * @member {number} code
         * @memberof gameProto.ArenasRaceRecordsRsp
         * @instance
         */
        ArenasRaceRecordsRsp.prototype.code = 0;

        /**
         * ArenasRaceRecordsRsp msg.
         * @member {string} msg
         * @memberof gameProto.ArenasRaceRecordsRsp
         * @instance
         */
        ArenasRaceRecordsRsp.prototype.msg = "";

        /**
         * ArenasRaceRecordsRsp total.
         * @member {number} total
         * @memberof gameProto.ArenasRaceRecordsRsp
         * @instance
         */
        ArenasRaceRecordsRsp.prototype.total = 0;

        /**
         * ArenasRaceRecordsRsp records.
         * @member {Array.<gameProto.IRaceRecords>} records
         * @memberof gameProto.ArenasRaceRecordsRsp
         * @instance
         */
        ArenasRaceRecordsRsp.prototype.records = $util.emptyArray;

        /**
         * Creates a new ArenasRaceRecordsRsp instance using the specified properties.
         * @function create
         * @memberof gameProto.ArenasRaceRecordsRsp
         * @static
         * @param {gameProto.IArenasRaceRecordsRsp=} [properties] Properties to set
         * @returns {gameProto.ArenasRaceRecordsRsp} ArenasRaceRecordsRsp instance
         */
        ArenasRaceRecordsRsp.create = function create(properties) {
            return new ArenasRaceRecordsRsp(properties);
        };

        /**
         * Encodes the specified ArenasRaceRecordsRsp message. Does not implicitly {@link gameProto.ArenasRaceRecordsRsp.verify|verify} messages.
         * @function encode
         * @memberof gameProto.ArenasRaceRecordsRsp
         * @static
         * @param {gameProto.IArenasRaceRecordsRsp} message ArenasRaceRecordsRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasRaceRecordsRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.total != null && message.hasOwnProperty("total"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.total);
            if (message.records != null && message.records.length)
                for (var i = 0; i < message.records.length; ++i)
                    $root.gameProto.RaceRecords.encode(message.records[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ArenasRaceRecordsRsp message, length delimited. Does not implicitly {@link gameProto.ArenasRaceRecordsRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.ArenasRaceRecordsRsp
         * @static
         * @param {gameProto.IArenasRaceRecordsRsp} message ArenasRaceRecordsRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasRaceRecordsRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArenasRaceRecordsRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.ArenasRaceRecordsRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.ArenasRaceRecordsRsp} ArenasRaceRecordsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasRaceRecordsRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.ArenasRaceRecordsRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                case 3:
                    message.total = reader.int32();
                    break;
                case 4:
                    if (!(message.records && message.records.length))
                        message.records = [];
                    message.records.push($root.gameProto.RaceRecords.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArenasRaceRecordsRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.ArenasRaceRecordsRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.ArenasRaceRecordsRsp} ArenasRaceRecordsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasRaceRecordsRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArenasRaceRecordsRsp message.
         * @function verify
         * @memberof gameProto.ArenasRaceRecordsRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArenasRaceRecordsRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            if (message.records != null && message.hasOwnProperty("records")) {
                if (!Array.isArray(message.records))
                    return "records: array expected";
                for (var i = 0; i < message.records.length; ++i) {
                    var error = $root.gameProto.RaceRecords.verify(message.records[i]);
                    if (error)
                        return "records." + error;
                }
            }
            return null;
        };

        return ArenasRaceRecordsRsp;
    })();

    gameProto.RaceRecords = (function() {

        /**
         * Properties of a RaceRecords.
         * @memberof gameProto
         * @interface IRaceRecords
         * @property {gameProto.IProject|null} [project] RaceRecords project
         * @property {number|null} [rank] RaceRecords rank
         * @property {Array.<gameProto.IActionScore>|null} [scoreList] RaceRecords scoreList
         * @property {string|null} [createTime] RaceRecords createTime
         * @property {number|Long|null} [matchId] RaceRecords matchId
         */

        /**
         * Constructs a new RaceRecords.
         * @memberof gameProto
         * @classdesc Represents a RaceRecords.
         * @implements IRaceRecords
         * @constructor
         * @param {gameProto.IRaceRecords=} [properties] Properties to set
         */
        function RaceRecords(properties) {
            this.scoreList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RaceRecords project.
         * @member {gameProto.IProject|null|undefined} project
         * @memberof gameProto.RaceRecords
         * @instance
         */
        RaceRecords.prototype.project = null;

        /**
         * RaceRecords rank.
         * @member {number} rank
         * @memberof gameProto.RaceRecords
         * @instance
         */
        RaceRecords.prototype.rank = 0;

        /**
         * RaceRecords scoreList.
         * @member {Array.<gameProto.IActionScore>} scoreList
         * @memberof gameProto.RaceRecords
         * @instance
         */
        RaceRecords.prototype.scoreList = $util.emptyArray;

        /**
         * RaceRecords createTime.
         * @member {string} createTime
         * @memberof gameProto.RaceRecords
         * @instance
         */
        RaceRecords.prototype.createTime = "";

        /**
         * RaceRecords matchId.
         * @member {number|Long} matchId
         * @memberof gameProto.RaceRecords
         * @instance
         */
        RaceRecords.prototype.matchId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RaceRecords instance using the specified properties.
         * @function create
         * @memberof gameProto.RaceRecords
         * @static
         * @param {gameProto.IRaceRecords=} [properties] Properties to set
         * @returns {gameProto.RaceRecords} RaceRecords instance
         */
        RaceRecords.create = function create(properties) {
            return new RaceRecords(properties);
        };

        /**
         * Encodes the specified RaceRecords message. Does not implicitly {@link gameProto.RaceRecords.verify|verify} messages.
         * @function encode
         * @memberof gameProto.RaceRecords
         * @static
         * @param {gameProto.IRaceRecords} message RaceRecords message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RaceRecords.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.project != null && message.hasOwnProperty("project"))
                $root.gameProto.Project.encode(message.project, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.rank != null && message.hasOwnProperty("rank"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rank);
            if (message.scoreList != null && message.scoreList.length)
                for (var i = 0; i < message.scoreList.length; ++i)
                    $root.gameProto.ActionScore.encode(message.scoreList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.createTime);
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.matchId);
            return writer;
        };

        /**
         * Encodes the specified RaceRecords message, length delimited. Does not implicitly {@link gameProto.RaceRecords.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.RaceRecords
         * @static
         * @param {gameProto.IRaceRecords} message RaceRecords message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RaceRecords.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RaceRecords message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.RaceRecords
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.RaceRecords} RaceRecords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RaceRecords.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.RaceRecords();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.project = $root.gameProto.Project.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.rank = reader.int32();
                    break;
                case 3:
                    if (!(message.scoreList && message.scoreList.length))
                        message.scoreList = [];
                    message.scoreList.push($root.gameProto.ActionScore.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.createTime = reader.string();
                    break;
                case 5:
                    message.matchId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RaceRecords message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.RaceRecords
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.RaceRecords} RaceRecords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RaceRecords.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RaceRecords message.
         * @function verify
         * @memberof gameProto.RaceRecords
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RaceRecords.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.project != null && message.hasOwnProperty("project")) {
                var error = $root.gameProto.Project.verify(message.project);
                if (error)
                    return "project." + error;
            }
            if (message.rank != null && message.hasOwnProperty("rank"))
                if (!$util.isInteger(message.rank))
                    return "rank: integer expected";
            if (message.scoreList != null && message.hasOwnProperty("scoreList")) {
                if (!Array.isArray(message.scoreList))
                    return "scoreList: array expected";
                for (var i = 0; i < message.scoreList.length; ++i) {
                    var error = $root.gameProto.ActionScore.verify(message.scoreList[i]);
                    if (error)
                        return "scoreList." + error;
                }
            }
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isString(message.createTime))
                    return "createTime: string expected";
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                if (!$util.isInteger(message.matchId) && !(message.matchId && $util.isInteger(message.matchId.low) && $util.isInteger(message.matchId.high)))
                    return "matchId: integer|Long expected";
            return null;
        };

        return RaceRecords;
    })();

    gameProto.ActionScore = (function() {

        /**
         * Properties of an ActionScore.
         * @memberof gameProto
         * @interface IActionScore
         * @property {gameProto.IProjectAction|null} [action] ActionScore action
         * @property {number|null} [rank] ActionScore rank
         */

        /**
         * Constructs a new ActionScore.
         * @memberof gameProto
         * @classdesc Represents an ActionScore.
         * @implements IActionScore
         * @constructor
         * @param {gameProto.IActionScore=} [properties] Properties to set
         */
        function ActionScore(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActionScore action.
         * @member {gameProto.IProjectAction|null|undefined} action
         * @memberof gameProto.ActionScore
         * @instance
         */
        ActionScore.prototype.action = null;

        /**
         * ActionScore rank.
         * @member {number} rank
         * @memberof gameProto.ActionScore
         * @instance
         */
        ActionScore.prototype.rank = 0;

        /**
         * Creates a new ActionScore instance using the specified properties.
         * @function create
         * @memberof gameProto.ActionScore
         * @static
         * @param {gameProto.IActionScore=} [properties] Properties to set
         * @returns {gameProto.ActionScore} ActionScore instance
         */
        ActionScore.create = function create(properties) {
            return new ActionScore(properties);
        };

        /**
         * Encodes the specified ActionScore message. Does not implicitly {@link gameProto.ActionScore.verify|verify} messages.
         * @function encode
         * @memberof gameProto.ActionScore
         * @static
         * @param {gameProto.IActionScore} message ActionScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionScore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && message.hasOwnProperty("action"))
                $root.gameProto.ProjectAction.encode(message.action, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.rank != null && message.hasOwnProperty("rank"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rank);
            return writer;
        };

        /**
         * Encodes the specified ActionScore message, length delimited. Does not implicitly {@link gameProto.ActionScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.ActionScore
         * @static
         * @param {gameProto.IActionScore} message ActionScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActionScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActionScore message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.ActionScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.ActionScore} ActionScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.ActionScore();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.action = $root.gameProto.ProjectAction.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.rank = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ActionScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.ActionScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.ActionScore} ActionScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActionScore.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActionScore message.
         * @function verify
         * @memberof gameProto.ActionScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActionScore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action")) {
                var error = $root.gameProto.ProjectAction.verify(message.action);
                if (error)
                    return "action." + error;
            }
            if (message.rank != null && message.hasOwnProperty("rank"))
                if (!$util.isInteger(message.rank))
                    return "rank: integer expected";
            return null;
        };

        return ActionScore;
    })();

    gameProto.ArenasSingleRankReq = (function() {

        /**
         * Properties of an ArenasSingleRankReq.
         * @memberof gameProto
         * @interface IArenasSingleRankReq
         * @property {number|Long|null} [matchId] ArenasSingleRankReq matchId
         * @property {number|Long|null} [projectItemId] ArenasSingleRankReq projectItemId
         * @property {Array.<gameProto.IArenasPlayerScore>|null} [playerScore] ArenasSingleRankReq playerScore
         */

        /**
         * Constructs a new ArenasSingleRankReq.
         * @memberof gameProto
         * @classdesc Represents an ArenasSingleRankReq.
         * @implements IArenasSingleRankReq
         * @constructor
         * @param {gameProto.IArenasSingleRankReq=} [properties] Properties to set
         */
        function ArenasSingleRankReq(properties) {
            this.playerScore = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArenasSingleRankReq matchId.
         * @member {number|Long} matchId
         * @memberof gameProto.ArenasSingleRankReq
         * @instance
         */
        ArenasSingleRankReq.prototype.matchId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ArenasSingleRankReq projectItemId.
         * @member {number|Long} projectItemId
         * @memberof gameProto.ArenasSingleRankReq
         * @instance
         */
        ArenasSingleRankReq.prototype.projectItemId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ArenasSingleRankReq playerScore.
         * @member {Array.<gameProto.IArenasPlayerScore>} playerScore
         * @memberof gameProto.ArenasSingleRankReq
         * @instance
         */
        ArenasSingleRankReq.prototype.playerScore = $util.emptyArray;

        /**
         * Creates a new ArenasSingleRankReq instance using the specified properties.
         * @function create
         * @memberof gameProto.ArenasSingleRankReq
         * @static
         * @param {gameProto.IArenasSingleRankReq=} [properties] Properties to set
         * @returns {gameProto.ArenasSingleRankReq} ArenasSingleRankReq instance
         */
        ArenasSingleRankReq.create = function create(properties) {
            return new ArenasSingleRankReq(properties);
        };

        /**
         * Encodes the specified ArenasSingleRankReq message. Does not implicitly {@link gameProto.ArenasSingleRankReq.verify|verify} messages.
         * @function encode
         * @memberof gameProto.ArenasSingleRankReq
         * @static
         * @param {gameProto.IArenasSingleRankReq} message ArenasSingleRankReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasSingleRankReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.matchId);
            if (message.projectItemId != null && message.hasOwnProperty("projectItemId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.projectItemId);
            if (message.playerScore != null && message.playerScore.length)
                for (var i = 0; i < message.playerScore.length; ++i)
                    $root.gameProto.ArenasPlayerScore.encode(message.playerScore[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ArenasSingleRankReq message, length delimited. Does not implicitly {@link gameProto.ArenasSingleRankReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.ArenasSingleRankReq
         * @static
         * @param {gameProto.IArenasSingleRankReq} message ArenasSingleRankReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasSingleRankReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArenasSingleRankReq message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.ArenasSingleRankReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.ArenasSingleRankReq} ArenasSingleRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasSingleRankReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.ArenasSingleRankReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.matchId = reader.int64();
                    break;
                case 2:
                    message.projectItemId = reader.int64();
                    break;
                case 3:
                    if (!(message.playerScore && message.playerScore.length))
                        message.playerScore = [];
                    message.playerScore.push($root.gameProto.ArenasPlayerScore.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArenasSingleRankReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.ArenasSingleRankReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.ArenasSingleRankReq} ArenasSingleRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasSingleRankReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArenasSingleRankReq message.
         * @function verify
         * @memberof gameProto.ArenasSingleRankReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArenasSingleRankReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                if (!$util.isInteger(message.matchId) && !(message.matchId && $util.isInteger(message.matchId.low) && $util.isInteger(message.matchId.high)))
                    return "matchId: integer|Long expected";
            if (message.projectItemId != null && message.hasOwnProperty("projectItemId"))
                if (!$util.isInteger(message.projectItemId) && !(message.projectItemId && $util.isInteger(message.projectItemId.low) && $util.isInteger(message.projectItemId.high)))
                    return "projectItemId: integer|Long expected";
            if (message.playerScore != null && message.hasOwnProperty("playerScore")) {
                if (!Array.isArray(message.playerScore))
                    return "playerScore: array expected";
                for (var i = 0; i < message.playerScore.length; ++i) {
                    var error = $root.gameProto.ArenasPlayerScore.verify(message.playerScore[i]);
                    if (error)
                        return "playerScore." + error;
                }
            }
            return null;
        };

        return ArenasSingleRankReq;
    })();

    gameProto.ArenasPlayerScore = (function() {

        /**
         * Properties of an ArenasPlayerScore.
         * @memberof gameProto
         * @interface IArenasPlayerScore
         * @property {number|Long|null} [playerId] ArenasPlayerScore playerId
         * @property {number|null} [score] ArenasPlayerScore score
         */

        /**
         * Constructs a new ArenasPlayerScore.
         * @memberof gameProto
         * @classdesc Represents an ArenasPlayerScore.
         * @implements IArenasPlayerScore
         * @constructor
         * @param {gameProto.IArenasPlayerScore=} [properties] Properties to set
         */
        function ArenasPlayerScore(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArenasPlayerScore playerId.
         * @member {number|Long} playerId
         * @memberof gameProto.ArenasPlayerScore
         * @instance
         */
        ArenasPlayerScore.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ArenasPlayerScore score.
         * @member {number} score
         * @memberof gameProto.ArenasPlayerScore
         * @instance
         */
        ArenasPlayerScore.prototype.score = 0;

        /**
         * Creates a new ArenasPlayerScore instance using the specified properties.
         * @function create
         * @memberof gameProto.ArenasPlayerScore
         * @static
         * @param {gameProto.IArenasPlayerScore=} [properties] Properties to set
         * @returns {gameProto.ArenasPlayerScore} ArenasPlayerScore instance
         */
        ArenasPlayerScore.create = function create(properties) {
            return new ArenasPlayerScore(properties);
        };

        /**
         * Encodes the specified ArenasPlayerScore message. Does not implicitly {@link gameProto.ArenasPlayerScore.verify|verify} messages.
         * @function encode
         * @memberof gameProto.ArenasPlayerScore
         * @static
         * @param {gameProto.IArenasPlayerScore} message ArenasPlayerScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasPlayerScore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.score);
            return writer;
        };

        /**
         * Encodes the specified ArenasPlayerScore message, length delimited. Does not implicitly {@link gameProto.ArenasPlayerScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.ArenasPlayerScore
         * @static
         * @param {gameProto.IArenasPlayerScore} message ArenasPlayerScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasPlayerScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArenasPlayerScore message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.ArenasPlayerScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.ArenasPlayerScore} ArenasPlayerScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasPlayerScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.ArenasPlayerScore();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.int64();
                    break;
                case 2:
                    message.score = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArenasPlayerScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.ArenasPlayerScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.ArenasPlayerScore} ArenasPlayerScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasPlayerScore.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArenasPlayerScore message.
         * @function verify
         * @memberof gameProto.ArenasPlayerScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArenasPlayerScore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            return null;
        };

        return ArenasPlayerScore;
    })();

    gameProto.ArenasSingleRankRsp = (function() {

        /**
         * Properties of an ArenasSingleRankRsp.
         * @memberof gameProto
         * @interface IArenasSingleRankRsp
         * @property {number|null} [code] ArenasSingleRankRsp code
         * @property {string|null} [msg] ArenasSingleRankRsp msg
         * @property {Array.<gameProto.IPlayerSingleScore>|null} [scoreList] ArenasSingleRankRsp scoreList
         * @property {number|null} [orderNo] ArenasSingleRankRsp orderNo
         */

        /**
         * Constructs a new ArenasSingleRankRsp.
         * @memberof gameProto
         * @classdesc Represents an ArenasSingleRankRsp.
         * @implements IArenasSingleRankRsp
         * @constructor
         * @param {gameProto.IArenasSingleRankRsp=} [properties] Properties to set
         */
        function ArenasSingleRankRsp(properties) {
            this.scoreList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArenasSingleRankRsp code.
         * @member {number} code
         * @memberof gameProto.ArenasSingleRankRsp
         * @instance
         */
        ArenasSingleRankRsp.prototype.code = 0;

        /**
         * ArenasSingleRankRsp msg.
         * @member {string} msg
         * @memberof gameProto.ArenasSingleRankRsp
         * @instance
         */
        ArenasSingleRankRsp.prototype.msg = "";

        /**
         * ArenasSingleRankRsp scoreList.
         * @member {Array.<gameProto.IPlayerSingleScore>} scoreList
         * @memberof gameProto.ArenasSingleRankRsp
         * @instance
         */
        ArenasSingleRankRsp.prototype.scoreList = $util.emptyArray;

        /**
         * ArenasSingleRankRsp orderNo.
         * @member {number} orderNo
         * @memberof gameProto.ArenasSingleRankRsp
         * @instance
         */
        ArenasSingleRankRsp.prototype.orderNo = 0;

        /**
         * Creates a new ArenasSingleRankRsp instance using the specified properties.
         * @function create
         * @memberof gameProto.ArenasSingleRankRsp
         * @static
         * @param {gameProto.IArenasSingleRankRsp=} [properties] Properties to set
         * @returns {gameProto.ArenasSingleRankRsp} ArenasSingleRankRsp instance
         */
        ArenasSingleRankRsp.create = function create(properties) {
            return new ArenasSingleRankRsp(properties);
        };

        /**
         * Encodes the specified ArenasSingleRankRsp message. Does not implicitly {@link gameProto.ArenasSingleRankRsp.verify|verify} messages.
         * @function encode
         * @memberof gameProto.ArenasSingleRankRsp
         * @static
         * @param {gameProto.IArenasSingleRankRsp} message ArenasSingleRankRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasSingleRankRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.scoreList != null && message.scoreList.length)
                for (var i = 0; i < message.scoreList.length; ++i)
                    $root.gameProto.PlayerSingleScore.encode(message.scoreList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.orderNo != null && message.hasOwnProperty("orderNo"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.orderNo);
            return writer;
        };

        /**
         * Encodes the specified ArenasSingleRankRsp message, length delimited. Does not implicitly {@link gameProto.ArenasSingleRankRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.ArenasSingleRankRsp
         * @static
         * @param {gameProto.IArenasSingleRankRsp} message ArenasSingleRankRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArenasSingleRankRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArenasSingleRankRsp message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.ArenasSingleRankRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.ArenasSingleRankRsp} ArenasSingleRankRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasSingleRankRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.ArenasSingleRankRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                case 3:
                    if (!(message.scoreList && message.scoreList.length))
                        message.scoreList = [];
                    message.scoreList.push($root.gameProto.PlayerSingleScore.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.orderNo = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ArenasSingleRankRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.ArenasSingleRankRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.ArenasSingleRankRsp} ArenasSingleRankRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArenasSingleRankRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArenasSingleRankRsp message.
         * @function verify
         * @memberof gameProto.ArenasSingleRankRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArenasSingleRankRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.scoreList != null && message.hasOwnProperty("scoreList")) {
                if (!Array.isArray(message.scoreList))
                    return "scoreList: array expected";
                for (var i = 0; i < message.scoreList.length; ++i) {
                    var error = $root.gameProto.PlayerSingleScore.verify(message.scoreList[i]);
                    if (error)
                        return "scoreList." + error;
                }
            }
            if (message.orderNo != null && message.hasOwnProperty("orderNo"))
                if (!$util.isInteger(message.orderNo))
                    return "orderNo: integer expected";
            return null;
        };

        return ArenasSingleRankRsp;
    })();

    gameProto.PlayerSingleScore = (function() {

        /**
         * Properties of a PlayerSingleScore.
         * @memberof gameProto
         * @interface IPlayerSingleScore
         * @property {gameProto.IPlayer|null} [player] PlayerSingleScore player
         * @property {gameProto.IMedal|null} [medal] PlayerSingleScore medal
         * @property {gameProto.IScore|null} [score] PlayerSingleScore score
         */

        /**
         * Constructs a new PlayerSingleScore.
         * @memberof gameProto
         * @classdesc Represents a PlayerSingleScore.
         * @implements IPlayerSingleScore
         * @constructor
         * @param {gameProto.IPlayerSingleScore=} [properties] Properties to set
         */
        function PlayerSingleScore(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerSingleScore player.
         * @member {gameProto.IPlayer|null|undefined} player
         * @memberof gameProto.PlayerSingleScore
         * @instance
         */
        PlayerSingleScore.prototype.player = null;

        /**
         * PlayerSingleScore medal.
         * @member {gameProto.IMedal|null|undefined} medal
         * @memberof gameProto.PlayerSingleScore
         * @instance
         */
        PlayerSingleScore.prototype.medal = null;

        /**
         * PlayerSingleScore score.
         * @member {gameProto.IScore|null|undefined} score
         * @memberof gameProto.PlayerSingleScore
         * @instance
         */
        PlayerSingleScore.prototype.score = null;

        /**
         * Creates a new PlayerSingleScore instance using the specified properties.
         * @function create
         * @memberof gameProto.PlayerSingleScore
         * @static
         * @param {gameProto.IPlayerSingleScore=} [properties] Properties to set
         * @returns {gameProto.PlayerSingleScore} PlayerSingleScore instance
         */
        PlayerSingleScore.create = function create(properties) {
            return new PlayerSingleScore(properties);
        };

        /**
         * Encodes the specified PlayerSingleScore message. Does not implicitly {@link gameProto.PlayerSingleScore.verify|verify} messages.
         * @function encode
         * @memberof gameProto.PlayerSingleScore
         * @static
         * @param {gameProto.IPlayerSingleScore} message PlayerSingleScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSingleScore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && message.hasOwnProperty("player"))
                $root.gameProto.Player.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.medal != null && message.hasOwnProperty("medal"))
                $root.gameProto.Medal.encode(message.medal, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.score != null && message.hasOwnProperty("score"))
                $root.gameProto.Score.encode(message.score, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerSingleScore message, length delimited. Does not implicitly {@link gameProto.PlayerSingleScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameProto.PlayerSingleScore
         * @static
         * @param {gameProto.IPlayerSingleScore} message PlayerSingleScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSingleScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerSingleScore message from the specified reader or buffer.
         * @function decode
         * @memberof gameProto.PlayerSingleScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameProto.PlayerSingleScore} PlayerSingleScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSingleScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameProto.PlayerSingleScore();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = $root.gameProto.Player.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.medal = $root.gameProto.Medal.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.score = $root.gameProto.Score.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerSingleScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameProto.PlayerSingleScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameProto.PlayerSingleScore} PlayerSingleScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSingleScore.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerSingleScore message.
         * @function verify
         * @memberof gameProto.PlayerSingleScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerSingleScore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.gameProto.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            if (message.medal != null && message.hasOwnProperty("medal")) {
                var error = $root.gameProto.Medal.verify(message.medal);
                if (error)
                    return "medal." + error;
            }
            if (message.score != null && message.hasOwnProperty("score")) {
                var error = $root.gameProto.Score.verify(message.score);
                if (error)
                    return "score." + error;
            }
            return null;
        };

        return PlayerSingleScore;
    })();

    /**
     * ArenasMessageEnum enum.
     * @name gameProto.ArenasMessageEnum
     * @enum {string}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} ARENAS_HOMEPAGE=1 ARENAS_HOMEPAGE value
     * @property {number} ENTER_BATTLE=2 ENTER_BATTLE value
     * @property {number} MATCH_PLAYER=3 MATCH_PLAYER value
     * @property {number} SINGLE_RANk=4 SINGLE_RANk value
     * @property {number} GAME_OVER=5 GAME_OVER value
     * @property {number} RACE_RECORDS=6 RACE_RECORDS value
     */
    gameProto.ArenasMessageEnum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "ARENAS_HOMEPAGE"] = 1;
        values[valuesById[2] = "ENTER_BATTLE"] = 2;
        values[valuesById[3] = "MATCH_PLAYER"] = 3;
        values[valuesById[4] = "SINGLE_RANk"] = 4;
        values[valuesById[5] = "GAME_OVER"] = 5;
        values[valuesById[6] = "RACE_RECORDS"] = 6;
        return values;
    })();

    return gameProto;
})();
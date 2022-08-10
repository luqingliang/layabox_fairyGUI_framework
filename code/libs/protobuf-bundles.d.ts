type Long = protobuf.Long;

/** Namespace gameProto. */
declare namespace gameProto {

    /** Properties of a Project. */
    interface IProject {

        /** Project projectId */
        projectId?: (number|Long|null);

        /** Project projectName */
        projectName?: (string|null);

        /** Project pict */
        pict?: (string|null);

        /** Project pictPlus */
        pictPlus?: (string|null);

        /** Project pictBattle */
        pictBattle?: (string|null);

        /** Project pictEnd */
        pictEnd?: (string|null);

        /** Project pictProjectName */
        pictProjectName?: (string|null);

        /** Project pictProjectNamePlus */
        pictProjectNamePlus?: (string|null);

        /** Project pictHomepage */
        pictHomepage?: (string|null);
    }

    /** Represents a Project. */
    class Project implements IProject {

        /**
         * Constructs a new Project.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IProject);

        /** Project projectId. */
        public projectId: (number|Long);

        /** Project projectName. */
        public projectName: string;

        /** Project pict. */
        public pict: string;

        /** Project pictPlus. */
        public pictPlus: string;

        /** Project pictBattle. */
        public pictBattle: string;

        /** Project pictEnd. */
        public pictEnd: string;

        /** Project pictProjectName. */
        public pictProjectName: string;

        /** Project pictProjectNamePlus. */
        public pictProjectNamePlus: string;

        /** Project pictHomepage. */
        public pictHomepage: string;

        /**
         * Creates a new Project instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Project instance
         */
        public static create(properties?: gameProto.IProject): gameProto.Project;

        /**
         * Encodes the specified Project message. Does not implicitly {@link gameProto.Project.verify|verify} messages.
         * @param message Project message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IProject, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Project message, length delimited. Does not implicitly {@link gameProto.Project.verify|verify} messages.
         * @param message Project message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IProject, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Project message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.Project;

        /**
         * Decodes a Project message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Project
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.Project;

        /**
         * Verifies a Project message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ProjectAction. */
    interface IProjectAction {

        /** ProjectAction itemId */
        itemId?: (number|Long|null);

        /** ProjectAction actionId */
        actionId?: (number|Long|null);

        /** ProjectAction actionName */
        actionName?: (string|null);

        /** ProjectAction pict */
        pict?: (string|null);

        /** ProjectAction labelName */
        labelName?: (string|null);

        /** ProjectAction model */
        model?: (number|null);

        /** ProjectAction value */
        value?: (string|null);

        /** ProjectAction actionInfoJson */
        actionInfoJson?: (string|null);

        /** ProjectAction pictLabel */
        pictLabel?: (string|null);

        /** ProjectAction gameId */
        gameId?: (number|null);
    }

    /** Represents a ProjectAction. */
    class ProjectAction implements IProjectAction {

        /**
         * Constructs a new ProjectAction.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IProjectAction);

        /** ProjectAction itemId. */
        public itemId: (number|Long);

        /** ProjectAction actionId. */
        public actionId: (number|Long);

        /** ProjectAction actionName. */
        public actionName: string;

        /** ProjectAction pict. */
        public pict: string;

        /** ProjectAction labelName. */
        public labelName: string;

        /** ProjectAction model. */
        public model: number;

        /** ProjectAction value. */
        public value: string;

        /** ProjectAction actionInfoJson. */
        public actionInfoJson: string;

        /** ProjectAction pictLabel. */
        public pictLabel: string;

        /** ProjectAction gameId. */
        public gameId: number;

        /**
         * Creates a new ProjectAction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProjectAction instance
         */
        public static create(properties?: gameProto.IProjectAction): gameProto.ProjectAction;

        /**
         * Encodes the specified ProjectAction message. Does not implicitly {@link gameProto.ProjectAction.verify|verify} messages.
         * @param message ProjectAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IProjectAction, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ProjectAction message, length delimited. Does not implicitly {@link gameProto.ProjectAction.verify|verify} messages.
         * @param message ProjectAction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IProjectAction, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ProjectAction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProjectAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.ProjectAction;

        /**
         * Decodes a ProjectAction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProjectAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.ProjectAction;

        /**
         * Verifies a ProjectAction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Player. */
    interface IPlayer {

        /** Player playerId */
        playerId?: (number|Long|null);

        /** Player userId */
        userId?: (number|Long|null);

        /** Player nickName */
        nickName?: (string|null);

        /** Player avatarUrl */
        avatarUrl?: (string|null);

        /** Player winCount */
        winCount?: (number|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IPlayer);

        /** Player playerId. */
        public playerId: (number|Long);

        /** Player userId. */
        public userId: (number|Long);

        /** Player nickName. */
        public nickName: string;

        /** Player avatarUrl. */
        public avatarUrl: string;

        /** Player winCount. */
        public winCount: number;

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: gameProto.IPlayer): gameProto.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link gameProto.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link gameProto.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.Player;

        /**
         * Verifies a Player message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Medal. */
    interface IMedal {

        /** Medal medalName */
        medalName?: (string|null);

        /** Medal medalPictUrl */
        medalPictUrl?: (string|null);

        /** Medal medalPictStarUrl */
        medalPictStarUrl?: (string|null);

        /** Medal starNum */
        starNum?: (number|null);

        /** Medal label */
        label?: (number|null);
    }

    /** Represents a Medal. */
    class Medal implements IMedal {

        /**
         * Constructs a new Medal.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IMedal);

        /** Medal medalName. */
        public medalName: string;

        /** Medal medalPictUrl. */
        public medalPictUrl: string;

        /** Medal medalPictStarUrl. */
        public medalPictStarUrl: string;

        /** Medal starNum. */
        public starNum: number;

        /** Medal label. */
        public label: number;

        /**
         * Creates a new Medal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Medal instance
         */
        public static create(properties?: gameProto.IMedal): gameProto.Medal;

        /**
         * Encodes the specified Medal message. Does not implicitly {@link gameProto.Medal.verify|verify} messages.
         * @param message Medal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IMedal, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Medal message, length delimited. Does not implicitly {@link gameProto.Medal.verify|verify} messages.
         * @param message Medal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IMedal, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Medal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Medal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.Medal;

        /**
         * Decodes a Medal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Medal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.Medal;

        /**
         * Verifies a Medal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Score. */
    interface IScore {

        /** Score action */
        action?: (gameProto.IProjectAction|null);

        /** Score score */
        score?: (number|null);

        /** Score bonusPoint */
        bonusPoint?: (number|null);

        /** Score rank */
        rank?: (number|null);
    }

    /** Represents a Score. */
    class Score implements IScore {

        /**
         * Constructs a new Score.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IScore);

        /** Score action. */
        public action?: (gameProto.IProjectAction|null);

        /** Score score. */
        public score: number;

        /** Score bonusPoint. */
        public bonusPoint: number;

        /** Score rank. */
        public rank: number;

        /**
         * Creates a new Score instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Score instance
         */
        public static create(properties?: gameProto.IScore): gameProto.Score;

        /**
         * Encodes the specified Score message. Does not implicitly {@link gameProto.Score.verify|verify} messages.
         * @param message Score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IScore, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Score message, length delimited. Does not implicitly {@link gameProto.Score.verify|verify} messages.
         * @param message Score message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IScore, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Score message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.Score;

        /**
         * Decodes a Score message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Score
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.Score;

        /**
         * Verifies a Score message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Page. */
    interface IPage {

        /** Page pageNo */
        pageNo?: (number|null);

        /** Page pageSize */
        pageSize?: (number|null);
    }

    /** Represents a Page. */
    class Page implements IPage {

        /**
         * Constructs a new Page.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IPage);

        /** Page pageNo. */
        public pageNo: number;

        /** Page pageSize. */
        public pageSize: number;

        /**
         * Creates a new Page instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Page instance
         */
        public static create(properties?: gameProto.IPage): gameProto.Page;

        /**
         * Encodes the specified Page message. Does not implicitly {@link gameProto.Page.verify|verify} messages.
         * @param message Page message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IPage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Page message, length delimited. Does not implicitly {@link gameProto.Page.verify|verify} messages.
         * @param message Page message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IPage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Page message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Page
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.Page;

        /**
         * Decodes a Page message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Page
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.Page;

        /**
         * Verifies a Page message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ArenasEnterBattleReq. */
    interface IArenasEnterBattleReq {

        /** ArenasEnterBattleReq projectId */
        projectId?: (number|Long|null);
    }

    /** Represents an ArenasEnterBattleReq. */
    class ArenasEnterBattleReq implements IArenasEnterBattleReq {

        /**
         * Constructs a new ArenasEnterBattleReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IArenasEnterBattleReq);

        /** ArenasEnterBattleReq projectId. */
        public projectId: (number|Long);

        /**
         * Creates a new ArenasEnterBattleReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArenasEnterBattleReq instance
         */
        public static create(properties?: gameProto.IArenasEnterBattleReq): gameProto.ArenasEnterBattleReq;

        /**
         * Encodes the specified ArenasEnterBattleReq message. Does not implicitly {@link gameProto.ArenasEnterBattleReq.verify|verify} messages.
         * @param message ArenasEnterBattleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IArenasEnterBattleReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ArenasEnterBattleReq message, length delimited. Does not implicitly {@link gameProto.ArenasEnterBattleReq.verify|verify} messages.
         * @param message ArenasEnterBattleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IArenasEnterBattleReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenasEnterBattleReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenasEnterBattleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.ArenasEnterBattleReq;

        /**
         * Decodes an ArenasEnterBattleReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArenasEnterBattleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.ArenasEnterBattleReq;

        /**
         * Verifies an ArenasEnterBattleReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ArenasEnterBattleRsp. */
    interface IArenasEnterBattleRsp {

        /** ArenasEnterBattleRsp code */
        code?: (number|null);

        /** ArenasEnterBattleRsp msg */
        msg?: (string|null);

        /** ArenasEnterBattleRsp projectId */
        projectId?: (number|Long|null);

        /** ArenasEnterBattleRsp actionList */
        actionList?: (gameProto.IProjectAction[]|null);
    }

    /** Represents an ArenasEnterBattleRsp. */
    class ArenasEnterBattleRsp implements IArenasEnterBattleRsp {

        /**
         * Constructs a new ArenasEnterBattleRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IArenasEnterBattleRsp);

        /** ArenasEnterBattleRsp code. */
        public code: number;

        /** ArenasEnterBattleRsp msg. */
        public msg: string;

        /** ArenasEnterBattleRsp projectId. */
        public projectId: (number|Long);

        /** ArenasEnterBattleRsp actionList. */
        public actionList: gameProto.IProjectAction[];

        /**
         * Creates a new ArenasEnterBattleRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArenasEnterBattleRsp instance
         */
        public static create(properties?: gameProto.IArenasEnterBattleRsp): gameProto.ArenasEnterBattleRsp;

        /**
         * Encodes the specified ArenasEnterBattleRsp message. Does not implicitly {@link gameProto.ArenasEnterBattleRsp.verify|verify} messages.
         * @param message ArenasEnterBattleRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IArenasEnterBattleRsp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ArenasEnterBattleRsp message, length delimited. Does not implicitly {@link gameProto.ArenasEnterBattleRsp.verify|verify} messages.
         * @param message ArenasEnterBattleRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IArenasEnterBattleRsp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenasEnterBattleRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenasEnterBattleRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.ArenasEnterBattleRsp;

        /**
         * Decodes an ArenasEnterBattleRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArenasEnterBattleRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.ArenasEnterBattleRsp;

        /**
         * Verifies an ArenasEnterBattleRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ArenasGameOverReq. */
    interface IArenasGameOverReq {

        /** ArenasGameOverReq matchId */
        matchId?: (number|Long|null);
    }

    /** Represents an ArenasGameOverReq. */
    class ArenasGameOverReq implements IArenasGameOverReq {

        /**
         * Constructs a new ArenasGameOverReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IArenasGameOverReq);

        /** ArenasGameOverReq matchId. */
        public matchId: (number|Long);

        /**
         * Creates a new ArenasGameOverReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArenasGameOverReq instance
         */
        public static create(properties?: gameProto.IArenasGameOverReq): gameProto.ArenasGameOverReq;

        /**
         * Encodes the specified ArenasGameOverReq message. Does not implicitly {@link gameProto.ArenasGameOverReq.verify|verify} messages.
         * @param message ArenasGameOverReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IArenasGameOverReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ArenasGameOverReq message, length delimited. Does not implicitly {@link gameProto.ArenasGameOverReq.verify|verify} messages.
         * @param message ArenasGameOverReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IArenasGameOverReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenasGameOverReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenasGameOverReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.ArenasGameOverReq;

        /**
         * Decodes an ArenasGameOverReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArenasGameOverReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.ArenasGameOverReq;

        /**
         * Verifies an ArenasGameOverReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ArenasGameOverRsp. */
    interface IArenasGameOverRsp {

        /** ArenasGameOverRsp code */
        code?: (number|null);

        /** ArenasGameOverRsp msg */
        msg?: (string|null);

        /** ArenasGameOverRsp rankList */
        rankList?: (gameProto.IPlayerFinalRank[]|null);

        /** ArenasGameOverRsp project */
        project?: (gameProto.IProject|null);

        /** ArenasGameOverRsp personScore */
        personScore?: (gameProto.IPersonScore[]|null);
    }

    /** Represents an ArenasGameOverRsp. */
    class ArenasGameOverRsp implements IArenasGameOverRsp {

        /**
         * Constructs a new ArenasGameOverRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IArenasGameOverRsp);

        /** ArenasGameOverRsp code. */
        public code: number;

        /** ArenasGameOverRsp msg. */
        public msg: string;

        /** ArenasGameOverRsp rankList. */
        public rankList: gameProto.IPlayerFinalRank[];

        /** ArenasGameOverRsp project. */
        public project?: (gameProto.IProject|null);

        /** ArenasGameOverRsp personScore. */
        public personScore: gameProto.IPersonScore[];

        /**
         * Creates a new ArenasGameOverRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArenasGameOverRsp instance
         */
        public static create(properties?: gameProto.IArenasGameOverRsp): gameProto.ArenasGameOverRsp;

        /**
         * Encodes the specified ArenasGameOverRsp message. Does not implicitly {@link gameProto.ArenasGameOverRsp.verify|verify} messages.
         * @param message ArenasGameOverRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IArenasGameOverRsp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ArenasGameOverRsp message, length delimited. Does not implicitly {@link gameProto.ArenasGameOverRsp.verify|verify} messages.
         * @param message ArenasGameOverRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IArenasGameOverRsp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenasGameOverRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenasGameOverRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.ArenasGameOverRsp;

        /**
         * Decodes an ArenasGameOverRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArenasGameOverRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.ArenasGameOverRsp;

        /**
         * Verifies an ArenasGameOverRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerFinalRank. */
    interface IPlayerFinalRank {

        /** PlayerFinalRank player */
        player?: (gameProto.IPlayer|null);

        /** PlayerFinalRank score */
        score?: (gameProto.IScore|null);
    }

    /** Represents a PlayerFinalRank. */
    class PlayerFinalRank implements IPlayerFinalRank {

        /**
         * Constructs a new PlayerFinalRank.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IPlayerFinalRank);

        /** PlayerFinalRank player. */
        public player?: (gameProto.IPlayer|null);

        /** PlayerFinalRank score. */
        public score?: (gameProto.IScore|null);

        /**
         * Creates a new PlayerFinalRank instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerFinalRank instance
         */
        public static create(properties?: gameProto.IPlayerFinalRank): gameProto.PlayerFinalRank;

        /**
         * Encodes the specified PlayerFinalRank message. Does not implicitly {@link gameProto.PlayerFinalRank.verify|verify} messages.
         * @param message PlayerFinalRank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IPlayerFinalRank, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerFinalRank message, length delimited. Does not implicitly {@link gameProto.PlayerFinalRank.verify|verify} messages.
         * @param message PlayerFinalRank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IPlayerFinalRank, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerFinalRank message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerFinalRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.PlayerFinalRank;

        /**
         * Decodes a PlayerFinalRank message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerFinalRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.PlayerFinalRank;

        /**
         * Verifies a PlayerFinalRank message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PersonScore. */
    interface IPersonScore {

        /** PersonScore score */
        score?: (gameProto.IScore|null);

        /** PersonScore rank */
        rank?: (number|null);

        /** PersonScore bestActionId */
        bestActionId?: (number|null);
    }

    /** Represents a PersonScore. */
    class PersonScore implements IPersonScore {

        /**
         * Constructs a new PersonScore.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IPersonScore);

        /** PersonScore score. */
        public score?: (gameProto.IScore|null);

        /** PersonScore rank. */
        public rank: number;

        /** PersonScore bestActionId. */
        public bestActionId: number;

        /**
         * Creates a new PersonScore instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PersonScore instance
         */
        public static create(properties?: gameProto.IPersonScore): gameProto.PersonScore;

        /**
         * Encodes the specified PersonScore message. Does not implicitly {@link gameProto.PersonScore.verify|verify} messages.
         * @param message PersonScore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IPersonScore, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PersonScore message, length delimited. Does not implicitly {@link gameProto.PersonScore.verify|verify} messages.
         * @param message PersonScore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IPersonScore, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PersonScore message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PersonScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.PersonScore;

        /**
         * Decodes a PersonScore message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PersonScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.PersonScore;

        /**
         * Verifies a PersonScore message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ArenasHomepageReq. */
    interface IArenasHomepageReq {
    }

    /** Represents an ArenasHomepageReq. */
    class ArenasHomepageReq implements IArenasHomepageReq {

        /**
         * Constructs a new ArenasHomepageReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IArenasHomepageReq);

        /**
         * Creates a new ArenasHomepageReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArenasHomepageReq instance
         */
        public static create(properties?: gameProto.IArenasHomepageReq): gameProto.ArenasHomepageReq;

        /**
         * Encodes the specified ArenasHomepageReq message. Does not implicitly {@link gameProto.ArenasHomepageReq.verify|verify} messages.
         * @param message ArenasHomepageReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IArenasHomepageReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ArenasHomepageReq message, length delimited. Does not implicitly {@link gameProto.ArenasHomepageReq.verify|verify} messages.
         * @param message ArenasHomepageReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IArenasHomepageReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenasHomepageReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenasHomepageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.ArenasHomepageReq;

        /**
         * Decodes an ArenasHomepageReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArenasHomepageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.ArenasHomepageReq;

        /**
         * Verifies an ArenasHomepageReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ArenasHomepageRsp. */
    interface IArenasHomepageRsp {

        /** ArenasHomepageRsp code */
        code?: (number|null);

        /** ArenasHomepageRsp msg */
        msg?: (string|null);

        /** ArenasHomepageRsp player */
        player?: (gameProto.IPlayer|null);

        /** ArenasHomepageRsp playMedal */
        playMedal?: (gameProto.IPlayerMedal|null);

        /** ArenasHomepageRsp lastGame */
        lastGame?: (gameProto.ILastGame|null);

        /** ArenasHomepageRsp projectList */
        projectList?: (gameProto.IProject[]|null);
    }

    /** Represents an ArenasHomepageRsp. */
    class ArenasHomepageRsp implements IArenasHomepageRsp {

        /**
         * Constructs a new ArenasHomepageRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IArenasHomepageRsp);

        /** ArenasHomepageRsp code. */
        public code: number;

        /** ArenasHomepageRsp msg. */
        public msg: string;

        /** ArenasHomepageRsp player. */
        public player?: (gameProto.IPlayer|null);

        /** ArenasHomepageRsp playMedal. */
        public playMedal?: (gameProto.IPlayerMedal|null);

        /** ArenasHomepageRsp lastGame. */
        public lastGame?: (gameProto.ILastGame|null);

        /** ArenasHomepageRsp projectList. */
        public projectList: gameProto.IProject[];

        /**
         * Creates a new ArenasHomepageRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArenasHomepageRsp instance
         */
        public static create(properties?: gameProto.IArenasHomepageRsp): gameProto.ArenasHomepageRsp;

        /**
         * Encodes the specified ArenasHomepageRsp message. Does not implicitly {@link gameProto.ArenasHomepageRsp.verify|verify} messages.
         * @param message ArenasHomepageRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IArenasHomepageRsp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ArenasHomepageRsp message, length delimited. Does not implicitly {@link gameProto.ArenasHomepageRsp.verify|verify} messages.
         * @param message ArenasHomepageRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IArenasHomepageRsp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenasHomepageRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenasHomepageRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.ArenasHomepageRsp;

        /**
         * Decodes an ArenasHomepageRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArenasHomepageRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.ArenasHomepageRsp;

        /**
         * Verifies an ArenasHomepageRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerMedal. */
    interface IPlayerMedal {

        /** PlayerMedal medal */
        medal?: (gameProto.IMedal|null);

        /** PlayerMedal score */
        score?: (gameProto.IScore|null);

        /** PlayerMedal total */
        total?: (number|null);

        /** PlayerMedal rate */
        rate?: (number|null);
    }

    /** Represents a PlayerMedal. */
    class PlayerMedal implements IPlayerMedal {

        /**
         * Constructs a new PlayerMedal.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IPlayerMedal);

        /** PlayerMedal medal. */
        public medal?: (gameProto.IMedal|null);

        /** PlayerMedal score. */
        public score?: (gameProto.IScore|null);

        /** PlayerMedal total. */
        public total: number;

        /** PlayerMedal rate. */
        public rate: number;

        /**
         * Creates a new PlayerMedal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerMedal instance
         */
        public static create(properties?: gameProto.IPlayerMedal): gameProto.PlayerMedal;

        /**
         * Encodes the specified PlayerMedal message. Does not implicitly {@link gameProto.PlayerMedal.verify|verify} messages.
         * @param message PlayerMedal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IPlayerMedal, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerMedal message, length delimited. Does not implicitly {@link gameProto.PlayerMedal.verify|verify} messages.
         * @param message PlayerMedal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IPlayerMedal, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerMedal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerMedal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.PlayerMedal;

        /**
         * Decodes a PlayerMedal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerMedal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.PlayerMedal;

        /**
         * Verifies a PlayerMedal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a LastGame. */
    interface ILastGame {

        /** LastGame project */
        project?: (gameProto.IProject|null);

        /** LastGame score */
        score?: (gameProto.IScore|null);

        /** LastGame rank */
        rank?: (number|null);
    }

    /** Represents a LastGame. */
    class LastGame implements ILastGame {

        /**
         * Constructs a new LastGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.ILastGame);

        /** LastGame project. */
        public project?: (gameProto.IProject|null);

        /** LastGame score. */
        public score?: (gameProto.IScore|null);

        /** LastGame rank. */
        public rank: number;

        /**
         * Creates a new LastGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LastGame instance
         */
        public static create(properties?: gameProto.ILastGame): gameProto.LastGame;

        /**
         * Encodes the specified LastGame message. Does not implicitly {@link gameProto.LastGame.verify|verify} messages.
         * @param message LastGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.ILastGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LastGame message, length delimited. Does not implicitly {@link gameProto.LastGame.verify|verify} messages.
         * @param message LastGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.ILastGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LastGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LastGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.LastGame;

        /**
         * Decodes a LastGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LastGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.LastGame;

        /**
         * Verifies a LastGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ArenasMatchPlayerReq. */
    interface IArenasMatchPlayerReq {

        /** ArenasMatchPlayerReq projectId */
        projectId?: (number|Long|null);
    }

    /** Represents an ArenasMatchPlayerReq. */
    class ArenasMatchPlayerReq implements IArenasMatchPlayerReq {

        /**
         * Constructs a new ArenasMatchPlayerReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IArenasMatchPlayerReq);

        /** ArenasMatchPlayerReq projectId. */
        public projectId: (number|Long);

        /**
         * Creates a new ArenasMatchPlayerReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArenasMatchPlayerReq instance
         */
        public static create(properties?: gameProto.IArenasMatchPlayerReq): gameProto.ArenasMatchPlayerReq;

        /**
         * Encodes the specified ArenasMatchPlayerReq message. Does not implicitly {@link gameProto.ArenasMatchPlayerReq.verify|verify} messages.
         * @param message ArenasMatchPlayerReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IArenasMatchPlayerReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ArenasMatchPlayerReq message, length delimited. Does not implicitly {@link gameProto.ArenasMatchPlayerReq.verify|verify} messages.
         * @param message ArenasMatchPlayerReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IArenasMatchPlayerReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenasMatchPlayerReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenasMatchPlayerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.ArenasMatchPlayerReq;

        /**
         * Decodes an ArenasMatchPlayerReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArenasMatchPlayerReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.ArenasMatchPlayerReq;

        /**
         * Verifies an ArenasMatchPlayerReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ArenasMatchPlayerRsp. */
    interface IArenasMatchPlayerRsp {

        /** ArenasMatchPlayerRsp code */
        code?: (number|null);

        /** ArenasMatchPlayerRsp msg */
        msg?: (string|null);

        /** ArenasMatchPlayerRsp matchInfo */
        matchInfo?: (gameProto.IMatchInfo[]|null);

        /** ArenasMatchPlayerRsp matchId */
        matchId?: (number|Long|null);
    }

    /** Represents an ArenasMatchPlayerRsp. */
    class ArenasMatchPlayerRsp implements IArenasMatchPlayerRsp {

        /**
         * Constructs a new ArenasMatchPlayerRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IArenasMatchPlayerRsp);

        /** ArenasMatchPlayerRsp code. */
        public code: number;

        /** ArenasMatchPlayerRsp msg. */
        public msg: string;

        /** ArenasMatchPlayerRsp matchInfo. */
        public matchInfo: gameProto.IMatchInfo[];

        /** ArenasMatchPlayerRsp matchId. */
        public matchId: (number|Long);

        /**
         * Creates a new ArenasMatchPlayerRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArenasMatchPlayerRsp instance
         */
        public static create(properties?: gameProto.IArenasMatchPlayerRsp): gameProto.ArenasMatchPlayerRsp;

        /**
         * Encodes the specified ArenasMatchPlayerRsp message. Does not implicitly {@link gameProto.ArenasMatchPlayerRsp.verify|verify} messages.
         * @param message ArenasMatchPlayerRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IArenasMatchPlayerRsp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ArenasMatchPlayerRsp message, length delimited. Does not implicitly {@link gameProto.ArenasMatchPlayerRsp.verify|verify} messages.
         * @param message ArenasMatchPlayerRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IArenasMatchPlayerRsp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenasMatchPlayerRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenasMatchPlayerRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.ArenasMatchPlayerRsp;

        /**
         * Decodes an ArenasMatchPlayerRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArenasMatchPlayerRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.ArenasMatchPlayerRsp;

        /**
         * Verifies an ArenasMatchPlayerRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MatchInfo. */
    interface IMatchInfo {

        /** MatchInfo player */
        player?: (gameProto.IPlayer|null);

        /** MatchInfo medal */
        medal?: (gameProto.IMedal|null);

        /** MatchInfo actionList */
        actionList?: (gameProto.IAction[]|null);
    }

    /** Represents a MatchInfo. */
    class MatchInfo implements IMatchInfo {

        /**
         * Constructs a new MatchInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IMatchInfo);

        /** MatchInfo player. */
        public player?: (gameProto.IPlayer|null);

        /** MatchInfo medal. */
        public medal?: (gameProto.IMedal|null);

        /** MatchInfo actionList. */
        public actionList: gameProto.IAction[];

        /**
         * Creates a new MatchInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchInfo instance
         */
        public static create(properties?: gameProto.IMatchInfo): gameProto.MatchInfo;

        /**
         * Encodes the specified MatchInfo message. Does not implicitly {@link gameProto.MatchInfo.verify|verify} messages.
         * @param message MatchInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IMatchInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MatchInfo message, length delimited. Does not implicitly {@link gameProto.MatchInfo.verify|verify} messages.
         * @param message MatchInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IMatchInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MatchInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.MatchInfo;

        /**
         * Decodes a MatchInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.MatchInfo;

        /**
         * Verifies a MatchInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an Action. */
    interface IAction {

        /** Action action */
        action?: (gameProto.IProjectAction|null);

        /** Action processUrl */
        processUrl?: (string|null);
    }

    /** Represents an Action. */
    class Action implements IAction {

        /**
         * Constructs a new Action.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IAction);

        /** Action action. */
        public action?: (gameProto.IProjectAction|null);

        /** Action processUrl. */
        public processUrl: string;

        /**
         * Creates a new Action instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Action instance
         */
        public static create(properties?: gameProto.IAction): gameProto.Action;

        /**
         * Encodes the specified Action message. Does not implicitly {@link gameProto.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IAction, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Action message, length delimited. Does not implicitly {@link gameProto.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IAction, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.Action;

        /**
         * Decodes an Action message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.Action;

        /**
         * Verifies an Action message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ArenasRaceRecordsReq. */
    interface IArenasRaceRecordsReq {

        /** ArenasRaceRecordsReq page */
        page?: (gameProto.IPage|null);
    }

    /** Represents an ArenasRaceRecordsReq. */
    class ArenasRaceRecordsReq implements IArenasRaceRecordsReq {

        /**
         * Constructs a new ArenasRaceRecordsReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IArenasRaceRecordsReq);

        /** ArenasRaceRecordsReq page. */
        public page?: (gameProto.IPage|null);

        /**
         * Creates a new ArenasRaceRecordsReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArenasRaceRecordsReq instance
         */
        public static create(properties?: gameProto.IArenasRaceRecordsReq): gameProto.ArenasRaceRecordsReq;

        /**
         * Encodes the specified ArenasRaceRecordsReq message. Does not implicitly {@link gameProto.ArenasRaceRecordsReq.verify|verify} messages.
         * @param message ArenasRaceRecordsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IArenasRaceRecordsReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ArenasRaceRecordsReq message, length delimited. Does not implicitly {@link gameProto.ArenasRaceRecordsReq.verify|verify} messages.
         * @param message ArenasRaceRecordsReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IArenasRaceRecordsReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenasRaceRecordsReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenasRaceRecordsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.ArenasRaceRecordsReq;

        /**
         * Decodes an ArenasRaceRecordsReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArenasRaceRecordsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.ArenasRaceRecordsReq;

        /**
         * Verifies an ArenasRaceRecordsReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ArenasRaceRecordsRsp. */
    interface IArenasRaceRecordsRsp {

        /** ArenasRaceRecordsRsp code */
        code?: (number|null);

        /** ArenasRaceRecordsRsp msg */
        msg?: (string|null);

        /** ArenasRaceRecordsRsp total */
        total?: (number|null);

        /** ArenasRaceRecordsRsp records */
        records?: (gameProto.IRaceRecords[]|null);
    }

    /** Represents an ArenasRaceRecordsRsp. */
    class ArenasRaceRecordsRsp implements IArenasRaceRecordsRsp {

        /**
         * Constructs a new ArenasRaceRecordsRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IArenasRaceRecordsRsp);

        /** ArenasRaceRecordsRsp code. */
        public code: number;

        /** ArenasRaceRecordsRsp msg. */
        public msg: string;

        /** ArenasRaceRecordsRsp total. */
        public total: number;

        /** ArenasRaceRecordsRsp records. */
        public records: gameProto.IRaceRecords[];

        /**
         * Creates a new ArenasRaceRecordsRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArenasRaceRecordsRsp instance
         */
        public static create(properties?: gameProto.IArenasRaceRecordsRsp): gameProto.ArenasRaceRecordsRsp;

        /**
         * Encodes the specified ArenasRaceRecordsRsp message. Does not implicitly {@link gameProto.ArenasRaceRecordsRsp.verify|verify} messages.
         * @param message ArenasRaceRecordsRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IArenasRaceRecordsRsp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ArenasRaceRecordsRsp message, length delimited. Does not implicitly {@link gameProto.ArenasRaceRecordsRsp.verify|verify} messages.
         * @param message ArenasRaceRecordsRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IArenasRaceRecordsRsp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenasRaceRecordsRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenasRaceRecordsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.ArenasRaceRecordsRsp;

        /**
         * Decodes an ArenasRaceRecordsRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArenasRaceRecordsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.ArenasRaceRecordsRsp;

        /**
         * Verifies an ArenasRaceRecordsRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RaceRecords. */
    interface IRaceRecords {

        /** RaceRecords project */
        project?: (gameProto.IProject|null);

        /** RaceRecords rank */
        rank?: (number|null);

        /** RaceRecords scoreList */
        scoreList?: (gameProto.IActionScore[]|null);

        /** RaceRecords createTime */
        createTime?: (string|null);

        /** RaceRecords matchId */
        matchId?: (number|Long|null);
    }

    /** Represents a RaceRecords. */
    class RaceRecords implements IRaceRecords {

        /**
         * Constructs a new RaceRecords.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IRaceRecords);

        /** RaceRecords project. */
        public project?: (gameProto.IProject|null);

        /** RaceRecords rank. */
        public rank: number;

        /** RaceRecords scoreList. */
        public scoreList: gameProto.IActionScore[];

        /** RaceRecords createTime. */
        public createTime: string;

        /** RaceRecords matchId. */
        public matchId: (number|Long);

        /**
         * Creates a new RaceRecords instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RaceRecords instance
         */
        public static create(properties?: gameProto.IRaceRecords): gameProto.RaceRecords;

        /**
         * Encodes the specified RaceRecords message. Does not implicitly {@link gameProto.RaceRecords.verify|verify} messages.
         * @param message RaceRecords message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IRaceRecords, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RaceRecords message, length delimited. Does not implicitly {@link gameProto.RaceRecords.verify|verify} messages.
         * @param message RaceRecords message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IRaceRecords, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RaceRecords message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RaceRecords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.RaceRecords;

        /**
         * Decodes a RaceRecords message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RaceRecords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.RaceRecords;

        /**
         * Verifies a RaceRecords message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ActionScore. */
    interface IActionScore {

        /** ActionScore action */
        action?: (gameProto.IProjectAction|null);

        /** ActionScore rank */
        rank?: (number|null);
    }

    /** Represents an ActionScore. */
    class ActionScore implements IActionScore {

        /**
         * Constructs a new ActionScore.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IActionScore);

        /** ActionScore action. */
        public action?: (gameProto.IProjectAction|null);

        /** ActionScore rank. */
        public rank: number;

        /**
         * Creates a new ActionScore instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActionScore instance
         */
        public static create(properties?: gameProto.IActionScore): gameProto.ActionScore;

        /**
         * Encodes the specified ActionScore message. Does not implicitly {@link gameProto.ActionScore.verify|verify} messages.
         * @param message ActionScore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IActionScore, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ActionScore message, length delimited. Does not implicitly {@link gameProto.ActionScore.verify|verify} messages.
         * @param message ActionScore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IActionScore, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ActionScore message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActionScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.ActionScore;

        /**
         * Decodes an ActionScore message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActionScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.ActionScore;

        /**
         * Verifies an ActionScore message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ArenasSingleRankReq. */
    interface IArenasSingleRankReq {

        /** ArenasSingleRankReq matchId */
        matchId?: (number|Long|null);

        /** ArenasSingleRankReq projectItemId */
        projectItemId?: (number|Long|null);

        /** ArenasSingleRankReq playerScore */
        playerScore?: (gameProto.IArenasPlayerScore[]|null);
    }

    /** Represents an ArenasSingleRankReq. */
    class ArenasSingleRankReq implements IArenasSingleRankReq {

        /**
         * Constructs a new ArenasSingleRankReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IArenasSingleRankReq);

        /** ArenasSingleRankReq matchId. */
        public matchId: (number|Long);

        /** ArenasSingleRankReq projectItemId. */
        public projectItemId: (number|Long);

        /** ArenasSingleRankReq playerScore. */
        public playerScore: gameProto.IArenasPlayerScore[];

        /**
         * Creates a new ArenasSingleRankReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArenasSingleRankReq instance
         */
        public static create(properties?: gameProto.IArenasSingleRankReq): gameProto.ArenasSingleRankReq;

        /**
         * Encodes the specified ArenasSingleRankReq message. Does not implicitly {@link gameProto.ArenasSingleRankReq.verify|verify} messages.
         * @param message ArenasSingleRankReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IArenasSingleRankReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ArenasSingleRankReq message, length delimited. Does not implicitly {@link gameProto.ArenasSingleRankReq.verify|verify} messages.
         * @param message ArenasSingleRankReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IArenasSingleRankReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenasSingleRankReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenasSingleRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.ArenasSingleRankReq;

        /**
         * Decodes an ArenasSingleRankReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArenasSingleRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.ArenasSingleRankReq;

        /**
         * Verifies an ArenasSingleRankReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ArenasPlayerScore. */
    interface IArenasPlayerScore {

        /** ArenasPlayerScore playerId */
        playerId?: (number|Long|null);

        /** ArenasPlayerScore score */
        score?: (number|null);
    }

    /** Represents an ArenasPlayerScore. */
    class ArenasPlayerScore implements IArenasPlayerScore {

        /**
         * Constructs a new ArenasPlayerScore.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IArenasPlayerScore);

        /** ArenasPlayerScore playerId. */
        public playerId: (number|Long);

        /** ArenasPlayerScore score. */
        public score: number;

        /**
         * Creates a new ArenasPlayerScore instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArenasPlayerScore instance
         */
        public static create(properties?: gameProto.IArenasPlayerScore): gameProto.ArenasPlayerScore;

        /**
         * Encodes the specified ArenasPlayerScore message. Does not implicitly {@link gameProto.ArenasPlayerScore.verify|verify} messages.
         * @param message ArenasPlayerScore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IArenasPlayerScore, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ArenasPlayerScore message, length delimited. Does not implicitly {@link gameProto.ArenasPlayerScore.verify|verify} messages.
         * @param message ArenasPlayerScore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IArenasPlayerScore, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenasPlayerScore message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenasPlayerScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.ArenasPlayerScore;

        /**
         * Decodes an ArenasPlayerScore message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArenasPlayerScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.ArenasPlayerScore;

        /**
         * Verifies an ArenasPlayerScore message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ArenasSingleRankRsp. */
    interface IArenasSingleRankRsp {

        /** ArenasSingleRankRsp code */
        code?: (number|null);

        /** ArenasSingleRankRsp msg */
        msg?: (string|null);

        /** ArenasSingleRankRsp scoreList */
        scoreList?: (gameProto.IPlayerSingleScore[]|null);

        /** ArenasSingleRankRsp orderNo */
        orderNo?: (number|null);
    }

    /** Represents an ArenasSingleRankRsp. */
    class ArenasSingleRankRsp implements IArenasSingleRankRsp {

        /**
         * Constructs a new ArenasSingleRankRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IArenasSingleRankRsp);

        /** ArenasSingleRankRsp code. */
        public code: number;

        /** ArenasSingleRankRsp msg. */
        public msg: string;

        /** ArenasSingleRankRsp scoreList. */
        public scoreList: gameProto.IPlayerSingleScore[];

        /** ArenasSingleRankRsp orderNo. */
        public orderNo: number;

        /**
         * Creates a new ArenasSingleRankRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArenasSingleRankRsp instance
         */
        public static create(properties?: gameProto.IArenasSingleRankRsp): gameProto.ArenasSingleRankRsp;

        /**
         * Encodes the specified ArenasSingleRankRsp message. Does not implicitly {@link gameProto.ArenasSingleRankRsp.verify|verify} messages.
         * @param message ArenasSingleRankRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IArenasSingleRankRsp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ArenasSingleRankRsp message, length delimited. Does not implicitly {@link gameProto.ArenasSingleRankRsp.verify|verify} messages.
         * @param message ArenasSingleRankRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IArenasSingleRankRsp, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArenasSingleRankRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArenasSingleRankRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.ArenasSingleRankRsp;

        /**
         * Decodes an ArenasSingleRankRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArenasSingleRankRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.ArenasSingleRankRsp;

        /**
         * Verifies an ArenasSingleRankRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerSingleScore. */
    interface IPlayerSingleScore {

        /** PlayerSingleScore player */
        player?: (gameProto.IPlayer|null);

        /** PlayerSingleScore medal */
        medal?: (gameProto.IMedal|null);

        /** PlayerSingleScore score */
        score?: (gameProto.IScore|null);
    }

    /** Represents a PlayerSingleScore. */
    class PlayerSingleScore implements IPlayerSingleScore {

        /**
         * Constructs a new PlayerSingleScore.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameProto.IPlayerSingleScore);

        /** PlayerSingleScore player. */
        public player?: (gameProto.IPlayer|null);

        /** PlayerSingleScore medal. */
        public medal?: (gameProto.IMedal|null);

        /** PlayerSingleScore score. */
        public score?: (gameProto.IScore|null);

        /**
         * Creates a new PlayerSingleScore instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerSingleScore instance
         */
        public static create(properties?: gameProto.IPlayerSingleScore): gameProto.PlayerSingleScore;

        /**
         * Encodes the specified PlayerSingleScore message. Does not implicitly {@link gameProto.PlayerSingleScore.verify|verify} messages.
         * @param message PlayerSingleScore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameProto.IPlayerSingleScore, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerSingleScore message, length delimited. Does not implicitly {@link gameProto.PlayerSingleScore.verify|verify} messages.
         * @param message PlayerSingleScore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameProto.IPlayerSingleScore, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerSingleScore message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerSingleScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gameProto.PlayerSingleScore;

        /**
         * Decodes a PlayerSingleScore message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerSingleScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gameProto.PlayerSingleScore;

        /**
         * Verifies a PlayerSingleScore message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** ArenasMessageEnum enum. */
    enum ArenasMessageEnum {
        UNKNOWN = 0,
        ARENAS_HOMEPAGE = 1,
        ENTER_BATTLE = 2,
        MATCH_PLAYER = 3,
        SINGLE_RANk = 4,
        GAME_OVER = 5,
        RACE_RECORDS = 6
    }
}

type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace com. */
declare namespace com {

    /** Namespace tingtong. */
    namespace tingtong {

        /** Namespace server. */
        namespace server {

            /** Namespace game. */
            namespace game {

                /** Namespace proto. */
                namespace proto {

                    /** LoginType enum. */
                    enum LoginType {
                        ACCOUNT = 1,
                        DEVICE = 2,
                        PLATFORM = 3
                    }

                    /** Properties of a LoginMsg. */
                    interface ILoginMsg {

                        /** LoginMsg loginType */
                        loginType?: (com.tingtong.server.game.proto.LoginType|null);

                        /** LoginMsg accountName */
                        accountName?: (string|null);

                        /** LoginMsg password */
                        password?: (string|null);

                        /** LoginMsg serverId */
                        serverId?: (number|null);

                        /** LoginMsg version */
                        version?: (string|null);

                        /** LoginMsg ext */
                        ext?: (string|null);

                        /** LoginMsg deviceId */
                        deviceId?: (string|null);

                        /** LoginMsg uid */
                        uid?: (number|Long|null);

                        /** LoginMsg platformId */
                        platformId?: (number|null);

                        /** LoginMsg appId */
                        appId?: (number|null);

                        /** LoginMsg os */
                        os?: (string|null);

                        /** LoginMsg source */
                        source?: (string|null);
                    }

                    /** Represents a LoginMsg. */
                    class LoginMsg implements ILoginMsg {

                        /**
                         * Constructs a new LoginMsg.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.tingtong.server.game.proto.ILoginMsg);

                        /** LoginMsg loginType. */
                        public loginType: com.tingtong.server.game.proto.LoginType;

                        /** LoginMsg accountName. */
                        public accountName: string;

                        /** LoginMsg password. */
                        public password: string;

                        /** LoginMsg serverId. */
                        public serverId: number;

                        /** LoginMsg version. */
                        public version: string;

                        /** LoginMsg ext. */
                        public ext: string;

                        /** LoginMsg deviceId. */
                        public deviceId: string;

                        /** LoginMsg uid. */
                        public uid: (number|Long);

                        /** LoginMsg platformId. */
                        public platformId: number;

                        /** LoginMsg appId. */
                        public appId: number;

                        /** LoginMsg os. */
                        public os: string;

                        /** LoginMsg source. */
                        public source: string;

                        /**
                         * Creates a new LoginMsg instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LoginMsg instance
                         */
                        public static create(properties?: com.tingtong.server.game.proto.ILoginMsg): com.tingtong.server.game.proto.LoginMsg;

                        /**
                         * Encodes the specified LoginMsg message. Does not implicitly {@link com.tingtong.server.game.proto.LoginMsg.verify|verify} messages.
                         * @param message LoginMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.tingtong.server.game.proto.ILoginMsg, writer?: protobuf.Writer): protobuf.Writer;

                        /**
                         * Encodes the specified LoginMsg message, length delimited. Does not implicitly {@link com.tingtong.server.game.proto.LoginMsg.verify|verify} messages.
                         * @param message LoginMsg message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.tingtong.server.game.proto.ILoginMsg, writer?: protobuf.Writer): protobuf.Writer;

                        /**
                         * Decodes a LoginMsg message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LoginMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.tingtong.server.game.proto.LoginMsg;

                        /**
                         * Decodes a LoginMsg message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LoginMsg
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.tingtong.server.game.proto.LoginMsg;

                        /**
                         * Verifies a LoginMsg message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: [ 'object' ].<string, any>): (string|null);
                    }

                    /** Properties of a RspLogOut. */
                    interface IRspLogOut {
                    }

                    /** Represents a RspLogOut. */
                    class RspLogOut implements IRspLogOut {

                        /**
                         * Constructs a new RspLogOut.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.tingtong.server.game.proto.IRspLogOut);

                        /**
                         * Creates a new RspLogOut instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RspLogOut instance
                         */
                        public static create(properties?: com.tingtong.server.game.proto.IRspLogOut): com.tingtong.server.game.proto.RspLogOut;

                        /**
                         * Encodes the specified RspLogOut message. Does not implicitly {@link com.tingtong.server.game.proto.RspLogOut.verify|verify} messages.
                         * @param message RspLogOut message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.tingtong.server.game.proto.IRspLogOut, writer?: protobuf.Writer): protobuf.Writer;

                        /**
                         * Encodes the specified RspLogOut message, length delimited. Does not implicitly {@link com.tingtong.server.game.proto.RspLogOut.verify|verify} messages.
                         * @param message RspLogOut message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.tingtong.server.game.proto.IRspLogOut, writer?: protobuf.Writer): protobuf.Writer;

                        /**
                         * Decodes a RspLogOut message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RspLogOut
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.tingtong.server.game.proto.RspLogOut;

                        /**
                         * Decodes a RspLogOut message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RspLogOut
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.tingtong.server.game.proto.RspLogOut;

                        /**
                         * Verifies a RspLogOut message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: [ 'object' ].<string, any>): (string|null);
                    }
                }
            }
        }
    }
}

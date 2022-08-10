/**
 * 姿势关节点
 */
export enum PosePoint {
    nose = 0,
    left_eye_inner = 1,
    left_eye = 2,
    left_eye_outer = 3,
    right_eye_inner = 4,
    right_eye = 5,
    right_eye_outer = 6,
    left_ear = 7,
    right_ear = 8,
    mouth_left = 9,
    mouth_right = 10,
    left_shoulder = 11,
    right_shoulder = 12,
    left_elbow = 13,
    right_elbow = 14,
    left_wrist = 15,
    right_wrist = 16,
    left_pinky = 17,
    right_pinky = 18,
    left_index = 19,
    right_index = 20,
    left_thumb = 21,
    right_thumb = 22,
    left_hip = 23,
    right_hip = 24,
    left_knee = 25,
    right_knee = 26,
    left_ankle = 27,
    right_ankle = 28,
    left_heel = 29,
    right_heel = 30,
    left_foot_index = 31,
    right_foot_index = 32,
}

/**
 * 部位
 */
export class PosePart {
    /**右手 */
    public static readonly RightHand: PosePoint[] = [PosePoint.right_wrist, PosePoint.right_pinky, PosePoint.right_index, PosePoint.right_thumb];
    /**左手 */
    public static readonly leftHand: PosePoint[] = [PosePoint.left_wrist, PosePoint.left_pinky, PosePoint.left_index, PosePoint.left_thumb];
    /**左脚 */
    public static readonly leftFoot: PosePoint[] = [PosePoint.left_ankle, PosePoint.left_heel, PosePoint.left_foot_index];
    /**右脚 */
    public static readonly rightFoot: PosePoint[] = [PosePoint.right_ankle, PosePoint.right_heel, PosePoint.right_foot_index];
    /**左脚背 */
    public static readonly leftInstep: PosePoint[] = [PosePoint.left_ankle, PosePoint.left_foot_index];
    /**右脚背 */
    public static readonly rightInstep: PosePoint[] = [PosePoint.right_ankle, PosePoint.right_foot_index];
    /**肩部 */
    public static readonly shoulders: PosePoint[] = [PosePoint.left_shoulder, PosePoint.right_shoulder];
    /**髋部*/
    public static readonly hips: PosePoint[] = [PosePoint.left_hip, PosePoint.right_hip];
    /**膝盖 */
    public static readonly knees: PosePoint[] = [PosePoint.left_knee, PosePoint.right_knee];
}

/**
 * 部位
 */
export class PoseLine {
    public static line1 = [PosePoint.left_wrist, PosePoint.left_elbow,]
    public static line2 = [PosePoint.left_shoulder, PosePoint.left_elbow,]
    public static line3 = [PosePoint.left_shoulder, PosePoint.right_shoulder,]
    public static line4 = [PosePoint.left_shoulder, PosePoint.left_hip,]
    public static line5 = [PosePoint.left_hip, PosePoint.left_knee,]
    public static line6 = [PosePoint.left_knee, PosePoint.left_ankle,]
    public static line7 = [PosePoint.right_wrist, PosePoint.right_elbow,]
    public static line8 = [PosePoint.right_elbow, PosePoint.right_shoulder,]
    public static line9 = [PosePoint.right_shoulder, PosePoint.right_hip,]
    public static line10 = [PosePoint.right_hip, PosePoint.right_knee,]
    public static line11 = [PosePoint.right_knee, PosePoint.right_ankle,]
}


/**
 * 部位
 */
export class AIPoint {
    x: number;
    y: number;
}
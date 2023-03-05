
export interface IRefreshSession {
    session_id?: number;
    user_id: number;
    refreshToken: string;
    fingerprint: string
    expiresIn: Date
}
export class Globals {
    public static loginResponse : LoginResponse;

    public static isUserLogin : boolean = false;
}

export enum SERVER_URL {
    LOGIN_URL,
    VIDEO_SHARE_URL,
    VIDEO_SHARED_LIST_URL
}

export const SERVER_URL_MAP = new Map<SERVER_URL, string>([
    [SERVER_URL.LOGIN_URL, "/api/users/login"],
    [SERVER_URL.VIDEO_SHARE_URL, "/api/shares/youtube"],
    [SERVER_URL.VIDEO_SHARED_LIST_URL, "/api/shares/youtube/list"]
]);



export const SERVER_ENDPOINT: string = 'http://localhost:8080';
// export const SERVER_ENDPOINT: string = 'http://18.143.94.74:8080';

export class LoginResponse {
    private error: boolean = false;
    private message: string = '';
    private id: number | undefined;
    private email: string = '';

    constructor(data: any) {
        this.error = data.error;
        this.message = data.message;
        this.id = data.user.id;
        this.email = data.user.email;
    }

    get getError() {
        return this.error;
    }

    get getMessage() {
        return this.message;
    }

    get getId() {
        return this.id;
    }

    get getEmail() {
        return this.email;
    }

    clear() {
        this.error = false;
        this.message = '';
        this.id = undefined;
        this.email = '';
    }

}
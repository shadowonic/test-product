export class UserData {
    constructor(
        public userName: string,
        public password: string,
    ) { }
}

export interface IProduct {
    _id: number;
    Title: string;
    Image: string;
    Text: string;
}

export interface ILogged {
    Logged: boolean;
}

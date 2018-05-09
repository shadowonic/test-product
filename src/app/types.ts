export class UserData {
    constructor(
        public userName: string,
        public password: string,
    ) { }
}

export interface IProduct {
    _id: number;
    title: string;
    imageURL: string;
    text: string;
}

export interface ILogged {
    Logged: boolean;
}
export class Product {
    constructor (
       public title: string,
       public image: File,
       public text: string
    ) {}
}

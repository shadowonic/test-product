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
    rate?: number;
}

export interface ILogged {
    Logged: boolean;
}
export class Product {
    constructor(
        public title: string,
        public image: File,
        public text: string
    ) { }
}
export class Comment {
    constructor(
        public body: string,
        public productID: string
    ) { }
}
export class FormRating {
    constructor(
        public rate: number,
        public productID: string
    ) { }
}
export interface IComment {
    _id: number;
    productID: string;
    userID: string;
    body: string;
    timestamp: number;
}

import { BasicResponse } from "../types";
import { NameAndDate } from "../types";

export interface IHelloController{
    getMessage(name?:string): Promise<BasicResponse>
}

export interface IGoodByeController{
    getMessage(date:Date, name?:string): Promise<NameAndDate>
}

export interface IUserController{
    getUser(id?: string): Promise<any>
}
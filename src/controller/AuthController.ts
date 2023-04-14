import { IAuthController } from "./interfaces";
import { LogSuccess, LogWarning } from '../utils/logger'
import { IUser } from "../domain/interfaces/IUser.interface";
import { createUser } from "../domain/orm/Auth.orm";

export class AuthController implements IAuthController {

    public async registerUser(user: IUser): Promise<any> {
        await createUser(user)
        return{
            message: "Creating user"
        }
    }
    loginUser(auth: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}
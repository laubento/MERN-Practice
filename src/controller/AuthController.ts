import { IAuthController } from "./interfaces";
import { LogSuccess, LogWarning } from '../utils/logger'
import { ILogin, IUser } from "../domain/interfaces/IUser.interface";
import { createUser, loginUser } from "../domain/orm/Auth.orm";

export class AuthController implements IAuthController {

    public async registerUser(user: IUser): Promise<any> {
        await createUser(user)
        return{
            message: "Creating user"
        }
    }
    public async loginUser(user: ILogin): Promise<any> {
        return await loginUser(user).then((res) => {
            console.log(res)
            return res
        })
        
    }
    
}
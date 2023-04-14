import { userEntity } from "../entities/User.entity"
import { LogSuccess, LogWarning, LogError } from '../../utils/logger'



export const createUser = async (user:any):Promise<any | undefined> => {
    try {
        let userModel = userEntity()
        return await userModel.create(user)
    }
    catch (error){
        LogError('[ORM ERROR] Creating user: ' + error)
        return Error
    }
}
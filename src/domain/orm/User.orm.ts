import { userEntity } from "../entities/User.entity";
import { LogError, LogSuccess } from "../../utils/logger";


// CRUD
export const getAllUsers = async (): Promise<any[] | undefined> => {
    try {
        let userModel = userEntity()
        return await userModel.find()
    }
    catch (error){
        LogError('ORM ERROR: ' + error)
    }
    //search all user
}
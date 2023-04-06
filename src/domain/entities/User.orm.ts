import { userEntity } from "./User.entity";
import { LogError, LogSuccess } from "@/utils/logger";


// CRUD
export const GetAllUsers = async (): Promise<any[] | undefined> => {
    try {
        let userModel = userEntity()
        return await userModel.find({isDelete: false})
    }
    catch (error){
        LogError('ORM ERROR: ' + error)
    }
    //search all user
}
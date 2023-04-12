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

export const getUserById = async (id:string):Promise<any | undefined> => {

    try {
        let userModel = userEntity()
        return await userModel.findById(id)
    }
    catch (error){
        LogError('ORM ERROR searching id: ' + error)
    }
}


export const deleteUserById = async (id:string):Promise<any | undefined> => {

    try {
        let userModel = userEntity()
        return await userModel.deleteOne({"_id": id})
    }
    catch (error){
        LogError('ORM ERROR deleting id: ' + error)
        return Error
    }
}
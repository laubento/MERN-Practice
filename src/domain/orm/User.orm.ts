import { userEntity } from "../entities/User.entity";
import { LogError, LogSuccess } from "../../utils/logger";
import { IUser } from "../interfaces/IUser.interface";


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
        return 'no user found by id: ' + id
    }
}


export const deleteUserById = async (id:string):Promise<any | undefined> => {

    try {
        let userModel = userEntity()
        let userRemove = await userModel.deleteOne({"_id": id})
        if(!userRemove.deletedCount) return Error
        return userRemove
    }
    catch (error){
        LogError('[ORM ERROR] deleting id: ' + error)
        return Error
    }
}


export const updateUser = async (user:any, id: string):Promise<any | undefined> => {
    try {
        let userModel = userEntity()
       return await userModel.findByIdAndUpdate(id, user)
    }
    catch (error){
        LogError('[ORM ERROR] Updating user: ' + error)
        return Error
    }

}

// Register and login

export const registerUser = async (user:IUser): Promise<any | undefined> => {

}
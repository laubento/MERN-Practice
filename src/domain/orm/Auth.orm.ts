import { userEntity } from "../entities/User.entity"
import { LogSuccess, LogWarning, LogError } from '../../utils/logger'
import { ILogin, IUser } from "../interfaces/IUser.interface"
import bcrypt from 'bcrypt'
import  jwt  from "jsonwebtoken"

export const createUser = async (user: IUser): Promise<any | undefined> => {
    try {
        let userModel = userEntity()
        return await userModel.create(user)
    }
    catch (error) {
        LogError('[ORM ERROR] Creating user: ' + error)
        return Error
    }
}

export const loginUser = async (user: ILogin): Promise<any | undefined> => {
    try {
        let userModel = userEntity()
        let response:any = ''
        await userModel.findOne({ email: user.email }).then((res) => {
            // if exists email 
            if(res){
                // if exists password
                if(bcrypt.compareSync(user.password, res.password)){ 
                    // Create the secret token
                    return response = jwt.sign({email: res.email}, 'MYSECRETWORD', {expiresIn: "2h"})
                }
                response = "Login not valid"
            } 
            response = "Login not valid"
        }).catch((err) => {
            LogError('[ORM ERROR] Login user: ' + err)
            response = Error
        })
        return response
    }
    catch (error) {
        LogError('[ORM ERROR] Login user: ' + error)
        return Error
    }
}
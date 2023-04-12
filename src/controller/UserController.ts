import {Get, Route, Tags} from 'tsoa'
import { IUserController } from './interfaces'
import { LogSuccess, LogWarning } from '../utils/logger'


import { createUser, deleteUserById, getAllUsers, getUserById, updateUser } from '../domain/orm/User.orm'
import { BasicResponse } from './types'
import { response } from 'express'

@Route("/api/users")
@Tags("UserController")
export class UserController implements IUserController{
    
    public async getUser(id?:string): Promise<any> {  
        let response = await getAllUsers()
        if(id){
            LogSuccess("Search user with this id: " + id)
            let response = await getUserById(id)
            return response
        }else{
            LogSuccess("Search users")
            return response
        }
    }

    public async deleteUser(id?:string): Promise<any> {  
        if(id){
            let response:any = ''
            await deleteUserById(id)
            .then((r)=>{
                if(r == Error){
                    LogWarning('Id of the user not valid')
                    response = {
                        message: "User not found"
                    }
                }else{
                    LogSuccess("Delete User by id: " + id)
                    response = {
                        message: "User remove"
                    }
                }
            })
            .catch((error) => {
                response = {
                    message: "Error"
                }
            }) 
            return response
        }else{
            LogWarning("No id")
            return {
                message: "Please complete ID"
            }
        }
    }

    public async createNewUser(user: any): Promise<any>{
        await createUser(user)
        return{
            message: "Creating user"
        }
    }

    public async updateUser(user: any, id: string): Promise<any>{
        await updateUser(user, id)
        return{
            message: "update user"
        }
    }
}
import {Get, Route, Tags} from 'tsoa'
import { IUserController } from './interfaces'
import { LogSuccess, LogWarning } from '../utils/logger'


import { deleteUserById, getAllUsers, getUserById } from '../domain/orm/User.orm'
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
                console.log('soy r' + r)
                if(r == Error){
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

}
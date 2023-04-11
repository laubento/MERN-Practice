import {Get, Route, Tags} from 'tsoa'
import { IUserController } from './interfaces'
import { LogSuccess } from '../utils/logger'


import { getAllUsers } from '../domain/orm/User.orm'
import { BasicResponse } from './types'

@Route("/api/users")
@Tags("UserController")
export class UserController implements IUserController{

    public async getUser(): Promise<any> {

        const response = await getAllUsers()

        return response
    }
}
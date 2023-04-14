import express, { Request, Response } from "express";
import bcrypt from 'bcrypt'
import {IUser} from '../domain/interfaces/IUser.interface'
import { AuthController } from "../controller/AuthController";

let authRouter = express.Router()

authRouter.route('/register')
    .post(async (req:Request, res: Response) =>{
        console.log('pepito')
        
        console.log('aaaaaa ' +  await req.body) 



        let {name, age, email, password} = await req.body
        // Obtain password in request and cypher
        if(password && name && email && age) {
            let hashepassword = bcrypt.hashSync(req.body.password, 8)
   
            let user: IUser = {
                name,
                age,
                email,
                password: hashepassword
            } 
       
            const controller: AuthController = new AuthController();
            const response: any = await controller.registerUser(user)
            return res.send(response)
        }
        return res.send('Please complete all the fields')
    })
 

export default authRouter
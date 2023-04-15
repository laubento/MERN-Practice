import express, { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { ILogin, IUser } from '../domain/interfaces/IUser.interface'
import { AuthController } from "../controller/AuthController";

let authRouter = express.Router()

authRouter.route('/register')
    .post(async (req: Request, res: Response) => {
        let { name, age, email, password } = await req.body

        // Obtain password in request and cypher

        if (password && name && email && age) {
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

authRouter.route('/login')
    .post(async (req: Request, res: Response) => {
        let { email, password } = await req.body

        if (password && email) {
            let user: ILogin = {
                email,
                password
            }

            const controller: AuthController = new AuthController();
            const response: any = await controller.loginUser(user)

            if(response === Error) return res.status(500).send('Sorry something has happened')
            if(response === 'Login not valid') return res.status(404).send(response)
            return res.send(response)
        }
        return res.send('Please complete all the fields')
    })


export default authRouter
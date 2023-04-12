import express, { Request, Response } from "express";
import { UserController } from "../controller/UserController";
import { LogInfo } from "../utils/logger";

// Router from Express

let userRouter = express.Router()

// http://localhost:8000/api/users
userRouter.route('/')

    .get(async(req: Request, res: Response) => {

        // Obtain a Query Param
        let id: any = req?.query?.id

        //Create Controller
        const controller: UserController = new UserController();

        // obtain Response
        const response = await controller.getUser(id);

        //send to the client the response
        return res.send(response);
    })

    .delete(async (req:Request, res: Response) =>{
        let id: any = req?.query?.id;
        const controller: UserController = new UserController();
        const response = await controller.deleteUser(id);
        return res.send(response)
    })

    .post(async (req:Request, res: Response) => {

        let user = {
            name: 'pepito',
            email: "kakita",
            age: 333
        }
        
        const controller: UserController = new UserController();
        const response = await controller.createNewUser(user)
        return res.send(response)
    })
    
    .put(async (req: Request, res: Response) => {
        
        let id: any = req?.query?.id;
        
        let user = {
            name: 'p',
            email: "k",
            age: 3333333
        }

        const controller: UserController = new UserController();
        const response = await controller.updateUser(user, id)
        return res.send(response)
    })

//export HelloRouter
export default userRouter
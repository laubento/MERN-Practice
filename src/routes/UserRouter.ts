import express, { Request, Response } from "express";
import { UserController } from "../controller/UserController";
import { LogInfo } from "../utils/logger";

// Router from Express

let userRouter = express.Router()

// http://localhost:8000/api/users
userRouter.route('/')

    .get(async(req: Request, res: Response) => {

        //Create Controller
        const controller: UserController = new UserController();

        // obtain Response
        const response = await controller.getUser();

        //send to the client the response
        return res.send(response);
})

//export HelloRouter
export default userRouter
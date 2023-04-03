import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";

// Router from Express

let helloRouter = express.Router()

// http://localhost:8000/api/hello
helloRouter.route('/')

    .get(async(req: Request, res: Response) => {

        // Obtain a Query Param
        let name: any = req?.query?.name

        // Document Info
        LogInfo('Query Param is: ' + name)

        //Create Controller
        const controller: HelloController = new HelloController();

        // obtain Response
        const response = await controller.getMessage(name);

        //send to the client the response
        return res.send(response);
})

//export HelloRouter
export default helloRouter
import express, { Express, Request, Response } from "express";
import { LogInfo } from "../utils/logger";
import { GoodByeController } from "../controller/GoodByeController";

let byeRouter = express.Router()

byeRouter.route('/')
    .get(async (req: Request, res: Response) => {
        let name: any = req?.query?.name
        let date: Date = new Date();

        LogInfo('Date is: ' + date)

        const controller: GoodByeController = new GoodByeController()
        const response = await controller.getMessage(date, name)
        
    res.send(response)
})

export default byeRouter
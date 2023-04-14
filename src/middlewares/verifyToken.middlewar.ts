import { Jwt } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {

    let token: any = req.headers['x-access-token']

    if(!token){
        return res.status(403).send({
            authenticationError: 'Missing JWT in request',
            message: 'Not autorised to consume this endpoint'
        })
    }

}
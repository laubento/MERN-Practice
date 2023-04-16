import  jwt  from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv'

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    dotenv.config()
    let token: any = req.headers['x-access-token']
    let secret = process.env.SECRETKEY || 'MYSECRETKEY'
    if(!token){
        return res.status(403).send({
            authenticationError: 'Missing JWT in request',
            message: 'Not autorised to consume this endpoint'
        })
    }

    jwt.verify(token, secret, (err: any, decoded: any) => {

        if(err){
            return res.status(403).send({
                auyhenticationError: 'JWT verification failed',
                message: 'Failed to verify JWT token in request'
            }) 
        }
        
        next()
    })

}
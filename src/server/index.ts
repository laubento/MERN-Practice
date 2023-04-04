import express, { Express, Request, Response } from "express";

// Security 
import cors from 'cors'
import helmet from 'helmet'

// Root Router
import app from "../routes/index";

//Create Express APP
const server: Express = express();

// Define SERVE to use '/api' and use rootRouter from 'index.ts' in routes 
server.use(
    '/api',
    app
)

// Static Server
server.use(express.static('public'))

//Security config
server.use(helmet())
server.use(cors())

// Content Type Config
server.use(express.urlencoded({extended: true, limit: '50mb'}))
server.use(express.json({limit: '50mb'}))

// Redirection Config
// http://localhost:8000/ => http:localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api')
})

export default server
import express, { Express, Request, Response } from "express";

// Swagger
import swaggerUI from 'swagger-ui-express'

// Security 
import cors from 'cors'
import helmet from 'helmet'

// Root Router
import app from "../routes/index";
import mongoose from "mongoose";

//Create Express APP
let server = express();
const bodyParser = require("body-parser")

// Content Type Config
server.use(express.urlencoded({extended: true, limit: '50mb'}))
server.use(express.json())
server.use(bodyParser.json())

// Static Server
server.use(express.static('public'))

// * Swagger config and Route
server.use(
    '/docs',
    swaggerUI.serve,
    swaggerUI.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
            explorer: true
        }
    })
) 

// Define SERVE to use '/api' and use rootRouter from 'index.ts' in routes 
server.use(
    '/api',
    app
)


// TODO: Moongose Connection
mongoose.connect("mongodb://localhost:27017/Test")


//Security config
server.use(helmet())
server.use(cors())


// Redirection Config
// http://localhost:8000/ => http:localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api')
})

export default server

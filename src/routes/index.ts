import express, { Request, Response } from "express";
import helloRouter from "./HelloRouter";
import byeRouter from "./Goodbye";



// Server instace
const app = express();

// Router instance
let rootRouter = express.Router()

// Activate for request to http://localhost:8000/api/

rootRouter.get('/', (req: Request, res: Response) => {
    res.send('Welcome people')
})

// Redirections to Routers & Controllers
app.use('/', rootRouter)
app.use('/hello', helloRouter)
app.use('/goodbye', byeRouter)

export default app
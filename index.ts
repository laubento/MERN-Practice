import express, { Express, Request, Response } from "express"; 
import dotenv from 'dotenv';

// Configuration the .env file
dotenv.config();

//Create Exppress APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000

// Define the first Route of APP
app.get('/' , (req: Request, res: Response) => {
    res.send('APP Express + TS + Swagger + Mongoose')
})

// Define the second Route of APP
app.get('/hello' , (req: Request, res: Response) => {
    res.send('hello word')
})







// Execute APP and Listen Requests to PORT  
app.listen(port, () => {
    console.log("Express Server: Running at server")
})


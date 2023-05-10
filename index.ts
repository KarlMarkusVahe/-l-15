import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser"

import personController from "./routes/personController"
import dataController from "./routes/dataController"

mongoose.connect("mongodb+srv://karlmarkusvaher:awktzLXcx9emq9fE@cluster0.tjkufer.mongodb.net/test");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app: Express = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use('/', personController);
app.use('/', dataController);

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});
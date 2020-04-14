import * as bodyParser from "body-parser";
import express = require("express");
import mongoose from "mongoose";
import { Application, Request, Response, NextFunction, Router } from "express";

const port = process.env.PORT || 5000;

const app: Application = express();

//const add = (a: number, b: number): number => a + b;

// Setup mongoose
(mongoose as any).Promise = global.Promise;
mongoose
  .connect(
    `mongodb+srv://andrej:naprednebazepodataka@cluster0-bqac9.mongodb.net/chatapp`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`🖐️  Mongoose connected to DB`);
  })
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  console.log("test");
  res.send(`test`);
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //console.log(add(5, 5));
  res.send(`Hello from Typescript + Node & Express server`);
});

app.listen(port, () =>
  console.log(`Server is up and running on http://localhost:${port}`)
);

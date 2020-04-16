import * as bodyParser from "body-parser";
import express = require("express");
import mongoose from "mongoose";
import { Application, Request, Response, NextFunction, Router } from "express";
const cors = require("cors");

const port = process.env.PORT || 5000;

const app: Application = express();
app.use(cors());

//const add = (a: number, b: number): number => a + b;

interface IWallet {
  title: string;
  totalAmount: number;
  listOfTransactions: Object[];
}

interface IWalletModel extends IWallet, mongoose.Document {}

const Wallet = mongoose.model<IWalletModel>(
  "Wallet",
  new mongoose.Schema({
    title: String,
    totalAmount: Number,
    listOfTransactions: [],
  })
);

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

app.get("/getWallets", async (req, res) => {
  const wallets = await Wallet.find();
  res.send(wallets);
});

app.post("/addTransaction", async (req, res) => {
  const wallet = await Wallet.findById(
    mongoose.Types.ObjectId(req.body.idWallet)
  );
  const transaction = { title: req.body.tsxTitle, amount: req.body.tsxAmount };
  await wallet?.listOfTransactions.push(transaction);
  if (wallet?.totalAmount !== undefined)
    wallet.totalAmount += Number(req.body.tsxAmount);
  await wallet?.save();
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //console.log(add(5, 5));
  res.send(`Hello from Typescript + Node & Express server`);
});

app.listen(port, () =>
  console.log(`Server is up and running on http://localhost:${port}`)
);

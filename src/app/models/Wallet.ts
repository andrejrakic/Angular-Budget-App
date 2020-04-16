import { Transaction } from "./Transaction";

export class Wallet {
  _id?: string;
  title: string;
  listOfTransactions: Transaction[];
  totalAmount: number;
}

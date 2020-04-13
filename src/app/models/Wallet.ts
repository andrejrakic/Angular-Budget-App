import { Transaction } from "./Transaction";

export class Wallet {
  id?: string;
  title: string;
  listOfTransactions: Transaction[];
  totalAmount: number;
}

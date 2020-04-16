import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Wallet } from "../models/Wallet";
import { Observable } from "rxjs";
import { Transaction } from "../models/Transaction";

@Injectable({
  providedIn: "root",
})
export class WalletService {
  constructor(private http: HttpClient) {}

  getWallets() {
    return [
      { title: `Exodus Crypto Wallet`, listOfTransactions: [], totalAmount: 0 },
      {
        title: `MasterCard`,
        listOfTransactions: [
          new Transaction("salary", 60000),
          new Transaction("bills", -10000),
        ],
        totalAmount: 50000,
      },
      { title: `Drive & Go`, listOfTransactions: [], totalAmount: 800 },
    ];
  }

  getWalletsFromApi(): Observable<Wallet[]> {
    return this.http.get<Wallet[]>("http://localhost:5000/getWallets");
  }

  addTransaction(
    idWallet: string,
    transaction: Transaction
  ): Observable<Transaction> {
    const toSend = {
      idWallet: idWallet,
      tsxTitle: transaction.title,
      tsxAmount: transaction.amount,
    };
    console.log(toSend);
    console.log(transaction.title);
    return this.http.post<Transaction>(
      "http://localhost:5000/addTransaction",
      toSend
    );
  }
}

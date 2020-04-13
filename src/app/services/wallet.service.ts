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
    return this.http.get<Wallet[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );
  }
}

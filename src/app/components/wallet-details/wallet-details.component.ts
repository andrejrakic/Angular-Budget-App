import { Component, OnInit, Input } from "@angular/core";
import { Wallet } from "src/app/models/Wallet";
import { Transaction } from "src/app/models/Transaction";
import { Router } from "@angular/router";

@Component({
  selector: "app-wallet-details",
  templateUrl: "./wallet-details.component.html",
  styleUrls: ["./wallet-details.component.scss"],
})
export class WalletDetailsComponent implements OnInit {
  detailedWallet: Wallet;
  constructor(private router: Router) {}

  ngOnInit() {
    console.log(history.state.wallet);
    if (history.state.wallet === undefined) this.router.navigate(["/main"]);
    this.detailedWallet = history.state.wallet;
  }

  newTransaction(title: string, amount: number) {
    this.detailedWallet.listOfTransactions.push(new Transaction(title, amount));
    this.detailedWallet.totalAmount += Number(amount);
  }
}

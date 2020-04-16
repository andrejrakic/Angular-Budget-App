import { Component, OnInit, Input } from "@angular/core";
import { Wallet } from "src/app/models/Wallet";
import { Transaction } from "src/app/models/Transaction";
import { Router } from "@angular/router";
import { WalletService } from "src/app/services/wallet.service";

@Component({
  selector: "app-wallet-details",
  templateUrl: "./wallet-details.component.html",
  styleUrls: ["./wallet-details.component.scss"],
})
export class WalletDetailsComponent implements OnInit {
  detailedWallet: Wallet;
  constructor(private router: Router, private walletService: WalletService) {}

  ngOnInit() {
    console.log(history.state.wallet);
    if (history.state.wallet === undefined) this.router.navigate(["/main"]);
    this.detailedWallet = history.state.wallet;
  }

  newTransaction(title: string, amount: number) {
    this.walletService
      .addTransaction(this.detailedWallet._id, new Transaction(title, amount))
      .subscribe((res) => {
        console.log("Subscribe", res);
      });
    this.detailedWallet.listOfTransactions.push(new Transaction(title, amount));
    this.detailedWallet.totalAmount += Number(amount);
  }
}

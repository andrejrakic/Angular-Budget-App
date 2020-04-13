import { Component, OnInit, Input } from "@angular/core";
import { Wallet } from "src/app/models/Wallet";
import { Router } from "@angular/router";

@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.component.html",
  styleUrls: ["./wallet.component.scss"],
})
export class WalletComponent implements OnInit {
  @Input() wallet: Wallet;
  constructor(private router: Router) {}

  ngOnInit() {}

  seeDetails(wallet: Wallet): void {
    console.log(wallet.title);
    this.router.navigate(["/wallet"], { state: { wallet: this.wallet } });
  }
}

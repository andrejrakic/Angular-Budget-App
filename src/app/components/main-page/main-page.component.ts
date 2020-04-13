import { Component, OnInit } from "@angular/core";
import { Wallet } from "src/app/models/Wallet";
import { WalletService } from "src/app/services/wallet.service";
import { takeLast, first } from "rxjs/operators";
import { Store, select } from "@ngrx/store";
import { State } from "src/app/store";
import { User } from "src/app/models/User";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent implements OnInit {
  wallets: Wallet[];
  loggedUser$: Observable<User>;

  constructor(
    private walletService: WalletService // private store: Store<State>,
  ) // private router: Router
  {
    //console.log(this.store.select((state) => state.loggedUser));
    // this.loggedUser$ = this.store.pipe(select("loggedUser"));
    //this.loggedUser$ = this.store.select("loggedUser");
  }

  ngOnInit() {
    this.wallets = this.walletService.getWallets();
    // this.walletService
    //   .getWalletsFromApi()
    //   .pipe(first())
    //   .subscribe((res) => {
    //     //this.wallets = res;
    //     console.log(res);
    //   });
  }
}

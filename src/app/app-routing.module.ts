import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { WalletDetailsComponent } from "./components/wallet-details/wallet-details.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "main", component: MainPageComponent },
  { path: "wallet", component: WalletDetailsComponent },
  { path: "signup", component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

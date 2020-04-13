import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { WalletComponent } from "./components/wallet/wallet.component";
import { WalletDetailsComponent } from "./components/wallet-details/wallet-details.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { rootReducer } from "./store";
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    WalletComponent,
    WalletDetailsComponent,
    SignUpComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(rootReducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

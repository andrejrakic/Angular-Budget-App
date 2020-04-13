import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { State } from "src/app/store";
import { User } from "src/app/models/user";
import { Observable } from "rxjs";
import { NgForm } from "@angular/forms";
import { LogIn } from "src/app/store/actions/user.actions";
import { Router } from "@angular/router";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  userInput: User = { username: null, password: null };
  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit() {}

  LogIn(form: NgForm) {
    console.log(this.userInput);
    this.store.dispatch(
      new LogIn(this.userInput.username, this.userInput.password)
    );
    this.router.navigate(["/main"]);
  }
}

import { Action } from "@ngrx/store";

export const LOG_IN = "[LOG IN] User";

export class LogIn implements Action {
  type = LOG_IN;
  constructor(public username: string, public password: string) {}
}

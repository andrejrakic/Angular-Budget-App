import { User } from "../models/User";
import { ActionReducerMap } from "@ngrx/store";
import userReducer from "./reducers/user.reducer";

export interface State {
  loggedUser: User;
}

export const rootReducer: ActionReducerMap<State> = {
  loggedUser: userReducer,
};

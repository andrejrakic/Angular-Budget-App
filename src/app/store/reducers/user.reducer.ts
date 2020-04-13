import { User } from "src/app/models/user";
import { Action } from "@ngrx/store";
import { LOG_IN, LogIn } from "../actions/user.actions";

const initialState: User = {
  username: null,
  password: null,
};

export default function userReducer(
  state: User = initialState,
  action: Action
) {
  switch (action.type) {
    case LOG_IN: {
      const { username, password } = action as LogIn;
      console.log(username, password);
      const user: User = {
        username: username,
        password: password,
      };
      return { ...state, user };
    }
    default: 
      return state;
  }
}

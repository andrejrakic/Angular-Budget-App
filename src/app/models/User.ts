import { Wallet } from "./Wallet";

export interface User {
  email?: string;
  username: string;
  password: string;
  wallets?: Wallet[];
}

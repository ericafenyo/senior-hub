import { authenticate } from "@/api/auth/authenticate";
import { signOut } from "@/actions";

export class Accounts {
  static authenticate = authenticate;
  static signOut = signOut;
}

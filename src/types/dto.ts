import type { User } from "firebase/auth";
import type { Dispatch, SetStateAction } from "react";

export type TAuth = {
  user: User
};


export type TAuthContext = {
  auth: TAuth | null;
  setAuth: Dispatch<SetStateAction<TAuth | null>>;
}

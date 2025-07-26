
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.ts"
import { onAuthStateChanged } from "firebase/auth";
import type { TAuth, TAuthContext } from "../types/dto.ts";

export const AuthContext = createContext<TAuthContext | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [contextAuth, setAuth] = useState<TAuth | null>(null);
  const value = {
    auth: contextAuth,
    setAuth,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) setAuth(null);
      else setAuth({
        user
      })
    });
    return unsubscribe;
  }, []);


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

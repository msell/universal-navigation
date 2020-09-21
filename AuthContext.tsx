import React from "react";

type ContextProps = {
  authenticated: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

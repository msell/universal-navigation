import AsyncStorage from "@react-native-community/async-storage";
import React from "react";

interface AuthState {
  loading: boolean;
  authenticated: boolean;
  role?: "mechanic" | "controller";
}

const initialState: AuthState = {
  authenticated: false,
  loading: true,
};

type Action =
  | { type: "SIGN_IN"; email: string; password: string }
  | { type: "SIGN_OUT" }
  | { type: "REHYDRATE_AUTH"; authenticated: boolean };

const reducer = (state: AuthState, action: Action): AuthState => {
  console.log(action);
  switch (action.type) {
    case "REHYDRATE_AUTH":
      return {
        ...state,
        authenticated: action.authenticated,
        loading: false,
      };
    case "SIGN_IN":
      return {
        loading: false,
        authenticated: true,
        role: action.email.toLowerCase().includes("mech")
          ? "mechanic"
          : "controller",
      };
    case "SIGN_OUT":
      return { authenticated: false, loading: false };

    default:
      return state;
  }
};

export interface ContextValue {
  state: AuthState;
  dispatch: React.Dispatch<Action>;
}

export const AuthContext = React.createContext<Partial<ContextValue>>({});
export const AuthContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  React.useEffect(() => {
    if (state.loading) {
      AsyncStorage.getItem("isAuthenticated")
        .then((result) => {
          dispatch({
            type: "REHYDRATE_AUTH",
            authenticated: !!result && result === "true",
          });
        })
        .catch((e) => console.error(e));
    }
  }, [state.loading]);
  React.useEffect(() => {
    state.authenticated === true
      ? AsyncStorage.setItem("isAuthenticated", "true")
      : AsyncStorage.clear();
  }, [state.authenticated]);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

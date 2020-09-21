import AsyncStorage from "@react-native-community/async-storage";
import React from "react";

interface AuthState {
  loading: boolean;
  authenticated: boolean;
  email: string;
  role?: "mechanic" | "controller";
  lastAction?: Action;
}

const initialState: AuthState = {
  authenticated: false,
  loading: true,
  email: "",
};

type Action =
  | { type: "SIGN_IN"; email: string; password: string }
  | { type: "REQUEST_SIGN_OUT" }
  | { type: "SIGN_OUT" }
  | {
      type: "REHYDRATE_AUTH";
      authenticated: boolean;
      role: "mechanic" | "controller";
    };

const reducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case "REHYDRATE_AUTH":
      return {
        ...state,
        lastAction: action,
        authenticated: action.authenticated,
        loading: false,
      };
    case "SIGN_IN":
      return {
        loading: false,
        authenticated: true,
        lastAction: action,
        email: action.email,
        role: action.email.toLowerCase().includes("mech")
          ? "mechanic"
          : "controller",
      };
    case "REQUEST_SIGN_OUT":
      return {
        ...state,
        lastAction: action,
      };
    case "SIGN_OUT":
      return initialState;

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
      AsyncStorage.getItem("auth")
        .then((result) => {
          if (!result) {
            return;
          }
          const { isAuthenticated, role } = JSON.parse(result);
          dispatch({
            type: "REHYDRATE_AUTH",
            authenticated: isAuthenticated,
            role,
          });
        })
        .catch((e) => console.error(e));
    }
  }, [AsyncStorage, state.loading]);
  React.useEffect(() => {
    state.authenticated === true
      ? AsyncStorage.setItem(
          "auth",
          JSON.stringify({
            isAuthenticated: true,
            role: state.email.toLowerCase().includes("mech")
              ? "mechanic"
              : "controller",
          })
        )
      : AsyncStorage.clear();
  }, [AsyncStorage, state.authenticated]);

  React.useEffect(() => {
    const signOut = async () => {
      await AsyncStorage.clear();
      dispatch({ type: "SIGN_OUT" });
    };
    if (state.lastAction?.type === "REQUEST_SIGN_OUT") {
      signOut();
    }
  }, [AsyncStorage, state.lastAction?.type]);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

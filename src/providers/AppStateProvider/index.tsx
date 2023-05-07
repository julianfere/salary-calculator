import { ReactNode, createContext, useReducer } from "react";
import { AppStateContextType, Actions, AppStateActions } from "./types";

const initialValue: AppStateContextType = {
  workDays: 0,
  dolarValueSell: 0,
  dispatch: () => {},
};

const AppStateContext = createContext<AppStateContextType>(initialValue);

const reducer = (
  state: AppStateContextType,
  action: Actions
): AppStateContextType => {
  const { _tag, payload } = action;

  switch (_tag) {
    case AppStateActions.SET_WORK_DAYS:
      return {
        ...state,
        workDays: payload.workDays,
      };
    case AppStateActions.SET_DOLAR_VALUE_SELL:
      return {
        ...state,
        dolarValueSell: payload.dolarValueSell,
      };
    default:
      return state;
  }
};

const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const value = { ...state, dispatch };
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export { AppStateContext, AppStateProvider };

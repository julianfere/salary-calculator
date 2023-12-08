import { AppContextType, AppState } from "./types";

export const initialState: AppState = {
  dolarValueSell: 0,
  workDays: 0,
  storedData: {
    lastSalary: {
      value: 0,
      lastUpdated: "",
    },
    lastRaise: {
      value: 0,
      lastUpdated: "",
    },
  },
};

export const initialContext: AppContextType = {
  dispatch: () => {},
  state: initialState,
};

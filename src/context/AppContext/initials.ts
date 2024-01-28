import { AppContextType, AppState } from "./types";

export const initialState: AppState = {
  dolarInfo: {
    blue: {
      buy: 0,
      sell: 0,
      lastUpdated: "",
      status: "equal",
    },
    official: {
      buy: 0,
      sell: 0,
      lastUpdated: "",
      status: "equal",
    },
  },
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
  config: {},
};

export const initialContext: AppContextType = {
  dispatch: () => {},
  state: initialState,
};

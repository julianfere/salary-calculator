import { AppStorage } from "hooks/useLocalStorage/types";
import { Actions } from "./actions";
import { DolarInfo } from "services/dolarService/types";

type AppState = {
  workDays: number;
  dolarInfo: DolarInfo;
  storedData: AppStorage;
  config: AppConfig;
};

type AppContextType = {
  state: AppState;
  dispatch: (action: Actions) => void;
};

type AppConfig = {
  hours?: number;
  percentage?: number;
  plus?: boolean;
  plusAmount?: number;
  dolar?: boolean;
  pesosPlus?: number;
};

export type { Actions, AppContextType, AppState, AppConfig };

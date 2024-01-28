import { AppStorage } from "hooks/useLocalStorage/types";
import { Actions } from "./actions";
import { DolarInfo } from "services/dolarService/types";

type AppState = {
  workDays: number;
  dolarInfo: DolarInfo;
  storedData: AppStorage;
};

type AppContextType = {
  state: AppState;
  dispatch: (action: Actions) => void;
};

export type { Actions, AppContextType, AppState };

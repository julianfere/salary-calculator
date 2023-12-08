import { AppStorage } from "hooks/useLocalStorage/types";
import { Actions } from "./actions";

type AppState = {
  workDays: number;
  dolarValueSell: number;
  storedData: AppStorage;
};

type AppContextType = {
  state: AppState;
  dispatch: (action: Actions) => void;
};

export type { Actions, AppContextType, AppState };

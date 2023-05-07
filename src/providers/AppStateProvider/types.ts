enum AppStateActions {
  SET_WORK_DAYS = "SET_WORK_DAYS",
  SET_CURRENT_MONTH = "SET_CURRENT_MONTH",
  SET_DOLAR_VALUE_SELL = "SET_DOLAR_VALUE_SELL",
}

type AppStateContextType = {
  workDays: number;
  dolarValueSell: number;
  dispatch: (action: Actions) => void;
};

type SetWorkDaysAction = {
  _tag: "SET_WORK_DAYS";
  payload: {
    workDays: number;
  };
};

type SetDolarValueSellAction = {
  _tag: "SET_DOLAR_VALUE_SELL";
  payload: {
    dolarValueSell: number;
  };
};

type Actions = SetWorkDaysAction | SetDolarValueSellAction;

export type { Actions, AppStateContextType };
export { AppStateActions };

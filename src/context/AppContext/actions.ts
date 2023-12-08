enum AppStateActions {
  SetWorkdays = "SET_WORK_DAYS",
  SetCurrentMonth = "SET_CURRENT_MONTH",
  SetDolarValueSell = "SET_DOLAR_VALUE_SELL",
}

type SetWorkDaysAction = {
  _tag: AppStateActions.SetWorkdays;
  payload: {
    workDays: number;
  };
};

type SetDolarValueSellAction = {
  _tag: AppStateActions.SetDolarValueSell;
  payload: {
    dolarValueSell: number;
  };
};

type SetCurrentMonthAction = {
  _tag: AppStateActions.SetCurrentMonth;
  payload: {
    currentMonth: string;
  };
};

type Actions =
  | SetWorkDaysAction
  | SetDolarValueSellAction
  | SetCurrentMonthAction;

const setDolarValueSell = (
  dolarValueSell: number
): SetDolarValueSellAction => ({
  _tag: AppStateActions.SetDolarValueSell,
  payload: {
    dolarValueSell,
  },
});

const setWorkDays = (workDays: number): SetWorkDaysAction => ({
  _tag: AppStateActions.SetWorkdays,
  payload: {
    workDays,
  },
});

const setCurrentMonth = (currentMonth: string): SetCurrentMonthAction => ({
  _tag: AppStateActions.SetCurrentMonth,
  payload: {
    currentMonth,
  },
});

export type { Actions };
export { AppStateActions, setDolarValueSell, setWorkDays, setCurrentMonth };

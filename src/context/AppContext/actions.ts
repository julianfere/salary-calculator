enum AppStateActions {
  SetWorkdays = "SET_WORK_DAYS",
  SetCurrentMonth = "SET_CURRENT_MONTH",
  SetDolarValueSell = "SET_DOLAR_VALUE_SELL",
  SetLastSalary = "SET_LAST_SALARY",
  SetLastRaise = "SET_LAST_RAISE",
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

type SetLastSalaryAction = {
  _tag: AppStateActions.SetLastSalary;
  payload: {
    lastSalary: number;
  };
};

type SetLastRaiseAction = {
  _tag: AppStateActions.SetLastRaise;
  payload: {
    lastRaise: number;
  };
};

type Actions =
  | SetWorkDaysAction
  | SetDolarValueSellAction
  | SetCurrentMonthAction
  | SetLastSalaryAction
  | SetLastRaiseAction;

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

const setLastSalary = (lastSalary: number): SetLastSalaryAction => ({
  _tag: AppStateActions.SetLastSalary,
  payload: {
    lastSalary,
  },
});

const setLastRaise = (lastRaise: number): SetLastRaiseAction => ({
  _tag: AppStateActions.SetLastRaise,
  payload: {
    lastRaise,
  },
});

export type { Actions };
export {
  AppStateActions,
  setDolarValueSell,
  setWorkDays,
  setCurrentMonth,
  setLastSalary,
  setLastRaise,
};

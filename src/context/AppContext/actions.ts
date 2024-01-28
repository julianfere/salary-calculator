import { DolarInfo } from "services/dolarService/types";

enum AppStateActions {
  SetWorkdays = "SET_WORK_DAYS",
  SetCurrentMonth = "SET_CURRENT_MONTH",
  SetDollarInfo = "SET_DOLLAR_INFO",
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
  _tag: AppStateActions.SetDollarInfo;
  payload: DolarInfo;
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
  | SetLastSalaryAction
  | SetLastRaiseAction;

const setDollarInfo = (payload: DolarInfo): SetDolarValueSellAction => ({
  _tag: AppStateActions.SetDollarInfo,
  payload
});

const setWorkDays = (workDays: number): SetWorkDaysAction => ({
  _tag: AppStateActions.SetWorkdays,
  payload: {
    workDays,
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
  setDollarInfo,
  setWorkDays,
  setLastSalary,
  setLastRaise,
};

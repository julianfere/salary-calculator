import { AppStateContext } from "providers/AppStateProvider";
import { AppStateActions } from "providers/AppStateProvider/types";
import { useContext } from "react";

const useAppStateContext = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error(
      "useAppStateContext must be used within a AppStateContextProvider"
    );
  }
  return context;
};

const useAppState = () => {
  const { workDays, dolarValueSell, dispatch } = useAppStateContext();

  const setWorkDays = (workDays: number) => {
    dispatch({
      _tag: AppStateActions.SET_WORK_DAYS,
      payload: { workDays },
    });
  };

  const setDolarValueSell = (dolarValueSell: number) => {
    dispatch({
      _tag: AppStateActions.SET_DOLAR_VALUE_SELL,
      payload: { dolarValueSell },
    });
  };

  return {
    workDays,
    dolarValueSell,
    setWorkDays,
    setDolarValueSell,
  };
};

export { useAppState };

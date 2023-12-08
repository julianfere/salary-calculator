import { Actions, AppStateActions } from "./actions";
import { AppState } from "./types";

const appReducer = (state: AppState, action: Actions) => {
  switch (action._tag) {
    case AppStateActions.SetWorkdays:
      return {
        ...state,
        workDays: action.payload.workDays,
      };
    case AppStateActions.SetDolarValueSell:
      return {
        ...state,
        dolarValueSell: action.payload.dolarValueSell,
      };
    case AppStateActions.SetCurrentMonth:
      return {
        ...state,
        currentMonth: action.payload.currentMonth,
      };
    default:
      return state;
  }
};

export default appReducer;

import { Actions, AppStateActions } from "./actions";
import { AppState } from "./types";

const appReducer = (state: AppState, action: Actions) => {
  switch (action._tag) {
    case AppStateActions.SetWorkdays:
      return {
        ...state,
        workDays: action.payload.workDays,
      };
    case AppStateActions.SetDollarInfo:
      return {
        ...state,
        dolarInfo: action.payload,
      };
    case AppStateActions.SetLastSalary:
      return {
        ...state,
        storedData: {
          ...state.storedData,
          lastSalary: {
            value: action.payload.lastSalary,
            lastUpdated: new Date().toISOString(),
          },
        },
      };
    case AppStateActions.SetLastRaise:
      return {
        ...state,
        storedData: {
          ...state.storedData,
          lastRaise: {
            value: action.payload.lastRaise,
            lastUpdated: new Date().toISOString(),
          },
        },
      };
    default:
      return state;
  }
};

export default appReducer;

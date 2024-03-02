import { IStore } from "@entities/Storage";
import { ICalculatorConfig, IDashboardContext } from "./types";

export const initialContextValue: IDashboardContext = {
  dollar: {
    blue: {
      buy: 0,
      lastUpdate: "",
      sell: 0,
      status: "equal",
    },
    official: {
      buy: 0,
      lastUpdate: "",
      sell: 0,
      status: "equal",
    },
  },
  salary: {} as IStore["salary"],
  config: {} as ICalculatorConfig,
  raise: {} as IStore["salary"],
  updateContext: () => {},
};

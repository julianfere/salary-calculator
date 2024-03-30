import { IDollarData } from "@entities/Dollar";
import { IStore } from "@entities/Storage";

export interface ICalculatorConfig {
  hours?: number;
  dollarPercentage?: number;
  dollarPlus?: number;
  pesosPlus?: number;
  calculateDollars?: boolean;
  newHome?: boolean;
}

export interface IDashboardContext {
  dollar: IDollarData;
  salary: IStore["salary"];
  config: ICalculatorConfig;
  raise: IStore["salary"];
  updateContext: (newConfig: Partial<IStore>) => void;
}

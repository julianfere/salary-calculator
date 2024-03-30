import { ICalculatorConfig } from "@hooks/useDashboard/context/types";

interface ISalaryData {
  value: number;
  lastUpdate: string;
}

export interface IStore {
  salary: ISalaryData;
  config: ICalculatorConfig;
  raise: ISalaryData;
}

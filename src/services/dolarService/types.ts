type DollarHistory = {
  date: string;
  source: "Oficial" | "Blue";
  value_sell: number;
  value_buy: number;
}[];

type DollarStatuses = "increased" | "decreased" | "equal";

type LatestDollarInfo = {
  sell: number;
  buy: number;
  status: DollarStatuses;
  lastUpdated: string;
};

type DolarInfo = {
  official: LatestDollarInfo;
  blue: LatestDollarInfo;
};

export type { DolarInfo, DollarHistory, LatestDollarInfo, DollarStatuses };

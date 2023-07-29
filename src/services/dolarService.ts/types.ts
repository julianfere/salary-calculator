type DollarHistory = {
  date: string;
  type: "Oficial" | "Blue";
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

export type { DollarHistory, LatestDollarInfo, DollarStatuses };

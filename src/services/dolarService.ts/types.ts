type DolarValue = {
  value_avg: number;
  value_sell: number;
  value_buy: number;
}

type DolarResponse = {
  oficial: DolarValue;
  blue: DolarValue;
  oficial_euro: DolarValue;
  blue_euro: DolarValue;
  last_update: string;
}

export type { DolarResponse, DolarValue };
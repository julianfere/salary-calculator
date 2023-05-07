type FestiveDateObject = {
  motivo: string;
  tipo: "inamovible" | "trasladable" | "nolaborable" | "puente";
  info: string;
  dia: number;
  mes: number;
  id: string;
};

type FestiveDatesResponse = FestiveDateObject[];

export type { FestiveDatesResponse, FestiveDateObject };

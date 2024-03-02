export interface IFestiveDate {
  motivo: string;
  tipo: "inamovible" | "trasladable" | "nolaborable" | "puente";
  info: string;
  dia: number;
  mes: number;
  id: string;
}
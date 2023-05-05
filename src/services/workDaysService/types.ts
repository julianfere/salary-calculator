type FestiveDateObject = {
  motivo: string;
  tipo: 'inamovible' | 'trasladable' | 'nolaborable' | 'puente';
  info: string;
  dia: number;
  mes: number;
  id: string;
}


type FestiveDatesResposne = FestiveDateObject[]

export type { FestiveDatesResposne, FestiveDateObject };
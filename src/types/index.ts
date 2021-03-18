export type Point = [number, number];
export type Datum = {
  label: string;
  color: string;
  value?: number;
};
export type LayerName =
  | 'buildings/figure'
  | 'buildings/code'
  | 'buildings/level';
export type FigureGroupId = 'SOLID' | 'VOID';
export type LevelGroupId =
  | 'LEVEL01'
  | 'LEVEL02'
  | 'LEVEL03'
  | 'LEVEL04'
  | 'LEVEL05'
  | 'LEVEL06'
  | 'LEVEL07'
  | 'LEVEL08'
  | 'LEVEL09'
  | 'LEVEL10';

export type CodeGroupId =
  | 'CODE01'
  | 'CODE02'
  | 'CODE03'
  | 'CODE04'
  | 'CODE05'
  | 'CODE06'
  | 'CODE07'
  | 'CODE08'
  | 'CODE09'
  | 'CODE10'
  | 'CODE11'
  | 'CODE12'
  | 'CODE13';

export type FigureGroup = {
  id: FigureGroupId;
} & Datum;
export type CodeGroup = {
  id: CodeGroupId;
} & Datum;
export type LevelGroup = {
  id: LevelGroupId;
} & Datum;
export type StatsFragment = {
  [key: string]: number;
};
export type Stats = {
  figure: StatsFragment;
  codes: StatsFragment;
  levels: StatsFragment;
};

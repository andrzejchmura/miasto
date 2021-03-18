import {
  LevelGroupId,
  CodeGroupId,
  CodeGroup,
  LevelGroup,
  FigureGroup,
} from 'types';

export const colors = {
  orange: {
    200: '#FED7AA',
    300: '#FDBA74',
    400: '#FB923C',
    500: '#F97316',
    600: '#EA580C',
  },
  gray: {
    200: '#E4E4E7',
    300: '#D4D4D8',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
  },
  indigo: {
    200: '#C7D2FE',
    300: '#A5B4FC',
    400: '#818CF8',
    500: '#6366F1',
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81',
    1000: '#282669',
    1100: '#1D1C4D',
  },
  blue: {
    500: '#3B82F6',
  },
  lime: {
    500: '#22C55E',
  },
  yellow: {
    900: '#713F12',
  },
  violet: {
    500: '#8B5CF6',
  },
};

export const cityInfo = {
  name: 'Gdynia',
  description:
    'City in northern Poland. It is a major seaport and the second-largest city in Pomeranian Voivodeship after Gdańsk.',
  area: 135.14,
  population: 245867,
  density: 1819.4,
  buildings: 26558,
};

export const figureGroups: [FigureGroup, FigureGroup] = [
  {
    id: 'SOLID',
    label: 'Solid',
    color: '#1F2937',
  },
  {
    id: 'VOID',
    label: 'Void',
    color: '#E5E7EB',
  },
];

export const codeGroups: CodeGroup[] = [
  {
    id: 'CODE01',
    label: 'One and Two Family',
    color: colors.orange[200],
  },
  {
    id: 'CODE02',
    label: 'Multi-Family',
    color: colors.orange[300],
  },
  {
    id: 'CODE03',
    label: 'Hospitality',
    color: colors.orange[400],
  },
  {
    id: 'CODE04',
    label: 'Office',
    color: colors.orange[500],
  },
  {
    id: 'CODE05',
    label: 'Commercial',
    color: colors.orange[600],
  },
  {
    id: 'CODE06',
    label: 'Transportaton and Utility',
    color: colors.gray[500],
  },
  {
    id: 'CODE07',
    label: 'Industrial and Magazine',
    color: colors.gray[600],
  },
  {
    id: 'CODE08',
    label: 'Public Institution and Facility',
    color: colors.yellow[900],
  },
  {
    id: 'CODE09',
    label: 'Educational',
    color: colors.lime[500],
  },
  {
    id: 'CODE10',
    label: 'Healthcare',
    color: colors.blue[500],
  },
  {
    id: 'CODE11',
    label: 'Garage and Outbuilding',
    color: colors.gray[200],
  },
  {
    id: 'CODE12',
    label: 'Religious',
    color: colors.violet[500],
  },
  {
    id: 'CODE13',
    label: 'Other',
    color: colors.gray[400],
  },
];

export const levelGroups: LevelGroup[] = [
  {
    id: 'LEVEL01',
    label: '1 level',
    color: colors.indigo[200],
  },
  {
    id: 'LEVEL02',
    label: '2 levels',
    color: colors.indigo[300],
  },
  {
    id: 'LEVEL03',
    label: '3 levels',
    color: colors.indigo[400],
  },
  {
    id: 'LEVEL04',
    label: '4 levels',
    color: colors.indigo[500],
  },
  {
    id: 'LEVEL05',
    label: '5 levels',
    color: colors.indigo[600],
  },
  {
    id: 'LEVEL06',
    label: '6 levels',
    color: colors.indigo[700],
  },
  {
    id: 'LEVEL07',
    label: '7-8 levels',
    color: colors.indigo[800],
  },
  {
    id: 'LEVEL08',
    label: '9-11 levels',
    color: colors.indigo[900],
  },
  {
    id: 'LEVEL09',
    label: '12-18 levels',
    color: colors.indigo[1000],
  },
  {
    id: 'LEVEL10',
    label: '19 and more levels',
    color: colors.indigo[1100],
  },
];

export function getLevelColor(levels: number) {
  switch (true) {
    case levels === 1:
      return colors.indigo[200];
    case levels === 2:
      return colors.indigo[300];
    case levels === 3:
      return colors.indigo[400];
    case levels === 4:
      return colors.indigo[500];
    case levels === 5:
      return colors.indigo[600];
    case levels === 6:
      return colors.indigo[700];
    case levels <= 8:
      return colors.indigo[800];
    case levels <= 11:
      return colors.indigo[900];
    case levels <= 18:
      return colors.indigo[1000];
    default:
      return colors.indigo[1100];
  }
}

export function getCodeColor(code: string) {
  switch (code) {
    case 'BUBD01': // 1 family
    case 'BUBD02': // 2 family
      return colors.orange[200];
    case 'BUBD03': // multi-family
      return colors.orange[300];
    case 'BUBD04': // collective residence
    case 'BUBD05': // hotel
    case 'BUBD06': // tourist
      return colors.orange[400];
    case 'BUBD07': // office
      return colors.orange[500];
    case 'BUBD08': // commercial
      return colors.orange[600];
    case 'BUBD09': // station, terminal
      return colors.gray[500];
    case 'BUBD11': // industrial
    case 'BUBD12': // magazine
      return colors.gray[600];
    case 'BUBD13': // culture
    case 'BUBD14': // museum and library
    case 'BUBD17': // sport
      return colors.yellow[900];
    case 'BUBD15': // school and academy
      return colors.lime[500];
    case 'BUBD16': // hospital
      return colors.blue[500];
    case 'BUBD10': // garage
    case 'BUBD18': // outbuilding
      return colors.gray[200];
    case 'BUBD19': // religion
      return colors.violet[500];
    case 'BUBD21': // other
      return colors.gray[400];
    default:
      return '#000000';
  }
}

export function getCodeGroupId(code: string): CodeGroupId {
  switch (code) {
    case 'BUBD01': // 1 family
    case 'BUBD02': // 2 family
      return 'CODE01';
    case 'BUBD03': // multi-family
      return 'CODE02';
    case 'BUBD04': // collective residence
    case 'BUBD05': // hotel
    case 'BUBD06': // tourist
      return 'CODE03';
    case 'BUBD07': // office
      return 'CODE04';
    case 'BUBD08': // commercial
      return 'CODE05';
    case 'BUBD09': // station, terminal
      return 'CODE06';
    case 'BUBD11': // industrial
    case 'BUBD12': // magazine
      return 'CODE07';
    case 'BUBD13': // culture
    case 'BUBD14': // museum and library
    case 'BUBD17': // sport
      return 'CODE08';
    case 'BUBD15': // school and academy
      return 'CODE09';
    case 'BUBD16': // hospital
      return 'CODE10';
    case 'BUBD10': // garage
    case 'BUBD18': // outbuilding
      return 'CODE11';
    case 'BUBD19': // religion
      return 'CODE12';
    case 'BUBD21': // other
      return 'CODE13';
    default:
      return 'CODE13';
  }
}

export function getLevelGroupId(levels: number): LevelGroupId {
  switch (true) {
    case levels === 1:
      return 'LEVEL01';
    case levels === 2:
      return 'LEVEL02';
    case levels === 3:
      return 'LEVEL03';
    case levels === 4:
      return 'LEVEL04';
    case levels === 5:
      return 'LEVEL05';
    case levels === 6:
      return 'LEVEL06';
    case levels <= 8:
      return 'LEVEL07';
    case levels <= 11:
      return 'LEVEL08';
    case levels <= 18:
      return 'LEVEL09';
    default:
      return 'LEVEL10';
  }
}

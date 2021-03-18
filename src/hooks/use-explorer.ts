import { useReducer } from 'react';
import { LayerName, Stats } from 'types';

type Action =
  | { type: 'set-toast'; payload: boolean }
  | { type: 'set-radius'; payload: number }
  | { type: 'set-layer'; payload: LayerName }
  | { type: 'set-stats'; payload: Stats };

type State = {
  toast: boolean;
  radius: number;
  layer: LayerName;
  stats: Stats | null;
};

const defaultValue: State = {
  toast: false,
  radius: 400,
  layer: 'buildings/figure',
  stats: null,
};

function explorerReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'set-toast': {
      return { ...state, toast: action.payload };
    }
    case 'set-radius': {
      return { ...state, radius: action.payload };
    }
    case 'set-layer': {
      return { ...state, layer: action.payload };
    }
    case 'set-stats': {
      return { ...state, stats: action.payload };
    }
  }
}

export function useExplorer() {
  const [state, dispatch] = useReducer(explorerReducer, defaultValue);

  const setToast = (visible: boolean) =>
    dispatch({ type: 'set-toast', payload: visible });
  const setRadius = (radius: number) =>
    dispatch({ type: 'set-radius', payload: radius });
  const setLayer = (layer: LayerName) =>
    dispatch({ type: 'set-layer', payload: layer });
  const setStats = (stats: Stats) =>
    dispatch({ type: 'set-stats', payload: stats });

  return { state, setToast, setRadius, setLayer, setStats, dispatch };
}

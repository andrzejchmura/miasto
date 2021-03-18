import React from 'react';
import { scaleLinear } from '@visx/scale';
import { getValueAsString } from 'lib/helpers';
import { CodeGroup, LevelGroup } from 'types';

type ListProps = {
  width: number;
  stats: CodeGroup[] | LevelGroup[];
};

const List = ({ width, stats }: ListProps) => {
  const getValue = (d: CodeGroup | LevelGroup) => d.value ?? 0;
  const maxValue = Math.max(...stats.map(getValue)) || 1;

  const scale = scaleLinear({
    range: [0, width],
    round: true,
    domain: [0, maxValue],
  });

  return (
    <div className="py-4">
      {stats.map((d: CodeGroup | LevelGroup) => {
        const w = scale(getValue(d));

        return (
          <div className="mb-3" key={d.label}>
            <p className="mb-1 text-sm font-semibold flex justify-between">
              <span>{d.label}</span>
              <span>{getValueAsString(d.value)} m²</span>
            </p>
            <svg width={width} height={5}>
              <rect x={0} y={0} width={w} height={5} fill={d.color} />
              <rect x={w} y={0} width={width - w} height={5} fill="#E5E7EB" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default List;

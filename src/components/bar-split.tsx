import { scaleLinear } from '@visx/scale';
import { getPercentage, getValueAsString } from 'lib/helpers';
import { FigureGroup } from 'types';

type BarSplitProps = {
  width: number;
  stats: FigureGroup[];
};

const BarSplit = ({ width, stats }: BarSplitProps) => {
  const v1 = stats[0].value || 0;
  const v2 = stats[1].value || 0;
  const total = v1 + v2;

  const scale = scaleLinear({
    range: [0, width],
    round: true,
    domain: [0, total],
  });

  const w = scale(v1);
  const p1 = getValueAsString(getPercentage(v1, total));
  const p2 = getValueAsString(getPercentage(v2, total));

  return (
    <div className="my-8">
      <p className="mb-1 text-sm font-semibold flex justify-between">
        <span>{`${stats[0].label} - ${p1}%`}</span>
        <span>{`${stats[1].label} - ${p2}%`}</span>
      </p>
      <svg width={width} height={5}>
        <rect x={0} y={0} width={w} height={5} fill={stats[0].color} />
        <rect x={w} y={0} width={width - w} height={5} fill={stats[1].color} />
      </svg>
    </div>
  );
};

export default BarSplit;

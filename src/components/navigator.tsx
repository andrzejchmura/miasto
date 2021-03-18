import { LayerName, Stats } from 'types';
import SectionIntroduction from 'components/section-introduction';
import SectionFigure from 'components/section-figure';
import SectionCodes from 'components/section-codes';
import SectionLevels from 'components/section-levels';

type NavigatorProps = {
  stats: Stats | null;
  toast: boolean;
  setLayer: (layer: LayerName) => void;
};

const Navigator = ({ stats, toast, setLayer }: NavigatorProps) => {
  return (
    <div className="overflow-y-scroll px-8 py-4 bg-white max-w-sm">
      <SectionIntroduction onView={() => {}} />
      <SectionFigure
        stats={!toast ? stats?.figure : {}}
        onView={() => setLayer('buildings/figure')}
      />
      <SectionCodes
        stats={!toast ? stats?.codes : {}}
        onView={() => setLayer('buildings/code')}
      />
      <SectionLevels
        stats={!toast ? stats?.levels : {}}
        onView={() => setLayer('buildings/level')}
      />
    </div>
  );
};

export default Navigator;

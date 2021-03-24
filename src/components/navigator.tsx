import { LayerName, Stats } from 'types';
import SectionIntroduction from 'components/section-introduction';
import SectionFigure from 'components/section-figure';
import SectionCodes from 'components/section-codes';
import SectionLevels from 'components/section-levels';
import Section from 'components/section';
import cx from 'classnames';

type NavigatorProps = {
  layer: LayerName;
  stats: Stats | null;
  toast: boolean;
  setLayer: (layer: LayerName) => void;
};

const Navigator = ({ stats, toast, ...sectionProps }: NavigatorProps) => {
  return (
    <div
      className={cx(
        'px-8 py-4 w-full',
        'md:max-w-sm md:flex-none md:overflow-y-scroll'
      )}
    >
      <Section name="buildings/figure" {...sectionProps}>
        <SectionIntroduction />
      </Section>
      <Section name="buildings/figure" {...sectionProps}>
        <SectionFigure stats={!toast ? stats?.figure : {}} />
      </Section>
      <Section name="buildings/code" {...sectionProps}>
        <SectionCodes stats={!toast ? stats?.codes : {}} />
      </Section>
      <Section name="buildings/level" {...sectionProps}>
        <SectionLevels stats={!toast ? stats?.levels : {}} />
      </Section>
    </div>
  );
};

export default Navigator;

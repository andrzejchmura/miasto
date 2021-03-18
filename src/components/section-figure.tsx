import Section, { SectionProps } from 'components/section';
import Overview from 'components/overview';
import { DataPoint, DataGroup } from 'components/statistic';
import BarSplit from 'components/bar-split';
import { H4, P } from 'components/typography';
import { figureGroups } from 'lib/data';
import { mergeWith } from 'lib/helpers';

const SectionFigure = ({ stats, onView }: SectionProps) => {
  const formattedStats = mergeWith(figureGroups, stats || {});

  return (
    <Section onView={onView}>
      <H4>Overview</H4>
      <Overview />
      <H4>Figure</H4>
      <P>
        A figure-ground diagram is a two-dimensional map of an urban space that
        shows the relationship between built and unbuilt space.
      </P>
      <DataGroup>
        <DataPoint label="Count" value={stats?.count}></DataPoint>
        <DataPoint label="Footprint" value={stats?.SOLID} unit="m²"></DataPoint>
      </DataGroup>
      <BarSplit width={300} stats={formattedStats} />
    </Section>
  );
};

export default SectionFigure;

import List from 'components/list';
import { H4, P } from 'components/typography';
import { codeGroups } from 'lib/data';
import { mergeWith } from 'lib/helpers';
import { StatsFragment } from 'types';

const SectionCodes = ({ stats }: { stats?: StatsFragment }) => {
  const formattedStats = mergeWith(codeGroups, stats || {});

  return (
    <>
      <H4>Functions</H4>
      <P>
        One of the key components of a convenient city is a diverse function mix
        within a reasonable radius. This affects the number of potential
        destinations within a neighborhood.
      </P>
      <List width={300} stats={formattedStats} />
    </>
  );
};

export default SectionCodes;

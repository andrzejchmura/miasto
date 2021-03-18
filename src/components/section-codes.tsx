import Section, { SectionProps } from 'components/section';
import List from 'components/list';
import { H4, P } from 'components/typography';
import { codeGroups } from 'lib/data';
import { mergeWith } from 'lib/helpers';

const SectionCodes = ({ stats, onView }: SectionProps) => {
  const formattedStats = mergeWith(codeGroups, stats || {});

  return (
    <Section onView={onView}>
      <H4>Functions</H4>
      <P>
        One of the key components of a convenient city is a diverse function mix
        within a reasonable radius. This affects the number of potential
        destinations within a neighborhood.
      </P>
      <List width={300} stats={formattedStats} />
    </Section>
  );
};

export default SectionCodes;

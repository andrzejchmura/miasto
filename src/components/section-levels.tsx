import Section, { SectionProps } from 'components/section';
import { H4, P, Aside } from 'components/typography';
import List from 'components/list';
import { mergeWith } from 'lib/helpers';
import { levelGroups } from 'lib/data';

const SectionLevels = ({ stats, onView }: SectionProps) => {
  const formattedStats = mergeWith(levelGroups, stats || {});

  return (
    <Section onView={onView}>
      <H4>Building height</H4>
      <P>
        Building height distribution is one the key factors of urban analysis
        and can directly affect the urban density metrics.
      </P>
      <List width={300} stats={formattedStats} />
      <Aside>More stats coming soon.</Aside>
    </Section>
  );
};

export default SectionLevels;

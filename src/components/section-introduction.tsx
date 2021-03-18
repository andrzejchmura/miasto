import Section, { SectionProps } from 'components/section';
import { H4, P, Li, Aside } from 'components/typography';

const SectionIntroduction = ({ onView }: SectionProps) => {
  return (
    <Section onView={onView}>
      <H4>Introduction</H4>
      <P className="text-xl">
        <span className="font-semibold">Miasto</span> is an interactive city
        explorer.
      </P>
      <ul className="">
        <Li>Move the circle around the map to highlight a specific area.</Li>
        <Li>
          Use the slider to change the walking distance from the highlighted
          area center.
        </Li>
        <Li>
          Scroll through the sidebar to switch between different map layers.
        </Li>
        <Li>Explore the city through different metrics.</Li>
      </ul>
      <P>This is an ongoing project.</P>
      <Aside>
        Gdynia was chosen as the first city available in Miasto. More cities are
        coming soon.
      </Aside>
    </Section>
  );
};

export default SectionIntroduction;

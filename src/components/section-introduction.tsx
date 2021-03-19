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
      <Aside>
        Gdynia was chosen as the first city available in Miasto. More cities are
        coming soon.
      </Aside>
      <P>
        This is an open-source project by{' '}
        <a
          href="https://twitter.com/andrzejchmura"
          className="text-purple-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          @andrzejchmura
        </a>
        . The code is available on{' '}
        <a
          href="https://github.com/andrzejchmura/miasto"
          className="text-purple-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </P>
    </Section>
  );
};

export default SectionIntroduction;

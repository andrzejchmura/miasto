import { useEffect, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';
import { StatsFragment } from 'types';

export type SectionProps = {
  onView: () => void;
  stats?: StatsFragment;
  children?: ReactNode;
};

const Section = ({ onView, children }: SectionProps) => {
  const [ref, inView, entity] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      onView();
    }
  }, [inView]);

  const classname = cx({
    'py-4 border-b': true,
    'opacity-50': !inView,
  });

  return (
    <div className={classname} style={{ minHeight: '50vh' }} ref={ref}>
      {children}
    </div>
  );
};

export default Section;

import { useEffect, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import cx from 'classnames';
import { LayerName } from 'types';

export type SectionProps = {
  name: LayerName;
  layer: LayerName;
  setLayer: (layer: LayerName) => void;
  children?: ReactNode;
};
const Section = ({ name, layer, setLayer, children }: SectionProps) => {
  const [ref, inView, entity] = useInView({
    threshold: [0.7, 1],
  });

  useEffect(() => {
    if (inView) {
      setLayer(name);
    }
  }, [inView]);

  const classname = cx({
    'py-4 border-b relative': true,
    'opacity-50': name !== layer,
  });

  return (
    <div className={classname} style={{ minHeight: '51vh' }} ref={ref}>
      {children}
    </div>
  );
};

export default Section;

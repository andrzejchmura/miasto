import Navigator from 'components/navigator';
import Range from 'components/range';
import Map from 'components/map';
import Toaster from 'components/toaster';
import { useExplorer } from 'hooks/use-explorer';
import cx from 'classnames';

const Region = () => {
  const { state, setToast, setRadius, setLayer, setStats } = useExplorer();
  const { toast, radius, layer, stats } = state;

  return (
    <main className="h-screen flex flex-col md:flex-row">
      <Navigator
        stats={stats}
        layer={layer}
        setLayer={setLayer}
        toast={toast}
      />
      <div
        className={cx(
          'relative w-full min-h-3/4 order-first',
          'md:flex-1 md:order-last'
        )}
      >
        <Toaster toast={toast} />
        <Range radius={radius} setRadius={setRadius} />
        <Map
          radius={radius}
          layer={layer}
          toast={toast}
          setStats={setStats}
          setToast={setToast}
        />
      </div>
    </main>
  );
};

export default Region;

import Navigator from 'components/navigator';
import Range from 'components/range';
import Map from 'components/map';
import Toaster from 'components/toaster';
import { useExplorer } from 'hooks/use-explorer';

const Region = () => {
  const { state, setToast, setRadius, setLayer, setStats } = useExplorer();
  const { toast, radius, layer, stats } = state;

  return (
    <main className="grid-layout">
      <Navigator stats={stats} setLayer={setLayer} toast={toast} />
      <div className="relative">
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

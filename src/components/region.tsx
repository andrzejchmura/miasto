import Navigator from 'components/navigator';
import Range from 'components/range';
import Map from 'components/map';
import Toaster from 'components/toaster';
import MobileBanner from 'components/mobile-banner';
import { useExplorer } from 'hooks/use-explorer';

const Region = () => {
  const { state, setToast, setRadius, setLayer, setStats } = useExplorer();
  const { toast, radius, layer, stats } = state;

  return (
    <main className="h-screen flex flex-col md:flex-row">
      <MobileBanner />
      <Navigator
        stats={stats}
        layer={layer}
        setLayer={setLayer}
        toast={toast}
      />
      <div className="relative w-full order-first md:flex-1 md:order-last">
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

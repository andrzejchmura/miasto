import { AppProps } from 'next/app';
import 'styles/tailwind.css';
import 'styles/custom.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;

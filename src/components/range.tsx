import { getTrackBackground, Range as ReactRange } from 'react-range';
import cx from 'classnames';
import { H4 } from 'components/typography';

type RangeProps = {
  radius: number;
  setRadius: (value: number) => void;
};

const MIN = 400;
const MAX = 800;

const Range = ({ radius, setRadius }: RangeProps) => {
  return (
    <div className="absolute top-8 w-full flex justify-center pointer-events-none z-50">
      <div className="w-96 pointer-events-auto">
        <div className="mb-1">
          <H4>
            Walking distance: <span className="font-semibold">{radius}</span> m
          </H4>
        </div>
        <div className="shadow-sm bg-gray-50 p-4 rounded-md">
          <ReactRange
            min={MIN}
            max={MAX}
            step={1}
            onChange={(values) => {
              setRadius(values[0]);
            }}
            values={[radius]}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  height: '3px',
                  background: getTrackBackground({
                    min: MIN,
                    max: MAX,
                    values: [radius],
                    colors: ['#374151', '#E5E7EB'],
                  }),
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className={cx(
                  'w-5 h-5 bg-gray-700 rounded-full shadow-sm',
                  'outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-700'
                )}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Range;

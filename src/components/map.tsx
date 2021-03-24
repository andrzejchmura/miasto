// @refresh reset
import { memo, useRef, useEffect } from 'react';
import { useWindowSize } from 'hooks/use-window-size';
import { MapMouseEvent, MapTouchEvent } from 'mapbox-gl';
import Explorer from 'lib/explorer';
import { Vec2 } from 'lib/math';
import { GDYNIA } from 'lib/constants';
import { Point, LayerName } from 'types';

type MapPointerEvent = MapMouseEvent | MapTouchEvent;
type Vectors = {
  difference: Point;
  position: Point;
};
type MapProps = {
  radius: number;
  layer: LayerName;
  setStats: (state: any) => void;
  toast: boolean;
  setToast: (visibility: boolean) => void;
};

const Map = ({ radius, layer, toast, setStats, setToast }: MapProps) => {
  const windowSize = useWindowSize();
  const container = useRef<HTMLDivElement>(null);
  const explorer = useRef<Explorer>();
  const vectors = useRef<Vectors>({
    difference: [0, 0],
    position: GDYNIA.CENTER,
  });

  function onZoom() {
    const currentZoom = explorer.current?.map.getZoom();

    if (currentZoom) {
      if (currentZoom < 12 && toast !== true) {
        setToast(true);
      }
      if (currentZoom >= 12 && toast !== false) {
        setToast(false);
      }
    }
  }

  useEffect(() => {
    if (container.current) {
      explorer.current = new Explorer(container.current);
      explorer.current.init();
      explorer.current?.map.once('idle', () => {
        const data = explorer.current?.update(vectors.current.position, radius);
        setStats(data);
      });
    }

    return () => {
      explorer.current?.map.remove();
    };
  }, []);

  useEffect(() => {
    explorer.current?.map.resize();
  }, [windowSize]);

  useEffect(() => {
    explorer.current?.map.on('zoomend', onZoom);

    return () => {
      explorer.current?.map.off('zoomend', onZoom);
    };
  }, [toast]);

  useEffect(() => {
    explorer.current?.map.on('mousedown', 'circle', onDragStart);
    explorer.current?.map.on('touchstart', 'circle', onDragStart);

    return () => {
      explorer.current?.map.off('mousedown', 'circle', onDragStart);
      explorer.current?.map.off('touchstart', 'circle', onDragStart);
    };
  }, [radius]);

  useEffect(() => {
    if (explorer.current && explorer.current.map.loaded()) {
      explorer.current.show(layer);
    }
  }, [layer]);

  useEffect(() => {
    if (explorer.current && explorer.current.map.loaded()) {
      const data = explorer.current.update(vectors.current.position, radius);
      setStats(data);
    }
  }, [radius]);

  function onDragStart(e: MapPointerEvent) {
    e.preventDefault();

    const positionVec = new Vec2(vectors.current.position);
    const nextPositionVec = new Vec2(e.lngLat.toArray() as Point);

    vectors.current.difference = positionVec
      .subtract(nextPositionVec)
      .toPoint();

    explorer.current?.map.on('mousemove', onDragMove);
    explorer.current?.map.on('touchmove', onDragMove);
    explorer.current?.map.once('mouseup', onDragEnd);
    explorer.current?.map.once('mouseout', onDragEnd);
    explorer.current?.map.once('touchend', onDragEnd);
  }

  function onDragMove(e: MapPointerEvent) {
    const differenceVec = new Vec2(vectors.current.difference);
    const positionVec = new Vec2(e.lngLat.toArray() as Point);

    const nextPosition = positionVec.add(differenceVec).toPoint();

    vectors.current.position = nextPosition;
    const data = explorer.current?.update(nextPosition, radius);

    setStats(data);
  }

  function onDragEnd(e: MapPointerEvent) {
    explorer.current?.map.off('mousemove', onDragMove);
    explorer.current?.map.off('touchmove', onDragMove);
  }

  return <div className="w-full min-h-70vh h-full" ref={container}></div>;
};

export default memo(Map);

import { useEffect, useRef, useState } from 'react';

export function useMeasureFPS(): number {
  const [fps, setFps] = useState(0);
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());

  useEffect(() => {
    const loop = () => {
      const now = performance.now();
      const delta = now - lastTime.current;
      frameCount.current++;

      if (delta >= 1000) {
        setFps(frameCount.current);
        frameCount.current = 0;
        lastTime.current = now;
      }

      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  return fps;
}

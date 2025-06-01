import { useEffect } from 'react';
import { createSketch } from './sketch';

export function App() {
  useEffect(() => {
    return createSketch();
  }, []);

  return <></>;
}

import { useEffect } from 'react';
import { createSketch } from './sketch';

export function App() {
  useEffect(() => {
    createSketch();

    return () => {
      document.querySelector('main')?.remove();
    };
  }, []);

  return <></>;
}

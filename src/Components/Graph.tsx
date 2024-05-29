import React from 'react';
import { GraphCanvas } from 'reagraph';

const nodes = [
  {
    id: '1',
    label: '1',
  },
  {
    id: '2',
    label: '2',
  },
];

const edges = [
  {
    source: '1',
    target: '2',
    id: '1-2',
    label: '1-2',
  },
  {
    source: '2',
    target: '1',
    id: '2-1',
    label: '2-1',
  },
];

export const Graph = () => (
  <div
    style={{
      position: 'absolute',
      margin: '1%',
      width: '95vw',
      height: '85vh',
      border: '2px solid black',
      borderRadius: 8,
    }}
  >
    <GraphCanvas nodes={nodes} edges={edges} />
  </div>
);

import React from 'react';
import { GraphCanvas, GraphEdge, GraphNode } from 'reagraph';

// const nodes1 = [
//   {
//     id: 'hi',
//     label: 'hi',
//   },
//   {
//     id: 'hi',
//     label: 'hi',
//   },
//   {
//     id: 'no',
//     label: 'no',
//   },
//   {
//     id: 'no',
//     label: 'no',
//   },
// ];

// const edges1 = [
//   {
//     source: 'hi',
//     target: 'no',
//     id: 'hi-no',
//     label: 'hi-no',
//   },
//   {
//     source: 'hi',
//     target: 'no',
//     id: 'hi-no',
//     label: 'hi-no',
//   },
//   {
//     source: 'no',
//     target: 'hi',
//     id: 'no-hi',
//     label: 'no-hi',
//   },
//   {
//     source: 'no',
//     target: 'hi',
//     id: 'no-hi',
//     label: 'no-hi',
//   },
// ];

interface Props {
  nodes: GraphNode;
  edges: GraphEdge;
}

export function Graph(props: Props) {
  const { nodes, edges } = props;

  return (
    <div
      style={{
        position: 'relative',
        margin: '1%',
        width: '95vw',
        height: '50vh',
        border: '2px solid black',
        borderRadius: 8,
      }}
    >
      <GraphCanvas nodes={nodes} edges={edges} />
    </div>
  );
}

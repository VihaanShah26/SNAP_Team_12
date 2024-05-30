import React, { useEffect, useState } from 'react';
import Select from 'react-dropdown-select';
import { GraphEdge, GraphNode } from 'reagraph';

import { Graph } from './Graph';
import Snakey from './Snakey';

function Visualize() {
  const [names, setNames] = useState([]);
  const [selectedName, setSelectedName] = useState([]);
  const [graphNodes, setGraphNodes] = useState<GraphNode[]>([]);
  const [graphEdges, setGraphEdges] = useState<GraphEdge[]>([]);

  useEffect(() => {
    getNames();
    // setNodes([]);
    // setEdges([]);
  }, []);

  useEffect(() => {
    setGraphEdges([]);
    setGraphNodes([]);
    getDataofSelectedName();
  }, [selectedName]);

  const getNames = async () => {
    return await fetch('/api/getDistinctNames')
      .then((res) => res.json())
      .then((res) => {
        const names = new Set();
        res.forEach((element) => {
          names.add(element.contact_name.trim());
          const otherTies = element.other_ties.split(',');
          otherTies.forEach((tie) => {
            names.add(tie.trim());
          });
        });
        const distinctNames = Array.from(names).sort();
        const nameArray = distinctNames.map((item) => {
          return { label: item.trim(), value: item.trim() };
        });
        setNames(nameArray);
      });
  };

  const getDataofSelectedName = async () => {
    const nodes = new Array<GraphNode>();
    const edges = new Array<GraphEdge>();

    nodes.push({
      id: selectedName[0].label,
      label: selectedName[0].label,
    });

    await fetch(`/api/getSelectedNameData/${selectedName[0].label}`)
      .then((res) => res.json())
      .then((res) => {
        res.map((item) => {
          if (item.contact_name !== selectedName[0].label) {
            nodes.push({
              id: item.contact_name,
              label: item.contact_name,
            });
            edges.push({
              source: item.contact_name,
              target: selectedName[0].label,
              id: `${item.contact_name}-${selectedName[0].label}`,
              label: `${item.contact_name}-${selectedName[0].label}`,
            });
          } else {
            const arrayOfOtherTies = item.other_ties.split(',');
            arrayOfOtherTies.map((items) => {
              nodes.push({
                id: items.trim(),
                label: items.trim(),
              });
              edges.push({
                source: items.trim(),
                target: selectedName[0].label,
                id: `${items.trim()}-${selectedName[0].label}`,
                label: `${items.trim()}-${selectedName[0].label}`,
              });
            });
          }
        });
      });

    setGraphEdges(edges);
    setGraphNodes(nodes);
  };

  return (
    <div>
      <Select
        options={names}
        onChange={(values) => {
          setSelectedName(values);
        }}
        values={selectedName} // these are the selected values
        searchable
        create
        clearable
        keepSelectedInList={false}
      />
      <Graph nodes={graphNodes} edges={graphEdges} />
      <Snakey />
    </div>
  );
}

export default Visualize;

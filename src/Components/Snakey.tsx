import Plotly from 'plotly.js-dist';
import React, { useEffect, useRef } from 'react';

function Snakey() {
  const plotlyRef = useRef(null);

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    await fetch('/api/allData')
      .then((res) => res.json())
      .then((res) => {
        const labelEncoder = {};
        const labels = [];
        let labelIndex = 0;

        // Mapping categories to integers
        res.forEach((row) => {
          ['meeting_context', 'relationship', 'frequency'].forEach((category) => {
            if (!(row[category] in labelEncoder)) {
              labelEncoder[row[category]] = labelIndex++;
              labels.push(row[category]);
            }
          });
        });

        // Create source, target, and value lists for Sankey diagram
        const source = [];
        const target = [];
        const value = [];
        res.forEach((row) => {
          source.push(labelEncoder[row['meeting_context']]);
          target.push(labelEncoder[row['relationship']]);
          source.push(labelEncoder[row['relationship']]);
          target.push(labelEncoder[row['frequency']]);
          value.push(1);
          value.push(1);
        });

        const sankeyData = {
          type: 'sankey',
          node: {
            pad: 15,
            thickness: 20,
            line: { color: 'black', width: 0.5 },
            label: labels,
            color: 'blue',
          },
          link: {
            source: source,
            target: target,
            value: value,
          },
        };

        Plotly.newPlot(plotlyRef.current, [sankeyData], {
          title: 'Sankey Diagram: Meeting Context to Relationship to Frequency',
          font: { size: 10 },
        });

        // Cleanup function
        return () => {
          if (plotlyRef.current) {
            Plotly.purge(plotlyRef.current);
          }
        };
      });
  };

  //   useEffect(() => {
  //     getData();
  //   });

  //   const getData = async () => {
  //     await fetch('/api/allData')
  //       .then((res) => res.json())
  //       .then((res) => {
  //         const uniqueValues = new Set();
  //         res.forEach((element) => {
  //           uniqueValues.add(element.meeting_context);
  //           uniqueValues.add(element.relationship);
  //           uniqueValues.add(element.frequency);
  //         });
  //         const labelEncoder = {};
  //         Array.from(uniqueValues).forEach((label, idx) => {
  //           labelEncoder[label] = idx;
  //         });

  //         res.forEach((element) => {
  //           element.meeting_context_id = labelEncoder[element.meeting_context];
  //           element.relationship_id = labelEncoder[element.relationship];
  //           element.frequency_id = labelEncoder[item.frequency];
  //         });

  //         const dummySource = [];
  //         const dummyTarget = [];
  //         const dummyValue = [];
  //         const dummyLabels = Object.keys(labelEncoder);
  //         res.forEach((element) => {
  //           dummySource.push(element.meeting_context_id);
  //           dummyTarget.push(element.relationship_id);
  //           dummySource.push(element.relationship_id);
  //           dummyTarget.push(element.frequency_id);
  //           dummyValue.push(1);
  //           dummyValue.push(1);
  //         });

  //         setData({
  //           source: dummySource,
  //           target: dummyTarget,
  //           value: dummyValue,
  //           labels: dummyLabels,
  //         });
  //       });
  //   };

  return <div ref={plotlyRef} />;

  //   return (
  //     <Plot
  //       data={[
  //         {
  //           x: [1, 2, 3],
  //           y: [2, 6, 3],
  //           type: 'sankey',
  //         //   mode: 'lines+markers',
  //         //   marker: { color: 'red' },
  //         },
  //         { type: 'sankey', source: [1, 2, 3], target: [2, 5, 3], value: [1,2,3] },
  //       ]}
  //       layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
  //     />
  //   );
}

export default Snakey;

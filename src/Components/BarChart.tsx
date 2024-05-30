import Plotly from 'plotly.js-dist';
import { useEffect, useRef } from 'react';

function BarChart() {
  const plotlyRef = useRef(null);
  useEffect(() => {
    getData();
    // Example data loading step (replace this with your actual data loading code)
  }, []);

  const getData = async () => {
    await fetch('/api/allData')
      .then((res) => res.json())
      .then((res) => {
        const x = res.map((row) => row.contact_name);
        const y = res.map((row) => row.frequency);
        const cities = [...new Set(res.map((row) => row.city))];

        const traces = cities.map((city) => {
          const cityData = res.filter((row) => row.city === city);
          return {
            x: cityData.map((row) => row.contact_name),
            y: cityData.map((row) => row.frequency),
            type: 'bar',
            name: city,
            hovertext: cityData.map(
              (row) =>
                `Relationship: ${row.relationship}<br>Time Together: ${row.time_together}<br>Interests: ${row.interests}`,
            ),
          };
        });

        const layout = {
          title: 'Meeting Frequency of Contacts in Different Cities',
          xaxis: { title: 'Contact Name' },
          yaxis: { title: 'Meeting Frequency' },
          barmode: 'group',
        };

        Plotly.newPlot(plotlyRef.current, traces, layout);

        // Cleanup function
        return () => {
          if (plotlyRef.current) {
            Plotly.purge(plotlyRef.current);
          }
        };
      });
  };

  return <div ref={plotlyRef} />;
}

export default BarChart;

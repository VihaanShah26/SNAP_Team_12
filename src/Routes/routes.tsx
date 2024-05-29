import AddContact from '../Components/AddContact';
import { Graph } from '../Components/Graph';

export default [
  {
    route: '/',
    element: <AddContact />,
  },
  {
    route: '/visualize',
    element: (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Graph />
      </div>
    ),
  },
  {
    route: '/insights',
    element: <div>We are in insights</div>,
  },
];

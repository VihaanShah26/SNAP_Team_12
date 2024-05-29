import AddContact from '../Components/AddContact';
import Visualize from '../Components/Visualize';

export default [
  {
    route: '/',
    element: <AddContact />,
  },
  {
    route: '/visualize',
    element: <Visualize />,
  },
  {
    route: '/insights',
    element: <div>We are in insights</div>,
  },
];

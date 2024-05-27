import './App.css';

import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import handWave from '../resources/wave.png';
import Button from './CommonComponents/Button';
// import connection from './Database/connection';
import routes from './Routes/routes';

const buttons = [
  { name: 'Add a Contact', route: '/' },
  { name: 'Visualize', route: '/visualize' },
  { name: 'Insights', route: '/insights' },
];

const styles = {
  buttonStyle: {
    backgroundColor: 'white',
    margin: '1%',
    color: 'black',
    fontSize: 'calc(10px + 1vmin)',
    borderRadius: 20,
  },
};

function App() {
  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="headingContainer">
          <img src={handWave} alt="Hand wave gesture" className="Wave-icon" />
          <text>Welcome Kevin</text>
        </div>
        <div>
          {buttons.map((_item, _index) => {
            return (
              <a key={_index} href={_item.route}>
                <Button
                  name={_item.name}
                  key={_index}
                  style={styles.buttonStyle}
                  onClick={() => {}}
                />
              </a>
            );
          })}
        </div>
      </header>
      <BrowserRouter>
        <Routes>
          {routes.map((item, index) => {
            return <Route path={item.route} element={item.element} key={index} />;
          })}
          {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';

import handWave from '../resources/wave.png';
import Button from './CommonComponents/Button';
import AddContact from './Components/AddContact';

const buttons = [
  { name: 'Add a Contact', route: '' },
  { name: 'Visualize', route: '' },
  { name: 'Insights', route: '' },
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
              <Button
                name={_item.name}
                key={_index}
                style={styles.buttonStyle}
                onClick={() => alert('hello')}
              />
            );
          })}
        </div>
      </header>
      <AddContact />
    </div>
  );
}

export default App;

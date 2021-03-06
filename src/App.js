import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  ContainedButton,
  OutlineButton
} from './components/atoms'

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'row', margin: 0, padding: 0, width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <ContainedButton
          backgroundColor={null}
          color={null}
          differentiator="Purchasing"
          disabled={false}
          height_type="Big"
          label="Click me"
          onClick={() => {}}
          width_type="Full"
        />
        <OutlineButton
          backgroundColor={null}
          color={null}
          differentiator="Regular"
          disabled={false}
          height_type="Big"
          label="Title"
          onClick={() => {}}
          width_type="Full"
        />
      </div>
    </div>
  );
}

export default App;

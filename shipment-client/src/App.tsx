import React from 'react';
import './App.css';
import User from './components/User';
import Shipment from './components/Shipment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User />
        <Shipment />
      </header>
    </div>
  );
}

export default App;

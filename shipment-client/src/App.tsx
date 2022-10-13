import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Shipment from './components/Shipment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <Signup />
        <Shipment />
      </header>
    </div>
  );
}

export default App;

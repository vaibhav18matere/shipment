import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Shipment from './components/Shipment';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/dashboard' element={<Shipment/>}/>
    </Routes>
  </Router>
);


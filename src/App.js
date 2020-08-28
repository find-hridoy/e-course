import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Data from './components/Data/Data';

function App() {
  return (
    <div>
      <Header></Header>
      <Data></Data>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input placeholder="enter here" type="text"></Input>
      </header>
    </div>
  );
}

export default App;

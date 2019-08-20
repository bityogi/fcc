import React from 'react';

import ResponseForm from './components/form';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      
      <header className="App-header">
        <div className="App-title">
          Flexion Coding Challenge 
        </div>
        <ResponseForm />
      </header>
    </div>
  );
}

export default App;

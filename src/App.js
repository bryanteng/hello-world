import React from 'react';
import Carousels from './containers/carousels'
// import DrawingPage from './containers/drawingPage';
import Vode from './containers/vode'
import './App.css';

function App() {
  return (
    <div className="App">
        <Carousels/>
        {/* <DrawingPage /> */}
        <Vode />
    </div>
  )
}

export default App;

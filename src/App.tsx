import React from 'react';
import logo from './logo.svg';
import './App.css';
import Addingtwo from './components/add'; 
import MyCar from  './components/class';
import Hooks from  './components/hooks';
import Sal from './abs';
//import AbstractEG from './components/abstract';
import Datas from './components/data'; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>TypeScript Test Program for Ethan's Group</p>
        <div ><MyCar /></div>
        <div><Hooks/></div>

      </header>
    
      <body>
<Addingtwo/>
<br></br>
      <Sal count={50} incMent = {Math.random()}/>
    
      <Datas/>
            </body>
    </div>
  );
  

}

export default App;

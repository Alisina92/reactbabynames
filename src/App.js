import React from 'react';
import babysData from'./babyData/babyNamesData.json'
import BabyNamesData from'./BabyNamesData'
import './App.css';
import './Grid.css';
const App =()=> {
  return (
    <div className="App"><BabyNamesData babyData={babysData}/></div>
  );
}

export default App;

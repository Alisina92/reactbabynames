import React,{useState} from 'react';
import Header from './Header';
import babysData from'./babyData/babyNamesData.json';
import BabyNamesData from'./BabyNamesData';
import Footer from'./Footer';
import './App.css';
import './Grid.css';


const App =()=> {
  const [searchTerm, setSearchTerm] = useState(babysData);
 
  const changeHandler = (event ) => {
      console.log('change')
      const result = babysData.filter((element) => {
       return element.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
     
      setSearchTerm(result)
    };
  return (
    <div className="App">
      <Header babyData={babysData} changeHandler={changeHandler}/>
       <BabyNamesData babyData={searchTerm} />
       <Footer/>
    </div>
  );
}

export default App;

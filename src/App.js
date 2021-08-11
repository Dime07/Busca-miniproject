import Navbar from './components/Navbar';
import Input from './components/Input';
import Card from './Card';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useState } from 'react';
import './App.css';

function App() {
  //data
  const [data, setData] = useState([]);

  function getData(biodata) { 
    setData((data) => [...data, biodata]);
    alert("berhasil didapat")
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Input bio={data} send={getData}/>
          </Route>

          <Route path="/card" exact>
            <Card bio={data}/>
          </Route>

        </Switch>

        
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;

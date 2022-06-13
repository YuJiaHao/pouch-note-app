import "bootswatch/dist/lux/bootstrap.min.css"
import './App.css';
import React,{useState} from 'react';
import {Routes , Route} from 'react-router-dom'
import AppNavibar from './components/AppNavibar';
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Create from "./pages/Create";

function App() {
  const [notes,setNotes] = useState([]);
  return (
    <div>
      <AppNavibar></AppNavibar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/notes'  element={<Notes notes={notes}/>}></Route>
        <Route path='/create' element={<Create setNotes={setNotes}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

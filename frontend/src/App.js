import AddShot from './components/AddShot';
import Home from './components/Home';
import Navbars from './components/Navbars';
import ShotDetails from './components/ShotDetails';
import Update from './components/Update';
import About from './components/About'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [data,setData] = useState([]);
  const [selected, setSelected] = useState({});
  var [search,setSearch] = useState('')
  useEffect(()=>{
    axios.get('http://localhost:4004/api/posts/')
    .then((response)=>setData(response.data))
    .catch((error)=>console.log(error))
  },[])

  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path='/' element={<Home data={data} selected={setSelected} search={search} setSearch={setSearch}/>}/>
        <Route path='/ShotDetails' element={<ShotDetails data={selected}/>} />
        <Route path='/AddShot' element={<AddShot />} />
        <Route path='/Update/:id' element={<Update data={selected} />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

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
  const[sort,setSort]=useState(null);
  const [filtered, setFiltered] = useState([]);
  console.log(sort);
  useEffect(()=>{
    axios.get('http://localhost:4004/api/posts/')
    .then((response)=>setData(response.data))
    .catch((error)=>console.log(error))
  },[])
  useEffect(()=>{
    if(sort===null){
      setFiltered(data)
    } else if (sort==="Newest"){
      setFiltered(data.sort((a,b)=>a.taken_year - b.taken_year))
    } else if (sort==="Oldest"){
      setFiltered(data.sort((a,b)=>b.taken_year - a.taken_year))
    } else if (sort==="HighestRating"){
      setFiltered(data.sort((a,b)=>a.rating - b.rating))
    } else if (sort==="EditorsChoice"){
      setFiltered(data.sort((a,b)=>a.rating - b.rating))
    } else {
      setFiltered(data.filter((e)=>e.post_name.includes(sort)))
    }
  },[data,sort])
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path='/' element={<Home data={filtered} selected={setSelected} sort={setSort} />}/>
        <Route path='/ShotDetails' element={<ShotDetails data={selected}/>} />
        <Route path='/AddShot' element={<AddShot />} />
        <Route path='/Update/:id' element={<Update data={selected} />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

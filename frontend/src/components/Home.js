import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Home.css";

const Home = (props) => {
  const { data, selected, search, setSearch } = props;
  var [sorted,setSorted] = useState([])
  
  const navigate = useNavigate();

  const searched = 
    data.filter((e) =>
      String(e.post_name).toLowerCase().includes(search.toString().toLowerCase()) ||
      String(e.camera).toLowerCase().includes(search.toString().toLowerCase()) ||
      String(e.description).toLowerCase().includes(search.toString().toLowerCase())
    );

  const sortNewest = () =>{
    data.sort((a,b)=>a.taken_year - b.taken_year)
  }

  return (
    <div>
      <div className="header_home">
        <label for="sort">Sort images : </label>
        <select name="sort">
          <option value="None">...</option>
          <option value="Newest" onClick={sortNewest}>Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="HighestRating">Highest Rating</option>
          <option value="EditorsChoice">Editor's Choice</option>
        </select>
        <input className="input" type="text" placeholder="Search..." onChange={setSearch}/>
      </div>
      <div className="container">
        <div className="img_lib">
          {searched &&
            searched.map((e, i) => {
              return (
                <div className={`img${i}`}>
                  <span className="img_name">{e.post_name}</span>
                  <img
                    src={e.img_url}
                    alt={`${e.post_name}`}
                    key={i}
                    onClick={() => {
                      selected(e);
                      navigate("/ShotDetails");
                    }}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;

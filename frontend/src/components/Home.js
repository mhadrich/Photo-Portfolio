import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Home.css";

const Home = (props) => {
  const { data, selected, sort } = props;
  
  const navigate = useNavigate();

  const sortNewest = () =>{
    data.sort((a,b)=>a.taken_year - b.taken_year)
  }

  return (
    <div> 
      <div className="header_home">
        <label for="sort">Sort images : </label>
        <select name="sort">
          <option value="None" onSelect={()=>console.log('hi')}>None</option>
          <option value="Newest" onClick={()=>sort('Newest')}>Newest</option>
          <option value="Oldest" onClick={()=>sort('Oldest')}>Oldest</option>
          <option value="HighestRating" onClick={()=>sort('HighestRating')}>Highest Rating</option>
          <option value="EditorsChoice" onClick={()=>sort('EditorsChoice')}>Editor's Choice</option>
        </select>
        <input className="input" type="text" placeholder="Search..." onChange={(e)=>sort(e.target.value)}/>
      </div>
      <div className="container">
        <div className="img_lib">
          {data &&
            data.map((e, i) => {
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

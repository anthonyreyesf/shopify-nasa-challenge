import React, { useCallback, useEffect, useState } from 'react';

import Card from "./Common/Card";
import "./styles.css"

const API_KEY = "Z5BdQe6xe3pDMJeZHWcnmB9IBKJAKR9MLuIUpiJd";

function Root() {
  const [apod, setApod] = useState([]);
  const [render, setRender] = useState(false);
  const [isLoading, setIsLoading] =useState(false);

  function handleShuffle() {
    setRender(!render);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() =>{
    fetch(`https://api.nasa.gov/planetary/apod?count=6&api_key=${API_KEY}`)
    .then(results => results.json())
    .then(data => {
      setApod(data)
    })
  }, [render]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(`https://api.nasa.gov/planetary/apod?count=6&api_key=${API_KEY}`);
      const json = await res.json();
      setApod(json);
      setIsLoading(false);
    };
    fetchData();
  }, [setApod, render]);

  return (
    <div className="root">
      <div className="header">
        <h1>Spacestagram</h1>
        <p>by <a href="https://www.linkedin.com/in/anthonyreyesf/">Anthony Reyes</a> - Software Developer intern @ Ada, previously @ D2L</p>
      </div>
      <div>
        {!isLoading ? (
          apod.map(data => (
            <Card
              title={data.title}
              description={data.explanation}
              image={data.url}
              date={data.date}
            />
          ))
        ) : (
          <div className="loading">
            <h2>Loading...</h2>
          </div>
        )
      }
      </div>
      <div className="shuffle">
        <button
          type="button"
          className="shuffleButton"
          onClick={handleShuffle}
        >
          Shuffle
        </button>
      </div>
    </div>
  );
}

export default Root;
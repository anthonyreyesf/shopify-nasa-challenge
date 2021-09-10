import React, { useState } from 'react';

import "./styles.css";

function Card(props) {
  const [like, setLike] = useState(false);

  return (
    <div className="Card">
      <img src={props.image} alt={props.title} />
      <div className="info">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.date}</p>
        <button type="button" onClick={() => setLike(!like)}>{!like ? "Like" : "Liked"}</button>
      </div>
    </div>
  );
}

export default Card;
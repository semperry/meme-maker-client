import React, { useState, useEffect } from "react";
import axios from "axios";

import Meme from "./meme";

function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let result = await fetch("https://rec-meme-api.herokuapp.com/memes")
        .then(res => res.json())
        .then(data => setMemes(data))
        .catch(err => console.log(err));
    };
    fetchData();
  }, []);

  const deleteMeme = id => {
    axios
      .delete(`https://rec-meme-api.herokuapp.com/delete-meme/${id}`)
      .then(setMemes(memes.filter(meme => meme.id !== id)))
      .catch(err => console.log("delete err ", err));
  };

  const renderMemes = () => {
    return memes.map(meme => {
      return <Meme key={meme.id} meme={meme} deleteMeme={deleteMeme} />;
    });
  };

  return <div className="app">{renderMemes()}</div>;
}

export default App;

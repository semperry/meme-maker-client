import React from "react";

function Meme(props) {
  const { id, text, favorite, image } = props.meme;

  return (
    <div className="meme">
      <div className="img-wrapper">
        <img className="meme-img" src={image} alt="funny meme?" />
      </div>

      <p>{text}</p>

      {favorite ? (
        <img
          src="https://library.kissclipart.com/20180830/fuw/kissclipart-twinkle-little-star-clip-art-clipart-twinkle-twin-0d72b7a5dc286d1e.jpg"
          alt="favorite star"
        />
      ) : null}
      <button onClick={() => props.deleteMeme(id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default Meme;

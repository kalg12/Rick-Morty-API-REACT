import React, { useState, useEffect } from "react";

const RickMorty = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((info) => setData(info) & console.log(data));
  }, [data]);
  return (
    <>
      <h1>Rick and Morty</h1>
      <div className="card" style={{ width: "18rem" }}>
        {/* <img src={data.results[0].image} className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default RickMorty;

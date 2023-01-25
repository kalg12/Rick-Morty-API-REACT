import React, { useState, useEffect } from "react";

const RickMorty = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <h1>Rick and Morty</h1>
      {console.log(data)}
    </>
  );
};

export default RickMorty;

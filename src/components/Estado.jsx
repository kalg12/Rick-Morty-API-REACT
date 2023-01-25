import React, { useState, useEffect } from "react";

const Estado = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Has hecho algo en la página");
  });

  return (
    <>
      <div>
        <p>Hiciste clic {count} veces</p>
        <button onClick={() => setCount(count + 2)}>Haz click</button>
      </div>
    </>
  );
};

export default Estado;

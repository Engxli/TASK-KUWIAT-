import React from "react";

export default function Island({ island, setIsland, counter }) {
  function click() {
    setIsland(island);
  }
  return (
    <div className="Island" onClick={click}>
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
      <p>Visitors {counter}</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}

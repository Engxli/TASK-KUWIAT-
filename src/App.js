import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import islands from "./data/islands";

function App() {
  let _island = {
    name: "Boubyan",
    img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg",
  };
  const [island, setIsland] = useState(_island);
  const myArray = islands.map((x) => 0);

  const [counter, setCounter] = useState(myArray);
  console.log(counter);
  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList setIsland={setIsland} counter={counter} />
        <IslandForm island={island} setCounter={setCounter} counter={counter} />
      </div>
    </div>
  );
}

export default App;

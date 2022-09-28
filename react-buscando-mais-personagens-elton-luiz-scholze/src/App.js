import { useEffect, useState } from "react";
import { Character } from "./components/Characters";
import "./App.css";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((res) => setCharacterList(res.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Character characterList={characterList} />
    </div>
  );
}

export default App;

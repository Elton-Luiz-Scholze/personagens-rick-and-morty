import { useEffect, useState } from "react";
import { Character } from "./components/Characters";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((res) => res.json())
      .then((res) => setCharacterList(res.results))
      .catch((err) => console.log(err));
  }, [currentPage]);

  function previousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className="App">
      <Character
        characterList={characterList}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
}

export default App;

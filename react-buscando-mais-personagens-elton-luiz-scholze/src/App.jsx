import { useEffect, useState } from "react";
import { Character } from "./components/Characters";
import "./App.css";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((res) => res.json())
      .then((res) => setCharacterList(res.results))
      .catch((err) => console.log(err));
  }, [currentPage]);

  function previousPage() {
    setCurrentPage(currentPage - 1);
  }
  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className="App">
      <Character characterList={characterList} />
      <button onClick={previousPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}

export default App;

import { useState } from "react";
import { CharCard } from "../CharCard";
import "./style.js";
import { Header, Main, DivButtons, Button } from "./style.js";

export function Character({ characterList, previousPage, nextPage }) {
  const [filter, setFilter] = useState([]);

  const characterFiltered = characterList.filter((character) =>
    filter === "" ? characterList : character.status === filter
  );

  return (
    <>
      <Header>
        <h1>Rick and Morty - Characters</h1>
        <DivButtons>
          <Button onClick={() => setFilter("")}>All</Button>
          <Button onClick={() => setFilter("Alive")}>Alive</Button>
          <Button onClick={() => setFilter("Dead")}>Dead</Button>
          <Button onClick={() => setFilter("unknown")}>Unknown</Button>
        </DivButtons>
      </Header>
      <Main>
        {characterFiltered.map(({ id, name, image, status, species }) => (
          <CharCard
            key={id}
            name={name}
            image={image}
            status={status}
            species={species}
          />
        ))}
      </Main>
      <DivButtons>
        <Button onClick={previousPage}>Previous</Button>
        <Button onClick={nextPage}>Next</Button>
      </DivButtons>
    </>
  );
}

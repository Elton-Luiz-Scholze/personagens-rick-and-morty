import { CharCard } from "../CharCard";

export function Character({ characterList }) {
  return (
    <>
      <h1>Personagens Rick e Morty</h1>
      {characterList.map(({ id, name, image, status }) => (
        <CharCard key={id} name={name} image={image} status={status} />
      ))}
    </>
  );
}

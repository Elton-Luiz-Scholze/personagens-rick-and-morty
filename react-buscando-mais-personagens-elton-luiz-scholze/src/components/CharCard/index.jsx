import { Div } from "./style.js";

export function CharCard({ id, name, image, status, species }) {
  return (
    <>
      {status === "Alive" ? (
        <Div background={"#7de07d"} key={id}>
          <h2>{name.length > 15 ? `${name.substring(0, 15)}...` : name}</h2>
          <img src={image} alt="" />
          <p>Status: {status}</p>
          <p>Species: {species}</p>
        </Div>
      ) : (
        <Div background={"#e17a7a"} key={id}>
          <h2>{name.length > 15 ? `${name.substring(0, 15)}...` : name}</h2>
          <img src={image} alt="" />
          <p>Status: {status}</p>
          <p>Species: {species}</p>
        </Div>
      )}
    </>
  );
}

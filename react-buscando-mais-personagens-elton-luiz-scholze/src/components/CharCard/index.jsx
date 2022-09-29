import { Div } from "./style.js";

export function CharCard({ id, name, image, status, species }) {
  return (
    <Div className={status} key={id}>
      <h2>{name.length > 15 ? `${name.substring(0, 15)}...` : name}</h2>
      <img src={image} alt="" />
      <p>Status: {status}</p>
      <p>Species: {species}</p>
    </Div>
  );
}

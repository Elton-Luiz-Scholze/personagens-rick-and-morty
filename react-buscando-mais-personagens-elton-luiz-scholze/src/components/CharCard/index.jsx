import { Div } from "./style.js";

export function CharCard({ id, name, image, status }) {
  return (
    <>
      {status === "Alive" ? (
        <Div background={"#7de07d"} key={id}>
          <h2>{name}</h2>
          <img src={image} alt="" />
          <p>Status: {status}</p>
        </Div>
      ) : (
        <Div background={"#e17a7a"} key={id}>
          <h2>{name}</h2>
          <img src={image} alt="" />
          <p>Status: {status}</p>
        </Div>
      )}
    </>
  );
}

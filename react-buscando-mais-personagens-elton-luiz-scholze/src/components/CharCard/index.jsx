export function CharCard({ id, name, image, status }) {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <img src={image} alt="" />
      <p>Status: {status}</p>
    </div>
  );
}

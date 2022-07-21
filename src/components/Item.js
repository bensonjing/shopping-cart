export default function Item({ image, title }) {
  return (
    <div className="item">
      <img src={image} alt={title} />
      <div className="title">{title}</div>
    </div>
  );
}

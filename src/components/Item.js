export default function Item({ image, title, handleAddToCart }) {
  return (
    <div className="item">
      <img src={image} alt={title} />
      <div className="title">{title}</div>
      <button className="addToCart" onClick={() => handleAddToCart(title)}>
        Add to Cart
      </button>
    </div>
  );
}

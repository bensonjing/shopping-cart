import Header from "../components/Header";
import items from "../data/items";
import Item from "../components/Item";

export default function Shop() {
  return (
    <>
      <Header />
      <div id="shop_board">
        {items.map((item) => (
          <Item key={item.title} image={item.src} title={item.title} />
        ))}
      </div>
    </>
  );
}

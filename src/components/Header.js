import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </>
  );
}

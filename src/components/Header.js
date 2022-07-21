import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header">
      <div className="container">
        <div id="left">
          <Link to="/" className="link">
            Home
          </Link>
        </div>
        <div id="right">
          <Link to="/shop" className="link">
            Shop
          </Link>
          <Link to="/cart" className="link">
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

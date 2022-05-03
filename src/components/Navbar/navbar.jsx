import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="Home-header">
      <div className="header-logo">
        <h1>Cowboy Burger</h1>
      </div>
      <div className="cart-option">
        <FontAwesomeIcon icon={faCartShopping} class="cart" />
      </div>
    </div>
  );
}

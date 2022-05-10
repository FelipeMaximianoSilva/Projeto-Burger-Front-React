import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import plussymbol from "../../assets/icons/plussymbol.png";

export default function Navbar({ createLanche }) {
  return (
    <div className="Home-header">
      <div className="header-logo">
        <h1>Cowboy Burger</h1>
      </div>
      <div className="cart-option">
        <FontAwesomeIcon icon={faCartShopping} class="cart" />
      </div>
      <div className="Header-adicionar">
        <button
          type="button"
          className="adicionar-lanche"
          onClick={() => createLanche()}
        >
          <img
            src={plussymbol}
            width="10%"
            className="Lanche__icone"
            alt="Adiconar Lanche"
          />
        </button>
      </div>
    </div>
  );
}

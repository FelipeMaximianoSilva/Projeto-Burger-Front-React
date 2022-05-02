import "../assets/style.css";
import LancheLista from "../components/lancheLista";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { faCow } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home-header">
        <div className="header-logo">
          <h1>Cowboy Burger</h1>
        </div>
        <div className="cart-option">
          <FontAwesomeIcon icon={faCartShopping} class="cart" />
        </div>
      </div>
      <div className="Home__container">
        <LancheLista />
      </div>
    </div>
  );
}

export function verificaTipo(tipo) {
  if (tipo === 1) {
    return <FontAwesomeIcon icon={faCow} />;
  } else if (tipo === 2) {
    return <FontAwesomeIcon icon={faDrumstickBite} />;
  } else {
    return <FontAwesomeIcon icon={faLeaf} />;
  }
}

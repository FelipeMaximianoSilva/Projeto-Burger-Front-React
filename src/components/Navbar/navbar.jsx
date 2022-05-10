import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import plussymbol from "../../assets/icons/plussymbol.png";
import edit from "../../assets/icons/edit.png";
import { ActionMode } from "../../constants/index";

export default function Navbar({ createLanche, updateLanche, mode }) {
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
            className="Lanche__icone"
            alt="Adiconar Lanche"
          />
        </button>
        <button
          type="button"
          className={`update-lanche
          ${mode === ActionMode.ATUALIZAR && "lanche-ativo"}`}
          onClick={() => updateLanche()}
        >
          <img src={edit} className="Atualizar__icone" alt="Atualizar Lanche" />
        </button>
      </div>
    </div>
  );
}

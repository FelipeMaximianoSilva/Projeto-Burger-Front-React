import "./LancheDetalheModal.css";
import Modal from "../Modal/Modal";
import { verificaTipo } from "../../views/Home";

export default function LancheDetalhesModal({ lanche, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="LancheDetalhesModal">
        <div>
          <div className="LancheDetalhesModal__nome"> {lanche.nome} </div>
          <div className="LancheDetalhesModal__preco">
            {" "}
            R$ {Number(lanche.preco).toFixed(2)}{" "}
          </div>
          <img
            className="LancheDetalhesModal__foto"
            src={lanche.img}
            alt={`Imagem do ${lanche.nome}`}
          /><br></br>
          <div className="LancheDetalhesModal__description">
            {" "}
            <b>Ingredientes:</b> {lanche.description}{" "}
          </div><br></br>
          <div>{verificaTipo(lanche.tipo)}</div>
        </div>
      </div>
    </Modal>
  );
}

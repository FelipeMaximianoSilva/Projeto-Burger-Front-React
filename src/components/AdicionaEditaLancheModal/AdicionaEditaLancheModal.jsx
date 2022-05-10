import { useState } from "react";
import Modal from "components/Modal/Modal";
import "./AdicionaEditaLancheModal.css";
import { LancheService } from "services/LancheServices";

export default function AdicionaLancheModal({ closeModal, onCreateLanche }) {
  const form = {
    nome: "",
    preco: "",
    tipo: "",
    description: "",
    img: "",
  };

  const [state, setState] = useState(form);

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const lancheCreate = async () => {
    const renomeiaCaminhoImg = (imgPath) => imgPath.split("\\").pop();

    const { nome, preco, tipo, description, img } = state;

    const lanche = {
      nome,
      preco,
      tipo,
      description,
      img: `assets/images/${renomeiaCaminhoImg(img)}`,
    };

    const response = await LancheService.create(lanche);

    onCreateLanche(response);

    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaLancheModal">
        <form autocomplete="off">
          <h2> Adicionar ao Cardápio </h2>
          <div>
            <label className="AdicionaLancheModal__text" htmlFor="preco">
              {" "}
              Preço:{" "}
            </label>
            <input
              id="preco"
              placeholder="10,00"
              type="text"
              value={state.preco}
              onChange={(e) => handleChange(e, "preco")}
            />
          </div>
          <div>
            <label className="AdicionaLancheModal__text" htmlFor="nome">
              {" "}
              Nome:{" "}
            </label>
            <input
              id="nome"
              placeholder="Cheese Burger"
              type="text"
              value={state.nome}
              onChange={(e) => handleChange(e, "nome")}
            />
          </div>
          <div>
            <label className="AdicionaLancheModal__select" htmlFor="tipo">
              {" "}
              tipo:{" "}
            </label>
            <select
              id="tipo"
              placeholder="tipo"
              type="number"
              value={state.tipo}
              onChange={(e) => handleChange(e, "tipo")}
            >
              <option value="1"> Boi</option>
              <option value="2"> Frango</option>
              <option value="3"> Veggie</option>
            </select>
          </div>
          <div>
            <label className="AdicionaLancheModal__text" htmlFor="description">
              {" "}
              Ingredientes:{" "}
            </label>
            <input
              id="description"
              placeholder="Detalhe o produto"
              type="text"
              value={state.description}
              onChange={(e) => handleChange(e, "description")}
              required
            />
          </div>
          <div>
            <label
              className="AdicionaLancheModal__text  AdicionaLancheModal__foto-label"
              htmlFor="img"
            >
              {!state.img.length ? "Selecionar Imagem" : state.img}
            </label>
            <input
              className=" AdicionaLancheModal__foto"
              id="img"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              value={state.img}
              onChange={(e) => handleChange(e, "img")}
              required
            />
          </div>

          <input
            className="AdicionaLancheModal__enviar"
            type="button"
            value="Enviar"
            onClick={lancheCreate}
          />
        </form>
      </div>
    </Modal>
  );
}

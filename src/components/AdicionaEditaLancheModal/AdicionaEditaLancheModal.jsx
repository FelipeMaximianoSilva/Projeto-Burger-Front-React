import { useState } from "react";
import Modal from "components/Modal/Modal";
import "./AdicionaEditaLancheModal.css";
import { LancheService } from "services/LancheServices";
import { ActionMode } from "../../constants/index";

export default function AdicionaEditaLancheModal({
  closeModal,
  onCreateLanche,
  mode,
  lancheToUpdate,
  onUpdateLanche,
}) {
  const form = {
    nome: lancheToUpdate?.nome ?? "",
    preco: lancheToUpdate?.preco ?? "",
    tipo: lancheToUpdate?.tipo ?? "",
    description: lancheToUpdate?.description ?? "",
    img: lancheToUpdate?.img ?? "",
  };

  const [state, setState] = useState(form);

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const handleSend = async () => {
    const renomeiaCaminhoImg = (imgPath) => imgPath.split("\\").pop();

    const { nome, preco, tipo, description, img } = state;

    const lanche = {
      ...(lancheToUpdate && { _id: lancheToUpdate?.id }),
      nome,
      preco,
      tipo,
      description,
      img: `assets/images/${renomeiaCaminhoImg(img)}`,
    };

    const serviceCall = {
      [ActionMode.NORMAL]: () => LancheService.create(lanche),
      [ActionMode.ATUALIZAR]: () =>
        LancheService.updtateById(lancheToUpdate?.id, lanche),
    };

    const response = await serviceCall[mode]();

    const actionResponse = {
      [ActionMode.NORMAL]: () => onCreateLanche(response),
      [ActionMode.ATUALIZAR]: () => onUpdateLanche(response),
    };

    actionResponse[mode]();

    const reset = {
      nome: "",
      preco: "",
      tipo: "",
      description: "",
      img: "",
    };

    setState(reset);

    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaLancheModal">
        <form autocomplete="off">
          <h2>
            {" "}
            {ActionMode.ATUALIZAR === mode ? "Atualizar" : "Adicionar ao"}{" "}
            Cardápio{" "}
          </h2>
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
              onChange={(e) => handleChange(e, "img")}
              required
            />
          </div>

          <button
            className="AdicionaLancheModal__enviar"
            type="button"
            onClick={handleSend}
          >
            {" "}
            {ActionMode.NORMAL === mode ? "Enviar" : "Atualizar"}
          </button>
        </form>
      </div>
    </Modal>
  );
}

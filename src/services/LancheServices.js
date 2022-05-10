import { Api } from "../helpers/Api";

const parseResponse = (response) => response.json();

const transformLanche = (lanche) => {
  return {
    ...lanche,
    id: lanche._id,
    nome: lanche.nome,
    preco: lanche.preco,
    img: lanche.img,
  };
};

const parseTransformLista = (response) =>
  parseResponse(response).then((lanche) => lanche.map(transformLanche));

const parseTransformItem = (response) =>
  parseResponse(response).then(transformLanche);

export const LancheService = {
  getLista: () =>
    fetch(Api.lancheLista(), { method: "GET" }).then(parseTransformLista),
  getById: (id) =>
    fetch(Api.lancheById(id), { method: "GET" }).then(parseTransformItem),
  create: (lanche) =>
    fetch(Api.createLanche(), {
      method: "POST",
      body: JSON.stringify(lanche),
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }).then(parseResponse),
  updtateById: (id, lanche) =>
    fetch(Api.updateLancheById(id), {
      method: "PUT",
      body: JSON.stringify(lanche),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteLancheById(id), { method: "DELETE" }).then(parseResponse),
};

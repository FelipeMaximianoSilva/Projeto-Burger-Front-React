import { Api } from "../helpers/Api";

const parseResponse = (response) => response.json();

export const LancheService = {
  getLista: () =>
    fetch(Api.lancheLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.lancheById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(Api.createLanche(), { method: "POST" }).then(parseResponse),
  updtateById: (id) =>
    fetch(Api.updateLancheById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteLancheById(id), { method: "DELETE" }).then(parseResponse),
};

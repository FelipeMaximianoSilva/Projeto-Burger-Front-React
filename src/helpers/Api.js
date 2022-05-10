const lancheContext = {
  lancheEndpoint: () => `${Api.baseUrl}/lanches`,
  lancheLista: () => `${lancheContext.lancheEndpoint()}/find-lanches`,
  lancheById: (id) => `${lancheContext.lancheEndpoint()}/find-lanches/${id}`,
  createLanche: () => `${lancheContext.lancheEndpoint()}/create`,
  updateLancheById: (id) =>
    `${lancheContext.lancheEndpoint()}/update/${id}`,
  deleteLancheById: (id) =>
    `${lancheContext.lancheEndpoint()}/delete/${id}`,
};

export const Api = {
  baseUrl: "https://api-projeto-burger.onrender.com",
  ...lancheContext,
};

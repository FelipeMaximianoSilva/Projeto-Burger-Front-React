const lancheContext = {
  lancheEndpoint: () => `${Api.baseUrl}/lanches`,
  lancheLista: () => `${lancheContext.lancheEndpoint()}/lanches`,
  lancheById: (id) => `${lancheContext.lancheEndpoint()}/lanches/${id}`,
  createLanche: () => `${lancheContext.lancheEndpoint()}/create-lanche`,
  updateLancheById: (id) =>
    `${lancheContext.lancheEndpoint()}/update-lanche/${id}`,
  deleteLancheById: (id) =>
    `${lancheContext.lancheEndpoint()}/delete-lanche/${id}`,
};

export const Api = {
  baseUrl: "https://projeto-burger-front-react-production.up.railway.app",
  ...lancheContext,
};

import { useState, useEffect, useCallback } from "react";
import LancheListaItem from "../lancheListaItem/lancheListaItem";
import "./lancheLista.css";
import { LancheService } from "../../services/LancheServices";
import LancheDetalhesModal from "../lancheDetalheModal/LancheDetalheModal";
import { ActionMode } from "../../constants/index";

export default function LancheLista({
  lancheCriado,
  mode,
  updateLanche,
  deleteLanche,
}) {
  const [lanches, setLanches] = useState([]);

  const [lancheSelecionado, setLancheSelecionado] = useState({});

  const [lancheModal, setLancheModal] = useState(false);

  const adicionarItem = (lancheIndex) => {
    const lanche = {
      [lancheIndex]: +(lancheSelecionado[lancheIndex] || 0) + 1,
    };
    setLancheSelecionado({ ...lancheSelecionado, ...lanche });
  };

  const removerItem = (lancheIndex) => {
    const lanche = {
      [lancheIndex]: Number(lancheSelecionado[lancheIndex] || 0) - 1,
    };
    setLancheSelecionado({ ...lancheSelecionado, ...lanche });
  };

  const getLancheById = async (lancheId) => {
    const response = await LancheService.getById(lancheId);
    const mapper = {
      [ActionMode.NORMAL]: () => setLancheModal(response),
      [ActionMode.ATUALIZAR]: () => updateLanche(response),
      [ActionMode.DELETAR]: () => deleteLanche(response),
    };
    mapper[mode]();
  };

  const adicionaLancheNaLista = useCallback(
    (lanche) => {
      const lista = [...lanches, lanche];
      setLanches(lista);
    },
    [lanches]
  );

  useEffect(() => {
    if (
      lancheCriado &&
      !lanches.map(({ id }) => id).includes(lancheCriado.id)
    ) {
      adicionaLancheNaLista(lancheCriado);
    }
  }, [adicionaLancheNaLista, lancheCriado, lanches]);

  const getLista = async () => {
    const response = await LancheService.getLista();
    setLanches(response);
  };

  useEffect(() => {
    getLista();
  }, []);

  return (
    <div className="lancheLista">
      {lanches.map((lanche, index) => (
        <div className="lancheListaItem">
          <LancheListaItem
            mode={mode}
            key={`lancheListaItem-${index}`}
            lanche={lanche}
            quantidadeSelecionada={lancheSelecionado[index]}
            index={index}
            onAdd={(index) => adicionarItem(index)}
            onRemove={(index) => removerItem(index)}
            clickItem={(lancheId) => getLancheById(lancheId)}
          />
        </div>
      ))}
      {lancheModal && (
        <LancheDetalhesModal
          lanche={lancheModal}
          closeModal={() => setLancheModal(false)}
        />
      )}
    </div>
  );
}

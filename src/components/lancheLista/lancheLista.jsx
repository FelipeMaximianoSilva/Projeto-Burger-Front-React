import { useState, useEffect } from "react";
import LancheListaItem from "../lancheListaItem/lancheListaItem";
import "./lancheLista.css";
import { LancheService } from "../../services/LancheServices";
import LancheDetalhesModal from "../lancheDetalheModal/LancheDetalheModal";

export default function LancheLista({ lancheCriado }) {
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
    setLancheModal(response);
    console.log(response);
  };

  const adicionaLancheNaLista = (lanche) => {
    const lista = [...lanches, lanche];
    setLanches(lista);
  };

  useEffect(() => {
    if (lancheCriado) adicionaLancheNaLista(lancheCriado);
  }, [lancheCriado]);

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

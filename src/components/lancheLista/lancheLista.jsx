import { useState, useEffect } from "react";
import LancheListaItem from "../lancheListaItem/lancheListaItem";
import "./lancheLista.css";
import { LancheService } from "../../services/LancheServices";

export default function LancheLista() {
  const [lanches, setLanches] = useState([]);
  const [lancheSelecionado, setLancheSelecionado] = useState({});

  const getLista = async () => {
    const response = await LancheService.getLista();
    setLanches(response);
  };

  const adicionarItem = (lancheIndex) => {
    const lanche = {
      [lancheIndex]: (lancheSelecionado[lancheIndex] || 0) + 1,
    };
    setLancheSelecionado({ ...lancheSelecionado, ...lanche });
  };

  const removerItem = (lancheIndex) => {
    const lanche = {
      [lancheIndex]: Number(lancheSelecionado[lancheIndex] || 0) - 1,
    };
    setLancheSelecionado({ ...lancheSelecionado, ...lanche });
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
          />
        </div>
      ))}
    </div>
  );
}

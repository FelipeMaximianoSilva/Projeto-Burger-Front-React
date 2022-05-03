import { lanches } from "../../mocks/lanches.js";
import { useState } from "react";
import LancheListaItem from "../lancheListaItem/lancheListaItem";
import "./lancheLista.css";

export default function LancheLista() {
  const [lancheSelecionado, setLancheSelecionado] = useState({});

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

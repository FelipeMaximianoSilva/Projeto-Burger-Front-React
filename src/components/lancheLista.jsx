import { lanches } from "../mocks/lanches.js";
import { verificaTipo } from "../views/Home.jsx";
import { useState } from "react";

export default function LancheLista() {
  const [lancheSelecionado, setLancheSelecionado] = useState({});

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="lancheListaItemBadge"> {lancheSelecionado[index]} </span>
    );

  const adicionarItem = (lancheIndex) => {
    const lanche = {
      [lancheIndex]: Number(lancheSelecionado[lancheIndex] || 0) + 1,
    };
    setLancheSelecionado({ ...lancheSelecionado, ...lanche });
  };

  const removerItem = (lancheIndex) => {
    const lanche = {
      [lancheIndex]: Number(lancheSelecionado[lancheIndex] || 0) - 1,
    };
    setLancheSelecionado({ ...lancheSelecionado, ...lanche });
  };

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="button-remover" onClick={() => removerItem(index)}>
        Remover
      </button>
    );

  return (
    <div className="lancheLista">
      {lanches.map((lanche, index) => (
        <div className="lancheListaItem" key={`lancheListaItem-${index}`}>
          <div className="lancheListaItemCard">
            {badgeCounter(lancheSelecionado[index], index)}
            <div className="lancheLista-nome">{lanche.nome}</div>
            <br></br>
            <div className="lancheLista-preco">
              R$ {lanche.preco.toFixed(2)}
            </div>
            <br></br>
            <div className="lancheLista-img">
              <img src={lanche.img} alt="Imagem do {lanche.nome}" />
            </div>
            <br></br>
            <div className="lancheLista-description">{lanche.description}</div>
            <br></br>
            {verificaTipo(lanche.tipo)}
            <br></br>
            <br></br>
            <div className="lancheLista-buttons">
              <button
                className={`button-adicionar ${
                  !lancheSelecionado[index] && "button-adicionar-preencher"
                }`}
                onClick={() => adicionarItem(index)}
              >
                Adicionar
              </button>
              {removeButton(lancheSelecionado[index], index)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

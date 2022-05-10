import { verificaTipo } from "../../views/Home";
import "./lancheListaItem.css";

export default function LancheListaItem({
  lanche,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
}) {
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        className="button-remover"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(index);
        }}
      >
        Remover
      </button>
    );

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="lancheListaItemBadge"> {quantidadeSelecionada} </span>
    );

  return (
    <div className="lancheListaItemCard" onClick={() => clickItem(lanche.id)}>
      {badgeCounter(quantidadeSelecionada, index)}
      <div className="lancheLista-nome">{lanche.nome}</div>
      <br></br>
      <div className="lancheLista-preco">R$ {lanche.preco.toFixed(2)}</div>
      <br></br>
      <div className="lancheLista-img">
        <img src={lanche.img} alt={`Imagem do ${lanche.nome}`} />
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
            !quantidadeSelecionada && "button-adicionar-preencher"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onAdd(index);
          }}
        >
          Adicionar
        </button>
        {removeButton(quantidadeSelecionada, index)}
      </div>
    </div>
  );
}

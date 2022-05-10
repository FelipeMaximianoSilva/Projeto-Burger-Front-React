import { verificaTipo } from "../../views/Home";
import "./lancheListaItem.css";
import { ActionMode } from "../../constants/index";

export default function LancheListaItem({
  lanche,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
  clickItem,
  mode,
}) {
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        disabled={mode !== ActionMode.NORMAL}
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

  const badgeAction = (canRender) => {
    if (canRender)
      return (
        <span
          className={`lancheListaItem__tag ${
            mode === ActionMode.DELETAR && "lancheListaItem__tag-deletar"
          }`}
        >
          {" "}
          {mode}
        </span>
      );
  };

  return (
    <div
      className={`lancheListaItemCard 
      ${mode !== ActionMode.NORMAL && "lancheListaItemCard--disable"} 
      ${mode === ActionMode.DELETAR && "lancheListaItemCard--deletar"}
      `}
      onClick={() => clickItem(lanche.id)}
    >
      {badgeCounter(quantidadeSelecionada, index)}
      {badgeAction(mode !== ActionMode.NORMAL)}
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
          disabled={mode !== ActionMode.NORMAL}
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

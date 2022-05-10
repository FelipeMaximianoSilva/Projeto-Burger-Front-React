import "../assets/style.css";
import LancheLista from "../components/lancheLista/lancheLista";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { faCow } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar/navbar";
import AdicionaEditaLancheModal from "../components/AdicionaEditaLancheModal/AdicionaEditaLancheModal";
import { useState } from "react";
import { ActionMode } from "../constants/index";
import DeleteLancheModals from "components/DeleteLancheModal/DeleteLancheModal";

export default function Home() {
  const [canShowAdicionaLancheModal, setCanShowAdicionaLancheModal] =
    useState(false);

  const [lancheParaAdicionar, setLancheParaAdicionar] = useState();

  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const [lancheParaEditar, setLancheParaEditar] = useState();
  const [lancheParaDeletar, setLancheParaDeletar] = useState();

  const [lancheEditado, setLancheEditado] = useState();

  const [lancheRemovido, setLancheRemovido] = useState();

  const handleDeleteLanche = (lancheToDelete) => {
    setLancheParaDeletar(lancheToDelete);
  };

  const handleUpdateLanche = (lancheToUpdate) => {
    setLancheParaEditar(lancheToUpdate);
    setCanShowAdicionaLancheModal(true);
  };

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  const handleCloseModal = () => {
    setCanShowAdicionaLancheModal(false);
    setLancheParaAdicionar();
    setLancheParaDeletar();
    setLancheParaEditar();
    setModoAtual(ActionMode.NORMAL);
  };

  return (
    <div className="Home">
      <div>
        <Navbar
          mode={modoAtual}
          createLanche={() => setCanShowAdicionaLancheModal(true)}
          updateLanche={() => handleActions(ActionMode.ATUALIZAR)}
          deleteLanche={() => handleActions(ActionMode.DELETAR)}
        />
      </div>
      <div className="Home__container">
        <LancheLista
          mode={modoAtual}
          lancheCriado={lancheParaAdicionar}
          lancheEditado={lancheEditado}
          lancheRemovido={lancheRemovido}
          deleteLanche={handleDeleteLanche}
          updateLanche={handleUpdateLanche}
        />
        {canShowAdicionaLancheModal && (
          <AdicionaEditaLancheModal
            mode={modoAtual}
            lancheToUpdate={lancheParaEditar}
            onUpdateLanche={(lanche) => setLancheEditado(lanche)}
            closeModal={handleCloseModal}
            onCreateLanche={(lanche) => setLancheParaAdicionar(lanche)}
          />
        )}
        {lancheParaDeletar && (
          <DeleteLancheModals
            lancheParaDeletar={lancheParaDeletar}
            closeModal={handleCloseModal}
            onDeleteLanche={(lanche) => setLancheRemovido(lanche)}
          />
        )}
      </div>
    </div>
  );
}

export function verificaTipo(tipo) {
  if (tipo === 1) {
    return <FontAwesomeIcon icon={faCow} />;
  } else if (tipo === 2) {
    return <FontAwesomeIcon icon={faDrumstickBite} />;
  } else {
    return <FontAwesomeIcon icon={faLeaf} />;
  }
}

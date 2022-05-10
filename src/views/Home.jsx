import "../assets/style.css";
import LancheLista from "../components/lancheLista/lancheLista";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { faCow } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar/navbar";
import AdicionaLancheModal from "../components/AdicionaEditaLancheModal/AdicionaEditaLancheModal";
import { useState } from "react";

export default function Home() {
  const [canShowAdicionaLancheModal, setCanShowAdicionaLancheModal] =
    useState(false);

  const [lancheParaAdicionar, setLancheParaAdicionar] = useState();

  return (
    <div className="Home">
      <div>
        <Navbar createLanche={() => setCanShowAdicionaLancheModal(true)} />
      </div>
      <div className="Home__container">
        <LancheLista lancheCriado={lancheParaAdicionar} />
        {canShowAdicionaLancheModal && (
          <AdicionaLancheModal
            closeModal={() => setCanShowAdicionaLancheModal(false)}
            onCreateLanche={(lanche) => setLancheParaAdicionar(lanche)}
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

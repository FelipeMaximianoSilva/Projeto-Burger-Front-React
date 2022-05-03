import "../assets/style.css";
import LancheLista from "../components/lancheLista/lancheLista";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { faCow } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar/navbar";

export default function Home() {
  return (
    <div className="Home">
      <div>
        <Navbar />
      </div>
      <div className="Home__container">
        <LancheLista />
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

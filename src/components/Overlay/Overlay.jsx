import "./Overlay.css";

export default function Overlay({ children, overlayClick }) {
  return (
    <div className="Overlay" onClick={() => overlayClick()}>
      {children}
    </div>
  );
}

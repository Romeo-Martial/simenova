import { Link } from "react-router-dom";
import "./logo.css";

export default function Logo({ onClick }) {
  return (
    <Link to="/" className="logo" onClick={onClick} aria-label="SIMENOVA home">
      <span className="logo__text">SIMENOVA</span>
    </Link>
  );
}

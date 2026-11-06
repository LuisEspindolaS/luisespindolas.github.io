import { useState } from "react";
import { SITE } from "../../config/site";

export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header>
      <div className="wrap bar">
        <a href="#inicio" className="logo">Colima<span>SAD</span></a>
        <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menú">☰</button>
        <nav className={menu ? "open" : ""} onClick={() => setMenu(false)}>
          <a href="#novedades">Lo último</a>
          <a href="#apps">Apps</a>
          <a className="btn" href={SITE.facebookUrl}>Síguenos</a>
        </nav>
      </div>
    </header>
  );
}

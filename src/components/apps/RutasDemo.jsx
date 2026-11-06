import { useState } from "react";
import { RUTAS } from "../../data/mock";

export default function RutasDemo() {
  const [ruta, setRuta] = useState("Ruta 1");
  return (
    <div className="card demo" id="rutas">
      <h3>🚌 Rutas de camiones <small style={{ color: "var(--steel)", fontWeight: 400 }}>(datos de ejemplo)</small></h3>
      <div className="chips" style={{ marginBottom: 0 }}>
        {Object.keys(RUTAS).map((r) => (
          <button key={r} className={"chip" + (ruta === r ? " on" : "")} onClick={() => setRuta(r)}>{r}</button>
        ))}
      </div>
      <ul className="stops">{RUTAS[ruta].paradas.map((p) => <li key={p}>{p}</li>)}</ul>
      <p style={{ color: "var(--slate)", marginTop: 12 }}>Pasa cada {RUTAS[ruta].cada} aprox.</p>
    </div>
  );
}

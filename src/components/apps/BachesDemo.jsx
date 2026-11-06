import { useState } from "react";
import { BACHES } from "../../data/mock";

export default function BachesDemo() {
  const [bache, setBache] = useState(null);
  return (
    <div className="card demo" id="baches">
      <h3>🕳️ Mapa de baches <small style={{ color: "var(--steel)", fontWeight: 400 }}>(datos de ejemplo)</small></h3>
      <div className="map">
        {BACHES.map((b, i) => (
          <button key={i} className="pin" style={{ left: b.x + "%", top: b.y + "%" }} onClick={() => setBache(b.n)} aria-label={b.n} />
        ))}
      </div>
      <p style={{ margin: "14px 0", color: "var(--slate)" }}>{bache ? `📍 ${bache}` : "Toca un punto para ver el reporte."}</p>
      <button className="btn dark">Reportar un bache</button>
    </div>
  );
}

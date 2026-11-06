import { useState } from "react";
import { PLANES } from "../../data/mock";

export default function PlanDemo() {
  const [plan, setPlan] = useState(null);
  const sortear = () => setPlan(PLANES[Math.floor(Math.random() * PLANES.length)]);
  return (
    <div className="card demo" id="hacer" style={{ textAlign: "center" }}>
      <h3>🧭 ¿Qué hacemos hoy?</h3>
      <div className="big serif">{plan || "Deja que Colima decida"}</div>
      <button className="btn dark" onClick={sortear}>Sugerir un plan</button>
    </div>
  );
}

import { useState } from "react";
import { APPS, APP_TABS } from "../../data/apps";
import Reveal from "../ui/Reveal";
import RutasDemo from "../apps/RutasDemo";
import BachesDemo from "../apps/BachesDemo";
import PlanDemo from "../apps/PlanDemo";

export default function Apps() {
  const [tab, setTab] = useState("Todos");
  const apps = APPS.filter((a) => tab === "Todos" || a.tag === tab);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <section id="apps" className="dark-sec">
      <div className="wrap">
        <Reveal>
          <h2 className="serif">Apps</h2>
          <p className="sub">Herramientas para moverte, conocer y cuidar la ciudad.</p>
          <div className="chips">
            {APP_TABS.map((t) => (
              <button
                key={t}
                className={"chip" + (tab === t ? " on" : "")}
                style={tab === t ? { background: "var(--mist)", color: "var(--navy)" } : { background: "transparent", color: "#fff", borderColor: "#fff4" }}
                onClick={() => setTab(t)}
              >{t}</button>
            ))}
          </div>
        </Reveal>

        <div className="apps">
          {apps.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="card app" style={{ cursor: a.live ? "pointer" : "default" }} onClick={() => a.live && go(a.id)}>
                <span className="tag">{a.tag}</span>
                <div className="ic">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                {!a.live && <span className="soon">Próximamente</span>}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal><RutasDemo /></Reveal>
        <Reveal><BachesDemo /></Reveal>
        <Reveal><PlanDemo /></Reveal>
      </div>
    </section>
  );
}

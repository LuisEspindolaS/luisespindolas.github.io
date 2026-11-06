import { useEffect, useState } from "react";

export default function Hero() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const f = () => setScroll(window.scrollY);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <section className="hero" id="inicio" style={{ padding: 0 }}>
      {[8, 28, 48].map((t, i) => (
        <div
          key={i}
          className="cloud"
          style={{ top: `${t}%`, width: 240 + i * 90, animationDuration: `${60 + i * 25}s`, animationDelay: `-${i * 20}s`, opacity: 0.55 + i * 0.1 }}
        />
      ))}
      <svg className="mtn" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMax slice" aria-hidden="true" style={{ transform: `translateY(${Math.min(scroll * 0.12, 40)}px)` }}>
        <path d="M0 400V250L140 230 260 262V400Z" fill="#747f86" opacity=".6" />
        <path d="M330 400L560 110 610 92 660 100 720 150 900 300 1200 260V400Z" fill="#747f86" />
        <path d="M560 110L590 230 610 160 640 260 700 200 720 150 660 100 610 92Z" fill="#5b6b78" />
        <path d="M0 400V300L160 270 340 330 560 290 800 340 1000 300 1200 340V400Z" fill="#243749" />
      </svg>
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <h1 className="serif">Colima, visto desde el <em style={{ fontStyle: "normal", color: "var(--navy)" }}>volcán.</em></h1>
        <p>Lo último de la página y herramientas útiles para el día a día en Colima.</p>
        <div className="row">
          <a className="btn" href="#apps">Explorar apps</a>
          <a className="btn ghost" href="#novedades">Última publicación</a>
        </div>
      </div>
    </section>
  );
}

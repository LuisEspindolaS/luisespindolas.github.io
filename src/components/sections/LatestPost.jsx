import { useState } from "react";
import { SITE } from "../../config/site";
import { POST } from "../../data/mock";
import Reveal from "../ui/Reveal";
import perfil from "../../assets/perfil.png";

export default function LatestPost() {
  const [liked, setLiked] = useState(false);
  return (
    <section id="novedades">
      <div className="wrap feed">
        <Reveal>
          <article className="card post">
            <div className="img">
              {POST.image ? <img src={POST.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : "Imagen de la publicación"}
            </div>
            <div className="pb">
              <div className="meta">
                <img className="av" src={perfil} alt="" style={{ objectFit: "cover" }} />
                <div><strong>{SITE.name}</strong><small>{POST.date} · Facebook</small></div>
              </div>
              <p>{POST.text}</p>
              <div className="acts">
                <button className={"chip" + (liked ? " on" : "")} onClick={() => setLiked(!liked)}>👍 {POST.likes + (liked ? 1 : 0)}</button>
                <span className="chip">💬 {POST.comments}</span>
                <span className="chip">↗ {POST.shares}</span>
              </div>
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="serif">Lo último en la página</h2>
          <p className="sub">Siempre verás aquí la publicación más reciente, sincronizada con Facebook.</p>
          <a className="btn dark" href={SITE.facebookUrl}>Ver en Facebook</a>
        </Reveal>
      </div>
    </section>
  );
}

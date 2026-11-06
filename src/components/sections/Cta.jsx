import { SITE } from "../../config/site";
import Reveal from "../ui/Reveal";

export default function Cta() {
  return (
    <section>
      <div className="wrap">
        <Reveal>
          <div className="card cta">
            <h2 className="serif">Sé parte de Colima SAD</h2>
            <p className="sub">Síguenos en Facebook y no te pierdas nada.</p>
            <a className="btn dark" href={SITE.facebookUrl}>Seguir la página</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

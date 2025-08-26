export default function Hero({ lang }) {
  return (
    <section className="section hero">
      <div className="container grid two">
        <div>
          <h1 className="display">Tom Larsson</h1>
          <p className="lead">
            {lang === "sv"
              ? "Front-end utvecklare som bygger snabba, tillgängliga och snygga webbappar."
              : "Front-end developer crafting fast, accessible, and beautiful web apps."}
          </p>
          <div className="actions">
            <a className="btn" href="#projects">
              {lang === "sv" ? "Se projekt" : "View projects"}
            </a>
            <a className="btn btn--ghost" href="/cv.pdf" download>
              {lang === "sv" ? "Ladda ner CV" : "Download CV"}
            </a>
          </div>
        </div>
        <div className="hero__card" role="img" aria-label="Profilkort">
          <div className="hero__dot"></div>
          <div className="hero__dot"></div>
          <div className="hero__dot"></div>
        </div>
      </div>
    </section>
  );
}

export default function CVViewer({ lang }) {
  return (
    <section className="section" id="cv">
      <div className="container">
        <h2>{lang === "sv" ? "CV" : "CV"}</h2>
        <div className="cv-embed">
          <object
            data="/cv.pdf"
            type="application/pdf"
            aria-label="Inbäddat CV"
          >
            <p>
              {lang === "sv"
                ? "Din webbläsare kan inte visa PDF. "
                : "Your browser cannot display the PDF. "}
              <a
                className="btn"
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {lang === "sv" ? "Öppna CV i ny flik" : "Open CV in new tab"}
              </a>
            </p>
          </object>
        </div>
        <div className="actions">
          <button className="btn btn--ghost" onClick={() => window.print()}>
            {lang === "sv" ? "Skriv ut" : "Print"}
          </button>
          <a className="btn" href="/cv.pdf" download>
            {lang === "sv" ? "Ladda ner PDF" : "Download PDF"}
          </a>
        </div>
      </div>
    </section>
  );
}

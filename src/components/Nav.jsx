export default function Nav({ dark, setDark, lang, setLang }) {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#" className="brand" aria-label="Hem">
          TL
        </a>
        <nav
          className="nav__links"
          aria-label={lang === "sv" ? "Primär" : "Primary"}
        >
          <a href="#skills">{lang === "sv" ? "Kunskaper" : "Skills"}</a>
          <a href="#projects">{lang === "sv" ? "Projekt" : "Projects"}</a>
          <a href="#cv">{lang === "sv" ? "CV" : "CV"}</a>
          <a href="#contact">{lang === "sv" ? "Kontakt" : "Contact"}</a>
        </nav>
        <div className="nav__actions">
          <button
            className="btn btn--ghost"
            onClick={() => setLang(lang === "sv" ? "en" : "sv")}
            aria-label="Byt språk"
          >
            {lang.toUpperCase()}
          </button>
          <button
            className="btn btn--ghost"
            onClick={() => setDark(!dark)}
            aria-label="Byt tema"
          >
            {dark ? "☾" : "☀"}
          </button>
        </div>
      </div>
    </header>
  );
}

// Fill your real experience or we can parse from your LaTeX/PDF on upload
const ITEMS = [
  {
    role: "Front-end Developer (Student)",
    company: "Yrkeshögskolan i Borås",
    period: "2024 – 2026",
    desc: "Projekt inom React, TypeScript, UI och API-integrationer.",
  },
];

export default function Experience({ lang }) {
  return (
    <section className="section">
      <div className="container">
        <h2>{lang === "sv" ? "Erfarenhet" : "Experience"}</h2>
        <div className="stack">
          {ITEMS.map((x, i) => (
            <article className="item" key={i}>
              <header className="item__head">
                <h3>{x.role}</h3>
                <span className="muted">
                  {x.company} · {x.period}
                </span>
              </header>
              <p>{x.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

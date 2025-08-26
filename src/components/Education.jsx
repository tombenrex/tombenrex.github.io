const ITEMS = [
  {
    name: "Yrkeshögskolan i Borås",
    degree: "Front-end Developer",
    period: "2024 – 2026",
    desc: "Fördjupning i modern webbutveckling.",
  },
];

export default function Education({ lang }) {
  return (
    <section className="section">
      <div className="container">
        <h2>{lang === "sv" ? "Utbildning" : "Education"}</h2>
        <div className="stack">
          {ITEMS.map((x, i) => (
            <article className="item" key={i}>
              <header className="item__head">
                <h3>{x.degree}</h3>
                <span className="muted">
                  {x.name} · {x.period}
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

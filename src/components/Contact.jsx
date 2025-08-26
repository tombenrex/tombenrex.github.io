export default function Contact({ lang }) {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2>{lang === 'sv' ? 'Kontakt' : 'Contact'}</h2>
        <ul className="contact" role="list">
          <li>
            <a href="mailto:tmlsn@hotmail.com">E-mail</a>
          </li>
          <li>
            <a
              href="https://github.com/tombenrex"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tmlsn"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

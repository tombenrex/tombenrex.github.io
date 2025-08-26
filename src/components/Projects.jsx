import { useEffect, useState } from 'react';

export default function Projects({ lang, githubUser }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    async function run() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${githubUser}/repos?sort=updated&per_page=8`
        );
        const data = await res.json();
        if (active) setRepos(Array.isArray(data) ? data : []);
      } catch (e) {
        if (active) setRepos([]);
      } finally {
        if (active) setLoading(false);
      }
    }
    run();
    return () => {
      active = false;
    };
  }, [githubUser]);

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>{lang === 'sv' ? 'Projekt' : 'Projects'}</h2>
        {loading ? (
          <p>{lang === 'sv' ? 'Laddar projekt…' : 'Loading projects…'}</p>
        ) : (
          <div className="grid three">
            {repos.map((repo) => (
              <article className="card" key={repo.id}>
                <h3 className="card__title">{repo.name}</h3>
                <p className="muted">
                  {repo.description ||
                    (lang === 'sv' ? 'Ingen beskrivning' : 'No description')}
                </p>
                <div className="card__meta">
                  <span>★ {repo.stargazers_count}</span>
                  <span>{repo.language || '—'}</span>
                </div>
                <div className="card__actions">
                  <a
                    className="btn btn--small"
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  {repo.homepage && (
                    <a
                      className="btn btn--small btn--ghost"
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

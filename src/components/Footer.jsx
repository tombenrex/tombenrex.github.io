export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <small className="muted">© {year} Tom Larsson</small>
        <a className="muted" href="#">
          Till toppen ↑
        </a>
      </div>
    </footer>
  );
}

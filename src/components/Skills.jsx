const SKILLS = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Vite",
  "MUI",
  "Git/GitHub",
  "REST APIs",
  "Node basics",
  "Linux",
  "Arch",
  "Hyprland",
  "Accessibility",
  "Responsive UI",
  "Performance",
];

export default function Skills({ lang }) {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2>{lang === "sv" ? "Kunskaper" : "Skills"}</h2>
        <ul className="chips" role="list">
          {SKILLS.map((label) => (
            <li className="chip" key={label}>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

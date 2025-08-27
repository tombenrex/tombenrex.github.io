import { motion } from 'framer-motion';
import { Github, Globe, Home, Linkedin, Mail, Phone } from 'lucide-react';

export default function MainPage() {
  // Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const slideLeft = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.main
      initial="hidden"
      animate="show"
      className="min-h-screen bg-white text-gray-900 flex justify-center"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[0.36fr,1fr] gap-8 p-6 md:p-10">
        {/* Vänsterspalt (cvblue) */}
        <motion.aside
          variants={slideLeft}
          className="bg-[#304263] text-white rounded-2xl overflow-hidden md:self-start"
        >
          {/* Tunn toppremsa, som i LaTeX */}
          <div className="h-1 w-full bg-white/20" />

          <div className="px-7 py-8 flex flex-col items-center text-center">
            {/* Namn */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl font-bold tracking-wide mb-5"
            >
              Tom <span className="font-extrabold">Larsson</span>
            </motion.h1>

            {/* Foto (rund) */}
            <motion.div
              variants={fadeUp}
              className="w-40 h-40 rounded-full overflow-hidden border-4 border-white mb-7"
            >
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Profile */}
            <motion.section variants={fadeUp} className="w-full mb-6 text-left">
              <h2 className="font-semibold text-lg mb-2 border-b border-white/30">
                Profile
              </h2>
              <p className="text-sm leading-relaxed">
                Frontend developer student with a passion for clean,
                user-friendly interfaces, open-source technologies and
                automation. Strong background in problem-solving, teamwork and
                technical support.
              </p>
            </motion.section>

            {/* Contact */}
            <motion.section variants={fadeUp} className="w-full mb-6 text-left">
              <h2 className="font-semibold text-lg mb-2 border-b border-white/30">
                Contact
              </h2>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-white" />
                  <a href="mailto:tmlsn@hotmail.com" className="underline">
                    tmlsn@hotmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-white" />
                  072&nbsp;212&nbsp;13&nbsp;01
                </li>
                <li className="flex items-center gap-2">
                  <Github size={16} className="text-white" />
                  <a
                    className="underline"
                    href="https://github.com/tombenrex"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tombenrex
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin size={16} className="text-white" />
                  <a
                    className="underline"
                    href="https://linkedin.com/in/tmlsn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tmlsn
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={16} className="text-white" />
                  <a
                    className="underline"
                    href="https://tombenrex.me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tombenrex.me
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Home size={16} className="text-white" />
                  Vansö Kinger 1, 645&nbsp;92 Strängnäs
                </li>
              </ul>
            </motion.section>

            {/* Skills */}
            <motion.section variants={fadeUp} className="w-full mb-6 text-left">
              <h2 className="font-semibold text-lg mb-2 border-b border-white/30">
                Skills
              </h2>
              <ul className="text-sm space-y-2">
                <li>
                  <b>Frontend:</b> JavaScript (ES6+), TypeScript, HTML5, CSS3
                </li>
                <li>
                  <b>Frameworks &amp; Tools:</b> React, Vite, Tailwind CSS,
                  Material UI
                </li>
                <li>
                  <b>Development:</b> Git/GitHub, VS Code, Linux (Arch/Hyprland)
                </li>
              </ul>
            </motion.section>

            {/* Certificates */}
            <motion.section variants={fadeUp} className="w-full mb-6 text-left">
              <h2 className="font-semibold text-lg mb-2 border-b border-white/30">
                Certificates
              </h2>
              <ul className="text-sm list-disc list-inside marker:text-white/80">
                <li>Carpenter journeyman’s certificate</li>
                <li>Safe lifting, scaffolding (9m), CPR</li>
                <li>Driver’s license B &amp; AM</li>
              </ul>
            </motion.section>

            {/* Languages */}
            <motion.section variants={fadeUp} className="w-full mb-6 text-left">
              <h2 className="font-semibold text-lg mb-2 border-b border-white/30">
                Languages
              </h2>
              <p className="text-sm">
                Swedish (native)
                <br />
                English (good proficiency)
              </p>
            </motion.section>

            {/* References */}
            <motion.section variants={fadeUp} className="w-full text-left">
              <h2 className="font-semibold text-lg mb-2 border-b border-white/30">
                References
              </h2>
              <p className="text-sm">Available on request.</p>
            </motion.section>
          </div>
        </motion.aside>

        {/* Högerspalt */}
        <div className="flex flex-col gap-10">
          {/* Experience */}
          <motion.section variants={slideRight}>
            <h2 className="text-2xl font-bold text-[#304263] border-b-2 border-[#304263] pb-1 mb-5">
              Experience
            </h2>

            <div className="space-y-5">
              {[
                {
                  role: 'Operator',
                  place: 'Idemia, Strängnäs',
                  period: '2022–2024',
                  desc: 'Supervised machines, solved technical issues and managed postal handling in production.',
                },
                {
                  role: 'Salesperson',
                  place: 'OKQ8, Strängnäs/Nykvarn/Eskilstuna',
                  period: '2021–2024',
                  desc: 'Provided customer service, handled technical problems and multitasked in high-pressure environments.',
                },
                {
                  role: 'Property Service',
                  place: 'Jourbilsgruppen i Sverige AB',
                  period: '2019–2021',
                  desc: 'Conducted inspections, wrote documentation and supported customers with 50% on-call duty.',
                },
                {
                  role: 'Remediation Technician',
                  place: 'Avfuktningsteknik, Södertälje',
                  period: '2019',
                  desc: 'Performed mold remediation in crawl spaces and attics, including drilling and installation of ventilation systems.',
                },
                {
                  role: 'Mover',
                  place: 'Davéns & Flyttekspressen, Södertälje/Enköping',
                  period: '2018–2019',
                  desc: 'Assisted with relocations, furniture assembly and office moves.',
                },
                {
                  role: 'Building Advisor',
                  place: 'Beijer Byggmaterial, Strängnäs',
                  period: '2018',
                  desc: 'Advised customers on materials and managed sales, logistics and stock.',
                },
                {
                  role: 'Carpenter',
                  place: 'Skanska, Stockholm',
                  period: '2011–2018',
                  desc: 'Worked on new construction and renovation of apartments, from apprenticeship to certified carpenter.',
                },
              ].map((job, i) => (
                <motion.div
                  key={job.role + i}
                  variants={fadeUp}
                  className="space-y-1"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="font-semibold">
                      {job.role} — <span className="italic">{job.place}</span>
                    </h3>
                    <span className="text-gray-500 font-semibold">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{job.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section variants={slideRight}>
            <h2 className="text-2xl font-bold text-[#304263] border-b-2 border-[#304263] pb-1 mb-5">
              Education
            </h2>

            {/* Frontend Developer React — YH Borås */}
            <motion.div variants={fadeUp} className="space-y-2 mb-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="font-semibold">
                  Frontend Developer React —{' '}
                  <span className="italic">Yrkeshögskolan i Borås</span>
                </h3>
                <div className="text-right">
                  <div className="font-bold">2025–2026</div>
                  <div className="text-xs italic text-[#304263]">
                    Current Education
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Two-year higher vocational program in modern web development.
              </p>

              <div className="mt-3">
                <div className="text-sm font-semibold mb-1">Key courses:</div>
                <ul className="list-disc list-inside marker:text-[#304263] text-sm space-y-1">
                  <li>Web programming with JavaScript (fundamentals) ✔</li>
                  <li>Web programming with JavaScript (advanced) ✔</li>
                  <li>JavaScript frameworks (React) ✔</li>
                  <li>User Experience &amp; Interaction Design</li>
                  <li>App Development</li>
                  <li>Backend development with Node.js</li>
                  <li>Database Technology</li>
                  <li>Agile Project Methodology</li>
                  <li>Internships (LIA 1 &amp; LIA 2)</li>
                  <li>Thesis project</li>
                </ul>
              </div>
            </motion.div>

            {/* Construction Technology — Teknikgymnasiet */}
            <motion.div variants={fadeUp} className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="font-semibold">
                  Construction Technology —{' '}
                  <span className="italic">Teknikgymnasiet</span>
                </h3>
                <div className="text-right">
                  <div className="font-bold">2009–2011</div>
                  <div className="text-xs italic text-[#304263]">
                    Previous Education
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Vocational upper secondary education specializing in carpentry.
              </p>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </motion.main>
  );
}

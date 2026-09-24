import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Moon,
  X,
  Sun,
  Cpu,
  Smartphone,
  Sparkles,
  MapPin,
  Send,
  Terminal,
  Workflow
} from "lucide-react";
import profile from "./assets/profile.jpg";
import aiChat1 from "./assets/ai-chat-1.png";
import aiChat2 from "./assets/ai-chat-2.png";
import doodle1 from "./assets/doodle-1.png";
import doodle2 from "./assets/doodle-2.png";
import doodle3 from "./assets/doodle-3.png";
import trafficDetection from "./assets/traffic-detection.png";
import trafficHardware1 from "./assets/traffic-hardware-1.jpeg";
import trafficHardware2 from "./assets/traffic-hardware-2.jpeg";
import rnnVoicePredictor from "./assets/rnn-voice-predictor.png";
import handPen from "./assets/hand-pen.png";
import "./styles.css";

const github = "https://github.com/sloganathan288-dev";
const linkedin = "https://www.linkedin.com/in/loganathan-data";
const email = "mailto:logan970105@gmail.com";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  live?: string;
  repo?: string;
  image: string;
  featured?: boolean;
  details: string[];
};

const projects: Project[] = [
  {
    id: "ai-chat",
    title: "Personal AI Chat App",
    category: "AI / Web",
    description:
      "A deployed personal AI chat application built to provide an interactive conversational experience through a web interface and AI-powered backend.",
    tech: ["JavaScript", "AI API", "Vercel", "Firebase"],
    live: "https://loganathan-v2.vercel.app",
    repo: "https://github.com/sloganathan288-dev/loganathan-v2",
    image: aiChat1,
    featured: true,
    details: [
      "Interactive conversational web experience",
      "Deployed production version on Vercel",
      "Google sign-in and Firebase integration shown in the application",
      "Organized chat/workspace interface"
    ]
  },
  {
    id: "doodle",
    title: "Doodle Alive",
    category: "Web Development",
    description:
      "A browser-based drawing and animation application that lets users create, edit and bring doodles to life using interactive canvas tools.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    live: "https://sloganathan288-dev.github.io/doodle-alive/",
    repo: "https://github.com/sloganathan288-dev/doodle-alive",
    image: doodle1,
    featured: true,
    details: [
      "Interactive canvas drawing tools",
      "Shapes, text, fill and eraser controls",
      "Multi-page canvas workflow",
      "PNG export and animation interaction",
      "Publicly deployed with GitHub Pages"
    ]
  },
  {
    id: "traffic",
    title: "AI-Based Smart Traffic Management",
    category: "AI / IoT",
    description:
      "An AI and IoT traffic-management prototype combining computer vision for vehicle detection with ESP32-based hardware control to support traffic-density decisions and signal automation.",
    tech: ["Python", "YOLO", "Computer Vision", "ESP32", "IoT"],
    repo: "https://github.com/sloganathan288-dev/smart_traffic_system-management",
    image: trafficDetection,
    details: [
      "YOLO-based vehicle detection and traffic-density analysis",
      "Lane-wise vehicle monitoring for signal decisions",
      "ESP32 and relay-module hardware integration",
      "LED traffic-signal prototype controlled through the IoT layer",
      "Emergency-vehicle detection concept for signal priority"
    ]
  },
  {
    id: "healthcare",
    title: "AI-Enabled Healthcare Monitoring",
    category: "Mobile / IoT",
    description:
      "A Flutter application integrated with ESP32 and IoT sensors for scheduled medicine reminders and patient/caregiver notifications.",
    tech: ["Flutter", "Dart", "ESP32", "IoT", "SMS API"],
    image: "",
    details: [
      "Medicine scheduling and reminders",
      "Patient and caregiver notifications",
      "ESP32 and IoT sensor integration",
      "Automated SMS notification workflow"
    ]
  },
  {
    id: "hand-pen",
    title: "Hand Pen — Hand Detection Drawing",
    category: "Computer Vision / Web",
    description:
      "A webcam-based interactive drawing application that lets users draw on screen through hand movements and simple keyboard controls.",
    tech: ["HTML", "CSS", "JavaScript", "Webcam", "Hand Detection"],
    live: "https://sloganathan288-dev.github.io/hand-detection-write/",
    repo: "https://github.com/sloganathan288-dev/hand-detection-write",
    image: handPen,
    details: [
      "Real-time webcam-based hand interaction",
      "Draw on screen using hand movement",
      "SHIFT key control for drawing interaction",
      "SPACEBAR control to clear the drawing",
      "Deployed publicly with GitHub Pages"
    ]
  },
  {
    id: "rnn-voice-predictor",
    title: "RNN Voice & Next-Word Prediction",
    category: "AI / NLP",
    description:
      "A full-stack AI web application that converts speech to text and predicts likely next words, with multilingual voice input and real-time text interaction.",
    tech: ["Python", "Flask", "JavaScript", "RNN", "LSTM", "NLP"],
    live: "https://rnn-voice-and-next-word-prediction-1.onrender.com/",
    repo: "https://github.com/sloganathan288-dev/RNN-voice-and-next-word-prediction",
    image: rnnVoicePredictor,
    details: [
      "Speech-to-text input through the browser",
      "Real-time recognized speech and text input",
      "Top 3 next-word suggestions",
      "Multilingual speech recognition support",
      "RNN/LSTM-based next-word prediction workflow",
      "Interactive frontend with Flask backend"
    ]
  }
];

const skills = [
  { icon: Code2, title: "Programming", items: ["Java", "Python", "SQL", "JavaScript"] },
  { icon: Smartphone, title: "Software & Full-Stack", items: ["Java Full Stack", "Frontend", "Backend", "REST APIs"] },
  { icon: BrainCircuit, title: "AI & Machine Learning", items: ["Machine Learning", "Deep Learning", "Computer Vision"] },
  { icon: Database, title: "Data Analytics", items: ["Pandas", "NumPy", "Matplotlib", "SQL"] },
  { icon: Workflow, title: "Web Development", items: ["HTML", "CSS", "JavaScript", "Responsive Web Design"] },
  { icon: Cpu, title: "IoT", items: ["ESP32", "Arduino", "IoT Sensors"] },
  { icon: Terminal, title: "Tools", items: ["Git", "GitHub", "VS Code", "Prompt Engineering"] }
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const categories = ["All", "AI / Web", "Web Development", "AI / IoT", "Mobile / IoT", "AI / NLP", "Computer Vision / Web"];
  const visibleProjects = useMemo(
    () => filter === "All" ? projects : projects.filter((p) => p.category === filter),
    [filter]
  );

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => go("home")} aria-label="Go to home">
            <span className="brand-mark">LS</span>
            <span>Loganathan<span className="dot">.</span></span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["about", "skills", "projects", "education", "certifications", "contact"].map((id) => (
              <button key={id} onClick={() => go(id)}>{id[0].toUpperCase() + id.slice(1)}</button>
            ))}
          </div>

          <div className="nav-actions">
            <a className="icon-btn" href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
            <a className="icon-btn" href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
            <button className="icon-btn" onClick={() => setDark((v) => !v)} aria-label="Toggle theme">
              {dark ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
            <button className="menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
              {menuOpen ? <X size={21}/> : <Menu size={21}/>}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="pulse"></span> Open to internship opportunities</div>
              <p className="hero-kicker">B.Tech AI & Data Science · CGPA 8.50 · Open to Software & AI Internships</p>
              <h1>Building practical solutions with <span>AI, Data, Web & IoT.</span></h1>
              <p className="hero-text">
                I'm Loganathan S, a final-year Artificial Intelligence & Data Science student interested in Software Development, Full-Stack Development, AI/ML, Data Analytics and IoT. I enjoy turning ideas into practical, deployable applications.
              </p>
              <div className="hero-actions">
                <button className="btn primary" onClick={() => go("projects")}>View Projects <ArrowDown size={17}/></button>
                <a className="btn secondary" href="/Loganathan_S_Resume.pdf" target="_blank">Download Resume <Download size={17}/></a>
              </div>
              <div className="social-row">
                <a href={github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
                <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
                <a href={email}><Mail size={17}/> Email</a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-glow"></div>
              <div className="portrait-frame">
                <img src={profile} alt="Loganathan S" />
                <div className="portrait-caption">
                  <div><span className="live-dot"></span> Building & learning</div>
                  <span>AI · ML · Web · IoT</span>
                </div>
              </div>
              <div className="float-card card-ai"><BrainCircuit size={19}/><span>AI / ML</span></div>
              <div className="float-card card-data"><Database size={19}/><span>Data</span></div>
              <div className="float-card card-iot"><Cpu size={19}/><span>IoT</span></div>
            </div>
          </div>
          <div className="scroll-cue"><span></span> Scroll to explore</div>
        </section>

        <section id="about" className="section">
          <div className="container narrow">
            <div className="section-head">
              <p className="section-label">01 · About</p>
              <h2>Curious by nature. <span>Project-driven by choice.</span></h2>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  I am a final-year B.Tech Artificial Intelligence & Data Science student at Mahendra Engineering College with a CGPA of 8.50. I enjoy building practical solutions using Artificial Intelligence, Machine Learning, Data Analytics, Web Development and IoT.
                </p>
                <p>
                  My work includes a deployed personal AI chat application, a browser-based drawing and animation tool, an IoT and Machine Learning traffic system, and an IoT-enabled healthcare monitoring application.
                </p>
                <p>
                  I am continuously improving my programming, problem-solving and development skills while seeking opportunities to gain real-world industry experience and contribute to meaningful projects.
                </p>
              </div>
              <div className="about-cards">
                <div className="stat-card"><GraduationCap/><strong>8.50</strong><span>CGPA</span></div>
                <div className="stat-card"><BrainCircuit/><strong>AI / ML</strong><span>Focus area</span></div>
                <div className="stat-card"><Code2/><strong>4+</strong><span>Featured projects</span></div>
                <div className="stat-card"><MapPin/><strong>Salem</strong><span>Tamil Nadu, India</span></div>
              </div>
            </div>
            <div className="interest-strip">
              <span className="interest-title">INTERNSHIP INTERESTS</span>
              <span>Software Development</span>
              <span>Full-Stack Development</span>
              <span>AI / ML</span>
              <span>Data Science</span>
              <span>Web Development</span>
              <span>IoT</span>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <div className="section-head centered">
              <p className="section-label">02 · Skills</p>
              <h2>Tools I use to <span>build and learn.</span></h2>
            </div>
            <div className="skills-grid">
              {skills.map(({icon: Icon, title, items}) => (
                <article className="skill-card" key={title}>
                  <div className="skill-icon"><Icon size={20}/></div>
                  <h3>{title}</h3>
                  <div className="tags">{items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-head projects-head">
              <div>
                <p className="section-label">03 · Projects</p>
                <h2>Things I've <span>built.</span></h2>
              </div>
              <a className="text-link" href={github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={17}/></a>
            </div>

            <div className="filters">
              {categories.map((c) => (
                <button className={filter === c ? "active" : ""} key={c} onClick={() => setFilter(c)}>{c}</button>
              ))}
            </div>

            <div className="projects-grid">
              {visibleProjects.map((p, i) => (
                <article className={`project-card ${p.featured ? "featured" : ""}`} key={p.id}>
                  <div className={`project-media ${p.image ? "" : "no-image"}`}>
                    {p.image ? <img src={p.image} alt={`${p.title} screenshot`} /> : <div className="media-placeholder"><Sparkles size={34}/><span>Project preview</span></div>}
                    {p.featured && <span className="featured-badge">Featured</span>}
                    {p.live && <span className="live-badge"><span></span> Live</span>}
                  </div>
                  <div className="project-body">
                    <div className="project-meta"><span>{String(i + 1).padStart(2, "0")}</span><span>{p.category}</span></div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="project-tech">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                    <div className="project-actions">
                      <button className="small-btn" onClick={() => setSelected(p)}>Details <ArrowUpRight size={15}/></button>
                      {p.live && <a className="small-btn outline" href={p.live} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={15}/></a>}
                      {p.repo && <a className="small-btn ghost" href={p.repo} target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a>}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="github-banner">
              <div><Github size={24}/><div><strong>More projects on GitHub</strong><span>Explore additional work, experiments and practice repositories.</span></div></div>
              <a className="btn secondary" href={github} target="_blank" rel="noreferrer">Open GitHub <ArrowUpRight size={17}/></a>
            </div>
          </div>
        </section>

        <section id="education" className="section section-alt">
          <div className="container narrow">
            <div className="section-head centered">
              <p className="section-label">04 · Education</p>
              <h2>My <span>learning journey.</span></h2>
            </div>
            <div className="timeline">
              <div className="timeline-item current">
                <div className="timeline-marker"><GraduationCap size={18}/></div>
                <div className="timeline-content">
                  <span className="timeline-date">Current</span>
                  <h3>B.Tech — Artificial Intelligence & Data Science</h3>
                  <p>Mahendra Engineering College · Namakkal, Tamil Nadu</p>
                  <strong>CGPA: 8.50</strong>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"><CheckCircle2 size={18}/></div>
                <div className="timeline-content">
                  <span className="timeline-date">2023</span>
                  <h3>HSC</h3>
                  <p>Swamy Vivekanandha Vidyalaya Higher Secondary School · Salem</p>
                  <strong>75.8%</strong>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"><CheckCircle2 size={18}/></div>
                <div className="timeline-content">
                  <span className="timeline-date">2021</span>
                  <h3>SSLC</h3>
                  <p>Golden Rays Matriculation School · Salem</p>
                  <strong>All Pass</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="container narrow">
            <div className="section-head centered">
              <p className="section-label">05 · Certification</p>
              <h2>Learning beyond the <span>classroom.</span></h2>
            </div>
            <div className="cert-card">
              <div className="cert-icon"><BriefcaseBusiness size={24}/></div>
              <div>
                <span className="cert-label">Machine Learning</span>
                <h3>Machine Learning Internship / Certification</h3>
                <p>CodeAlpha</p>
              </div>
              <div className="cert-side"><span>Certificate</span></div>
            </div>
          </div>
        </section>

        <section className="cta section">
          <div className="container">
            <div className="cta-box">
              <div>
                <p className="section-label">06 · Career</p>
                <h2>Open to internship <span>opportunities.</span></h2>
                <p>I am looking for opportunities in AI/ML, Data Science, Web Development and Software Development where I can apply my skills, gain industry experience and contribute to real-world projects.</p>
              </div>
              <a className="btn primary" href={email}>Let's Connect <Mail size={17}/></a>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container narrow">
            <div className="section-head centered">
              <p className="section-label">07 · Contact</p>
              <h2>Let's <span>connect.</span></h2>
              <p>Have an internship opportunity, project idea or collaboration in mind? Reach out.</p>
            </div>
            <div className="contact-grid">
              <a className="contact-card" href={email}><Mail/><span><small>Email</small><strong>logan970105@gmail.com</strong></span><ArrowUpRight/></a>
              <a className="contact-card" href={linkedin} target="_blank" rel="noreferrer"><Linkedin/><span><small>LinkedIn</small><strong>linkedin.com/in/loganathan-data</strong></span><ArrowUpRight/></a>
              <a className="contact-card" href={github} target="_blank" rel="noreferrer"><Github/><span><small>GitHub</small><strong>github.com/sloganathan288-dev</strong></span><ArrowUpRight/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div><strong>Loganathan<span className="dot">.</span></strong><span>Building practical solutions with AI, Data, Web & IoT.</span></div>
          <span>© 2026 Loganathan S. All rights reserved.</span>
        </div>
      </footer>

      {selected && (
        <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setSelected(null)}>
          <div className="modal">
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close"><X/></button>
            <div className="modal-image">
              {selected.image ? <img src={selected.id === "traffic" ? trafficHardware1 : selected.image === doodle1 ? doodle2 : selected.image} alt="" /> : <div className="media-placeholder"><Sparkles size={38}/></div>}
            </div>
            <div className="modal-content">
              <span className="section-label">{selected.category}</span>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
              <h4>Key features</h4>
              <ul>{selected.details.map(d => <li key={d}><CheckCircle2 size={16}/>{d}</li>)}</ul>
              <div className="project-tech modal-tech">{selected.tech.map(t => <span key={t}>{t}</span>)}</div>
              {selected.id === "traffic" && (
                <div className="modal-gallery">
                  <img src={trafficDetection} alt="Traffic vehicle detection and lane monitoring" />
                  <img src={trafficHardware2} alt="ESP32 and relay traffic signal hardware prototype" />
                </div>
              )}
              <div className="project-actions">
                {selected.live && <a className="small-btn outline" href={selected.live} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={15}/></a>}
                {selected.repo && <a className="small-btn ghost" href={selected.repo} target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode><App /></React.StrictMode>
);

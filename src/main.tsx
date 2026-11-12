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
    tech: ["Flutter", "ESP32", "IoT", "SMS API"],
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
  },
  {
    id: "academic-assessment",
    title: "Academic Assessment & Performance Analysis",
    category: "Full Stack / Education",
    description: "A Flask-based academic assessment platform for teachers to manage exam marks, rank students and review class performance through clear statistical summaries.",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "JSON"],
    repo: "https://github.com/sloganathan288-dev/academic-performance-analysis-system",
    image: "",
    details: [
      "Teacher registration and login workflow",
      "Dynamic exam and student mark entry",
      "Automatic highest, lowest and average calculations",
      "Ranked student lists with performance categories",
      "Absent-student handling and record filtering"
    ]
  },
  {
    id: "fake-news",
    title: "Fake News Detection & Verification",
    category: "AI / Research",
    description: "A Streamlit-based news verification prototype that checks submitted news content against trusted news sources using an AI-assisted verification workflow.",
    tech: ["Python", "Streamlit", "AI", "News Verification"],
    repo: "https://github.com/sloganathan288-dev/mindfull-ai",
    image: "",
    details: [
      "News article input and verification interface",
      "AI-assisted analysis through a Python model module",
      "Trusted-news-source checking workflow",
      "Interactive result and feedback states"
    ]
  },
  {
    id: "logu-games",
    title: "LOGU GAMES",
    category: "Game Development",
    description: "A browser gaming platform featuring a collection of interactive arcade, racing, puzzle, brain and action games with responsive controls.",
    tech: ["React", "TypeScript", "CSS", "Vite"],
    repo: "https://github.com/sloganathan288-dev/LOGU-GAMES",
    image: "",
    featured: true,
    details: [
      "Multiple playable game experiences in one platform",
      "Arcade runner, racing, brain and zombie action games",
      "Memory, snake, aim trainer and brick-breaker games",
      "Reusable game components and category navigation",
      "Keyboard, mouse and touch control support"
    ]
  },
  {
    id: "mistry-worker",
    title: "Mistry Worker & Salary Manager",
    category: "Full Stack / Business",
    description: "A React-based worker management application with monthly salary calculations, worker records, salary history and reporting workflows, integrated with Supabase authentication and data services.",
    tech: ["React", "JavaScript", "Supabase", "SQL", "Vite"],
    repo: "https://github.com/sloganathan288-dev/mistry-worker-management",
    image: "",
    details: [
      "Google sign-in through Supabase Auth",
      "Worker profile and record management",
      "Monthly salary and overtime calculations",
      "Salary history, advances and payment status",
      "Reports and image/export utilities"
    ]
  },
  {
    id: "disaster-monitoring",
    title: "AI-Powered Disaster Monitoring",
    category: "AI / Research",
    description: "An ongoing final-year academic project exploring disaster monitoring and situational awareness using satellite and drone imagery.",
    tech: ["Python", "Artificial Intelligence", "Computer Vision", "Satellite Imagery", "Drone Imagery"],
    image: "",
    details: [
      "Academic project currently in development",
      "Explores satellite and drone imagery as input sources",
      "Focuses on AI-assisted disaster observation and monitoring",
      "Project implementation and evaluation are ongoing"
    ]
  }
];

const skills = [
  { icon: Code2, title: "Programming", items: ["Java", "Python", "SQL", "JavaScript"] },
  { icon: Smartphone, title: "Software & Full-Stack", items: ["React", "Frontend", "Backend", "REST APIs", "API Integration"] },
  { icon: BrainCircuit, title: "AI & Machine Learning", items: ["Machine Learning", "Deep Learning", "Computer Vision"] },
  { icon: Database, title: "Data Analytics", items: ["Pandas", "NumPy", "Matplotlib", "SQL"] },
  { icon: Workflow, title: "Web Development", items: ["HTML", "CSS", "JavaScript", "React", "Responsive Web Design"] },
  { icon: Workflow, title: "Automation & Backend", items: ["n8n", "Supabase", "MySQL", "MongoDB", "SQL", "WhatsApp API"] },
  { icon: Cpu, title: "IoT", items: ["ESP32", "Arduino", "IoT Sensors"] },
  { icon: Terminal, title: "Tools", items: ["Git", "GitHub", "VS Code", "Prompt Engineering"] }
];

function CursorFX() {
  useEffect(() => {
    const canvas = document.querySelector<HTMLCanvasElement>(".cursor-fx");
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let frame = 0;
    let lastSpawn = 0;
    let particles: { x: number; y: number; vx: number; vy: number; life: number; size: number; hue: number }[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const move = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--pointer-x", event.clientX + "px");
      document.documentElement.style.setProperty("--pointer-y", event.clientY + "px");
      const now = performance.now();
      if (now - lastSpawn < 18) return;
      lastSpawn = now;
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: event.clientX + (Math.random() - .5) * 5,
          y: event.clientY + (Math.random() - .5) * 5,
          vx: (Math.random() - .5) * 1.2,
          vy: (Math.random() - .5) * 1.2,
          life: 1,
          size: 1.4 + Math.random() * 2.8,
          hue: 185 + Math.random() * 65
        });
      }
      if (particles.length > 90) particles.splice(0, particles.length - 90);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles = particles.filter(p => p.life > .025);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= .985;
        p.vy *= .985;
        p.life *= .965;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 72%, ${p.life * .8})`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 65%, .8)`;
        ctx.fill();
      });
      ctx.shadowBlur = 0;
      frame = requestAnimationFrame(draw);
    };

    resize();
    frame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      document.documentElement.style.removeProperty("--pointer-x");
      document.documentElement.style.removeProperty("--pointer-y");
    };
  }, []);

  return <canvas className="cursor-fx" aria-hidden="true" />;
}


function NeuralBackground() {
  useEffect(() => {
    const canvas = document.querySelector<HTMLCanvasElement>(".neural-bg");
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let w=0,h=0,raf=0,points:{x:number;y:number;vx:number;vy:number}[]=[];
    const resize=()=>{w=window.innerWidth;h=window.innerHeight;const d=Math.min(devicePixelRatio||1,1.5);canvas.width=w*d;canvas.height=h*d;ctx.setTransform(d,0,0,d,0,0);points=Array.from({length:Math.min(76,Math.floor(w/18))},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.24,vy:(Math.random()-.5)*.24}));};
    const draw=()=>{const light=document.documentElement.classList.contains("light");ctx.clearRect(0,0,w,h);for(let i=0;i<points.length;i++){const p=points[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;for(let j=i+1;j<points.length;j++){const q=points[j],dx=p.x-q.x,dy=p.y-q.y,dist=Math.hypot(dx,dy);if(dist<145){const alpha=(1-dist/145)*(light?.28:.17);ctx.strokeStyle=light?'rgba(24,111,166,'+alpha+')':'rgba(91,205,255,'+alpha+')';ctx.lineWidth=light?1.05:.7;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();}}ctx.fillStyle=light?'rgba(32,119,176,.62)':'rgba(130,190,255,.52)';ctx.beginPath();ctx.arc(p.x,p.y,light?1.55:1.25,0,Math.PI*2);ctx.fill();}raf=requestAnimationFrame(draw);};
    resize();draw();window.addEventListener("resize",resize);return()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize);};
  },[]);
  return <canvas className="neural-bg" aria-hidden="true"/>;
}

function SkillsUniverse() {
  const nodes=[["AI / ML", "Machine Learning · Deep Learning"],["FULL STACK","React · APIs · Web"],["DATA","Python · SQL · Analytics"],["AUTOMATION","n8n · Supabase"],["IoT","ESP32 · Sensors"],["VISION","YOLO · Computer Vision"]];
  const [active,setActive]=useState(0);
  return <div className="skills-universe reveal"><div className="universe-copy"><span className="section-label">INTERACTIVE SKILL MAP</span><h3>Explore my <span>technology universe.</span></h3><p>Select a node to explore the areas I work across.</p><div className="universe-detail"><strong>{nodes[active][0]}</strong><span>{nodes[active][1]}</span></div></div><div className="universe-map"><div className="universe-core"><BrainCircuit size={34}/><span>LOGANATHAN</span></div>{nodes.map((n,i)=><button key={n[0]} className={"universe-node node-"+i+(active===i?" active":"")} onClick={()=>setActive(i)}>{n[0]}</button>)}<svg viewBox="0 0 420 340" aria-hidden="true"><g>{nodes.map((n,i)=><line key={n[0]} x1="210" y1="170" x2={[210,350,325,95,75,210][i]} y2={[28,105,265,265,105,315][i]} />)}</g></svg></div></div>;
}

function TerminalConsole({go}:{go:(id:string)=>void}) {
  const [command,setCommand]=useState("");const [history,setHistory]=useState<string[]>(["LOGANATHAN OS [Version 1.0]","Type help to explore this portfolio."]);
  const run=()=>{const c=command.trim().toLowerCase();if(!c)return;let response="Command not found. Type help.";if(c==="help")response="Available: about, skills, projects, experience, contact, clear";else if(c==="clear"){setHistory([]);setCommand("");return;}else if(["about","skills","projects","experience","contact"].includes(c)){go(c);response="Navigating to "+c+"...";}setHistory(h=>[...h,"> "+command,response]);setCommand("");};
  return <div className="terminal-window reveal"><div className="terminal-top"><span/><span/><span/><b>loganathan@portfolio:~</b></div><div className="terminal-output">{history.map((h,i)=><p key={i}>{h}</p>)}</div><form onSubmit={e=>{e.preventDefault();run();}}><label>visitor@portfolio:~$</label><input value={command} onChange={e=>setCommand(e.target.value)} placeholder="Type a command..." aria-label="Terminal command"/><button type="submit">Run ↵</button></form></div>;
}

function PortfolioAssistant() {
  const [open,setOpen]=useState(false);const [question,setQuestion]=useState("");const [busy,setBusy]=useState(false);
  const [messages,setMessages]=useState<{role:string;text:string}[]>([{role:"assistant",text:"Hi! I'm Loganathan's portfolio assistant. Ask me about projects, skills, experience or education."}]);
  const answer=(q:string)=>{const t=q.toLowerCase();if(/skill|tech|stack/.test(t))return "Loganathan works with Python, Java, SQL, JavaScript, React, Flutter, TensorFlow, PyTorch, YOLO, n8n, Supabase, PostgreSQL and IoT technologies.";if(/project|work|built/.test(t))return "Featured work includes an AI chat app, Doodle Alive, AI smart traffic management, healthcare monitoring, Hand Pen, RNN voice prediction, LOGU GAMES, worker salary management and an ongoing AI disaster-monitoring project.";if(/experience|intern/.test(t))return "Loganathan has full-stack development and AI automation experience with Ethiroli Private Limited in Salem and Shanks Code remotely.";if(/education|college|cgpa|study/.test(t))return "He is a final-year B.Tech Artificial Intelligence & Data Science student at Mahendra Engineering College, with a CGPA of 8.50.";if(/contact|email|hire/.test(t))return "You can contact Loganathan at logan970105@gmail.com, or connect through LinkedIn: linkedin.com/in/loganathan-data.";return "I can help with information about Loganathan's skills, projects, experience, education and contact details. Try asking about one of those topics.";};
  const send=async()=>{const q=question.trim();if(!q||busy)return;setQuestion("");setMessages(m=>[...m,{role:"user",text:q}]);setBusy(true);try{const res=await fetch("/api/assistant",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:q})});if(res.ok){const data=await res.json();setMessages(m=>[...m,{role:"assistant",text:data.answer||answer(q)}]);}else setMessages(m=>[...m,{role:"assistant",text:answer(q)}]);}catch{setMessages(m=>[...m,{role:"assistant",text:answer(q)}]);}finally{setBusy(false);}};
  return <div className="assistant-widget"><button className="assistant-launch" onClick={()=>setOpen(v=>!v)} aria-label="Open AI portfolio assistant"><Sparkles size={20}/><span>Ask my AI</span></button>{open&&<div className="assistant-panel"><div className="assistant-head"><div><strong>Portfolio AI</strong><small>Ask about my work</small></div><button onClick={()=>setOpen(false)} aria-label="Close assistant"><X size={18}/></button></div><div className="assistant-messages">{messages.map((m,i)=><p key={i} className={m.role}>{m.text}</p>)}{busy&&<p className="assistant">Thinking...</p>}</div><form onSubmit={e=>{e.preventDefault();send();}}><input value={question} onChange={e=>setQuestion(e.target.value)} placeholder="Ask me anything..." aria-label="Ask portfolio assistant"/><button type="submit" disabled={busy}><Send size={17}/></button></form></div>}</div>;
}

function ContactEnquiryForm() {
  const [name,setName]=useState("");
  const [senderEmail,setSenderEmail]=useState("");
  const [message,setMessage]=useState("");
  const [notice,setNotice]=useState("");
  const submit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const cleanName=name.trim(),cleanEmail=senderEmail.trim(),cleanMessage=message.trim();
    if(!cleanName||!cleanEmail||!cleanMessage){setNotice("Please complete all fields.");return;}
    const subject=encodeURIComponent("Portfolio enquiry from "+cleanName);
    const body=encodeURIComponent(["Name: "+cleanName,"Email: "+cleanEmail,"",cleanMessage].join(String.fromCharCode(10)));
    window.location.href="mailto:logan970105@gmail.com?subject="+subject+"&body="+body;
    setNotice("Your email app should open with the enquiry ready to send. Please press Send there.");
  };
  return <form className="contact-form reveal" onSubmit={submit}>
    <div className="contact-form-heading"><span className="contact-note-label">SEND AN ENQUIRY</span><h3>Tell me what you're working on.</h3><p>This form opens your email app with the message prepared; it does not send anything automatically.</p></div>
    <div className="contact-form-grid">
      <label>Your name<input value={name} onChange={e=>setName(e.target.value)} name="name" autoComplete="name" maxLength={80} required placeholder="Your name"/></label>
      <label>Your email<input value={senderEmail} onChange={e=>setSenderEmail(e.target.value)} name="email" type="email" autoComplete="email" maxLength={120} required placeholder="you@example.com"/></label>
    </div>
    <label>Message<textarea value={message} onChange={e=>setMessage(e.target.value)} name="message" maxLength={2000} rows={5} required placeholder="Share a little about the opportunity or idea…"/></label>
    <div className="contact-form-footer"><button className="btn primary" type="submit">Prepare email <Send size={16}/></button>{notice&&<p role="status">{notice}</p>}</div>
  </form>;
}

function GitHubPulse() {
  const [repos,setRepos]=useState<number|null>(null);
  const [stars,setStars]=useState<number|null>(null);
  const [recent,setRecent]=useState<{name:string;url:string;description:string|null;language:string|null;updated:string}[]>([]);
  const [loadState,setLoadState]=useState<"loading"|"ready"|"unavailable">("loading");
  useEffect(()=>{
    const controller=new AbortController();
    fetch("https://api.github.com/users/sloganathan288-dev/repos?per_page=100&sort=updated",{signal:controller.signal})
      .then(r=>{if(!r.ok)throw new Error("GitHub unavailable");return r.json();})
      .then(data=>{
        if(!Array.isArray(data))throw new Error("Unexpected GitHub response");
        setRepos(data.length);
        setStars(data.reduce((n:number,r:any)=>n+(r.stargazers_count||0),0));
        setRecent(data.filter((r:any)=>!r.fork).slice(0,3).map((r:any)=>({name:r.name,url:r.html_url,description:r.description,language:r.language,updated:r.pushed_at||r.updated_at})));
        setLoadState("ready");
      })
      .catch(error=>{if(error.name!=="AbortError")setLoadState("unavailable");});
    return ()=>controller.abort();
  },[]);
  return <div className="github-pulse reveal">
    <div>
      <span className="section-label">OPEN SOURCE ACTIVITY</span><h3>Building in public.</h3>
      <p>Live public repository information from GitHub.</p>
      <div className="github-stats"><strong>{repos??"—"}<small>Public repositories</small></strong><strong>{stars??"—"}<small>Repository stars</small></strong></div>
      <a className="small-btn outline" href={github} target="_blank" rel="noreferrer"><Github size={15}/> View GitHub profile <ArrowUpRight size={14}/></a>
      <div className="github-recent">
        <h4>Recently updated repositories</h4>
        {loadState==="loading"&&<p className="github-status">Loading public repositories…</p>}
        {loadState==="unavailable"&&<p className="github-status">Live repository details are temporarily unavailable. Visit GitHub to see the latest work.</p>}
        {recent.map(repo=><a className="github-repo" href={repo.url} target="_blank" rel="noreferrer" key={repo.url}>
          <span><strong>{repo.name}</strong><small>{repo.description||"Public project repository"}</small></span>
          <span className="github-repo-meta">{repo.language||"Code"} <ArrowUpRight size={13}/></span>
        </a>)}
      </div>
    </div>
    <div className="contribution-card"><img src="https://ghchart.rshah.org/65d6ff/sloganathan288-dev" alt="GitHub contribution graph" loading="lazy"/><small>Contribution activity · GitHub</small></div>
  </div>;
}

function App() {
  const [introVisible, setIntroVisible] = useState(true);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [introProgress, setIntroProgress] = useState(0);
  const [dark, setDark] = useState(() => {
    try { return window.localStorage.getItem("loganathan-theme") !== "light"; }
    catch { return true; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [projectSearch, setProjectSearch] = useState("");
  const [selected, setSelected] = useState<Project | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["AI & ML Developer", "Full-Stack Developer", "Automation Builder", "Data Science Enthusiast", "Creative Problem Solver"];

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced ? 450 : 2800;
    const started = performance.now();
    let frame = 0;
    let leaveTimer = 0;
    const tick = (now: number) => {
      const progress = Math.min(100, ((now - started) / duration) * 100);
      setIntroProgress(progress);
      if (progress < 100) frame = requestAnimationFrame(tick);
      else {
        setIntroLeaving(true);
        leaveTimer = window.setTimeout(() => setIntroVisible(false), reduced ? 50 : 850);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); window.clearTimeout(leaveTimer); };
  }, []);

  const skipIntro = () => {
    setIntroProgress(100);
    setIntroLeaving(true);
    window.setTimeout(() => setIntroVisible(false), 650);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
    try { window.localStorage.setItem("loganathan-theme", dark ? "dark" : "light"); } catch { /* storage may be unavailable */ }
  }, [dark]);

  useEffect(() => {
    const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 2400);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motionTargets = document.querySelectorAll(".section:not(.hero)");
    motionTargets.forEach((element) => element.classList.add("reveal"));
    const elements = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const progress = document.querySelector<HTMLElement>(".scroll-progress span");
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      if (progress) progress.style.width = percent + "%";
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>(
      ".hero-copy > *, .hero-visual, .section-head, .about-text > *, .stat-card, .interest-strip > *, .skill-card, .project-card, .experience-card, .timeline-item, .cert-card, .cta-box, .contact-card, .github-banner, .skills-universe, .github-pulse, .terminal-window"
    );
    targets.forEach((el, index) => {
      el.classList.add("motion-reveal");
      const parent = el.parentElement;
      const siblings = parent ? Array.from(parent.children).filter((node) => node.classList.contains("motion-reveal")) : [];
      el.style.setProperty("--reveal-order", String(Math.max(0, siblings.indexOf(el))));
      if (index < 3) el.classList.add("motion-ready");
    });
    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("motion-in"));
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-in");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.16, rootMargin: "0px 0px -7% 0px" });
      targets.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".project-card, .skill-card, .experience-card, .cert-card, .stat-card, .contact-card, .cta-box"));
    const cleanups: (() => void)[] = [];
    cards.forEach((card) => {
      const move = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        card.style.setProperty("--tilt-x", ((.5 - y) * 5).toFixed(2) + "deg");
        card.style.setProperty("--tilt-y", ((x - .5) * 6).toFixed(2) + "deg");
        card.style.setProperty("--shine-x", (x * 100).toFixed(1) + "%");
        card.style.setProperty("--shine-y", (y * 100).toFixed(1) + "%");
        card.classList.add("is-tilting");
      };
      const leave = () => { card.classList.remove("is-tilting"); card.style.removeProperty("--tilt-x"); card.style.removeProperty("--tilt-y"); };
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", leave);
      cleanups.push(() => { card.removeEventListener("pointermove", move); card.removeEventListener("pointerleave", leave); });
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, [filter]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main .section"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
        section.style.setProperty("--scroll-progress", progress.toFixed(3));
        section.style.setProperty("--scroll-shift", ((progress - .5) * -24).toFixed(1) + "px");
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

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

  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
  const visibleProjects = useMemo(() => {
    const query = projectSearch.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = filter === "All" || project.category === filter;
      const searchable = [project.title, project.category, project.description, ...project.tech, ...project.details].join(" ").toLowerCase();
      return matchesCategory && (!query || searchable.includes(query));
    });
  }, [filter, projectSearch]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <a className="skip-link" href="#home">Skip to main content</a>
      {introVisible && (
        <div className={`intro-screen ${introLeaving ? "intro-leaving" : ""}`} role="status" aria-label="Welcome to Loganathan's portfolio">
          <div className="intro-grid" aria-hidden="true" />
          <div className="intro-orbit intro-orbit-a" aria-hidden="true" />
          <div className="intro-orbit intro-orbit-b" aria-hidden="true" />
          <div className="intro-center">
            <div className="intro-monogram"><span>LS</span><i /></div>
            <p className="intro-overline">ARTIFICIAL INTELLIGENCE · DATA SCIENCE</p>
            <h1 className="intro-name" aria-label="Loganathan">{Array.from("LOGANATHAN").map((letter, index) => <span key={index} style={{ animationDelay: (index * 75) + "ms" }}>{letter}</span>)}</h1>
            <p className="intro-role">ENGINEERING IDEAS INTO INTELLIGENT EXPERIENCES</p>
            <div className="intro-progress"><span style={{ transform: `scaleX(${introProgress / 100})` }} /></div>
            <div className="intro-bottom"><span>INITIALIZING PORTFOLIO</span><strong>{Math.round(introProgress).toString().padStart(2,"0")}%</strong></div>
          </div>
          <button className="intro-skip" onClick={skipIntro}>SKIP INTRO <span>↗</span></button>
          <div className="intro-corner intro-corner-left">LS / DIGITAL IDENTITY</div>
          <div className="intro-corner intro-corner-right">AI · ML · FULL STACK</div>
        </div>
      )}
      <NeuralBackground />
      <CursorFX />
      <div className="cursor-aura" aria-hidden="true" />
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => go("home")} aria-label="Go to home">
            <span className="brand-mark">LS</span>
            <span>Loganathan<span className="dot">.</span></span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["about", "skills", "projects", "experience", "education", "certifications", "terminal", "contact"].map((id) => (
              <button key={id} onClick={() => go(id)}>{id[0].toUpperCase() + id.slice(1)}</button>
            ))}
          </div>

          <div className="nav-actions">
            <a className="icon-btn social-icon" href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
            <a className="icon-btn social-icon" href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
            <button className="icon-btn theme-toggle" onClick={() => setDark((v) => !v)} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} title={dark ? "Switch to light theme" : "Switch to dark theme"}>
              {dark ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
            <button className="menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu" aria-expanded={menuOpen}>
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
              <h1 className="hero-title">Building practical solutions with <span key={roleIndex} className="rotating-role">{roles[roleIndex]}.</span></h1>
              <p className="hero-text">
                I'm Loganathan S, a final-year Artificial Intelligence & Data Science student interested in Software Development, Full-Stack Development, AI/ML, Data Analytics and IoT. I enjoy turning ideas into practical, deployable applications.
              </p>
              <div className="hero-actions">
                <button className="btn primary" onClick={() => go("projects")}>View Projects <ArrowDown size={17}/></button>
                <a className="btn secondary" href="/Loganathan_S_Resume.pdf" download="Loganathan_S_Resume.pdf">Download Resume <Download size={17}/></a>
              </div>
              <div className="hero-proof-row" aria-label="Professional focus">
                <span><strong>AI + Full-Stack</strong><small>Core focus</small></span>
                <span><strong>10+ projects</strong><small>Built & explored</small></span>
                <span><strong>Salem, India</strong><small>Based in</small></span>
              </div>
              <div className="social-row">
                <a href={github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
                <a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
                <a href={email}><Mail size={17}/> Email</a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-glow"></div>
              <div className="portrait-orbit-system">
                <div className="orbit-square orbit-square-one"></div>
                <div className="orbit-square orbit-square-two"></div>
                <div className="orbit-ring orbit-ring-one"></div>
                <div className="orbit-ring orbit-ring-two"></div>
                <span className="orbit-node orbit-node-one"></span>
                <span className="orbit-node orbit-node-two"></span>
                <span className="orbit-node orbit-node-three"></span>
                <div className="portrait-frame">
                  <img src={profile} alt="Loganathan S" />
                </div>
                <div className="portrait-status"><span className="live-dot"></span> Building & learning</div>
                <div className="orbit-label orbit-label-top"><BrainCircuit size={15}/> AI / ML</div>
                <div className="orbit-label orbit-label-right"><Database size={15}/> DATA</div>
                <div className="orbit-label orbit-label-bottom"><Cpu size={15}/> IoT</div>
              </div>
              <div className="float-card card-ai"><BrainCircuit size={19}/><span>AI / ML</span></div>
              <div className="float-card card-data"><Database size={19}/><span>Data</span></div>
              <div className="float-card card-iot"><Cpu size={19}/><span>IoT</span></div>
            </div>
          </div>
          <div className="scroll-cue"><span></span> Scroll to explore</div>
        </section>

        <section className="section professional-snapshot" aria-label="Professional profile">
          <div className="container snapshot-grid">
            <div><span className="snapshot-label">PROFESSIONAL PROFILE</span><h2>Engineering ideas into <span>useful experiences.</span></h2></div>
            <p>AI & Data Science background combined with hands-on full-stack development and automation experience. Interested in building reliable applications, connecting APIs and turning practical problems into working software.</p>
            <a className="snapshot-link" href={email}>Discuss an opportunity <ArrowUpRight size={16}/></a>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container narrow">
            <div className="section-head reveal">
              <p className="section-label">01 · About</p>
              <h2>Curious by nature. <span>Project-driven by choice.</span></h2>
            </div>
            <div className="about-grid">
              <div className="about-text reveal">
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
                <div className="stat-card reveal"><GraduationCap/><strong>8.50</strong><span>CGPA</span></div>
                <div className="stat-card reveal"><BrainCircuit/><strong>AI / ML</strong><span>Focus area</span></div>
                <div className="stat-card reveal"><Code2/><strong>10+</strong><span>Projects & prototypes</span></div>
                <div className="stat-card reveal"><MapPin/><strong>Salem</strong><span>Tamil Nadu, India</span></div>
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
            <div className="section-head centered reveal">
              <p className="section-label">02 · Skills</p>
              <h2>Tools I use to <span>build and learn.</span></h2>
            </div>
            <SkillsUniverse />
            <div className="skills-grid">
              {skills.map(({icon: Icon, title, items}) => (
                <article className="skill-card reveal" key={title}>
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

            <div className="project-tools">
              <label className="project-search">
                <span className="sr-only">Search projects by name, technology or description</span>
                <input type="search" value={projectSearch} onChange={(event) => setProjectSearch(event.target.value)} placeholder="Search projects or technologies…" />
                <span aria-hidden="true">⌕</span>
              </label>
              <p className="project-result-count" aria-live="polite">{visibleProjects.length} of {projects.length} projects</p>
            </div>
            <div className="filters" aria-label="Filter projects by category">
              {categories.map((c) => (
                <button type="button" className={filter === c ? "active" : ""} key={c} aria-pressed={filter === c} onClick={() => setFilter(c)}>{c}</button>
              ))}
            </div>

            <div className="project-approach" aria-label="Project development approach">
              <div><span>01</span><strong>Understand</strong><p>Define the user need and the problem to solve.</p></div>
              <div><span>02</span><strong>Build</strong><p>Choose suitable tools and develop the core experience.</p></div>
              <div><span>03</span><strong>Improve</strong><p>Test, refine and prepare the solution for real use.</p></div>
            </div>
            {visibleProjects.length ? <div className="projects-grid">
              {visibleProjects.map((p, i) => (
                <article className={`project-card reveal ${p.featured ? "featured" : ""}`} key={p.id}>
                  <div className={`project-media ${p.image ? "" : "no-image"}`}>
                    {p.image ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" decoding="async" /> : <div className="media-placeholder"><Sparkles size={34}/><span>Project preview</span></div>}
                    {p.featured && <span className="featured-badge">Featured</span>}
                    {p.live && <span className="live-badge"><span></span> Live</span>}
                  </div>
                  <div className="project-body">
                    <div className="project-meta"><span>{String(i + 1).padStart(2, "0")}</span><span>{p.category}</span></div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="project-tech">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                    <div className="project-actions">
                      <button className="small-btn" onClick={() => setSelected(p)} aria-label={`Open ${p.title} case study`}>Case study <ArrowUpRight size={15}/></button>
                      {p.live && <a className="small-btn outline" href={p.live} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={15}/></a>}
                      {p.repo && <a className="small-btn ghost" href={p.repo} target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a>}
                    </div>
                  </div>
                </article>
              ))}
            </div> : <div className="project-empty" role="status"><strong>No matching projects found.</strong><p>Try another keyword or clear the current filters.</p><button type="button" className="small-btn outline" onClick={() => {setProjectSearch("");setFilter("All");}}>Clear search and filters</button></div>}

            <div className="github-banner">
              <div><Github size={24}/><div><strong>More projects on GitHub</strong><span>Explore additional work, experiments and practice repositories.</span></div></div>
              <a className="btn secondary" href={github} target="_blank" rel="noreferrer">Open GitHub <ArrowUpRight size={17}/></a>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="container narrow">
            <div className="section-head centered reveal">
              <p className="section-label">04 · Professional Experience</p>
              <h2>Learning through <span>real-world work.</span></h2>
              <p>Hands-on experience across full-stack development, AI automation and integration.</p>
            </div>
            <div className="experience-grid">
              <article className="experience-card reveal">
                <div className="experience-topline"><span className="experience-icon"><BriefcaseBusiness size={20}/></span><span className="experience-mode">On-site · Salem</span></div>
                <p className="experience-period">24 September – 24 November 2026</p>
                <h3>Full-Stack Web Developer · AI Automation & Integration</h3>
                <h4>Ethiroli Private Limited</h4>
                <p>Working on full-stack web development and AI-powered automation integrations in an on-site company environment.</p>
                <div className="experience-detail-label">Focus areas</div>
                <ul className="experience-points">
                  <li>Developing responsive web interfaces and application features with React.</li>
                  <li>Connecting APIs and supporting end-to-end application workflows.</li>
                  <li>Exploring AI-powered automation using n8n and related integrations.</li>
                </ul>
                <div className="project-tech"><span>React</span><span>Web Development</span><span>AI Automation</span><span>n8n</span><span>API Integration</span></div>
              </article>
              <article className="experience-card reveal">
                <div className="experience-topline"><span className="experience-icon"><Code2 size={20}/></span><span className="experience-mode">Remote · Work from home</span></div>
                <p className="experience-period">September – November 2026</p>
                <h3>Full-Stack Developer</h3>
                <h4>Shanks Code</h4>
                <p>Contributed to full-stack web development, building frontend experiences and integrating application functionality.</p>
                <div className="experience-detail-label">Focus areas</div>
                <ul className="experience-points">
                  <li>Building and refining frontend experiences for web applications.</li>
                  <li>Integrating application functionality across the frontend and backend.</li>
                  <li>Working with modern JavaScript and React-based development workflows.</li>
                </ul>
                <div className="project-tech"><span>React</span><span>JavaScript</span><span>Frontend Development</span><span>Full-Stack Development</span></div>
              </article>
            </div>
          </div>
        </section>

        <section id="education" className="section section-alt">
          <div className="container narrow">
            <div className="section-head centered reveal">
              <p className="section-label">04 · Education</p>
              <h2>My <span>learning journey.</span></h2>
            </div>
            <div className="timeline">
              <div className="timeline-item current reveal">
                <div className="timeline-marker"><GraduationCap size={18}/></div>
                <div className="timeline-content">
                  <span className="timeline-date">Current</span>
                  <h3>B.Tech — Artificial Intelligence & Data Science</h3>
                  <p>Mahendra Engineering College · Namakkal, Tamil Nadu</p>
                  <strong>CGPA: 8.50</strong>
                </div>
              </div>
              <div className="timeline-item reveal">
                <div className="timeline-marker"><CheckCircle2 size={18}/></div>
                <div className="timeline-content">
                  <span className="timeline-date">2023</span>
                  <h3>HSC</h3>
                  <p>Swamy Vivekanandha Vidyalaya Higher Secondary School · Salem</p>
                  <strong>75.8%</strong>
                </div>
              </div>
              <div className="timeline-item reveal">
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
            <div className="section-head centered reveal">
              <p className="section-label">05 · Certification</p>
              <h2>Learning beyond the <span>classroom.</span></h2>
            </div>
            <div className="cert-card reveal">
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
            <div className="cta-box reveal">
              <div>
                <p className="section-label">06 · Career</p>
                <h2>Open to internship <span>opportunities.</span></h2>
                <p>I am looking for opportunities in AI/ML, Data Science, Web Development and Software Development where I can apply my skills, gain industry experience and contribute to real-world projects.</p>
              </div>
              <a className="btn primary" href={email}>Let's Connect <Mail size={17}/></a>
            </div>
          </div>
        </section>


        <section id="terminal" className="section section-alt"><div className="container narrow"><div className="section-head centered reveal"><p className="section-label">DEVELOPER MODE</p><h2>Explore through the <span>terminal.</span></h2><p>Try a few commands to navigate the portfolio.</p></div><TerminalConsole go={go}/></div></section>
        <section id="github-activity" className="section"><div className="container narrow"><GitHubPulse /></div></section>
        <section id="contact" className="section contact">
          <div className="container narrow">
            <div className="section-head centered reveal">
              <p className="section-label">07 · Contact</p>
              <h2>Let's <span>connect.</span></h2>
              <p>Have an internship opportunity, project idea or collaboration in mind? Reach out.</p>
            </div>
            <div className="contact-note reveal">
              <div><span className="contact-note-label">OPEN TO CONVERSATIONS</span><h3>Have a role, project or idea in mind?</h3><p>I'm happy to discuss suitable opportunities, collaborations and practical software projects.</p></div>
              <a className="btn primary" href="mailto:logan970105@gmail.com?subject=Portfolio%20enquiry">Start a conversation <ArrowUpRight size={17}/></a>
            </div>
            <ContactEnquiryForm />
            <div className="contact-grid">
              <a className="contact-card reveal" href={email}><Mail/><span><small>Email</small><strong>logan970105@gmail.com</strong></span><ArrowUpRight/></a>
              <a className="contact-card reveal" href={linkedin} target="_blank" rel="noreferrer"><Linkedin/><span><small>LinkedIn</small><strong>linkedin.com/in/loganathan-data</strong></span><ArrowUpRight/></a>
              <a className="contact-card reveal" href={github} target="_blank" rel="noreferrer"><Github/><span><small>GitHub</small><strong>github.com/sloganathan288-dev</strong></span><ArrowUpRight/></a>
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

      <PortfolioAssistant />
      {selected && (
        <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setSelected(null)}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close"><X/></button>
            <div className="modal-image">
              {selected.image ? <img src={selected.id === "traffic" ? trafficHardware1 : selected.image === doodle1 ? doodle2 : selected.image} alt="" /> : <div className="media-placeholder"><Sparkles size={38}/></div>}
            </div>
            <div className="modal-content">
              <span className="section-label">{selected.category}</span>
              <h2 id="project-dialog-title">{selected.title}</h2>
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

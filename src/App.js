import React, { useEffect, useState } from "react";
import ParticlesBackground from "./components/Background";
import AboutWindow from "./components/AboutWindow";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./portfolio.css";
import "./App.css";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Sidebar from "./components/Sidebar";
const resumeData = {
  name: "Ayman Shalaby",
  title: "Backend | Software Engineer",
  summary:
    "Backend Engineer with expertise in designing scalable, high-performance systems. Currently integrating backend services with AI models and knowledge graphs at Edulga, enabling intelligent, adaptive learning experiences. Experienced in Node.js, TypeScript, and cloud-native development with a strong foundation in algorithms and data structures from competitive programming. Participated in ECPC and other competitive programming competitions, developing strong problem-solving skills and algorithmic thinking. Skilled in building secure APIs, AI pipelines, and real-time applications, with a passion for optimizing system architecture and data workflows.",
  experience: [
    {
      role: "Backend Engineer",
      company: "Edulga",
      timeframe: "June 2025 - Present",
      location: "Remote",
      bullets: [
        "Integrated backend services with AI pipelines for personalized learning and content recommendations.",
        "Designed and implemented a knowledge graph system to model complex learning pathways.",
        "Developed APIs for dynamic data retrieval and intelligent content linking across learning modules.",
        "Optimized AI model integration workflows, reducing response latency by 30%.",
        "Containerized services and deployed to AWS with CI/CD automation.",
      ],
    },
    {
      role: "Freelance Backend Developer",
      company: "Independent Contractor",
      timeframe: "2023 - 2025",
      location: "Remote",
      bullets: [
        "Built production-grade backend applications with Node.js, Docker, PostgreSQL, and Redis.",
        "Implemented secure authentication systems, payment integrations, and real-time features.",
        "Delivered scalable architectures simulating industry-grade deployments.",
      ],
    },
  ],
  projects: [
    {
      name: "IdeaFlow",
      tagline: "AI-Powered Mindmap Platform",
      stack: [
        "Node.js",
        "OpenAI API",
        "WebSockets",
        "PostgreSQL",
        "Redis",
        "Docker",
      ],
      highlights: [
        "Built AI-powered mindmap platform that generates intelligent node suggestions and connections.",
        "Integrated OpenAI API for content generation and semantic relationship mapping.",
        "Implemented real-time collaborative editing with WebSocket synchronization.",
        "Designed graph-based data structures for efficient mindmap storage and retrieval.",
      ],
      links: { github: "https://github.com/aymanshalaby55", live: null },
    },
    {
      name: "ChessMate",
      tagline: "Online/Offline Multiplayer Chess Game",
      stack: [
        "Node.js",
        "NestJS",
        "NextJS",
        "WebSockets",
        "Docker",
        "Stockfish",
      ],
      highlights: [
        "Developed chess platform supporting real-time multiplayer matches and offline play with AI engine integration.",
        "Integrated Stockfish chess engine for move validation and AI opponent play.",
        "Implemented matchmaking system, game persistence, and replay functionality.",
        "Optimized WebSocket handling for low-latency gameplay across regions.",
      ],
      links: { github: "https://github.com/aymanshalaby55", live: null },
    },
    {
      name: "Vision AI Chrono",
      tagline: "Video Analysis and AI Processing Platform",
      stack: ["Node.js", "FastAPI", "OpenCV", "Docker", "PostgreSQL"],
      highlights: [
        "Built backend pipeline for processing and analyzing video streams using AI models.",
        "Integrated computer vision techniques for object detection and scene analysis.",
        "Designed asynchronous job handling for scalable, parallel video processing.",
        "Implemented data storage and querying for AI-processed video metadata in PostgreSQL.",
      ],
      links: { github: "https://github.com/aymanshalaby55", live: null },
    },
    {
      name: "SocialBridge",
      tagline: "Social Media API Backend",
      stack: ["Node.js", "GraphQL", "Prisma", "PostgreSQL", "Redis", "Docker"],
      highlights: [
        "Developed a GraphQL-based backend for a social media platform with posts, likes, comments, and friend relationships.",
        "Implemented Redis caching and GraphQL subscriptions for real-time updates.",
        "Applied secure practices including authentication, authorization, and input validation.",
        "Containerized and orchestrated services with Docker Compose.",
      ],
      links: { github: "https://github.com/aymanshalaby55", live: null },
    },
  ],
  activities: [
    {
      title: "ICPC-ZU Mentor",
      org: "Zagazig University Programming Training",
      timeframe: "October 2022 - May 2024",
      bullets: [
        "Designed and delivered weekly training for 30+ students in competitive programming.",
        "Led students to a 40% improvement in regional programming contests.",
      ],
    },
    {
      title: "Competitive Programmer",
      org: "ECPC & Online Platforms",
      timeframe: "September 2021 - Present",
      bullets: [
        "Solved 1200+ algorithm problems on Codeforces, LeetCode, and CSES.",
        "Competed in ECPC 2022 and 2023 regional qualifiers.",
        "Earned a Pupil rating (1200+) on Codeforces.",
      ],
    },
  ],
  contact: {
    phone: "https://wa.me/201019010755",
    email: "mailto:aymanshalaby539@gmail.com",
    linkedin: "https://www.linkedin.com/in/ayman-shalaby/",
    github: "https://github.com/aymanshalaby55",
    location: "Cairo, Egypt",
  },
};

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const ids = ["hero", "intro", "experience", "skills", "projects", "activities", "contact"];
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -60% 0px", threshold: 0.4 }
    );

    nodes.forEach((el) => observer.observe(el));
    return () => nodes.forEach((el) => observer.unobserve(el));
  }, []);

  useEffect(() => {
    const revealables = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
          } else {
            e.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.16 }
    );

    revealables.forEach((el) => revealObserver.observe(el));
    return () => revealables.forEach((el) => revealObserver.unobserve(el));
  }, []);

  return (
    <div className="app-root">
      <ParticlesBackground theme={theme} />

      {/* Mobile sidebar */}
      <Sidebar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        sections={[
          { id: 'hero', label: 'Home' },
          { id: 'experience', label: 'Experience' },
          { id: 'skills', label: 'Tools' },
          { id: 'projects', label: 'Projects' },
          { id: 'activities', label: 'Activities' },
          { id: 'contact', label: 'Contact' },
        ]}
        links={{
          github: "https://github.com/aymanshalaby55",
          linkedin: "https://www.linkedin.com/in/ayman-shalaby/",
          whatsapp: "https://wa.me/201019010755",
        }}
      />

      <header className="top-nav">
        <nav className="nav-inner">
          <div className="nav-brand"></div>
          <div className="nav-links">
            <a
              className={`nav-link ${activeSection === "hero" ? "active" : ""}`}
              href="#hero"
            >
              Home
            </a>
            <a
              className={`nav-link ${
                activeSection === "experience" ? "active" : ""
              }`}
              href="#experience"
            >
              Experience
            </a>
            <a
              className={`nav-link ${
                activeSection === "skills" ? "active" : ""
              }`}
              href="#skills"
            >
              Tools
            </a>
            <a
              className={`nav-link ${
                activeSection === "projects" ? "active" : ""
              }`}
              href="#projects"
            >
              Projects
            </a>
            <a
              className={`nav-link ${
                activeSection === "activities" ? "active" : ""
              }`}
              href="#activities"
            >
              Activities
            </a>
            <a
              className={`nav-link ${
                activeSection === "contact" ? "active" : ""
              }`}
              href="#contact"
            >
              Contact
            </a>
          </div>
          <div className="nav-actions">
            <button
              className="icon-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zm0 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7-6a1 1 0 0 1 1 1h1a1 1 0 1 1 0 2h-1a1 1 0 1 1-2 0 1 1 0 0 1 1-1zm-7 7a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM4 12a1 1 0 0 1 1-1H6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm11.66-6.66a1 1 0 0 1 1.41 0l.71.7a1 1 0 1 1-1.41 1.42l-.71-.71a1 1 0 0 1 0-1.41zM6.22 17.78a1 1 0 0 1 1.41 0l.71.71a1 1 0 1 1-1.41 1.41l-.71-.7a1 1 0 0 1 0-1.42zM17.78 17.78a1 1 0 0 1 1.41 0l.71.71a1 1 0 1 1-1.41 1.41l-.71-.7a1 1 0 0 1 0-1.42zM6.22 6.22a1 1 0 0 1 1.41 0l.71.71A1 1 0 1 1 6.93 8.34l-.71-.71a1 1 0 0 1 0-1.41z"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.742 13.045A8 8 0 1 1 10.955 3.258a7 7 0 1 0 9.787 9.787z"/>
                </svg>
              )}
            </button>
            <a
              className="icon-btn"
              href={resumeData.contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.64-2.81 5.66-5.49 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5z" />
              </svg>
            </a>
            <a
              className="icon-btn"
              href={resumeData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.11h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V24h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.66V24h-3.8V8.5z" />
              </svg>
            </a>
            <a
              className="icon-btn"
              href={resumeData.contact.phone && resumeData.contact.phone.includes('wa.me') ? resumeData.contact.phone : `https://wa.me/${(resumeData.contact.phone || '').match(/\d+/g)?.join('') || ''}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 3.5A10.5 10.5 0 0 0 3.84 18.81L3 22l3.28-.86A10.5 10.5 0 1 0 20 3.5zm-8.28 3h.02c.33 0 .68.01 1 .07.29.05.68.22.78.54.2.6.61 2.06.66 2.21.11.25.02.56-.19.73-.3.24-.59.51-.85.82-.28.33-.06.6.11.86.4.6.87 1.15 1.44 1.61.56.45 1.26.88 1.98 1.07.2.05.46.04.62-.12.31-.32.66-.69.98-1.02.17-.18.4-.25.64-.17.34.11 2.11.98 2.15 1 .33.15.55.24.64.38.07.12.07.68-.16 1.33-.19.53-.91 1.02-1.49 1.06-.4.03-.8.03-1.2-.03-2.45-.36-4.51-1.56-6.08-3.53-1.19-1.46-2.05-3.17-2.33-5.03-.08-.53-.13-1.08-.06-1.62.09-.72.53-1.32 1.23-1.43.24-.04.49-.07.74-.06z"/>
              </svg>
            </a>
          </div>
        </nav>
      </header>

      <main className="content-container">
        <section id="hero" className="section reveal">
          <Hero
            name={resumeData.name}
            title={resumeData.title}
            tagline="Born to suffer, forced to code"
            links={{
              github: resumeData.contact.github,
              linkedin: resumeData.contact.linkedin,
              email: resumeData.contact.email,
            }}
          />
        </section>

        <section id="intro" className="section reveal">
          <AboutWindow
            name={resumeData.name}
            title={resumeData.title}
            summary={resumeData.summary}
          />
        </section>

        <section id="experience" className="section reveal">
          <h2 className="section-title">Experience</h2>
          <Experience experiences={resumeData.experience} />
        </section>

        <section id="skills" className="section reveal">
          <h2 className="section-title with-icon">
            <span className="cloud-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 17.5H7a4 4 0 0 1 0-8 5 5 0 0 1 9.9-1.1A4 4 0 0 1 20 17.5z" />
              </svg>
            </span>
            Skills & Technologies
          </h2>
          <Skills />
        </section>

        <section id="projects" className="section reveal">
          <h2 className="section-title with-icon">
            <span className="cloud-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </span>
            Projects
          </h2>
          <Projects projects={resumeData.projects} />
        </section>

        <section id="activities" className="section reveal">
          <h2 className="section-title">Activities</h2>
          <Activities items={resumeData.activities} />
        </section>

        <section id="contact" className="section reveal">
          <h2 className="section-title">Contact</h2>
          <Contact contact={resumeData.contact} />
        </section>
      </main>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {resumeData.name}
        </span>
      </footer>
    </div>
  );
}

export default App;

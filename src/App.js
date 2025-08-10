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
// import Sidebar from "./components/Sidebar";
import CompactSidebar from "./components/CompactSidebar";
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
  const [showCompactSidebar, setShowCompactSidebar] = useState(false);
  let hideCompactTimeoutRef;

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
            // show compact sidebar briefly on section change
            setShowCompactSidebar(true);
            clearTimeout(hideCompactTimeoutRef);
            hideCompactTimeoutRef = setTimeout(() => setShowCompactSidebar(false), 1600);
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

  useEffect(() => {
    // also show compact sidebar briefly on wheel scroll
    const onWheel = () => {
      setShowCompactSidebar(true);
      clearTimeout(hideCompactTimeoutRef);
      hideCompactTimeoutRef = setTimeout(() => setShowCompactSidebar(false), 1400);
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="app-root">
      <ParticlesBackground theme={theme} />

      {/* Mobile theme toggle */}
      <button
        className="mobile-theme-toggle icon-btn"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm6.36 2.05a1 1 0 0 1 1.41 0l.71.7a1 1 0 1 1-1.41 1.42l-.71-.71a1 1 0 0 1 0-1.41zM20 11a1 1 0 0 1 1 1v0a1 1 0 1 1-2 0v0a1 1 0 0 1 1-1zM5.05 5.05a1 1 0 0 1 1.41 0l.71.71A1 1 0 1 1 5.76 7.2l-.71-.71a1 1 0 0 1 0-1.41zM3 12a1 1 0 0 1 1-1h0a1 1 0 1 1 0 2h0a1 1 0 0 1-1-1zm2.05 6.36a1 1 0 0 1 0-1.41l.71-.71A1 1 0 1 1 7.2 17.6l-.71.71a1 1 0 0 1-1.41 0zM12 19a1 1 0 0 1 1 1v0a1 1 0 1 1-2 0v0a1 1 0 0 1 1-1zm6.36-2.05a1 1 0 0 1 1.41 0l.71.71A1 1 0 1 1 19.07 19l-.71-.71a1 1 0 0 1 0-1.41zM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5z"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>

      {/* Compact sidebar (appears briefly during navigation/scroll) */}
      <CompactSidebar
        visible={showCompactSidebar}
        activeSection={activeSection}
        sections={[
          { id: 'hero', label: 'Home' },
          { id: 'experience', label: 'Experience' },
          { id: 'skills', label: 'Tools' },
          { id: 'projects', label: 'Projects' },
          { id: 'activities', label: 'Activities' },
          { id: 'contact', label: 'Contact' },
        ]}
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
                  <path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm6.36 2.05a1 1 0 0 1 1.41 0l.71.7a1 1 0 1 1-1.41 1.42l-.71-.71a1 1 0 0 1 0-1.41zM20 11a1 1 0 0 1 1 1v0a1 1 0 1 1-2 0v0a1 1 0 0 1 1-1zM5.05 5.05a1 1 0 0 1 1.41 0l.71.71A1 1 0 1 1 5.76 7.2l-.71-.71a1 1 0 0 1 0-1.41zM3 12a1 1 0 0 1 1-1h0a1 1 0 1 1 0 2h0a1 1 0 0 1-1-1zm2.05 6.36a1 1 0 0 1 0-1.41l.71-.71A1 1 0 1 1 7.2 17.6l-.71.71a1 1 0 0 1-1.41 0zM12 19a1 1 0 0 1 1 1v0a1 1 0 1 1-2 0v0a1 1 0 0 1 1-1zm6.36-2.05a1 1 0 0 1 1.41 0l.71.71A1 1 0 1 1 19.07 19l-.71-.71a1 1 0 0 1 0-1.41zM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5z"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
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
              whatsapp: resumeData.contact.phone,
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

import React, { useEffect, useState } from 'react';
import ParticlesBackground from './components/Background';
import AboutWindow from './components/AboutWindow';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './portfolio.css';
import './App.css';
import Hero from './components/Hero';
const resumeData = {
  name: 'Ayman Shalaby',
  title: 'Backend | Software Engineer',
  summary:
    'Backend Engineer with expertise in designing scalable, high-performance systems. Currently integrating backend services with AI models and knowledge graphs at Edulga, enabling intelligent, adaptive learning experiences. Experienced in Node.js, TypeScript, and cloud-native development with a strong foundation in algorithms and data structures from competitive programming. Participated in ECPC and other competitive programming competitions, developing strong problem-solving skills and algorithmic thinking. Skilled in building secure APIs, AI pipelines, and real-time applications, with a passion for optimizing system architecture and data workflows.',
  experience: [
    {
      role: 'Backend Engineer',
      company: 'Edulga',
      timeframe: 'June 2025 - Present',
      location: 'Remote',
      bullets: [
        'Integrated backend services with AI pipelines for personalized learning and content recommendations.',
        'Designed and implemented a knowledge graph system to model complex learning pathways.',
        'Developed APIs for dynamic data retrieval and intelligent content linking across learning modules.',
        'Optimized AI model integration workflows, reducing response latency by 30%.',
        'Containerized services and deployed to AWS with CI/CD automation.',
      ],
    },
    {
      role: 'Freelance Backend Developer',
      company: 'Independent Contractor',
      timeframe: '2023 - 2025',
      location: 'Remote',
      bullets: [
        'Built production-grade backend applications with Node.js, Docker, PostgreSQL, and Redis.',
        'Implemented secure authentication systems, payment integrations, and real-time features.',
        'Delivered scalable architectures simulating industry-grade deployments.',
      ],
    },
  ],
  projects: [
    {
      name: 'ChessMate',
      tagline: 'Online/Offline Multiplayer Chess Game',
      stack: ['Node.js', 'WebSockets', 'Docker', 'Stockfish'],
      highlights: [
        'Developed chess platform supporting real-time multiplayer matches and offline play with AI engine integration.',
        'Integrated Stockfish chess engine for move validation and AI opponent play.',
        'Implemented matchmaking system, game persistence, and replay functionality.',
        'Optimized WebSocket handling for low-latency gameplay across regions.',
      ],
      links: { github: 'https://github.com/aymanshalaby55', live: null },
    },
    {
      name: 'Vision AI Chrono',
      tagline: 'Video Analysis and AI Processing Platform',
      stack: ['Node.js', 'FastAPI', 'OpenCV', 'Docker', 'PostgreSQL'],
      highlights: [
        'Built backend pipeline for processing and analyzing video streams using AI models.',
        'Integrated computer vision techniques for object detection and scene analysis.',
        'Designed asynchronous job handling for scalable, parallel video processing.',
        'Implemented data storage and querying for AI-processed video metadata in PostgreSQL.',
      ],
      links: { github: 'https://github.com/aymanshalaby55', live: null },
    },
    {
      name: 'SocialBridge',
      tagline: 'Social Media API Backend',
      stack: ['Node.js', 'GraphQL', 'Prisma', 'PostgreSQL', 'Redis', 'Docker'],
      highlights: [
        'Developed a GraphQL-based backend for a social media platform with posts, likes, comments, and friend relationships.',
        'Implemented Redis caching and GraphQL subscriptions for real-time updates.',
        'Applied secure practices including authentication, authorization, and input validation.',
        'Containerized and orchestrated services with Docker Compose.',
      ],
      links: { github: 'https://github.com/aymanshalaby55', live: null },
    },
  ],
  contact: {
    phone: 'https://wa.me/201019010755',
    email: 'mailto:aymanshalaby539@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ayman-shalaby/',
    github: 'https://github.com/aymanshalaby55',
    location: 'Cairo, Egypt',
  },
};

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const ids = ['hero', 'intro', 'experience', 'skills', 'projects', 'contact'];
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.4 }
    );

    nodes.forEach((el) => observer.observe(el));
    return () => nodes.forEach((el) => observer.unobserve(el));
  }, []);

  useEffect(() => {
    const revealables = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
          } else {
            e.target.classList.remove('in-view');
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
      <ParticlesBackground theme="dark" />

      <header className="top-nav">
        <nav className="nav-inner">
          <div className="nav-brand">
            <a href="#hero">{resumeData.name.split(' ')[0]}</a>
          </div>
          <div className="nav-links">
            <a className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`} href="#hero">Home</a>
            <a className={`nav-link ${activeSection === 'intro' ? 'active' : ''}`} href="#intro">Intro</a>
            <a className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} href="#experience">Experience</a>
            <a className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} href="#skills">Tools</a>
            <a className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} href="#projects">Projects</a>
            <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} href="#contact">Contact</a>
          </div>
          <div className="nav-actions">
            <a
              className="icon-btn"
              href={resumeData.contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              {/* GitHub Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.64-2.81 5.66-5.49 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5z"/>
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
              {/* LinkedIn Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.11h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V24h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.66V24h-3.8V8.5z"/>
              </svg>
            </a>
            <a
              className="icon-btn"
              href={`tel:${resumeData.contact.phone.replace(/\s+/g, '')}`}
              aria-label="Call"
              title={resumeData.contact.phone}
            >
              {/* Phone Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .44 1 1V21c0 .56-.44 1-1 1C10.07 22 2 13.93 2 3c0-.56.44-1 1-1h3.5c.56 0 1 .44 1 1 0 1.24.2 2.45.57 3.57.11.36.03.75-.25 1.02l-2.2 2.2z"/>
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
            tagline="Fueled by coffee, powered by code"
            links={{ github: resumeData.contact.github, linkedin: resumeData.contact.linkedin, email: resumeData.contact.email }}
          />
        </section>

        <section id="intro" className="section reveal">
          <AboutWindow name={resumeData.name} title={resumeData.title} summary={resumeData.summary} />
        </section>

        <section id="experience" className="section reveal">
          <h2 className="section-title">Experience</h2>
          <Experience experiences={resumeData.experience} />
        </section>

        <section id="skills" className="section reveal">
          <h2 className="section-title with-icon">
            <span className="cloud-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 17.5H7a4 4 0 0 1 0-8 5 5 0 0 1 9.9-1.1A4 4 0 0 1 20 17.5z" />
              </svg>
            </span>
            Tools & Technologies
          </h2>
          <Skills />
        </section>

        <section id="projects" className="section reveal">
          <h2 className="section-title with-icon">
            <span className="cloud-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </span>
            Projects
          </h2>
          <Projects projects={resumeData.projects} />
        </section>

        <section id="contact" className="section reveal">
          <h2 className="section-title">Contact</h2>
          <Contact contact={resumeData.contact} />
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {resumeData.name}</span>
      </footer>
    </div>
  );
}

export default App;

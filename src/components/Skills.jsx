import React, { useEffect, useState } from 'react';
import IconCloudDemo from './IconCloudDemo';

// Slugs mapped from skills in ayman.latex
const ICON_SLUGS = [
  // Languages
  'javascript', 'typescript', 'c', 'cplusplus', 'nodedotjs', 'html5', 'css3', 'python',
  // Frameworks & Libraries
  'express', 'nestjs', 'react', 'graphql', 'prisma', 'fastapi',
  // Databases
  'mongodb', 'postgresql', 'microsoftsqlserver', 'redis', "supabase",

  // DevOps & Tools
  'docker', 'git', 'githubactions', 'postman', 'swagger',"sentry",
  // Cloud & Services
  'amazonaws', 'stripe', 'socketdotio', "vercel"
];

const Skills = () => {
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'dark');

  useEffect(() => {
    const target = document.documentElement;
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'data-theme') {
          setTheme(target.getAttribute('data-theme') || 'dark');
        }
      }
    });
    observer.observe(target, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-grid">
      <div className="icon-cloud-card">
        <IconCloudDemo slugs={ICON_SLUGS} theme={theme} />
      </div>
    </div>
  );
};

export default Skills; 
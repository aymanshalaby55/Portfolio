import React from 'react';
import IconCloudDemo from './IconCloudDemo';

// Slugs mapped from skills in ayman.latex
const ICON_SLUGS = [
  // Languages
  'javascript', 'typescript', 'c', 'cplusplus', 'nodedotjs', 'html5', 'css3', 'python',
  // Frameworks & Libraries
  'express', 'nestjs', 'react', 'graphql', 'prisma', 'fastapi', 'opencv',
  // Databases
  'mongodb', 'postgresql', 'microsoftsqlserver', 'redis',
  // DevOps & Tools
  'docker', 'git', 'githubactions', 'postman', 'swagger',
  // Cloud & Services
  'amazonaws', 'stripe', 'socketdotio'
];

const Skills = () => {
  return (
    <div className="skills-grid">
      <div className="icon-cloud-card">
        <IconCloudDemo slugs={ICON_SLUGS} />
      </div>
    </div>
  );
};

export default Skills; 
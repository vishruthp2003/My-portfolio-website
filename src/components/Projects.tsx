import { useState } from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';

const projectsData = [
  {
    title: 'Drug Detection App',
    description: 'A web application that identifies text from uploaded images of medicines and provides detailed information about the medicine.',
    tags: ['HTML', 'TailwindCSS', 'JavaScript', 'Gemini API', 'Web Speech API'],
    link: 'https://vishruthp2003.github.io/DrugDetection/',
    source: 'https://github.com/vishruthp2003/DrugDetection',
    image: '/lovable-uploads/DrugDetection.png' // Replace with actual path
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website that showcase my education, projects, skills, certifications and achievements.',
    tags: ['Vite','HTML', 'TailwindCSS', 'TypeScript', 'React'],
    link: 'https://my-portfolio-website-7ybj-512jvj2fn-vishruthp2003s-projects.vercel.app/',
    source: 'https://github.com/vishruthp2003/My-portfolio-website',
    image: '/lovable-uploads/portfolioImage.png'
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'A classic two-player Tic Tac Toe game featuring a responsive design, intuitive UI, and smooth gameplay with real-time win and draw detection.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://vishruthp2003.github.io/Tic-Tac-Toe/',
    source: 'https://github.com/vishruthp2003/Tic-Tac-Toe',
    image: '/lovable-uploads/tictactoe.jpg'
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <Section id="projects">
      <SectionTitle subtitle="Examples of my work">Projects</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div 
            key={index}
            className="glass-morphism rounded-xl overflow-hidden card-hover"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project image */}
            <img 
              src={project.image}
              alt={project.title}
              className="h-40 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx} 
                    className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href={project.link}
                  className="text-blue-300 text-sm font-medium hover:text-blue-200 transition-colors"
                >
                  View Project
                </a>
                <a 
                  href={project.source}
                  className="text-blue-300 text-sm font-medium hover:text-blue-200 transition-colors"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;



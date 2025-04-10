
import Section from './Section';
import SectionTitle from './SectionTitle';

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['JavaScript', 'Java', 'C', 'C++']
  },
  {
    category: 'Frontend Development',
    skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
  },
  {
    category: 'Backend Development',
    skills: ['Node.js', 'Express']
  },
  {
    category: 'Database',
    skills: ['SQL', 'MySQL']
  },
  {
    category: 'Tools & Methods',
    skills: ['Git', 'GitHub', 'Postman', 'Figma']
  }
];

const Skills = () => {
  return (
    <Section id="skills" className="bg-black/30">
      <SectionTitle subtitle="My technical expertise">Skills</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className="glass-morphism rounded-xl p-6 card-hover"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <span 
                  key={skillIdx} 
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;

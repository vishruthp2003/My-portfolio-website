
import Section from './Section';
import SectionTitle from './SectionTitle';

const experienceData = [
  {
    position: 'Frontend Developer Intern',
    company: 'Sain Solutions Pvt Ltd',
    duration: 'Oct 2022 - Nov 2022',
    responsibilities: [
      'Designed a modern, intuitive user interface using Figma to enhance user experience and streamline user interactions.',
      'Developed a responsive, mobile-first frontend using HTML, CSS, and JavaScript, ensuring optimal performance across devices and screen sizes.',
      'Ensured cross-browser compatibility and implemented SEO best practices to enhance website visibility and performance.'
    ]
  }
];

const Experience = () => {
  return (
    <Section id="experience" className="bg-black/30">
      <SectionTitle subtitle="My professional journey">Experience</SectionTitle>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/20 transform md:-translate-x-px" />
        
        {experienceData.map((experience, index) => (
          <div key={index} className="relative mb-12 last:mb-0">
            <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-blue-500/50 border-2 border-blue-300/30 transform -translate-x-1/2 top-0" />
              
              {/* Content */}
              <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="glass-morphism rounded-xl p-6 card-hover">
                  <h3 className="text-xl font-semibold text-white mb-1">{experience.position}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-300">{experience.company}</span>
                    <span className="text-sm text-gray-400">{experience.duration}</span>
                  </div>
                  
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-2">
                    {experience.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;

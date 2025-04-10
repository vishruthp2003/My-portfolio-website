import Section from './Section';
import SectionTitle from './SectionTitle';

const educationData = [
  {
    degree: 'Bachelor of Engineering',
    institution: 'Southeast Asian College of Engineering & Technology',
    duration: '2021 - 2025',
    description: 'Specialized in Information Science & Engineering.',
    score: '8.2 CGPA',
  },
  {
    degree: 'Pre-University College',
    institution: 'RK International College',
    duration: '2019 - 2021',
    description: 'Focused on Physics, Chemistry, Mathematics & Biology.',
    score: '91%',
  },
  {
    degree: 'SSLC',
    institution: 'Royal English Medium High School',
    duration: '2018 - 2019',
    description: 'Focused on Science, Social Science & Mathematics.',
    score: '92%',
  },
];

const Education = () => {
  return (
    <Section id="education">
      <SectionTitle subtitle="My academic background">Education</SectionTitle>
      
      <div className="space-y-8">
        {educationData.map((item, index) => (
          <div 
            key={index}
            className="glass-morphism rounded-xl p-6 transition-all duration-300 hover:bg-white/10 card-hover"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
              <div className="text-sm text-gray-400 md:text-right mt-1 md:mt-0">
                <div>{item.duration}</div>
                <div className="text-xs text-gray-500">{item.score}</div>
              </div>
            </div>
            <p className="text-gray-300 mb-2">{item.institution}</p>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;


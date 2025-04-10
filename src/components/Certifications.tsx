
import Section from './Section';
import SectionTitle from './SectionTitle';

const certificationsData = [
  {
    title: 'Java Full Stack Development',
    issuer: 'KodNest',
    description: 'Certified in core java and java frameworks such as hibernate and springboot.'
  },
  {
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    description: 'Specialized training in HTML5, CSS3, JavaScript and Reactjs.'
  },
  {
    title: 'Frontend Development using HTML',
    issuer: 'Great Learning',
    description: 'Expertise in developing frontend using HTML.'
  }
];

const Certifications = () => {
  return (
    <Section id="certifications">
      <SectionTitle subtitle="Professional qualifications and credentials">Certifications</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert, index) => (
          <div 
            key={index}
            className="glass-morphism rounded-xl p-6 card-hover"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-300">{cert.issuer}</span>
            </div>
            <p className="text-gray-400 text-sm">{cert.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;

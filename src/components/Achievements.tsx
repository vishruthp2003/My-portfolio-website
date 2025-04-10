
import Section from './Section';
import SectionTitle from './SectionTitle';

const achievementsData = [
  {
    title: 'Best Paper Award',
    organization: 'IEEE Conference',
    description: 'Received the "Best Paper" award for presenting the research paper titled "Smart Drug Label Analyzer".'
  },
  {
    title: 'Institution Rank 3',
    organization: 'GeeksforGeeks',
    description: 'Secured Institution Rank 3 in solving Data Structures and Algorithms (DSA) problems on GeeksforGeeks.'
  }
];

const Achievements = () => {
  return (
    <Section id="achievements" className="bg-black/30">
      <SectionTitle subtitle="Recognition and accomplishments">Achievements</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsData.map((achievement, index) => (
          <div 
            key={index}
            className="glass-morphism rounded-xl p-6 card-hover"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
            <p className="text-blue-300 text-sm mb-3">{achievement.organization}</p>
            <p className="text-gray-400">{achievement.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;

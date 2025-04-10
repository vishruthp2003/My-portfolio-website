
import Section from './Section';
import SectionTitle from './SectionTitle';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const About = () => {
  return (
    <Section id="about" className="bg-black/30">
      <SectionTitle subtitle="Get to know me better">About Me</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-white/10 glass-morphism">
            <Avatar className="w-full h-full">
              <AvatarImage src="/lovable-uploads/9946a3c8-a125-4af3-99d5-ae8fa29b1e4a.png" alt="Profile photo" className="object-cover w-full h-full" />
              <AvatarFallback className="w-full h-full bg-gradient-to-br from-blue-600/30 to-purple-600/30">ME</AvatarFallback>
            </Avatar>
          </div>
        </div>
        
        <div className="animate-slide-up">
          <p className="text-gray-300 mb-4 leading-relaxed">
          I am an Information Science Engineer with a strong academic background and hands-on experience in frontend development.          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
          Passionate about creating responsive and scalable user interfaces, I specialize in HTML, CSS, JavaScript, React and modern UI frameworks.          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
          My goal is to build seamless, user-friendly web applications that enhance user experience and engagement. </p>
          <p className="text-gray-300 leading-relaxed">
          With a keen interest in UI/UX design, I constantly seek opportunities to innovate and improve digital interactions.          
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;

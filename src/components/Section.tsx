
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-24 w-full overflow-hidden", 
        className
      )}
    >
      <div className="section-container">
        {children}
      </div>
    </section>
  );
};

export default Section;

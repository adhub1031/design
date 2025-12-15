import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PLATFORM_FEATURES } from '../constants';

const PHILOSOPHY_TEXTS = PLATFORM_FEATURES.map(feature => feature.tagline);

const TextRevealSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create a very tall container to allow for sufficient scroll space
  // The content will be sticky inside this container
  return (
    <section id="vision" ref={containerRef} className="relative bg-dark-bg min-h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 w-full relative">
          
          {/* Background Gradient Orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center gap-12 md:gap-24">
            {PHILOSOPHY_TEXTS.map((text, i) => (
              <ScrollTextLine key={i} index={i} total={PHILOSOPHY_TEXTS.length} text={text} containerRef={containerRef} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ScrollTextLine: React.FC<{ 
  text: string; 
  index: number; 
  total: number;
  containerRef: React.RefObject<HTMLDivElement> 
}> = ({ text, index, total, containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate the specific range for this text line to appear and disappear
  // Divide the total scroll progress into segments for each line
  const step = 1 / total;
  const start = index * step;
  const end = start + step;

  // Reveal effect: Opacity and Y movement
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [0.1, 1, 1, 0.1]
  );
  
  const y = useTransform(
    scrollYProgress,
    [start, start + 0.2, end - 0.2, end],
    [50, 0, 0, -50]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, start + 0.2, end],
    [0.9, 1, 1.1]
  );

  // Masking effect utilizing background clip
  const backgroundPosition = useTransform(
    scrollYProgress,
    [start, end],
    ["100% 0", "0% 0"]
  );

  const isLast = index === total - 1;

  return (
    <motion.h2
      style={{ 
        opacity, 
        y, 
        scale,
        // Optional: Gradient text fill effect for Apple style
        backgroundImage: 'linear-gradient(to right, #fff, #fff 50%, #333 50%)',
        backgroundSize: '200% 100%',
        backgroundPositionX: backgroundPosition,
        WebkitBackgroundClip: 'text',
        color: 'transparent' // Make text transparent to show background
      }}
      className={`text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-tight leading-tight ${isLast ? 'text-brand-400' : 'text-white'}`}
    >
      {text}
    </motion.h2>
  );
};

export default TextRevealSection;
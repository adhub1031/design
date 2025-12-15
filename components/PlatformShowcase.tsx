import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PLATFORM_FEATURES } from '../constants';

const PlatformShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    // Decreased height from 2000vh to 1200vh for better pacing
    <section id="platform" ref={containerRef} className="relative bg-dark-bg min-h-[1200vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Background Ambient */}
        <div className="absolute inset-0 bg-dark-bg/50 backdrop-blur-sm z-0"></div>
        <div className="absolute w-[800px] h-[800px] bg-brand-900/10 rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-center">
             {PLATFORM_FEATURES.map((feature, index) => {
                 return (
                     <FeatureItem 
                        key={feature.id} 
                        feature={feature} 
                        index={index} 
                        total={PLATFORM_FEATURES.length} 
                        scrollYProgress={scrollYProgress} 
                     />
                 );
             })}
        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ 
    feature: any, 
    index: number, 
    total: number, 
    scrollYProgress: any 
}> = ({ feature, index, total, scrollYProgress }) => {
    // Determine the scroll range for this specific item
    const step = 1 / total;
    const start = index * step;
    const end = start + step;
    
    // Add buffer to prevent overlap (slightly shrink active range)
    const buffer = step * 0.1; 
    const activeStart = start + buffer;
    const activeEnd = end - buffer;

    const isLeft = feature.align === 'left';
    
    // --- Card Animation ---
    // Move logic: Start Offscreen -> Center -> Return Offscreen (Back to where it came from)
    const cardX = useTransform(
        scrollYProgress,
        [start, activeStart, activeEnd, end],
        [isLeft ? -1200 : 1200, 0, 0, isLeft ? -1200 : 1200]
    );

    const cardOpacity = useTransform(
        scrollYProgress,
        [start, activeStart, activeEnd, end],
        [0, 1, 1, 0]
    );
    
    // Add slight scale for breathing effect
    const cardScale = useTransform(
        scrollYProgress,
        [start, activeStart, activeEnd, end],
        [0.8, 1, 1, 0.8]
    );

    // --- Text Animation ---
    const textOpacity = useTransform(
        scrollYProgress,
        [start, activeStart, activeEnd, end],
        [0, 1, 1, 0]
    );
    
    // Text slides slightly up/down for dynamic feel
    const textY = useTransform(
        scrollYProgress,
        [start, activeStart, activeEnd, end],
        [50, 0, 0, -50]
    );

    // Mask Reveal for the Tagline (Philosophy Text)
    const backgroundPosition = useTransform(
        scrollYProgress,
        [activeStart, activeEnd],
        ["100% 0", "0% 0"]
    );

    return (
        <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
            {/* Grid Layout to separate Left and Right zones */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
                
                {/* Left Column Area */}
                <div className={`flex justify-center md:justify-start ${isLeft ? '' : 'md:order-2 md:justify-end'}`}>
                     {/* The Card Element */}
                     <motion.div
                        style={{ x: cardX, opacity: cardOpacity, scale: cardScale }}
                        className="w-full max-w-lg"
                     >
                        <div className="bg-dark-card border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                            {/* Card Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-500/20 transition-colors duration-500"></div>
                            
                            <div className="relative z-10 flex flex-col gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-400 mb-2">
                                    <feature.icon size={36} strokeWidth={1.5} />
                                </div>
                                
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-lg text-gray-400 leading-relaxed font-light">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className="h-1 w-24 bg-brand-500/50 rounded-full mt-4"></div>
                            </div>
                        </div>
                     </motion.div>
                </div>

                {/* Right Column Area (Text) */}
                <div className={`flex flex-col justify-center px-4 ${isLeft ? '' : 'md:order-1 md:items-end md:text-right'}`}>
                    <motion.div style={{ opacity: textOpacity, y: textY }} className="max-w-lg">
                        {/* Integrated Philosophy Text (Tagline) with Mask Effect */}
                        <motion.h2 
                            style={{ 
                                backgroundImage: 'linear-gradient(to right, #fff, #fff 50%, #333 50%)',
                                backgroundSize: '200% 100%',
                                backgroundPositionX: backgroundPosition,
                                WebkitBackgroundClip: 'text',
                                color: 'transparent'
                            }}
                            className="text-4xl md:text-6xl font-bold leading-tight mb-6 whitespace-pre-line"
                        >
                            {feature.tagline}
                        </motion.h2>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default PlatformShowcase;
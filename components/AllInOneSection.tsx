import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ALL_IN_ONE_DETAILS } from '../constants';
import { Cpu, X } from 'lucide-react';

const AllInOneSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="all-in-one" ref={containerRef} className="relative bg-dark-bg min-h-[250vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        
        {/* Central visual container */}
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Interactive Visuals */}
            <div className="relative h-[500px] w-full flex items-center justify-center">
                
                {/* Scene 1: Expensive Subscriptions Fading Out */}
                <motion.div 
                    style={{ 
                        opacity: useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]),
                        scale: useTransform(scrollYProgress, [0, 0.4], [1, 0.8]),
                        filter: useTransform(scrollYProgress, [0, 0.4], ["blur(0px)", "blur(10px)"])
                    }}
                    className="absolute inset-0 flex flex-col gap-6 items-center justify-center"
                >
                    <div className="text-gray-400 font-bold mb-6 tracking-widest text-2xl">월 예상 구독료</div>
                    <div className="flex gap-4 items-center">
                        <SubscriptionCard name="GPT" price="₩30,000" />
                        <SubscriptionCard name="Claude" price="₩30,000" />
                        <SubscriptionCard name="Gemini" price="₩30,000" />
                    </div>
                    <div className="mt-8 flex items-center gap-3 text-red-400 font-bold text-4xl md:text-5xl">
                        <X size={48} strokeWidth={3} />
                        <span>월 90,000원</span>
                    </div>
                </motion.div>

                {/* Scene 2: AutoAgent All-in-One Appearing */}
                <motion.div
                    style={{
                        opacity: useTransform(scrollYProgress, [0.35, 0.5, 0.8], [0, 1, 1]),
                        scale: useTransform(scrollYProgress, [0.35, 0.5], [0.5, 1]),
                        y: useTransform(scrollYProgress, [0.35, 0.5], [50, 0])
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                >
                    <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-brand-600 to-purple-600 blur-[80px] absolute opacity-40 animate-pulse"></div>
                    <div className="relative z-10 bg-dark-card border border-brand-500/50 p-10 rounded-[2.5rem] shadow-[0_0_60px_rgba(14,165,233,0.2)] text-center w-full max-w-md">
                        <div className="inline-flex p-5 rounded-3xl bg-brand-500/10 text-brand-400 mb-8">
                            <Cpu size={48} />
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">AutoAgent</h3>
                        <p className="text-gray-400 mb-8 text-xl font-medium tracking-wide">GPT • Claude • Gemini</p>
                        <div className="py-4 px-8 rounded-2xl bg-white/5 border border-white/10 text-2xl font-bold text-white">
                            추가 비용 0원
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Right: Text Content */}
            <div className="relative h-[400px]">
                {ALL_IN_ONE_DETAILS.map((detail, idx) => (
                    <TextContent 
                        key={idx} 
                        detail={detail} 
                        idx={idx} 
                        containerRef={containerRef} 
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

const SubscriptionCard = ({ name, price }: { name: string, price: string }) => (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center min-w-[140px] grayscale opacity-60">
        <div className="text-gray-400 text-lg font-medium mb-2">{name}</div>
        <div className="text-white text-xl font-bold line-through decoration-red-500">{price}</div>
    </div>
);

const TextContent: React.FC<{ detail: any, idx: number, containerRef: any }> = ({ detail, idx, containerRef }) => {
    const start = idx * 0.5;
    const end = start + 0.5;
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

    const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [start, end], [50, -50]);

    return (
        <motion.div 
            style={{ opacity, y }}
            className="absolute inset-0 flex flex-col justify-center"
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-brand-900/30 rounded-2xl text-brand-400 border border-brand-500/20">
                    <detail.icon size={40} />
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white">{detail.title}</h3>
            </div>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                {detail.text}
            </p>
        </motion.div>
    );
}

export default AllInOneSection;
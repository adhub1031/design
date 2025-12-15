import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FEATURES_VIDEO_DETAILS } from '../constants';
import { Play, DollarSign } from 'lucide-react';

const FeatureVideoMonetization: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="video-feature" ref={containerRef} className="relative min-h-[150vh] bg-black overflow-hidden flex items-center justify-center">
       {/* Parallax Background */}
       <motion.div 
         style={{ y }}
         className="absolute inset-0 opacity-30"
       >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black"></div>
          {/* Grid or abstract video placeholder */}
          <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40"></div>
       </motion.div>

       <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          
          {/* Content that moves up */}
          <motion.div style={{ opacity }}>
             <h2 className="text-sm font-semibold text-purple-400 tracking-wide uppercase mb-4">Video & Monetization</h2>
             <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                보이지 않는 곳에서<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">수익을 창출합니다.</span>
             </h3>
             
             <div className="space-y-12 mt-16">
                {FEATURES_VIDEO_DETAILS.map((item, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: idx * 0.2, duration: 0.8 }}
                     viewport={{ once: true }}
                     className="relative pl-8 border-l border-white/20"
                   >
                      <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-purple-400">
                         <item.icon size={18} />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed text-lg">{item.text}</p>
                   </motion.div>
                ))}
             </div>
          </motion.div>

          {/* Visual Representation */}
          <div className="relative h-[600px] w-full hidden md:block">
              {/* Sticky-like visual inside the grid */}
              <div className="sticky top-20 w-full h-full">
                  <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
                    className="relative w-full h-full"
                  >
                     {/* Video Player Card */}
                     <div className="absolute top-0 right-0 w-3/4 aspect-video bg-dark-card rounded-2xl border border-dark-border shadow-2xl overflow-hidden z-20">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black"></div>
                        <div className="absolute bottom-6 left-6 flex items-center gap-3">
                           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                              <Play fill="black" size={16} />
                           </div>
                           <div className="text-sm font-medium text-white">Auto_Generated_Video_01.mp4</div>
                        </div>
                     </div>

                     {/* Monetization Dashboard Card */}
                     <div className="absolute bottom-0 left-0 w-3/4 h-64 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6 z-30">
                        <div className="flex items-center justify-between mb-8">
                           <div className="text-gray-400 text-sm">Estimated Revenue</div>
                           <DollarSign className="text-green-400" size={20} />
                        </div>
                        <div className="text-5xl font-bold text-white mb-2">$4,289.50</div>
                        <div className="text-green-400 text-sm font-medium">+12.5% from last month</div>
                        
                        {/* Fake Graph */}
                        <div className="mt-8 flex items-end gap-2 h-16">
                           {[40, 65, 50, 80, 55, 90, 100].map((h, i) => (
                              <motion.div 
                                 key={i}
                                 initial={{ height: 0 }}
                                 whileInView={{ height: `${h}%` }}
                                 transition={{ duration: 1, delay: i * 0.1 }}
                                 className="flex-1 bg-gradient-to-t from-brand-600 to-brand-400 rounded-t-sm opacity-80"
                              />
                           ))}
                        </div>
                     </div>
                  </motion.div>
              </div>
          </div>

       </div>
    </section>
  );
};

export default FeatureVideoMonetization;
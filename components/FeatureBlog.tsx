import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FEATURES_BLOG_DETAILS } from '../constants';
import { CheckCircle2, Search, Type, FileText, Image as ImageIcon } from 'lucide-react';

const FeatureBlog: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    // Increased height from 400vh to 600vh for slower speed
    <section id="blog-feature" ref={containerRef} className="relative bg-dark-bg min-h-[600vh]">
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
        
        {/* Left Side: Dynamic Visual (Sticky) */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full flex items-center justify-center p-6 md:p-12 relative z-10">
           <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square flex items-center justify-center">
              {/* Abstract Background */}
              <motion.div 
                style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 180]) }}
                className="absolute inset-0 bg-gradient-to-br from-brand-900 via-purple-900 to-blue-900 rounded-full blur-[80px] opacity-40" 
              />
              
              {/* Phone/Card Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full h-full bg-dark-card border border-dark-border rounded-[2.5rem] p-4 shadow-2xl overflow-hidden ring-1 ring-white/10"
              >
                  {/* Internal Dynamic Content changing with scroll */}
                  <div className="w-full h-full bg-dark-bg/80 backdrop-blur-sm rounded-[2rem] overflow-hidden flex flex-col relative">
                     {/* Header */}
                     <div className="h-14 border-b border-white/5 flex items-center px-6 gap-2 bg-white/5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"/>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"/>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"/>
                        <div className="ml-auto text-xs text-gray-500 font-mono">auto-agent.bot</div>
                     </div>

                     {/* Content Simulation Container */}
                     <div className="flex-1 p-6 relative">
                        
                        {/* Step 1: Trend Analysis (0.0 - 0.25) */}
                        <motion.div 
                           style={{ 
                              opacity: useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]),
                              scale: useTransform(scrollYProgress, [0, 0.25], [1, 1.1]),
                              display: useTransform(scrollYProgress, (v) => v < 0.25 ? "flex" : "none")
                           }}
                           className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                        >
                           <div className="w-20 h-20 rounded-full bg-brand-500/20 flex items-center justify-center mb-6 animate-pulse">
                              <Search size={40} className="text-brand-400" />
                           </div>
                           <h3 className="text-xl font-bold text-white mb-2">트렌드 분석 중...</h3>
                           <div className="space-y-2 w-full max-w-[200px]">
                              <div className="h-1 w-full bg-brand-500/30 rounded-full overflow-hidden">
                                 <motion.div 
                                    animate={{ x: ["-100%", "100%"] }} 
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    className="h-full w-1/2 bg-brand-500"
                                 />
                              </div>
                              <p className="text-xs text-gray-400">키워드: AI, 자동화, 수익화</p>
                           </div>
                        </motion.div>

                        {/* Step 2: Title Generation (0.25 - 0.50) */}
                        <motion.div 
                           style={{ 
                              opacity: useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.50], [0, 1, 1, 0]),
                              y: useTransform(scrollYProgress, [0.25, 0.35, 0.50], [20, 0, -20]),
                              display: useTransform(scrollYProgress, (v) => v >= 0.25 && v < 0.50 ? "flex" : "none")
                           }}
                           className="absolute inset-0 flex flex-col items-center justify-center p-6"
                        >
                           <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                              <Type size={32} className="text-purple-400" />
                           </div>
                           <div className="w-full space-y-3">
                              <div className="p-3 bg-white/5 rounded-lg border border-brand-500/50 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                                 <div className="text-sm text-white font-medium">AI로 블로그 수익화하는 3가지 방법</div>
                              </div>
                              <div className="p-3 bg-white/5 rounded-lg border border-white/5 opacity-50">
                                 <div className="text-sm text-gray-400">자동화 툴로 시간을 버는 법</div>
                              </div>
                              <div className="p-3 bg-white/5 rounded-lg border border-white/5 opacity-30">
                                 <div className="text-sm text-gray-500">2024년 콘텐츠 마케팅 트렌드</div>
                              </div>
                           </div>
                        </motion.div>

                        {/* Step 3: Content Generation (0.50 - 0.75) */}
                        <motion.div 
                           style={{ 
                              opacity: useTransform(scrollYProgress, [0.50, 0.60, 0.70, 0.75], [0, 1, 1, 0]),
                              display: useTransform(scrollYProgress, (v) => v >= 0.50 && v < 0.75 ? "block" : "none")
                           }}
                           className="absolute inset-0 p-6 pt-10"
                        >
                           <div className="flex items-center gap-3 mb-6">
                              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                 <FileText size={20} className="text-green-400" />
                              </div>
                              <span className="text-green-400 text-sm font-bold animate-pulse">원고 작성 중...</span>
                           </div>
                           <div className="space-y-4">
                              <div className="h-6 w-3/4 bg-white/20 rounded animate-pulse" />
                              <div className="space-y-2">
                                 <div className="h-3 w-full bg-white/10 rounded" />
                                 <div className="h-3 w-full bg-white/10 rounded" />
                                 <div className="h-3 w-5/6 bg-white/10 rounded" />
                              </div>
                              <div className="h-32 w-full bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                                 <ImageIcon className="text-white/20" />
                              </div>
                              <div className="space-y-2">
                                 <div className="h-3 w-full bg-white/10 rounded" />
                                 <div className="h-3 w-4/6 bg-white/10 rounded" />
                              </div>
                           </div>
                        </motion.div>

                        {/* Step 4: Complete (0.75 - 1.0) */}
                        <motion.div 
                           style={{ 
                              opacity: useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]),
                              scale: useTransform(scrollYProgress, [0.75, 0.85], [0.9, 1]),
                              display: useTransform(scrollYProgress, (v) => v >= 0.75 ? "flex" : "none")
                           }}
                           className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md"
                        >
                           {/* Minimalist Checkmark */}
                           <motion.div 
                              initial={{ opacity: 0, scale: 0.5 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              className="mb-4"
                           >
                              <CheckCircle2 
                                size={64} 
                                className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" 
                                strokeWidth={1.5}
                              />
                           </motion.div>
                           
                           <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">발행 완료</h3>
                           <p className="text-gray-400 text-sm">SEO 점수 98점</p>
                        </motion.div>

                     </div>
                  </div>
              </motion.div>
           </div>
        </div>

        {/* Right Side: Text Content */}
        {/* Changed: Now completely centered vertically, items are absolutely positioned to overlap perfectly */}
        <div className="w-full md:w-1/2 h-full relative flex items-center justify-center p-6 md:p-12">
            <div className="relative w-full max-w-lg h-64 md:h-80"> {/* Fixed height container for stability */}
               {FEATURES_BLOG_DETAILS.map((feature, idx) => (
                  <FeatureTextCard 
                     key={idx} 
                     feature={feature} 
                     index={idx} 
                     total={FEATURES_BLOG_DETAILS.length}
                     scrollYProgress={scrollYProgress} // Pass scrollYProgress directly
                  />
               ))}
            </div>
        </div>
      </div>
    </section>
  );
};

// Simplified: Receives scrollYProgress directly, uses absolute positioning
const FeatureTextCard: React.FC<{ 
    feature: any, 
    index: number, 
    total: number, 
    scrollYProgress: any 
}> = ({ feature, index, total, scrollYProgress }) => {
   
   const step = 1 / total;
   const start = index * step; 
   const end = start + step;

   // Opacity: Fade In -> Stay -> Fade Out
   const opacity = useTransform(
       scrollYProgress, 
       [start, start + 0.1, end - 0.1, end], 
       [0, 1, 1, 0]
   );
   
   // Y Movement: Slide up slightly while active
   const y = useTransform(
       scrollYProgress, 
       [start, end], 
       [20, -20]
   );
   
   return (
      <motion.div 
         style={{ opacity, y }}
         className="absolute inset-0 top-0 left-0 flex flex-col justify-center" // Absolute positioning ensures they are stacked
      >
         <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-400 border border-white/5 flex-shrink-0">
               <feature.icon size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{feature.title}</h3>
         </div>
         <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light pl-16">
            {feature.text}
         </p>
      </motion.div>
   );
};

export default FeatureBlog;
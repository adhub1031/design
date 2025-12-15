import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import { 
  ArrowRight, 
  PlayCircle, 
  Search, 
  FileText, 
  Wand2, 
  UploadCloud, 
  Coins, 
  BarChart3,
  MonitorPlay
} from 'lucide-react';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Expanded ViewBox dimensions for wider range
  const VIEWBOX_W = 1600;
  const VIEWBOX_H = 1000;

  // Curve definitions for complex 3D paths (AI Neural Network style)
  const curves = [
    // 1. Main Content Creation Pipeline (The "Creator" Path)
    {
      id: "creation-pipeline",
      d: `M -200 ${VIEWBOX_H - 100} C 300 ${VIEWBOX_H}, 500 100, ${VIEWBOX_W + 200} 300`,
      width: 16, // Thicker main pipe
      duration: 6,
      delay: 0,
      color: "#0ea5e9", // Sky Blue
      steps: [
        { percent: "15%", label: "Topic Search", sub: "주제 검색", icon: Search },
        { percent: "40%", label: "Blog Writing", sub: "블로그 작성", icon: FileText },
        { percent: "65%", label: "Auto Video Edit", sub: "영상 편집 자동화", icon: Wand2 },
        { percent: "90%", label: "Multi-Publish", sub: "자동 발행", icon: UploadCloud }
      ]
    },
    // 2. Monetization & Analytics Loop (Intersecting)
    {
      id: "money-loop",
      d: `M ${VIEWBOX_W + 100} ${VIEWBOX_H - 200} C ${VIEWBOX_W - 300} ${VIEWBOX_H + 200}, 500 -100, -100 400`,
      width: 8,
      duration: 8,
      delay: 2,
      color: "#a855f7", // Purple
      steps: [
        { percent: "35%", label: "SEO Ranking", sub: "상위 노출", icon: BarChart3 },
        { percent: "75%", label: "Monetization", sub: "수익 정산", icon: Coins }
      ]
    },
    // 3. Media Asset Stream (Background)
    {
      id: "asset-stream",
      d: `M 200 -100 C 400 400, 1000 600, 1400 ${VIEWBOX_H + 100}`,
      width: 6,
      duration: 10,
      delay: 0.5,
      color: "#22d3ee", // Cyan
      steps: [
        { percent: "50%", label: "Media Gen", sub: "소스 생성", icon: MonitorPlay }
      ]
    }
  ];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-dark-bg pt-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-10"></div>
        {/* Subtle colored glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[150px] opacity-30 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] opacity-30 animate-pulse delay-1000" />
      </div>

      {/* 3D Curved Border Beam Effect Container - Expanded Range */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div 
            className="relative w-[140%] h-[120%]" 
            style={{ 
                // Perspective adjusted for a more immersive, wide-angle "God's eye" view
                transform: 'perspective(1200px) rotateX(40deg) rotateZ(-10deg) translateY(-100px)',
                transformStyle: 'preserve-3d'
            }}
          >
              <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}>
                  <defs>
                      {/* 1. Main Beam Gradient */}
                      <linearGradient id="beam-gradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
                          <stop offset="40%" stopColor="#0ea5e9" stopOpacity="1" />
                          <stop offset="60%" stopColor="#a855f7" stopOpacity="1" />
                          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                      </linearGradient>

                      {/* 2. Intense Glow Filter */}
                      <filter id="ai-glow" x="-50%" y="-50%" width="200%" height="200%">
                          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                          <feGaussianBlur stdDeviation="4" result="coloredBlurSmall"/>
                          <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="coloredBlurSmall"/>
                              <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                      </filter>
                  </defs>
                  
                  {curves.map((curve, i) => (
                    <React.Fragment key={i}>
                      {/* 1. Faint Base Trace (The "Hardware" Track) */}
                      <path 
                        id={curve.id}
                        d={curve.d} 
                        fill="none" 
                        stroke="rgba(255,255,255,0.05)" 
                        strokeWidth={curve.width} 
                        strokeLinecap="round"
                      />

                      {/* 2. Main Energy Beam (Slow moving, thick color) */}
                      <motion.path
                        d={curve.d}
                        fill="none"
                        stroke="url(#beam-gradient)"
                        strokeWidth={curve.width}
                        strokeLinecap="round"
                        filter="url(#ai-glow)"
                        initial={{ pathLength: 0.4, pathOffset: 0, opacity: 0.6 }}
                        animate={{ pathOffset: [0, 1] }}
                        transition={{ 
                            duration: curve.duration, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: curve.delay 
                        }}
                      />

                      {/* 3. AI Data Packets (Fast moving, white dashes on top) */}
                      <motion.path
                        d={curve.d}
                        fill="none"
                        stroke="white"
                        strokeWidth={curve.width / 2} 
                        strokeDasharray={`20 ${curve.duration * 40}`} 
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -curve.duration * 400 }} 
                        transition={{ 
                            duration: curve.duration * 0.5, 
                            repeat: Infinity, 
                            ease: "linear",
                        }}
                        style={{ opacity: 0.9, filter: 'drop-shadow(0 0 8px white)' }}
                      />

                      {/* 4. Workflow Nodes (Static Checkpoints) */}
                      {curve.steps.map((step, stepIdx) => (
                        <foreignObject
                          key={stepIdx}
                          width="240"
                          height="120"
                          style={{ 
                            offsetPath: `path("${curve.d}")`, 
                            offsetDistance: step.percent,
                            overflow: 'visible'
                          } as any}
                          className="overflow-visible"
                        >
                          {/* Node Container centered on the point */}
                          <div className="-translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[240px] h-[120px]">
                            
                            {/* The Node Icon with Hexagon-ish look */}
                            <div className="relative w-14 h-14 flex items-center justify-center mb-3 group">
                              {/* Pulsing ring */}
                              <div className="absolute inset-0 bg-brand-500/30 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
                              {/* Glowing Border */}
                              <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-md rounded-2xl border border-brand-400/50 shadow-[0_0_20px_rgba(14,165,233,0.3)] flex items-center justify-center z-10 group-hover:border-brand-300 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] transition-all duration-300">
                                <step.icon size={24} className="text-brand-300 group-hover:text-white transition-colors" />
                              </div>
                            </div>
                            
                            {/* The Label Badge */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="px-3 py-1.5 rounded-lg bg-dark-card/90 border border-white/10 shadow-xl backdrop-blur-md flex items-center gap-2 transform transition-transform hover:scale-105">
                                    <span className="text-sm font-bold text-white whitespace-nowrap tracking-wide">{step.label}</span>
                                </div>
                                {/* Sub-label in Korean */}
                                <span className="text-[10px] text-gray-400 font-medium bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/5">
                                    {step.sub}
                                </span>
                            </div>

                          </div>
                        </foreignObject>
                      ))}

                    </React.Fragment>
                  ))}
              </svg>
          </div>
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-300 text-xs font-medium mb-10 backdrop-blur-sm shadow-[0_0_20px_rgba(14,165,233,0.3)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          {HERO_CONTENT.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 mb-8 leading-[1.1] tracking-tighter whitespace-pre-line drop-shadow-2xl"
        >
          {HERO_CONTENT.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          {HERO_CONTENT.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group px-10 py-5 bg-white text-dark-bg rounded-full font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105">
            {HERO_CONTENT.ctaPrimary}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
            <PlayCircle className="w-5 h-5" />
            {HERO_CONTENT.ctaSecondary}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
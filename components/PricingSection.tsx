import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_TIERS } from '../constants';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="snap-section min-h-screen md:h-screen w-full bg-dark-bg flex items-center justify-center relative border-t border-dark-border py-24 md:py-0">
       
       <div className="max-w-7xl mx-auto px-6 w-full z-10 flex flex-col h-full justify-center">
          <div className="text-center mb-12">
             <motion.h2 
               initial={{ opacity: 0, y: 60 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true, margin: "-10%" }}
               className="text-4xl md:text-5xl font-bold text-white mb-4"
             >
                단순하고 투명한 요금제
             </motion.h2>
             <motion.p 
               initial={{ opacity: 0, y: 60 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
               viewport={{ once: true, margin: "-10%" }}
               className="text-gray-400 text-lg"
             >
                무료로 시작하고 비즈니스 성장에 맞춰 업그레이드하세요.
             </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {PRICING_TIERS.map((tier, idx) => (
               <motion.div
                 key={tier.name}
                 initial={{ opacity: 0, y: 100 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 + (idx * 0.1) }}
                 viewport={{ once: true, margin: "-10%" }}
                 className={`relative rounded-3xl p-8 flex flex-col h-full border ${
                   tier.popular 
                     ? 'bg-dark-card border-brand-500 shadow-[0_0_30px_rgba(14,165,233,0.15)]' 
                     : 'bg-dark-card/50 border-dark-border hover:border-gray-700 transition-colors'
                 }`}
               >
                 {tier.popular && (
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      가장 인기있는
                   </div>
                 )}
                 
                 <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline gap-1">
                       <span className="text-4xl font-bold text-white">{tier.price}</span>
                       <span className="text-gray-500 text-sm">/월</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-4 min-h-[40px]">{tier.description}</p>
                 </div>

                 <div className="flex-1 space-y-4 mb-8">
                    {tier.features.map((feature, fIdx) => (
                       <div key={fIdx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                       </div>
                    ))}
                 </div>

                 <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    tier.popular 
                      ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg' 
                      : 'bg-white text-dark-bg hover:bg-gray-200'
                 }`}>
                    {tier.cta}
                 </button>
               </motion.div>
             ))}
          </div>

          <div className="mt-12 text-center text-sm text-gray-500">
             모든 플랜은 언제든지 해지 가능합니다. 14일 무료 환불 보장.
          </div>
       </div>
    </section>
  );
};

export default PricingSection;
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Star, ShieldCheck, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-8"
          >
            <Star className="w-3 h-3 text-[#2563EB]" fill="currentColor" />
            <span className="text-[10px] font-black text-[#2563EB] uppercase tracking-widest">Client Testimonials</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] tracking-tighter uppercase">Voices of <span className="text-[#2563EB]">Success</span>.</h2>
          <p className="text-slate-500 text-lg font-medium mt-6 max-w-2xl mx-auto italic">Verified narratives from our most distinguished clients who navigated the global corridors with our precision guidance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 rounded-[3.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-50 flex flex-col relative group"
            >
              <div className="absolute top-8 right-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-16 h-16 text-[#0F172A]" />
              </div>

              <div className="flex items-center space-x-2 mb-8">
                <div className="flex text-[#2563EB]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3" fill="currentColor" />
                  ))}
                </div>
              </div>

              <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10 flex-grow italic">
                "{t.quote}"
              </p>

              <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-black text-[#0F172A] tracking-tight">{t.name}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <img 
                      src={`https://flagcdn.com/w20/${t.countryCode}.png`} 
                      alt="Flag" 
                      className="w-4 h-auto rounded-[1px] shadow-sm"
                    />
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.destination} Portfolio</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-[#2563EB]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0F172A] text-white text-[8px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                Verified File {7000 + idx}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
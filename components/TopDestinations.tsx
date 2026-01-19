
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { DESTINATIONS } from '../constants';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const TopDestinations: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-black text-[#0F172A] tracking-tighter mb-6 md:mb-8"
          >
            Global <span className="text-[#2563EB]">Portfolios</span>.
          </motion.h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-medium">Strategically curated destinations for Pakistan's elite traveling community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {DESTINATIONS.slice(0, 6).map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => {
                navigate(`/destinations/${dest.id}`);
                window.scrollTo(0, 0);
              }}
            >
              <div className="relative h-[400px] md:h-[480px] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-blue-900/10 border-[6px] md:border-[8px] border-white">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent opacity-80" />
                
                <div className="absolute top-6 right-6 md:top-8 md:right-8">
                   <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-1.5 md:px-5 md:py-2 rounded-2xl text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                     {dest.successRate} Efficiency
                   </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10">
                  <div className="flex justify-between items-end">
                    <div className="flex-grow pr-4">
                      <span className="inline-block px-2 py-1 md:px-3 md:py-1 bg-[#2563EB] text-white text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] rounded-lg mb-3 md:mb-4">
                        {dest.visaType}
                      </span>
                      <div className="flex items-center space-x-3 mb-2 md:mb-3">
                        <img 
                          src={`https://flagcdn.com/w40/${dest.countryCode}.png`} 
                          alt={`${dest.name} Flag`} 
                          className="w-6 md:w-8 h-auto rounded-sm shadow-sm border border-white/10 opacity-90"
                        />
                        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                          {dest.name}
                        </h3>
                      </div>
                      <p className="text-white/70 text-xs md:text-sm font-medium leading-relaxed line-clamp-2 max-w-[90%] md:max-w-[85%]">
                        {dest.description}
                      </p>
                    </div>
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-[#0F172A] shadow-2xl transform group-hover:rotate-45 transition-transform duration-500 shrink-0">
                      <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 md:mt-20 text-center">
          <motion.a 
            whileHover={{ y: -5 }}
            href="#/destinations" 
            className="inline-flex items-center space-x-3 md:space-x-4 text-[10px] font-black text-[#0F172A] uppercase tracking-[0.4em] group"
          >
            <span>View All Global Portfolios</span>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
               <ArrowRight className="w-4 h-4" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;

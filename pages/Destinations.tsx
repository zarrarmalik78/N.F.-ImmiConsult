import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DESTINATIONS } from '../constants';
import { ArrowUpRight, Globe } from 'lucide-react';

const Destinations: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-24 md:py-32 animate-fade-in bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-8"
          >
            <Globe className="w-4 h-4 text-[#2563EB]" />
            <span className="text-[10px] font-black text-[#2563EB] uppercase tracking-[0.2em]">Global Presence</span>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black text-[#0F172A] mb-8 tracking-tighter uppercase">Global <span className="text-[#2563EB]">Portfolios</span></h1>
          <p className="text-base md:text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
            N.F. ImmiConsult offers expert guidance for premier destinations. Your international mobility is managed with meticulous precision and administrative excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {DESTINATIONS.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.025,
                y: -12,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
              }}
              viewport={{ once: true }}
              onClick={() => {
                navigate(`/destinations/${dest.id}`);
                window.scrollTo(0, 0);
              }}
              className="group cursor-pointer flex flex-col bg-white rounded-[3rem] md:rounded-[4rem] shadow-xl hover:shadow-[0_35px_60px_-15px_rgba(15,23,42,0.2)] overflow-hidden transition-all duration-500 border border-slate-50"
            >
              <div className="h-64 md:h-80 relative overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-6 right-6 flex items-center space-x-2">
                  <div className="bg-white/20 backdrop-blur-xl border border-white/20 px-4 py-1.5 rounded-full text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                    {dest.successRate} Success
                  </div>
                </div>

                <div className="absolute bottom-6 left-8 flex items-center space-x-3">
                  <img 
                    src={`https://flagcdn.com/w40/${dest.countryCode}.png`} 
                    alt={`${dest.name} Flag`} 
                    className="w-8 md:w-10 h-auto rounded-sm shadow-lg border border-white/20 opacity-90"
                  />
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                    {dest.name}
                  </h3>
                </div>
              </div>

              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-6">
                   <div className="bg-slate-50 px-4 py-2 rounded-xl">
                     <p className="text-[8px] uppercase font-black text-slate-400 tracking-[0.2em] mb-1">Visa Category</p>
                     <p className="text-xs font-black text-[#2563EB] uppercase">{dest.visaType}</p>
                   </div>
                   <div className="text-right">
                     <p className="text-[8px] uppercase font-black text-slate-400 tracking-[0.2em] mb-1">Audit Time</p>
                     <p className="text-xs font-black text-[#0F172A] uppercase">{dest.processingTime}</p>
                   </div>
                </div>
                
                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 flex-grow">
                  {dest.description} Our senior specialists handle the end-to-end documentation protocol for all {dest.name} visit applications.
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex items-center space-x-2">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                     <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Active Processing</span>
                   </div>
                   <div className="flex items-center space-x-2 text-[#2563EB] font-black text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                     <span>Explore Portfolio</span>
                     <ArrowUpRight className="w-4 h-4" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 bg-[#0F172A] p-10 md:p-20 rounded-[4rem] md:rounded-[5rem] text-center shadow-3xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[#2563EB]/5 blur-[120px]" />
           <div className="relative z-10 space-y-8">
             <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">Broadened <span className="text-[#2563EB]">Perspectives</span></h3>
             <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-lg font-medium leading-relaxed">
               We manage visit visa protocols for over 150+ countries including Japan, Australia, Singapore, and emerging travel markets.
             </p>
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => navigate('/contact')}
               className="inline-block bg-white text-[#0F172A] px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:bg-slate-50 transition-colors"
             >
               Inquire for Other Territory
             </motion.button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
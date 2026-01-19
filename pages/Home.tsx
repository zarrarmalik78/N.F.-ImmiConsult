
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import TopDestinations from '../components/TopDestinations';
import LocationCards from '../components/LocationCards';
import { REASONS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in relative">
      <Hero />
      
      {/* Success Ticker - Professional & National Focus */}
      <div className="bg-[#0F172A] py-12 overflow-hidden relative rotate-[-0.5deg] scale-[1.01] shadow-2xl z-20 border-y border-white/5">
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex space-x-24 items-center pr-24"
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex space-x-24 items-center">
                <span className="text-white/90 font-black text-xl md:text-2xl uppercase tracking-[0.3em]">Elite Case Auditing Experts</span>
                <span className="text-[#2563EB] font-black text-2xl">•</span>
                <span className="text-white/90 font-black text-xl md:text-2xl uppercase tracking-[0.3em]">Global Visa Specialists</span>
                <span className="text-[#2563EB] font-black text-2xl">•</span>
                <span className="text-white/90 font-black text-xl md:text-2xl uppercase tracking-[0.3em]">Pakistan's Premium Consultancy</span>
                <span className="text-[#2563EB] font-black text-2xl">•</span>
                <span className="text-white/90 font-black text-xl md:text-2xl uppercase tracking-[0.3em]">98% Success Ratio Verified</span>
                <span className="text-[#2563EB] font-black text-2xl">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <TopDestinations />

      {/* Modern Why Choose Us - Bento Grid Style with Elite Navy */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
             <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] tracking-tighter">The Elite <span className="text-[#2563EB]">Protocol</span>.</h2>
             <p className="text-slate-500 text-lg font-medium mt-6">Unrivaled expertise for those who demand the highest standards in immigration.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[320px]">
            {/* Big Feature */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="lg:col-span-8 bg-[#F8FAFC] rounded-[4rem] p-12 border border-slate-100 flex flex-col justify-end relative overflow-hidden group shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/50 rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10">
                <h4 className="text-4xl font-black text-[#0F172A] mb-4 tracking-tight">Precision Case Auditing</h4>
                <p className="text-slate-500 max-w-lg font-medium leading-relaxed">Our senior specialists conduct deep-level audits of your financial and professional ties to guarantee a robust application profile.</p>
              </div>
            </motion.div>

            {/* Small Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="lg:col-span-4 bg-[#0F172A] rounded-[4rem] p-10 flex flex-col items-center justify-center text-center text-white relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute inset-0 shimmer opacity-10" />
              <span className="text-8xl font-black mb-2 text-[#2563EB]">98%</span>
              <span className="text-xs font-black uppercase tracking-[0.4em] opacity-60">Verified Success</span>
            </motion.div>

            {/* Middle Row */}
            {REASONS.slice(0, 3).map((reason, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="lg:col-span-4 bg-white rounded-[4rem] p-12 border border-slate-100 shadow-sm hover:shadow-2xl transition-all flex flex-col items-start"
              >
                <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center text-[#2563EB] mb-10 shadow-sm">
                  {reason.icon}
                </div>
                <h4 className="text-2xl font-black text-[#0F172A] mb-4 tracking-tight">{reason.title}</h4>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      
      <LocationCards />

      {/* Final CTA - Professional & Elite */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0F172A]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-8xl font-black max-w-5xl mx-auto leading-[0.9] tracking-tighter">Your Future <br/> Awaits No One.</h2>
            <p className="text-blue-100/60 text-xl font-medium max-w-2xl mx-auto uppercase tracking-widest">Global Mobility for the Distinguished.</p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 pt-8">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); window.location.hash = '#/contact'; }}
                className="bg-white text-[#0F172A] px-14 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:bg-slate-50 transition-colors"
              >
                Start Evaluation
              </motion.button>
              <motion.a 
                whileHover={{ x: 5 }}
                href="https://wa.me/923000000000" 
                className="text-white font-black text-xs uppercase tracking-[0.3em] border-b-2 border-white/20 hover:border-[#2563EB] transition-colors pb-1"
              >
                Direct WhatsApp Inquire
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

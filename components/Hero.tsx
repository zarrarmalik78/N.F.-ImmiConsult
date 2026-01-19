
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Star, ArrowRight, ShieldCheck, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleBookEvaluation = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-40 overflow-hidden bg-[#F8FAFC]">
      {/* Subtle Elite Background Elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-100/30 blob rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-slate-200/40 blob rounded-full -translate-x-1/2 translate-y-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-3 bg-white px-5 py-2 rounded-full shadow-sm border border-slate-100 mb-6 md:mb-10"
            >
              <Award className="w-4 h-4 text-[#B45309]" />
              <span className="text-[8px] md:text-[10px] font-black text-[#0F172A] uppercase tracking-[0.2em]">Pakistan's Premier Visa Firm</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-8xl font-black text-[#0F172A] leading-[1] md:leading-[0.9] tracking-tighter mb-6 md:mb-10"
            >
              Redefining <br />
              <span className="text-gradient">Elite Travel</span>.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-500 text-base md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 md:mb-12 font-medium"
            >
              Bespoke visit visa consultancy for the discerning traveler. Our senior analysts ensure your global mobility with unparalleled precision and care.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-6 sm:space-y-0 sm:space-x-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBookEvaluation}
                className="elite-gradient text-white px-10 md:px-12 py-4 md:py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-[#0F172A]/20 flex items-center space-x-3 group w-full sm:w-auto justify-center"
              >
                <span>Book Evaluation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <div className="flex items-center space-x-4">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-[#2563EB]" />
                 </div>
                 <div className="text-left">
                    <p className="text-[#0F172A] font-black leading-none text-xs md:text-sm">Case Proven</p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Audit Verified</p>
                 </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 relative mt-8 lg:mt-0"
          >
            {/* Visual Mosaic - More High End */}
            <div className="relative max-w-sm mx-auto lg:max-w-none">
               <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[8px] md:border-[12px] border-white relative z-10"
               >
                 <img src="https://img.freepik.com/free-photo/visa-application-composition-with-europe-america-flag_23-2149117811.jpg?t=st=1768858344~exp=1768861944~hmac=8efeb759f9fccfc62655ac94dc16d78fa87fa762fd0ac75235a346db2327c7d1&w=1060" alt="Executive Travel" className="h-[300px] md:h-[500px] w-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
               </motion.div>
               
               <div className="absolute -top-6 -right-4 md:-top-10 md:-right-8 w-20 h-20 md:w-28 md:h-28 bg-[#0F172A] rounded-2xl md:rounded-3xl flex flex-col items-center justify-center text-white rotate-12 shadow-2xl z-20">
                  <span className="text-2xl md:text-3xl font-black">98%</span>
                  <span className="text-[6px] md:text-[8px] font-black uppercase tracking-[0.2em]">Success</span>
               </div>

               <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-white p-4 md:p-6 rounded-2xl md:rounded-[2.5rem] shadow-2xl border border-slate-50 flex items-center space-x-3 md:space-x-4 z-20">
                  <div className="flex -space-x-2 md:-space-x-3">
                    {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=${i+20}`} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 md:border-4 border-white shadow-sm" alt="Client" />)}
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-black text-[#0F172A] leading-tight">Elite Circle</p>
                    <p className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-tight">5000+ Files</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

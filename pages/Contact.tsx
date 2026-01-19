
import React from 'react';
import LocationCards from '../components/LocationCards';
import { motion } from 'framer-motion';
import { Send, MessageSquare, PhoneCall, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Elite Assessment Initiated. Our senior analyst will review your profile and contact you within 24 business hours.");
  };

  return (
    <div className="animate-fade-in bg-white">
      <section className="bg-[#0F172A] pt-32 pb-24 md:py-32 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 md:mb-8 uppercase"
          >
            Direct <span className="text-[#2563EB]">Intelligence</span>.
          </motion.h1>
          <p className="text-blue-100/60 max-w-2xl mx-auto text-sm md:text-lg font-medium uppercase tracking-[0.4em]">Connect with our Master Analysts</p>
        </div>
      </section>

      <section className="py-16 md:py-32 relative -mt-12 md:-mt-16 rounded-t-[4rem] md:rounded-t-[6rem] z-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
            <div className="lg:col-span-8 space-y-12 md:space-y-16">
               <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-black text-[#0F172A] mb-6 md:mb-8 tracking-tighter uppercase">Application <br/> <span className="text-[#2563EB]">Assessment</span></h2>
                  <p className="text-slate-500 font-medium text-base md:text-lg leading-relaxed">Provide your credentials below for a high-level audit by our specialist unit. Every inquiry is treated with the utmost discretion and professional priority.</p>
               </div>

               <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  <div className="space-y-3 md:space-y-4">
                    <label className="text-[10px] font-black text-[#0F172A] uppercase tracking-[0.4em] px-1">Profile Name</label>
                    <input type="text" placeholder="Full legal name" className="w-full bg-slate-50 border-none rounded-2xl p-4 md:p-5 text-sm font-bold focus:ring-2 focus:ring-[#2563EB]/20 outline-none placeholder:text-slate-300" required />
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <label className="text-[10px] font-black text-[#0F172A] uppercase tracking-[0.4em] px-1">Communication Channel</label>
                    <input type="tel" placeholder="Active phone number" className="w-full bg-slate-50 border-none rounded-2xl p-4 md:p-5 text-sm font-bold focus:ring-2 focus:ring-[#2563EB]/20 outline-none placeholder:text-slate-300" required />
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <label className="text-[10px] font-black text-[#0F172A] uppercase tracking-[0.4em] px-1">Intended Portfolio</label>
                    <select className="w-full bg-slate-50 border-none rounded-2xl p-4 md:p-5 text-sm font-bold focus:ring-2 focus:ring-[#2563EB]/20 outline-none appearance-none">
                      <option>Select Destination</option>
                      <option>United Kingdom</option>
                      <option>USA (B1/B2)</option>
                      <option>Schengen Region</option>
                      <option>Canada (TRV)</option>
                      <option>Turkey / UAE / Gulf</option>
                    </select>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <label className="text-[10px] font-black text-[#0F172A] uppercase tracking-[0.4em] px-1">Preferred Liaison Branch</label>
                    <select className="w-full bg-slate-50 border-none rounded-2xl p-4 md:p-5 text-sm font-bold focus:ring-2 focus:ring-[#2563EB]/20 outline-none appearance-none">
                      <option>Select Facility</option>
                      <option>Islamabad (I-8 Executive Suite)</option>
                      <option>Lahore (Gulberg Business Wing)</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-3 md:space-y-4">
                    <label className="text-[10px] font-black text-[#0F172A] uppercase tracking-[0.4em] px-1">Case Brief</label>
                    <textarea rows={5} placeholder="Brief description of your travel history and current profile..." className="w-full bg-slate-50 border-none rounded-2xl p-4 md:p-5 text-sm font-bold focus:ring-2 focus:ring-[#2563EB]/20 outline-none placeholder:text-slate-300"></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      className="elite-gradient text-white px-10 md:px-14 py-5 md:py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] shadow-2xl shadow-[#0F172A]/20 flex items-center justify-center space-x-4 w-full sm:w-auto"
                    >
                      <Send className="w-4 h-4" />
                      <span>Initiate Evaluation</span>
                    </motion.button>
                  </div>
               </form>
            </div>

            <div className="lg:col-span-4 space-y-8 md:space-y-12">
               <div className="bg-[#0F172A] text-white p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] shadow-3xl space-y-10 md:space-y-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-[#2563EB]/20 rounded-full blur-[60px] -translate-y-20 translate-x-20" />
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase tracking-widest">Protocol Support</h3>
                  
                  <div className="space-y-8 md:space-y-10">
                    <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 md:space-x-6 group">
                      <div className="bg-[#2563EB] p-3 md:p-4 rounded-2xl group-hover:scale-110 transition-all shadow-lg shadow-[#2563EB]/20">
                        <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-1 md:mb-2">WhatsApp Direct</p>
                        <p className="text-lg md:text-xl font-bold tracking-tight">+92 300 000 0000</p>
                      </div>
                    </a>

                    <div className="flex items-start space-x-4 md:space-x-6">
                      <div className="bg-[#2563EB] p-3 md:p-4 rounded-2xl shadow-lg shadow-[#2563EB]/20">
                        <PhoneCall className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-1 md:mb-2">Liaison Hotline</p>
                        <p className="text-lg md:text-xl font-bold tracking-tight">051-1234567</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 md:space-x-6">
                      <div className="bg-[#2563EB] p-3 md:p-4 rounded-2xl shadow-lg shadow-[#2563EB]/20">
                        <Globe className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-1 md:mb-2">Corporate Portal</p>
                        <p className="text-lg md:text-xl font-bold tracking-tight">nfimmiconsult.pk</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 md:pt-10 border-t border-white/5 space-y-2">
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Operational Readiness</p>
                    <p className="text-xs md:text-sm font-bold opacity-80 leading-relaxed">
                      Mon - Sat: 09:00 - 18:00 PKT<br/>
                      Executive liaison available 24/7 for active cases.
                    </p>
                  </div>
               </div>

               <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-slate-100 text-center shadow-sm">
                  <p className="text-[#0F172A] font-black text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">Elite Locations Only</p>
                  <p className="text-slate-400 text-xs font-medium leading-relaxed">Our physical facilities in Islamabad I-8 and Lahore Gulberg are designed for professional discretion and high-level strategy meetings.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <LocationCards />
    </div>
  );
};

export default Contact;

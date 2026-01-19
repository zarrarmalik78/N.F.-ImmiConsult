
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DESTINATIONS, DestinationExtended } from '../constants';
import { ArrowLeft, Clock, ShieldCheck, CheckCircle, FileText, Globe, ArrowRight } from 'lucide-react';

const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [dest, setDest] = useState<DestinationExtended | null>(null);

  useEffect(() => {
    const found = DESTINATIONS.find(d => d.id === id);
    if (found) {
      setDest(found);
    } else {
      navigate('/destinations');
    }
  }, [id, navigate]);

  if (!dest) return null;

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      {/* Header Space filler */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pt-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full mb-6"
            >
              <img 
                src={`https://flagcdn.com/w40/${dest.countryCode}.png`} 
                alt={`${dest.name} Flag`} 
                className="w-5 h-auto rounded-sm shadow-sm opacity-90"
              />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Global Portfolio / {dest.name}</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase"
            >
              {dest.name}
            </motion.h1>
          </div>
        </div>
        <div className="absolute top-10 left-6 z-10">
          <Link to="/destinations" className="flex items-center space-x-2 text-white/80 hover:text-white font-black text-[10px] uppercase tracking-widest transition-all">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolios</span>
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-[#0F172A] border-y border-white/5 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">Visa Type</p>
              <p className="text-white font-black text-lg">{dest.visaType}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">Audit Success</p>
              <p className="text-[#2563EB] font-black text-lg">{dest.successRate}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">Timeframe</p>
              <p className="text-white font-black text-lg">{dest.processingTime}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">Priority Service</p>
              <p className="text-white font-black text-lg uppercase">Available</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tighter uppercase">Executive <span className="text-[#2563EB]">Summary</span></h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-[#2563EB] pl-8">
                {dest.longDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 mb-2">
                   <div className="bg-slate-50 p-3 rounded-2xl">
                     <FileText className="w-6 h-6 text-[#2563EB]" />
                   </div>
                   <h3 className="text-2xl font-black text-[#0F172A] uppercase tracking-tight">Audit Checklist</h3>
                </div>
                <ul className="space-y-4">
                  {dest.requirements.map((req, i) => (
                    <li key={i} className="flex items-start space-x-3 group">
                      <div className="bg-blue-50 text-[#2563EB] p-1 rounded-full mt-1 shrink-0">
                         <CheckCircle className="w-3 h-3" />
                      </div>
                      <span className="text-slate-600 font-bold text-sm leading-tight uppercase tracking-wider">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <div className="flex items-center space-x-4 mb-2">
                   <div className="bg-slate-50 p-3 rounded-2xl">
                     <ShieldCheck className="w-6 h-6 text-[#2563EB]" />
                   </div>
                   <h3 className="text-2xl font-black text-[#0F172A] uppercase tracking-tight">Elite Benefits</h3>
                </div>
                <ul className="space-y-4">
                  {dest.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="bg-blue-50 text-[#2563EB] p-1 rounded-full mt-1 shrink-0">
                         <CheckCircle className="w-3 h-3" />
                      </div>
                      <span className="text-slate-600 font-bold text-sm leading-tight uppercase tracking-wider">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
               <div className="bg-[#F8FAFC] p-10 rounded-[3rem] border border-slate-100 shadow-xl space-y-8">
                  <h3 className="text-2xl font-black text-[#0F172A] uppercase tracking-tighter">Ready to <span className="text-[#2563EB]">Initiate</span>?</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">Secure your {dest.name} portfolio assessment today. Our senior analysts are standing by.</p>
                  
                  <div className="space-y-4">
                    <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="block text-center elite-gradient text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-[#0F172A]/20">
                      WhatsApp Assessment
                    </a>
                    <Link to="/contact" className="block text-center bg-white text-[#0F172A] border-2 border-slate-100 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-slate-50 transition-all">
                      Case Filing Form
                    </Link>
                  </div>

                  <div className="pt-8 border-t border-slate-200">
                    <div className="flex items-center space-x-4">
                       <Clock className="w-5 h-5 text-slate-400" />
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Typical Audit Time: 24 Business Hours</p>
                    </div>
                  </div>
               </div>

               <div className="bg-[#0F172A] p-10 rounded-[3rem] text-white space-y-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/20 rounded-full blur-[40px] -translate-y-16 translate-x-16" />
                  <h4 className="text-xl font-black uppercase tracking-widest relative z-10">Islamabad & Lahore Units</h4>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest relative z-10">Elite Liaison Offices for Discerning Clients</p>
                  <ArrowRight className="w-8 h-8 text-[#2563EB] group-hover:translate-x-2 transition-transform" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;

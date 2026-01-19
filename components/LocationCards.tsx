
import React from 'react';
import { BRANCHES } from '../constants';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LocationCards: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-black text-[#0F172A] mb-6 md:mb-8 tracking-tighter uppercase">Physical <span className="text-[#2563EB]">Assets</span>.</h2>
          <p className="text-slate-500 font-medium text-sm md:text-lg">Visit our executive offices for a face-to-face brief with our senior analysts.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {BRANCHES.map((branch, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row bg-[#F8FAFC] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-sm border border-slate-50 hover:shadow-2xl hover:border-[#2563EB]/10 transition-all duration-500 group"
            >
              <div className="w-full md:w-1/2 p-10 md:p-12 space-y-8 md:space-y-10 order-2 md:order-1">
                <div>
                  <h3 className="text-2xl font-black text-[#0F172A] mb-4 uppercase tracking-tighter">{branch.city}</h3>
                  <div className="w-16 h-1 bg-[#2563EB] rounded-full"></div>
                </div>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div className="bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-slate-50">
                      <MapPin className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Location Facility</p>
                      <p className="text-xs md:text-sm text-[#0F172A] font-bold leading-relaxed">{branch.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div className="bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-slate-50">
                      <Phone className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Liaison Phone</p>
                      <a href={`tel:${branch.phone}`} className="text-xs md:text-sm text-[#0F172A] font-black hover:text-[#2563EB] transition-colors">{branch.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div className="bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-slate-50">
                      <Mail className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Protocol Email</p>
                      <a href={`mailto:${branch.email}`} className="text-xs md:text-sm text-[#0F172A] font-black hover:text-[#2563EB] transition-colors">{branch.email}</a>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/923000000000?text=Inquiry for ${branch.city} Protocol`}
                  target="_blank"
                  className="inline-flex items-center space-x-3 text-[10px] font-black text-[#0F172A] uppercase tracking-[0.4em] group/btn"
                >
                  <span>Request Directions</span>
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover/btn:bg-[#0F172A] group-hover/btn:text-white transition-colors shadow-sm">
                     <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
              
              <div className="w-full md:w-1/2 h-80 md:h-auto order-1 md:order-2 relative overflow-hidden transition-all duration-700">
                <iframe
                  src={branch.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={`${branch.city} Map`}
                  className="absolute inset-0"
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationCards;

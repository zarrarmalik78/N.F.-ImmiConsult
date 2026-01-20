import React from 'react';
import { motion } from 'framer-motion';
import { HOW_IT_WORKS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black text-[#0F172A] leading-[0.8] mb-8 tracking-tighter uppercase"
            >
              Our Simple <br />
              <span className="text-[#2563EB]">Process</span>.
            </motion.h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">We have a clear 4-step plan to help you get your visa without any stress or confusion.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-12 bg-[#F8FAFC] rounded-[3.5rem] border border-slate-50 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 text-9xl font-black text-[#0F172A]/5 select-none transition-transform group-hover:scale-110">
                {index + 1}
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-[#2563EB] mb-10 group-hover:bg-[#0F172A] group-hover:text-white transition-all duration-500">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-black text-[#0F172A] mb-4 tracking-tight uppercase">{step.title}</h3>
                <p className="text-slate-400 font-medium text-sm leading-relaxed">{step.description}</p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.2, delay: 0.3 + index * 0.1 }}
                  className="h-full bg-[#2563EB]" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
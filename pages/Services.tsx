import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Info, FileText, Briefcase, Heart, Award } from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Tourist Visas',
      icon: <CheckCircle className="w-8 h-8" />,
      description: 'Planning a holiday? We help individuals and families with their tourist visa applications.',
      details: ['Holiday planning help', 'Hotel booking checks', 'Detailed document audit']
    },
    {
      title: 'Business Visas',
      icon: <Briefcase className="w-8 h-8" />,
      description: 'Quick visa support for business trips, meetings, and conferences abroad.',
      details: ['Invitation checks', 'Fast track submission', 'Professional profile help']
    },
    {
      title: 'Family Visits',
      icon: <Heart className="w-8 h-8" />,
      description: 'Visiting your family abroad? We make it easy to gather the right papers to see your loved ones.',
      details: ['Affidavit help', 'Relationship proof check', 'Family visit guidance']
    }
  ];

  const documents = [
    'Valid Passport (6 months+)',
    'National ID Card (CNIC)',
    'Bank Statements (Last 6 months)',
    'Job or Business Proof',
    'Recent Passport Photos',
    'Family Records (FRC/MRC)',
    'Property or Asset Papers'
  ];

  return (
    <div className="py-24 bg-[#F8FAFC] animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-8"
          >
            <Award className="w-4 h-4 text-[#2563EB]" />
            <span className="text-[10px] font-black text-[#2563EB] uppercase tracking-widest">Expert Visa Help</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-[#0F172A] mb-8 tracking-tighter uppercase">Our <span className="text-[#2563EB]">Services</span>.</h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">We help you get your visa by carefully checking every detail of your application before it goes to the embassy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {serviceCategories.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[4rem] shadow-xl shadow-slate-200/50 border border-slate-50 hover:border-[#2563EB]/20 transition-all group"
            >
              <div className="bg-slate-50 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-[#0F172A] group-hover:text-white transition-all text-[#2563EB] shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-[#0F172A] mb-4 tracking-tight uppercase tracking-widest">{service.title}</h3>
              <p className="text-slate-400 text-sm mb-10 leading-relaxed font-medium">{service.description}</p>
              <ul className="space-y-4">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center space-x-3 text-xs text-[#0F172A] font-black uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full"></div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#0F172A] rounded-[5rem] p-12 md:p-24 text-white flex flex-col lg:flex-row gap-20 items-center shadow-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2563EB]/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
          
          <div className="w-full lg:w-1/2 space-y-12 relative z-10">
            <h2 className="text-5xl font-black tracking-tighter leading-none uppercase">Paperwork <br/> <span className="text-[#2563EB]">Checklist</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">Embassies are very strict. We help you organize your documents correctly to make sure your application is accepted.</p>
            <div className="space-y-4">
              {documents.map((doc, idx) => (
                <div key={idx} className="flex items-center space-x-6 bg-white/5 p-5 rounded-3xl border border-white/5 group hover:bg-white/10 transition-colors">
                  <FileText className="w-5 h-5 text-[#2563EB]" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] opacity-80">{doc}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative z-10">
             <div className="bg-white p-12 md:p-16 rounded-[4rem] space-y-10 text-slate-800 shadow-2xl border border-white/10">
                <div className="flex items-center space-x-6 mb-4">
                   <div className="bg-blue-50 p-4 rounded-2xl">
                     <Info className="w-7 h-7 text-[#2563EB]" />
                   </div>
                   <h3 className="text-3xl font-black text-[#0F172A] tracking-tighter uppercase tracking-widest">Expert Advice</h3>
                </div>
                <p className="text-slate-500 leading-relaxed italic text-lg font-medium">
                  "Showing that you intend to return to Pakistan is the most important part. We help you explain your job and family ties clearly so the embassy understands your case."
                </p>
                <div className="pt-10 border-t border-slate-100">
                  <p className="font-black text-[#0F172A] text-xs uppercase tracking-[0.3em] mb-8">Ready to check your file?</p>
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://wa.me/923000000000" 
                    className="block text-center elite-gradient text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-[#0F172A]/20"
                  >
                    Chat with an Expert
                  </motion.a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
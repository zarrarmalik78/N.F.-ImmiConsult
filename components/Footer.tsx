
import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Instagram, Facebook, Twitter, Mail, Phone, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const LOGO_URL = "https://scontent.fisb13-1.fna.fbcdn.net/v/t39.30808-6/305373025_474887374650772_7938957135772979257_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2mYZqPY8rK8Q7kNvwHscHHv&_nc_oc=Adm8BTPerDyXwXmlAAfPwJycyS5VI-8ZKP6rUSbTUTLf8ZgZByhn-thG9PEwYeTJv0k&_nc_zt=23&_nc_ht=scontent.fisb13-1.fna&_nc_gid=sSFYaOV-szF6bh49zXDkPw&oh=00_AfoFb-DJG4TZJXZJ253_OExILMlgA22gQId0mhRJvVpYCA&oe=6974885C";

  return (
    <footer className="bg-[#0F172A] text-white pt-24 md:pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 border-b border-white/5 pb-20 relative z-10">
        <div className="md:col-span-4 space-y-8 md:space-y-10">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-1 rounded-xl shadow-lg shadow-[#2563EB]/20 w-10 h-10 flex items-center justify-center overflow-hidden">
              <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">N.F. <span className="text-[#2563EB]">ImmiConsult</span></span>
          </div>
          <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm uppercase tracking-wider">
            Pakistan's pre-eminent visit visa firm. Specialized in global mobility for high-profile portfolios.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/nfimmiconsult/" target="_blank" rel="noopener noreferrer" className="bg-[#2563EB] p-3 rounded-2xl hover:scale-110 transition-all"><Facebook className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/nfimmiconsult/" target="_blank" rel="noopener noreferrer" className="bg-[#2563EB] p-3 rounded-2xl hover:scale-110 transition-all"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="bg-white/5 p-3 rounded-2xl hover:bg-[#2563EB] transition-all"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6 md:space-y-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Navigation</h4>
          <ul className="space-y-4 md:space-y-5 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400">
            <li><Link to="/" className="hover:text-white transition-colors">Protocol</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Expertise</Link></li>
            <li><Link to="/destinations" className="hover:text-white transition-colors">Portfolios</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Liaison</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-6 md:space-y-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Expertise</h4>
          <ul className="space-y-4 md:space-y-5 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400">
            <li>Tier-1 Tourism</li>
            <li>Corporate Filing</li>
            <li>Family Mobility</li>
            <li>Concierge Audit</li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-8 md:space-y-10">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Elite Intelligence</h4>
          <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">Register for policy audits and embassy protocol updates.</p>
          <div className="flex bg-white/5 rounded-2xl p-2 border border-white/5">
            <input
              type="email"
              placeholder="Corporate Email"
              className="bg-transparent border-none focus:ring-0 text-white px-4 md:px-5 flex-grow text-[10px] font-bold uppercase tracking-widest placeholder:text-slate-600 outline-none"
            />
            <button className="bg-white text-[#0F172A] px-4 md:px-6 py-3 md:py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#2563EB] hover:text-white transition-all">Join</button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 flex flex-col md:flex-row justify-between items-center text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/20 relative z-10 text-center md:text-left">
        <p>&copy; 2024 N.F. ImmiConsult Global. Protocol Secured. Islamabad & Lahore Facilities.</p>
        <div className="flex space-x-6 md:space-x-10 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

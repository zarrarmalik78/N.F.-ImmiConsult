
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Plane, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleBookEvaluation = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const LOGO_URL = "https://scontent.fisb13-1.fna.fbcdn.net/v/t39.30808-6/305373025_474887374650772_7938957135772979257_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2mYZqPY8rK8Q7kNvwHscHHv&_nc_oc=Adm8BTPerDyXwXmlAAfPwJycyS5VI-8ZKP6rUSbTUTLf8ZgZByhn-thG9PEwYeTJv0k&_nc_zt=23&_nc_ht=scontent.fisb13-1.fna&_nc_gid=sSFYaOV-szF6bh49zXDkPw&oh=00_AfoFb-DJG4TZJXZJ253_OExILMlgA22gQId0mhRJvVpYCA&oe=6974885C";

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'glass-header py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.05 }}
            className="bg-white overflow-hidden rounded-xl shadow-xl shadow-[#0F172A]/10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-slate-100"
          >
            <img src={LOGO_URL} alt="N.F. ImmiConsult Logo" className="w-full h-full object-cover" />
          </motion.div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-[#0F172A]">
            N.F. <span className="text-[#2563EB]">ImmiConsult</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-4 py-2 text-xs font-bold transition-all hover:text-[#2563EB] tracking-wide uppercase ${location.pathname === link.path ? 'text-[#2563EB]' : 'text-gray-600'}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div layoutId="navUnderline" className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#2563EB] rounded-full" />
              )}
            </Link>
          ))}
          <div className="pl-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBookEvaluation}
              className="elite-gradient text-white px-7 py-3 rounded-xl text-xs font-black uppercase tracking-widest flex items-center space-x-2 overflow-hidden relative group"
            >
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <span>Book Evaluation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-[#0F172A]" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 bg-white/95 backdrop-blur-3xl rounded-[2rem] shadow-2xl py-8 px-8 mt-2 border border-black/5 flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-black tracking-tight ${location.pathname === link.path ? 'text-[#2563EB]' : 'text-[#0F172A]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleBookEvaluation}
              className="elite-gradient text-white px-6 py-5 rounded-2xl text-center font-black text-sm uppercase tracking-widest shadow-xl shadow-[#0F172A]/20"
            >
              Book Evaluation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; 


const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
    
        <h2 className="text-3xl font-bold mb-2">KeenKeeper</h2>
        <p className="text-gray-300 text-center max-w-md text-sm mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-gray-400 text-center mb-4 font-semibold">
            Social Links
          </p>
          <div className="flex gap-4">
            <a href="" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
              <FaInstagram size={18} />
            </a>
            <a href="" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="Privacy Policy" className="hover:text-white transition">Privacy Policy</a>
            <a href="Terms of Service" className="hover:text-white transition">Terms of Service</a>
            <a href="Cookies" className="hover:text-white transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
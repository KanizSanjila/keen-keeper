"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { House, Clock, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import NavImage from '../../assets/logo.png';

const Navbar = () => {
  const pathname = usePathname();

  const getLinkStyles = (path) => 
    `flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
      pathname === path ? 'bg-[#244D3F] text-white' : 'text-gray-600 hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
         <div className="flex-1">
    <Image src={NavImage} alt='data'></Image>
  </div>

        <div className="flex items-center gap-2">
          <Link href="/" className={getLinkStyles('/')}>
            <House size={18}/> <span className="hidden md:inline">Home</span>
          </Link>
          <Link href="/timeline" className={getLinkStyles('/timeline')}>
            <Clock size={18} /> <span className="hidden md:inline">Timeline</span>
          </Link>
          <Link href="/stats" className={getLinkStyles('/stats')}>
            <BarChart3 size={18} /> <span className="hidden md:inline">Stats</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


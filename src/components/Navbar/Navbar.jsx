import React from 'react';
import Image from 'next/image';
import NavImage from '../../assets/logo.png';
import { RiHome2Line } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import Link from 'next/link';


const Navbar = () => {
  const navItems = [
    {
      path:"/",
      text:"home"
    },
    {
      path:"/",
      text:"stats"
    },
    {
      path:"/",
      text:"timeline"
    }
  ]
    return (
        <div className="navbar bg-base-100 shadow-sm flex">
  <div className="flex-1">
    <Image src={NavImage} alt='data'></Image>
  </div>
  <div className="flex-none">
   <ul className="menu menu-horizontal px-1">
  <li>
    <Link href="/" className="flex items-center gap-1">
      <RiHome2Line /> Home
    </Link>
  </li>

  <li>
    <Link href="/timeline" className="flex items-center gap-1">
      <RiTimeLine /> Timeline
    </Link>
  </li>

  <li>
    <Link href="/stats" className="flex items-center gap-1">
      <ImStatsDots /> Stats
    </Link>
  </li>
</ul>
  </div>
</div>
    );
};

export default Navbar;
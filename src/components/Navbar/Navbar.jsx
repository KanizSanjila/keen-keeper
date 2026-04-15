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
     <Link href={"/"}><li><a><RiHome2Line />Home</a></li></Link>
      <Link href={"/timeline"}><li><a><RiTimeLine />Timeline</a></li></Link>
      <Link href={"/stats"}><li><a><ImStatsDots />Stats</a></li></Link>
    </ul>
  </div>
</div>
    );
};

export default Navbar;
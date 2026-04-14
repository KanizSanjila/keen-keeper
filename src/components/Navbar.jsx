import Image from 'next/image';
import React from 'react';
import NavImage from '../../public/assets/logo.png';
import { RiHome2Line } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm flex">
  <div className="flex-1">
    <Image src={NavImage} alt='data'></Image>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a><RiHome2Line />Home</a></li>
      <li><a><RiTimeLine />Timeline</a></li>
      <li><a><ImStatsDots />Stats</a></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;
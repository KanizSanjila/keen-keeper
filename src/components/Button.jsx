"use client"
import { MdOutlineHistory, MdOutlinePhoneInTalk, MdOutlineTextsms } from "react-icons/md";
import { PiVideoCamera } from "react-icons/pi";
import toast from 'react-hot-toast';
import { useState } from "react";

const Button = ({friend}) => {

    const [count,setCount] = useState(0);
    const handleButton = () => {
        // const load = count + 1;
        // setCount(load)
        // console.log(load)
        toast.success(`Call with ${friend.name}`);
    }
    return (
        <div onClick={()=>handleButton(count)} className="grid grid-cols-3 gap-4">
            <button  className="border border-gray-50 py-6 rounded-xl hover:bg-gray-50 transition flex flex-col items-center gap-2">
                                       <span className="text-xl"><MdOutlinePhoneInTalk /></span>
                                       <span className="font-bold text-gray-600 text-sm">Call</span>
                                   </button>
                                   <button className="border border-gray-50 py-6 rounded-xl hover:bg-gray-50 transition flex flex-col items-center gap-2">
                                       <span className="text-xl"><MdOutlineTextsms /></span>
                                       <span className="font-bold text-gray-600 text-sm">Text</span>
                                   </button>
                                   <button className="border border-gray-50 py-6 rounded-xl hover:bg-gray-50 transition flex flex-col items-center gap-2">
                                       <span className="text-xl"><PiVideoCamera /></span>
                                       <span className="font-bold text-gray-600 text-sm">Video</span>
                                   </button> 
        </div>
    );
};

export default Button;
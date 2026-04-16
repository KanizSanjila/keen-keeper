import Image from 'next/image';
import { FaRegBell } from "react-icons/fa";
import { IoArchiveOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import {MdOutlineHistory, MdOutlinePhoneInTalk,MdOutlineTextsms } from "react-icons/md";
import { PiVideoCamera } from "react-icons/pi";
const AppDetailsPage =async ({params}) => {
     const {friendId} = await params;
    const res =await fetch("http://localhost:3000/data.json")
    const friends = await res.json();
    console.log(friends)
    return (
        <div className='max-w-6xl mx-auto flex gap-4'>
           <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-gray-100 p-8 rounded-4xl shadow-sm text-center">
                    {/* <Image src={friends.picture}></Image> */}
                    <h2 className="text-2xl font-black text-gray-900">Emma Wilson</h2>
                    
                    <div className="my-3 space-y-4">
                        <span className="bg-red-500 text-white text-[10px] px-3 py-1 rounded-full font-bold tracking-wider">Overdue</span>
                        <br />
                        <span className="px-3 bg-emerald-100 text-emerald-700 text-[10px] py-1 rounded-full uppercase font-bold tracking-wider">Family</span>
                    </div>

                    <p className="text-gray-500 italic text-sm mb-1">Former colleague, great mentor</p>
                    <p className="text-xs text-gray-400 font-semibold">Preferred: email</p>
                </div>
                  <div className="space-y-3">
                    <button className="w-full bg-white border border-gray-100 py-4 rounded-xl hover:bg-gray-50 transition font-bold text-gray-700 flex items-center justify-center gap-2">
                        <span><FaRegBell /></span> Snooze 2 Weeks
                    </button>
                    <button className="w-full bg-white border border-gray-100 py-4 rounded-xl hover:bg-gray-50 transition font-bold text-gray-700 flex items-center justify-center gap-2">
                        <span><IoArchiveOutline /></span> Archive
                    </button>
                    <button className="w-full bg-white border border-red-100 py-4 rounded-xl hover:bg-red-50 transition font-bold text-red-500 flex items-center justify-center gap-2">
                        <span><RiDeleteBinLine /></span> Delete
                    </button>
                </div>
            </div> 
           <div className="lg:col-span-8 space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center">
                        <p className="text-4xl font-black text-[#244D3F]">62</p>
                        <p className="text-[10px] text-gray-400 font-black mt-2 tracking-widest">Days Since Contact</p>
                    </div>
                    <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center">
                        <p className="text-4xl font-black text-[#244D3F]">30</p>
                        <p className="text-[10px] text-gray-400 font-black mt-2 tracking-widest">Goal (Days)</p>
                    </div>
                    <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center">
                        <p className="text-xl font-black text-[#244D3F]">Feb 27, 2026</p>
                        <p className="text-[10px] text-gray-400 font-black mt-2 tracking-widest">Next Due</p>
                    </div>
                </div>

                <div className="bg-white border border-gray-100 p-8 rounded-3xl flex justify-between items-center">
                    <div>
                        <h3 className="text-sm font-black text-[#244D3F] tracking-widest mb-2">Relationship Goal</h3>
                        <p className="text-gray-600 font-medium text-sm">Connect every <span className="font-black text-gray-900">30 days</span></p>
                    </div>
                    <button className="text-xs font-bold border border-gray-200 px-4 py-1.5 rounded-lg text-gray-500">Edit</button>
                </div>

                <div className="bg-white border border-gray-100 p-8 rounded-3xl">
                    <h3 className="text-sm font-black text-[#244D3F] tracking-widest mb-6">Quick Check-In</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <button className="border border-gray-50 py-6 rounded-xl hover:bg-gray-50 transition flex flex-col items-center gap-2">
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
                </div>

                <div className="bg-white border border-gray-100 p-8 rounded-3xl">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-sm font-black text-[#244D3F]  tracking-widest">Recent Interactions</h3>
                        <button className="text-[10px] font-black text-gray-400 border px-3 py-1 rounded-md flex items-center gap-1"><MdOutlineHistory /> Full History</button>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="bg-gray-50 p-3 rounded-xl text-lg"><MdOutlineTextsms /></div>
                                <div>
                                    <p className="font-black text-sm text-gray-900">Text</p>
                                    <p className="text-xs text-gray-400 font-bold">Asked for career advice</p>
                                </div>
                            </div>
                            <p className="text-[10px] font-black text-gray-300">JAN 28, 2026</p>
                        </div>
            
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppDetailsPage;

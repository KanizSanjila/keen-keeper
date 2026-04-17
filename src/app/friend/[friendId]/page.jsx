import Image from 'next/image';
import { FaRegBell } from "react-icons/fa";
import { IoArchiveOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineHistory, MdOutlinePhoneInTalk, MdOutlineTextsms } from "react-icons/md";
import { PiVideoCamera } from "react-icons/pi";
import Button from '@/components/Button';

const getData = async () => {
    const res = await fetch(`https://keen-keeper-lac.vercel.app/data.json`,{
        cache:"no-store"
    })
    return res.json()
}
const AppDetailsPage = async ({ params }) => {
    const { friendId } = await params;
    //  console.log(friendId)
    const friends = await getData();
    //  console.log(friends)

    const friend = friends.find(friend => friend.id === parseInt(friendId))
    //   console.log(friend)
    const {name, picture, status, tags, email, goal, next_due_date, days_since_contact, bio } = friend

       const getStatusStyles = (status) => {
    switch (status) {
      case 'overdue': return 'bg-[#EF4444] text-[#FFFFFF]';
      case 'almost-due': return 'bg-[#EFAD44] text-[#FFFFFF]';
      case 'on-track': return 'bg-[#244D3F] text-[#FFFFFF]';
      default: return 'bg-gray-100 text-gray-600';
    }
  };
    return (
        <div className='max-w-6xl mx-auto flex gap-4 mt-10'>
            <div className="lg:col-span-4 space-y-6">
                <div className="bg-white border border-gray-100 p-8 rounded-4xl shadow-sm text-center">
                    <Image className='w-24 h-24 rounded-full mx-auto mb-4 object-cover' width={100} height={100} src={picture} alt={'imahe'}></Image>
                    <h2 className="text-2xl font-black text-gray-900">{name}</h2>

                    <div className="my-3 space-y-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusStyles(friend.status)}`}>{status}</span>
                        <br />
                        <span className="px-3 text-emerald-700 text-[10px] py-1 rounded-full font-bold tracking-wider">{tags[0] ? <button className="bg-green-300 px-4 py-1 rounded-2xl mt-4 mr-2">{tags[0]}</button> : ""}
                            {tags[1] ? <button className="bg-green-300 px-4 py-1 rounded-2xl mt-4">{tags[1]}</button> : ""}</span>
                    </div>

                    <p className="text-gray-500 italic text-sm mb-1">{bio}</p>
                    <p className="text-xs text-gray-400 font-semibold">Preferred: {email}</p>
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
                        <p className="text-4xl font-black text-[#244D3F]">{days_since_contact}</p>
                        <p className="text-[10px] text-gray-400 font-black mt-2 tracking-widest">Days Since Contact</p>
                    </div>
                    <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center">
                        <p className="text-4xl font-black text-[#244D3F]">{goal}</p>
                        <p className="text-[10px] text-gray-400 font-black mt-2 tracking-widest">Goal (Days)</p>
                    </div>
                    <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center">
                        <p className="text-xl font-black text-[#244D3F]">{next_due_date}</p>
                        <p className="text-[10px] text-gray-400 font-black mt-2 tracking-widest">Next Due</p>
                    </div>
                </div>

                <div className="bg-white border border-gray-100 p-8 rounded-3xl flex justify-between items-center">
                    <div>
                        <h3 className="text-sm font-black text-[#244D3F] tracking-widest mb-2">Relationship Goal</h3>
                        <p className="text-gray-600 font-medium text-sm">Connect every <span className="font-black text-gray-900">{goal} days</span></p>
                    </div>
                    <button className="text-xs font-bold border border-gray-200 px-4 py-1.5 rounded-lg text-gray-500">Edit</button>
                </div>

                <div className="bg-white border border-gray-100 p-8 rounded-3xl">
                    <h3 className="text-sm font-black text-[#244D3F] tracking-widest mb-6">Quick Check-In</h3>
                    <div>
                       <Button friend={friend}></Button>
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

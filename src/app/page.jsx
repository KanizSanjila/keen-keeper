import Image from 'next/image';
import Link from 'next/link';
import { IoAdd } from "react-icons/io5";

const HomePage =async () => {
    // console.log(friends)
     const res =await fetch("http://localhost:3000/data.json")
    const friends = await res.json();
    console.log(friends)
    const getStatusStyles = (status) => {
    switch (status) {
      case 'overdue': return 'bg-[#EF4444] text-[#FFFFFF]';
      case 'almost-due': return 'bg-[#EFAD44] text-[#FFFFFF]';
      case 'on-track': return 'bg-[#244D3F] text-[#FFFFFF]';
      default: return 'bg-gray-100 text-gray-600';
    }
  };
    return (
          <div className="min-h-screen bg-gray-100 p-6 text-center pb-20">
      
      
      <h1 className="text-2xl font-bold mb-2">
        Friends to keep close in your life
      </h1>
      <p className="text-gray-500 mb-4">
        Your personal list of meaningful connections. Grow, tend, and nurture the relationships that matter most.
      </p>

      <div className="bg-[#244D3F] text-white px-4 py-2 rounded mb-6 flex items-center justify-center w-2/12 mx-auto text-center gap-2">
        <IoAdd /><p> Add a Friend</p>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">10</h2>
            <p className="text-gray-500 text-sm">Total Friends</p>
          </div>
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">3</h2>
            <p className="text-gray-500 text-sm">On Track</p>
          </div>
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">6</h2>
            <p className="text-gray-500 text-sm">Need Attention</p>
          </div>
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">12</h2>
            <p className="text-gray-500 text-sm">Interactions This Month</p>
          </div>
      </div>

      
      <h2 className="text-left font-semibold mb-4">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {friends.map((friend) => (
          <Link href={`/friend/${friend.id}`}
            key={friend.id}
            className="bg-white p-4 rounded shadow text-center"
          >
               
           <Image width={100} height={100}  className="w-16 h-16 rounded-full mx-auto mb-2" src={friend.picture} alt={friend.name}></Image>

            <h3 className="font-semibold">{friend.name}</h3>
            <p className="text-gray-400 text-sm mb-2">{friend.days_since_contact}d ago</p>

            {friend.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full ml-2">
                      {tag}
                    </span>
                  ))}

            <div className="mt-2">
               
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusStyles(friend.status)}`}>
                {friend.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
    );
};

export default HomePage;
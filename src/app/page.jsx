import Image from 'next/image';
import React from 'react';
const friends = [
 {
    "id": 1,
    "name": "Emma Wilson",
    "picture": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    "email": "emma.w@example.com",
    "days_since_contact": 32,
    "status": "overdue",
    "tags": ["Family", "Close Friend"],
    "bio": "Older sister. Currently working in Chicago as a graphic designer.",
    "goal": 14,
    "next_due_date": "2026-03-15"
  },
  {
    "id": 2,
    "name": "David Kim",
    "picture": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "email": "dkim_dev@example.com",
    "days_since_contact": 5,
    "status": "on-track",
    "tags": ["Work", "Tech"],
    "bio": "Former colleague and great mentor.",
    "goal": 30,
    "next_due_date": "2026-05-08"
  },
  {
    "id": 3,
    "name": "Lisa Nakamura",
    "picture": "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "email": "lisa.nak@travel.com",
    "days_since_contact": 12,
    "status": "almost-due",
    "tags": ["College", "Travel"],
    "bio": "Met during study abroad in Japan.",
    "goal": 14,
    "next_due_date": "2026-04-15"
  },
  {
    "id": 4,
    "name": "James Wright",
    "picture": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    "email": "j.wright@example.com",
    "days_since_contact": 45,
    "status": "overdue",
    "tags": ["Hobby", "Gym"],
    "bio": "Hiking buddy.",
    "goal": 30,
    "next_due_date": "2026-03-01"
  },
  {
    "id": 5,
    "name": "Sarah Chen",
    "picture": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    "email": "sarah.c@design.com",
    "days_since_contact": 2,
    "status": "on-track",
    "tags": ["Art", "Neighbor"],
    "bio": "Local artist.",
    "goal": 7,
    "next_due_date": "2026-04-18"
  },
  {
    "id": 6,
    "name": "Marcus Johnson",
    "picture": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    "email": "marcus.j@business.com",
    "days_since_contact": 20,
    "status": "almost-due",
    "tags": ["Mentorship"],
    "bio": "Career coach.",
    "goal": 25,
    "next_due_date": "2026-04-18"
  },
  {
    "id": 7,
    "name": "Olivia Brown",
    "picture": "https://images.unsplash.com/photo-1521119989659-a83eee488004",
    "email": "olivia.b@example.com",
    "days_since_contact": 28,
    "status": "almost-due",
    "tags": ["Friend"],
    "bio": "Childhood friend.",
    "goal": 30,
    "next_due_date": "2026-04-20"
  },
  {
    "id": 8,
    "name": "Daniel Garcia",
    "picture": "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    "email": "daniel.g@example.com",
    "days_since_contact": 60,
    "status": "overdue",
    "tags": ["Business"],
    "bio": "Business partner.",
    "goal": 30,
    "next_due_date": "2026-02-28"
  }
]
const HomePage = () => {
    // console.log(friends)
    return (
          <div className="min-h-screen bg-gray-100 p-6 text-center pb-20">
      
      
      <h1 className="text-2xl font-bold mb-2">
        Friends to keep close in your life
      </h1>
      <p className="text-gray-500 mb-4">
        Your personal list of meaningful connections. Grow, tend, and nurture the relationships that matter most.
      </p>

      <button className="bg-[#244D3F] text-white px-4 py-2 rounded mb-6">
        + Add a Friend
      </button>

      
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
          <div
            key={friend.id}
            className="bg-white p-4 rounded shadow text-center"
          >
               
           <Image width={100} height={100}  className="w-16 h-16 rounded-full mx-auto mb-2" src={friend.picture} alt={friend.name}></Image>

            <h3 className="font-semibold">{friend.name}</h3>
            <p className="text-gray-400 text-sm mb-2">{friend.days_since_contact}d ago</p>

            <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
              {friend.tags[0]}
            </span>

            <div className="mt-2">
              <span className="text-xs px-2 py-1 bg-red-100 text-red-500 rounded-full">
                {friend.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default HomePage;
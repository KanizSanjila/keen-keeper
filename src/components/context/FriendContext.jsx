"use client";
import { createContext, useState, useEffect } from "react";

export const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([]); // টাইমলাইন স্টেট

  // ইন্টারেকশন অ্যাড করার ফাংশন
  const addInteraction = (friendName, type) => {
    const newEntry = {
      id: Date.now(), // ইউনিক আইডি
      name: friendName,
      type: type, // Call, Text, or Video
      date: new Date().toLocaleDateString('en-GB'), // 17/04/2026 ফরম্যাট
      note: `Had a ${type.toLowerCase()} with ${friendName}`
    };

    // নতুন এন্ট্রি টাইমলাইনের শুরুতে যোগ করা
    setTimeline((prev) => [newEntry, ...prev]);
    
    // কনসোলে চেক করার জন্য (অপশনাল)
    console.log("New interaction added:", newEntry);
  };

  return (
    <FriendContext.Provider value={{ friends, timeline, addInteraction }}>
      {children}
    </FriendContext.Provider>
  );
};
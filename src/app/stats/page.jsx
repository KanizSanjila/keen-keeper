"use client";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Text", value: 40 },
  { name: "Call", value: 30 },
  { name: "Video", value: 30 },
];

const COLORS = ["#7C3AED", "#1F2937", "#10B981"]; 

const StatsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-xl shadow p-6 w-full max-w-2xl mx-auto">
        
        <p className="text-sm text-gray-500 mb-4">
          By Interaction Type
        </p>

        
        <div className="flex justify-center">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}  
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
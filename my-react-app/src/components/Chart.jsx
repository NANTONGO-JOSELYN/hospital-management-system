import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const [sortBy, setSortBy] = useState('monthly');
  
  // Sample data
  const monthlyData = [
    { name: 'Jan', visits: 120 },
    { name: 'Feb', visits: 180 },
    { name: 'Mar', visits: 15 },
    { name: 'Apr', visits: 210 },
    { name: 'May', visits: 190 },
    { name: 'Jun', visits: 220 },
    { name: 'Jul', visits: 100 },
    { name: 'Aug', visits: 200 },
    { name: 'Sep', visits: 210 },
    { name: 'Oct', visits: 180 },
    { name: 'Nov', visits: 160 },
    { name: 'Dec', visits: 140 }
  ];

  const sortedData = [...monthlyData].sort((a, b) => {
    if (sortBy === 'asc') return a.visits - b.visits;
    if (sortBy === 'desc') return b.visits - a.visits;
    return 0; // Default monthly order
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full  mr-70">
      <div className="flex justify-between items-right mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Patient Statistics</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Sort by</span>
          <select 
            className="border border-gray-300 rounded-md px-3 py-1 text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="monthly">Monthly</option>
            <option value="asc">Lowest First</option>
            <option value="desc">Highest First</option>
          </select>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={sortedData}
            margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
          >
            <defs className=''>
              <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0949de" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#0949de" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid  strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="visits" 
              stroke="#6085db" 
              fill="url(#colorVisits)" 
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
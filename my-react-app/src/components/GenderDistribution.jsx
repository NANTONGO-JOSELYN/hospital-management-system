import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Man", value: 1724, percentage: 56 },
  { name: "Woman", value: 1516, percentage: 44 },
];

const COLORS = ["#4285F4", "#34A853"]; // Blue, Green

const totalPatients = data.reduce((sum, entry) => sum + entry.value, 0);

function GenderDistributionChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full h-full ">
      <div className="flex justify-between items-center mb-2 px-1">
        <h2 className="text-lg font-semibold text-gray-700">Gender</h2>
        <span className="text-xs text-gray-400">2019</span>
      </div>

      <div className="flex items-center justify-center">
        {/* Donut Chart */}
        <div className="relative w-[180px] h-[180px]">
          <PieChart width={180} height={180}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  cornerRadius={5}
                />
              ))}
            </Pie>
          </PieChart>

          {/* Center Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-lg font-semibold text-gray-700">
              {totalPatients.toLocaleString()}
            </div>
            <div className="text-xs text-gray-400">Patients this year</div>
          </div>
        </div>

        {/* Legend */}
        <div className="ml-6 space-y-3">
          {data.map((entry, index) => (
            <div key={entry.name} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              <div className="text-sm text-gray-600 font-medium">
                {entry.name}
              </div>
              <div className="text-xs text-gray-500 ml-auto">
                {entry.percentage}% ({entry.value})
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GenderDistributionChart;

import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Excellent", value: 20000 },
  { name: "Good", value: 10000 },
  { name: "Poor", value: 15251 },
];

const COLORS = ["#4285F4", "#FFA726", "#34A853"];

function PatientSatisfactionChart() {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md  h-auto  ">
      <h2 className="text-xl font-semibold text-center mb-2">
        Patient Satisfaction
      </h2>

      {/* Chart and legend in a row */}
      <div className="flex items-center justify-center">
        {/* Chart container */}
        <div className="relative w-[220px] h-[220px]">
          <PieChart width={220} height={220}>
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
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  cornerRadius={10}
                />
              ))}
            </Pie>
          </PieChart>

          {/* Center total */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-gray-500 text-sm">Total</div>
            <div className="text-blue-600 font-bold text-lg">
              {total.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Legend beside chart */}
        <div className="flex flex-col justify-center ml-4">
          {data.map((entry, index) => (
            <div key={entry.name} className="flex items-center mb-2">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: COLORS[index] }}
              />
              <span className="text-gray-600 text-sm">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PatientSatisfactionChart;

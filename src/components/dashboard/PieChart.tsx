
import React from 'react';
import {
  PieChart as ReChartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import { cn } from '@/lib/utils';

const locationData = [
  { name: 'United States', value: 52.1, color: '#121212' },
  { name: 'Canada', value: 22.8, color: '#93c5fd' },
  { name: 'Mexico', value: 13.9, color: '#6ee7b7' },
  { name: 'Other', value: 11.2, color: '#a8a29e' },
];

type PieChartProps = {
  className?: string;
  title: string;
}

const PieChart = ({ className, title }: PieChartProps) => {
  return (
    <div className={cn("chart-container", className)}>
      <h2 className="text-lg font-medium mb-6">{title}</h2>
      <div className="h-72 flex flex-col justify-center">
        <ResponsiveContainer width="100%" height={220}>
          <ReChartsPieChart>
            <Pie
              data={locationData}
              cx="50%"
              cy="50%"
              labelLine={false}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {locationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend 
              layout="vertical" 
              verticalAlign="middle" 
              align="right"
              formatter={(value, entry, index) => {
                return <span className="text-sm">{value}</span>;
              }}
            />
          </ReChartsPieChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-2 px-4">
          {locationData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
              <span className="text-sm">{item.name}</span>
              <span className="text-sm font-medium ml-auto">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;

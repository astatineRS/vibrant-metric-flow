
import React from 'react';
import {
  BarChart as ReChartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { cn } from '@/lib/utils';

const deviceData = [
  { name: 'Linux', value: 15000, color: '#a78bfa' },
  { name: 'Mac', value: 35000, color: '#6ee7b7' },
  { name: 'iOS', value: 25000, color: '#121212' },
  { name: 'Windows', value: 40000, color: '#93c5fd' },
  { name: 'Android', value: 12000, color: '#a8a29e' },
  { name: 'Other', value: 30000, color: '#86efac' },
];

type BarChartProps = {
  className?: string;
  title: string;
}

const BarChart = ({ className, title }: BarChartProps) => {
  return (
    <div className={cn("chart-container", className)}>
      <h2 className="text-lg font-medium mb-6">{title}</h2>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <ReChartsBarChart
            data={deviceData}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
            barCategoryGap={8}
            barGap={8}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis 
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => {
                if (value >= 1000) {
                  return `${value / 1000}k`;
                }
                return value;
              }}
            />
            <Tooltip />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {deviceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </ReChartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChart;

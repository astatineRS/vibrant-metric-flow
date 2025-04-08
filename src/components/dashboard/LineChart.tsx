
import React, { useState } from 'react';
import { 
  LineChart as ReChartsLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { cn } from '@/lib/utils';

const data = {
  totalUsers: [
    { month: 'Jan', thisYear: 10000, lastYear: 8000 },
    { month: 'Feb', thisYear: 12000, lastYear: 9000 },
    { month: 'Mar', thisYear: 18000, lastYear: 15000 },
    { month: 'Apr', thisYear: 26000, lastYear: 18000 },
    { month: 'May', thisYear: 22000, lastYear: 19000 },
    { month: 'Jun', thisYear: 28000, lastYear: 22000 },
    { month: 'Jul', thisYear: 24000, lastYear: 23000 },
  ],
  totalProjects: [
    { month: 'Jan', thisYear: 150, lastYear: 120 },
    { month: 'Feb', thisYear: 180, lastYear: 140 },
    { month: 'Mar', thisYear: 250, lastYear: 180 },
    { month: 'Apr', thisYear: 310, lastYear: 220 },
    { month: 'May', thisYear: 280, lastYear: 260 },
    { month: 'Jun', thisYear: 350, lastYear: 300 },
    { month: 'Jul', thisYear: 330, lastYear: 320 },
  ],
  operatingStatus: [
    { month: 'Jan', online: 98, offline: 2 },
    { month: 'Feb', online: 97, offline: 3 },
    { month: 'Mar', online: 99, offline: 1 },
    { month: 'Apr', online: 96, offline: 4 },
    { month: 'May', online: 98, offline: 2 },
    { month: 'Jun', online: 95, offline: 5 },
    { month: 'Jul', online: 97, offline: 3 },
  ]
};

type ChartTab = 'totalUsers' | 'totalProjects' | 'operatingStatus';

type LineChartProps = {
  className?: string;
}

const LineChart = ({ className }: LineChartProps) => {
  const [activeTab, setActiveTab] = useState<ChartTab>('totalUsers');
  
  const renderChart = () => {
    switch(activeTab) {
      case 'totalUsers':
      case 'totalProjects':
        return (
          <>
            <Line 
              type="monotone" 
              dataKey="thisYear" 
              stroke="#4f46e5" 
              strokeWidth={2} 
              dot={false}
              activeDot={{ r: 6 }}
              name="This year"
            />
            <Line 
              type="monotone" 
              dataKey="lastYear" 
              stroke="#94a3b8" 
              strokeWidth={2} 
              strokeDasharray="5 5" 
              dot={false}
              activeDot={{ r: 6 }}
              name="Last year"
            />
          </>
        );
      case 'operatingStatus':
        return (
          <>
            <Line 
              type="monotone" 
              dataKey="online" 
              stroke="#4f46e5" 
              strokeWidth={2} 
              dot={false}
              activeDot={{ r: 6 }}
              name="Online"
            />
            <Line 
              type="monotone" 
              dataKey="offline" 
              stroke="#ef4444" 
              strokeWidth={2} 
              dot={false}
              activeDot={{ r: 6 }}
              name="Offline"
            />
          </>
        );
    }
  };

  const getChartData = () => {
    return data[activeTab];
  };

  return (
    <div className={cn("chart-container", className)}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium">
          {activeTab === 'totalUsers' ? 'Total Users' : 
           activeTab === 'totalProjects' ? 'Total Projects' : 
           'Operating Status'}
        </h2>
        <div className="flex space-x-1 text-sm">
          <button 
            className={cn(
              "px-3 py-1 rounded-md", 
              activeTab === 'totalUsers' ? "bg-primary text-white" : "hover:bg-muted"
            )}
            onClick={() => setActiveTab('totalUsers')}
          >
            Total Users
          </button>
          <button 
            className={cn(
              "px-3 py-1 rounded-md", 
              activeTab === 'totalProjects' ? "bg-primary text-white" : "hover:bg-muted"
            )}
            onClick={() => setActiveTab('totalProjects')}
          >
            Total Projects
          </button>
          <button 
            className={cn(
              "px-3 py-1 rounded-md", 
              activeTab === 'operatingStatus' ? "bg-primary text-white" : "hover:bg-muted"
            )}
            onClick={() => setActiveTab('operatingStatus')}
          >
            Operating Status
          </button>
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <ReChartsLineChart data={getChartData()} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
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
            <Legend wrapperStyle={{ bottom: 0 }} />
            {renderChart()}
          </ReChartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChart;

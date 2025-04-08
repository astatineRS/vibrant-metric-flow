
import React from 'react';

type WebsiteTrafficItem = {
  name: string;
  value: number;
}

const websiteData: WebsiteTrafficItem[] = [
  { name: 'Google', value: 80 },
  { name: 'YouTube', value: 65 },
  { name: 'Instagram', value: 55 },
  { name: 'Pinterest', value: 40 },
  { name: 'Facebook', value: 35 },
  { name: 'Twitter', value: 25 },
];

const TrafficByWebsite = () => {
  return (
    <div className="chart-container">
      <h2 className="text-lg font-medium mb-6">Traffic by Website</h2>
      <div className="space-y-4">
        {websiteData.map((item, index) => (
          <div key={index} className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span>{item.name}</span>
            </div>
            <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary" 
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficByWebsite;


import React from 'react';
import { cn } from '@/lib/utils';

const activities = [
  {
    user: { 
      name: 'User A', 
      avatar: 'A',
      avatarColor: 'bg-purple-500' 
    },
    action: 'Changed the style.',
    time: 'Just now'
  },
  {
    user: { 
      name: 'User B', 
      avatar: 'B',
      avatarColor: 'bg-orange-500' 
    },
    action: 'Released a new version.',
    time: '59 minutes ago'
  },
  {
    user: { 
      name: 'User C', 
      avatar: 'C',
      avatarColor: 'bg-blue-500' 
    },
    action: 'Submitted a bug.',
    time: '12 hours ago'
  },
  {
    user: { 
      name: 'User D', 
      avatar: 'D',
      avatarColor: 'bg-green-500' 
    },
    action: 'Modified a data in Page X.',
    time: 'Today, 11:59 AM'
  },
  {
    user: { 
      name: 'User E', 
      avatar: 'E',
      avatarColor: 'bg-cyan-500' 
    },
    action: 'Deleted a page in Project X.',
    time: 'Feb 2, 2023'
  }
];

const ActivityFeed = () => {
  return (
    <div className="chart-container">
      <h2 className="text-lg font-medium mb-6">Activities</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-3">
            <div 
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-white", 
                activity.user.avatarColor
              )}
            >
              {activity.user.avatar}
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">{activity.user.name}</span> {activity.action}
              </p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;

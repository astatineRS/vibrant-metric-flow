
import React from 'react';
import { cn } from '@/lib/utils';
import { Bug, UserCheck, Bell } from 'lucide-react';

type NotificationItemProps = {
  icon: React.ReactNode;
  title: string;
  time: string;
  isNew?: boolean;
};

const NotificationItem = ({ icon, title, time, isNew }: NotificationItemProps) => {
  return (
    <div className={cn(
      "p-3 border-b last:border-b-0 flex gap-3",
      isNew && "bg-primary/5"
    )}>
      <div className="mt-0.5">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-sm">{title}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
};

const NotificationsPanel = () => {
  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Notifications</h2>
        <button className="text-xs text-primary">Mark all as read</button>
      </div>
      <div className="divide-y">
        <NotificationItem 
          icon={<Bug size={16} />}
          title="You fixed a bug."
          time="Just now"
          isNew={true}
        />
        <NotificationItem 
          icon={<UserCheck size={16} />}
          title="New user registered."
          time="59 minutes ago"
          isNew={true}
        />
        <NotificationItem 
          icon={<Bug size={16} />}
          title="You fixed a bug."
          time="12 hours ago"
        />
        <NotificationItem 
          icon={<Bell size={16} />}
          title="Andi Lane subscribed to you."
          time="Today, 11:59 AM"
        />
      </div>
    </div>
  );
};

export default NotificationsPanel;

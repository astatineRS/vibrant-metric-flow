
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type OverviewCardProps = {
  title: string;
  value: string;
  change: {
    value: string;
    isPositive: boolean;
  };
}

const OverviewCard = ({ title, value, change }: OverviewCardProps) => {
  return (
    <div className="stats-card">
      <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
      <div className="flex items-baseline justify-between">
        <span className="text-3xl font-bold">{value}</span>
        <div className={cn(
          "flex items-center text-sm font-medium",
          change.isPositive ? "text-green-600" : "text-red-600"
        )}>
          {change.isPositive ? (
            <ArrowUp size={16} className="mr-1" />
          ) : (
            <ArrowDown size={16} className="mr-1" />
          )}
          <span>{change.value}</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;


import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import OverviewCard from '@/components/dashboard/OverviewCard';
import LineChart from '@/components/dashboard/LineChart';
import BarChart from '@/components/dashboard/BarChart';
import PieChart from '@/components/dashboard/PieChart';
import TrafficByWebsite from '@/components/dashboard/TrafficByWebsite';
import NotificationsPanel from '@/components/dashboard/NotificationsPanel';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import ContactList from '@/components/dashboard/ContactList';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-2xl font-bold">Overview</h1>
          <div className="mt-2 sm:mt-0">
            <select className="px-3 py-1.5 bg-white dark:bg-card border border-border rounded-md text-sm">
              <option>Today</option>
              <option>Yesterday</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>This month</option>
              <option>Last month</option>
            </select>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <OverviewCard 
            title="Views"
            value="7,265"
            change={{ value: "+11.01%", isPositive: true }}
          />
          <OverviewCard 
            title="Visits"
            value="3,671"
            change={{ value: "-0.03%", isPositive: false }}
          />
          <OverviewCard 
            title="New Users"
            value="156"
            change={{ value: "+15.03%", isPositive: true }}
          />
          <OverviewCard 
            title="Active Users"
            value="2,318"
            change={{ value: "+6.08%", isPositive: true }}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <LineChart />
          </div>
          <div>
            <TrafficByWebsite />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <BarChart title="Traffic by Device" />
          <PieChart title="Traffic by Location" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <NotificationsPanel />
          <ActivityFeed />
          <ContactList />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;

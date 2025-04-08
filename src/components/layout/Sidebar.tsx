
import React from 'react';
import { 
  LayoutDashboard, ShoppingBag, FolderKanban, UserCircle, 
  FileText, Megaphone, ScrollText, Users, Settings, Building2,
  BookOpen, Share2, Star, Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

type SidebarItemProps = {
  icon: React.ElementType;
  text: string;
  isActive?: boolean;
  href?: string;
  hasChildren?: boolean;
}

const SidebarItem = ({ icon: Icon, text, isActive = false, href = "#", hasChildren = false }: SidebarItemProps) => {
  return (
    <li>
      <a 
        href={href} 
        className={cn(
          "sidebar-item",
          isActive && "active"
        )}
      >
        <Icon size={18} />
        <span>{text}</span>
        {hasChildren && (
          <span className="ml-auto text-xs opacity-60">→</span>
        )}
      </a>
    </li>
  );
};

const SidebarSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className="mt-6 first:mt-0">
      <h2 className="px-3 mb-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
        {title}
      </h2>
      <ul className="space-y-1">
        {children}
      </ul>
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-60 min-h-screen bg-sidebar border-r border-border overflow-y-auto">
      <div className="flex items-center h-14 px-3 border-b border-border font-semibold">
        <span className="text-xl">ByeWind</span>
      </div>
      
      <div className="flex-1 px-3 py-4">
        <SidebarSection title="Favorites">
          <SidebarItem icon={LayoutDashboard} text="Overview" isActive={true} />
          <SidebarItem icon={FolderKanban} text="Projects" />
        </SidebarSection>

        <SidebarSection title="Dashboards">
          <SidebarItem icon={LayoutDashboard} text="Overview" isActive={true} />
          <SidebarItem icon={ShoppingBag} text="eCommerce" />
          <SidebarItem icon={FolderKanban} text="Projects" />
        </SidebarSection>

        <SidebarSection title="Pages">
          <SidebarItem icon={UserCircle} text="User Profile" hasChildren />
          <SidebarItem icon={LayoutDashboard} text="Overview" />
          <SidebarItem icon={FolderKanban} text="Projects" />
          <SidebarItem icon={Megaphone} text="Campaigns" />
          <SidebarItem icon={ScrollText} text="Documents" />
          <SidebarItem icon={Users} text="Followers" />
        </SidebarSection>

        <SidebarSection title="">
          <SidebarItem icon={Settings} text="Account" hasChildren />
          <SidebarItem icon={Building2} text="Corporate" hasChildren />
          <SidebarItem icon={BookOpen} text="Blog" hasChildren />
          <SidebarItem icon={Share2} text="Social" hasChildren />
        </SidebarSection>
      </div>
    </aside>
  );
};

export default Sidebar;

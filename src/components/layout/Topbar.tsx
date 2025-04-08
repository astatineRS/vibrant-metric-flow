
import React, { useState } from 'react';
import { 
  Search, Sun, Moon, Bell, ChevronDown, Menu 
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Topbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <header className="sticky top-0 z-30 w-full h-14 bg-background border-b border-border flex items-center px-4 gap-4">
      <button className="md:hidden text-foreground p-1">
        <Menu size={20} />
      </button>

      {/* Breadcrumb */}
      <div className="hidden md:flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Dashboards</span>
        <span className="text-muted-foreground">/</span>
        <span>Default</span>
      </div>

      <div className="flex-1"></div>

      {/* Search */}
      <div className={`relative ${isSearchFocused ? 'w-64' : 'w-40'} transition-all duration-300`}>
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input 
          type="text" 
          className="w-full h-9 pl-8 pr-4 bg-transparent border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Search..." 
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
      </div>

      {/* Theme toggle */}
      <button onClick={toggleTheme} className="p-2 text-foreground hover:bg-muted rounded-md">
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Notifications */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-2 text-foreground hover:bg-muted rounded-md relative">
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80">
          <div className="flex items-center justify-between px-4 py-2 border-b">
            <h3 className="font-medium">Notifications</h3>
            <button className="text-xs text-primary">Mark all as read</button>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {/* Notification items here */}
          </div>
          <div className="p-2 border-t">
            <button className="w-full py-1.5 px-2 bg-primary/10 text-primary rounded-md text-sm">
              View all notifications
            </button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* User profile */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 hover:bg-muted p-1 rounded-md">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
              U
            </div>
            <ChevronDown size={16} className="text-muted-foreground" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Topbar;

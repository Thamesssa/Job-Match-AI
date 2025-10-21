import React from 'react';
import { Home, Search, Bookmark, User, Bell } from 'lucide-react';

interface BottomNavProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export default function BottomNav({ activeScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'saved', icon: Bookmark, label: 'Saved' },
    { id: 'notifications', icon: Bell, label: 'Alerts' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-pb">
      <div className="flex items-center justify-around py-2 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-[#0078D7] bg-[#0078D7]/10'
                  : 'text-gray-600 hover:text-[#0078D7] hover:bg-gray-50'
              }`}
            >
              <Icon 
                className={`w-6 h-6 mb-1 ${isActive ? 'text-[#0078D7]' : 'text-gray-600'}`} 
              />
              <span className={`text-xs font-medium ${
                isActive ? 'text-[#0078D7]' : 'text-gray-600'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

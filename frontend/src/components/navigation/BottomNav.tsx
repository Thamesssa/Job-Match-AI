'use client';

interface BottomNavProps {
  active: string;
  onNavigate: (screen: string) => void;
}

export default function BottomNav({ active, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'search', label: 'Search' },
    { id: 'saved', label: 'Saved' },
    { id: 'profile', label: 'Profile' },
  ];

  const getIcon = (navId: string) => {
    const icons = {
      home: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      search: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      saved: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      ),
      profile: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    };
    return icons[navId as keyof typeof icons];
  };

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md">
      <nav className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="px-4 py-2">
          <div className="flex justify-around items-center">
            {navItems.map((item) => {
              const isActive = active === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors ${
                    isActive ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className={`transition-colors ${
                    isActive ? 'text-[#0078D7] dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'
                  }`}>
                    {getIcon(item.id)}
                  </div>
                  <span 
                    className={`text-xs font-medium ${
                      isActive ? 'text-[#0078D7] dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
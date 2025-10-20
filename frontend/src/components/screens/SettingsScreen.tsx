'use client';

interface SettingsScreenProps {
  onNavigate: (screen: string) => void;
}

export default function SettingsScreen({ onNavigate }: SettingsScreenProps) {
  const settingsItems = [
    {
      label: 'Edit Profile',
      subtitle: 'Update your personal information',
      action: () => onNavigate('profile-setup')
    },
    {
      label: 'Notifications',
      subtitle: 'Manage notification preferences',
      action: () => onNavigate('notifications')
    },
    {
      label: 'Privacy & Security',
      subtitle: 'Control your privacy settings',
      action: () => console.log('Privacy settings')
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm p-4">
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={() => onNavigate('home')}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            title="Go back"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        </div>

        {/* Profile Summary */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">John Doe</h2>
            <p className="text-gray-600 dark:text-gray-400">Software Developer</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Settings Items */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          {settingsItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0"
            >
              <div className="flex-1 text-left">
                <p className="font-medium text-gray-900 dark:text-white">{item.label}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</p>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>

        {/* Logout */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <button
            onClick={() => onNavigate('welcome')}
            className="w-full flex items-center gap-4 p-4 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-red-600 dark:text-red-400"
          >
            <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <p className="font-medium">Sign Out</p>
              <p className="text-sm opacity-70">Sign out of your account</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
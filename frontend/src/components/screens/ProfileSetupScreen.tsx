'use client';

interface ProfileSetupScreenProps {
  onNavigate: (screen: string) => void;
}

export default function ProfileSetupScreen({ onNavigate }: ProfileSetupScreenProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Profile Setup</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Profile setup form will be implemented here</p>
        <button
          onClick={() => onNavigate('home')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Continue to Home
        </button>
      </div>
    </div>
  );
}
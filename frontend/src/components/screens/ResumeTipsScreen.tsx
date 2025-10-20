'use client';

interface ResumeTipsScreenProps {
  onNavigate: (screen: string) => void;
}

export default function ResumeTipsScreen({ onNavigate }: ResumeTipsScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <div className="bg-white dark:bg-gray-800 shadow-sm p-4">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => onNavigate('home')}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            title="Go back"
          >
            <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Resume Tips</h1>
        </div>
      </div>
      
      <div className="p-4 text-center">
        <p className="text-gray-600 dark:text-gray-400">Resume tips and career advice will be implemented here</p>
      </div>
    </div>
  );
}
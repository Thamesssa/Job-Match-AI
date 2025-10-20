'use client';

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block w-8 h-8 border-4 border-indigo-600 border-r-transparent rounded-full animate-spin mb-4"></div>
        <h2 className="text-lg font-medium text-gray-900">Loading...</h2>
        <p className="text-gray-500">Please wait while we load the content</p>
      </div>
    </div>
  );
}
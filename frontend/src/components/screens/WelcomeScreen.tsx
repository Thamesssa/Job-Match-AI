'use client';

import { Button } from '@/components/ui/Button';

interface WelcomeScreenProps {
  onNavigate: (screen: string) => void;
}

export default function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      {/* Header */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Welcome to JobMatch AI</h1>
          <p className="text-lg opacity-90 leading-relaxed">
            Find your dream job with AI-powered matching. Connect with top employers and discover opportunities tailored to your skills.
          </p>
        </div>

        <div className="w-full max-w-sm space-y-4">
          <Button 
            className="w-full bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => onNavigate('login')}
          >
            Sign In
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full border-white text-white hover:bg-white/10"
            onClick={() => onNavigate('register')}
          >
            Create Account
          </Button>
        </div>

        <div className="mt-8 text-center">
          <button 
            className="text-white/80 hover:text-white underline text-sm"
            onClick={() => onNavigate('home')}
          >
            Continue as Guest
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="px-6 pb-8">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <p className="text-xs opacity-80">AI Matching</p>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
            </div>
            <p className="text-xs opacity-80">Resume Builder</p>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <p className="text-xs opacity-80">Top Jobs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
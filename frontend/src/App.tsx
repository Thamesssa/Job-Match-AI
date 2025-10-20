'use client';

import { useState } from 'react';
import WelcomeScreen from './components/screens/WelcomeScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ProfileSetupScreen from './components/screens/ProfileSetupScreen';
import JobListingsScreen from './components/screens/JobListingsScreen';
import JobDetailsScreen from './components/screens/JobDetailsScreen';
import SavedJobsScreen from './components/screens/SavedJobsScreen';
import NotificationsScreen from './components/screens/NotificationsScreen';
import ResumeTipsScreen from './components/screens/ResumeTipsScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import BottomNav from './components/navigation/BottomNav';
import { Job } from './lib/types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [activeNavItem, setActiveNavItem] = useState('home');

  const handleNavigate = (screen: string, data?: Job) => {
    setCurrentScreen(screen);
    if (data) {
      setSelectedJob(data);
    }
    
    // Update bottom nav state based on screen
    if (screen === 'home') setActiveNavItem('home');
    else if (screen === 'saved') setActiveNavItem('saved');
    else if (screen === 'profile') setActiveNavItem('profile');
    else if (screen === 'search') setActiveNavItem('search');
  };

  const handleBottomNavigation = (navId: string) => {
    setActiveNavItem(navId);
    
    // Map navigation IDs to screens
    const screenMap: Record<string, string> = {
      'home': 'home',
      'search': 'home', // Search functionality is part of home screen
      'saved': 'saved',
      'profile': 'profile'
    };
    
    const targetScreen = screenMap[navId];
    if (targetScreen) {
      setCurrentScreen(targetScreen);
    }
  };

  // Show bottom nav only on main screens
  const showBottomNav = ['home', 'saved', 'profile', 'notifications', 'resume-tips'].includes(currentScreen);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Main Content Area - Mobile Frame */}
      <div className="max-w-md mx-auto bg-white dark:bg-gray-900 min-h-screen shadow-2xl relative">
        {/* Screen Routing */}
        {currentScreen === 'welcome' && (
          <WelcomeScreen onNavigate={handleNavigate} />
        )}
        
        {currentScreen === 'login' && (
          <LoginScreen onNavigate={handleNavigate} />
        )}
        
        {currentScreen === 'register' && (
          <RegisterScreen onNavigate={handleNavigate} />
        )}
        
        {currentScreen === 'profile-setup' && (
          <ProfileSetupScreen onNavigate={handleNavigate} />
        )}
        
        {currentScreen === 'home' && (
          <JobListingsScreen onNavigate={handleNavigate} />
        )}
        
        {currentScreen === 'job-details' && selectedJob && (
          <JobDetailsScreen job={selectedJob} onNavigate={handleNavigate} />
        )}
        
        {currentScreen === 'saved' && (
          <SavedJobsScreen onNavigate={handleNavigate} />
        )}
        
        {currentScreen === 'notifications' && (
          <NotificationsScreen onNavigate={handleNavigate} />
        )}
        
        {currentScreen === 'resume-tips' && (
          <ResumeTipsScreen onNavigate={handleNavigate} />
        )}
        
        {currentScreen === 'profile' && (
          <SettingsScreen onNavigate={handleNavigate} />
        )}

        {/* Bottom Navigation */}
        {showBottomNav && (
          <BottomNav active={activeNavItem} onNavigate={handleBottomNavigation} />
        )}
      </div>

      {/* Floating Action Buttons - Only show on home screen */}
      {currentScreen === 'home' && (
        <>
          {/* Quick Access FAB for Resume Tips */}
          <div className="fixed bottom-20 right-8 max-w-md mx-auto">
            <button
              onClick={() => handleNavigate('resume-tips')}
              className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 flex items-center gap-2"
              title="Career Tips"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </button>
          </div>

          {/* Notification Bell */}
          <div className="fixed top-6 right-8 max-w-md mx-auto">
            <button
              onClick={() => handleNavigate('notifications')}
              className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 p-3 rounded-full shadow-md transition-all hover:scale-110 relative"
              title="Notifications"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">2</span>
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
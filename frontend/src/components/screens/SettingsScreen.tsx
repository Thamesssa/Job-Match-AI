import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Switch } from '../ui/Switch';
import { 
  User, 
  Bell, 
  Shield, 
  Moon, 
  Globe, 
  HelpCircle, 
  LogOut, 
  ChevronRight,
  Mail,
  Smartphone,
  Eye,
  Lock
} from 'lucide-react';

interface SettingsScreenProps {
  onNavigate: (screen: string) => void;
}

export default function SettingsScreen({ onNavigate }: SettingsScreenProps) {
  const [settings, setSettings] = useState({
    // Notification Settings
    emailNotifications: true,
    pushNotifications: true,
    jobAlerts: true,
    applicationUpdates: true,
    marketingEmails: false,
    
    // Privacy Settings
    profileVisible: true,
    showSalaryRange: false,
    
    // App Settings
    darkMode: false,
    language: 'en'
  });

  const toggleSetting = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const handleLogout = () => {
    // Handle logout logic
    onNavigate('login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b">
        <h1 className="text-2xl">Settings</h1>
      </div>

      <div className="px-6 py-4 space-y-4">
        {/* Profile Section */}
        <Card className="p-0 bg-white rounded-xl overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg flex items-center gap-2">
              <User className="w-5 h-5 text-[#0078D7]" />
              Profile & Account
            </h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            <button
              onClick={() => onNavigate('profile')}
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <span>Edit Profile</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            
            <button
              onClick={() => onNavigate('account')}
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-gray-400" />
                <span>Account Security</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="p-0 bg-white rounded-xl overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg flex items-center gap-2">
              <Bell className="w-5 h-5 text-[#0078D7]" />
              Notifications
            </h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <span className="block">Email Notifications</span>
                  <span className="text-sm text-gray-500">Receive updates via email</span>
                </div>
              </div>
              <Switch 
                checked={settings.emailNotifications}
                onChange={() => toggleSetting('emailNotifications')}
              />
            </div>
            
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-gray-400" />
                <div>
                  <span className="block">Push Notifications</span>
                  <span className="text-sm text-gray-500">Get notified on your device</span>
                </div>
              </div>
              <Switch 
                checked={settings.pushNotifications}
                onChange={() => toggleSetting('pushNotifications')}
              />
            </div>
            
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-400" />
                <div>
                  <span className="block">Job Alerts</span>
                  <span className="text-sm text-gray-500">New job matches for you</span>
                </div>
              </div>
              <Switch 
                checked={settings.jobAlerts}
                onChange={() => toggleSetting('jobAlerts')}
              />
            </div>
            
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <span className="block">Application Updates</span>
                  <span className="text-sm text-gray-500">Status changes on your applications</span>
                </div>
              </div>
              <Switch 
                checked={settings.applicationUpdates}
                onChange={() => toggleSetting('applicationUpdates')}
              />
            </div>
            
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <span className="block">Marketing Emails</span>
                  <span className="text-sm text-gray-500">Tips, features, and promotions</span>
                </div>
              </div>
              <Switch 
                checked={settings.marketingEmails}
                onChange={() => toggleSetting('marketingEmails')}
              />
            </div>
          </div>
        </Card>

        {/* Privacy Settings */}
        <Card className="p-0 bg-white rounded-xl overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#0078D7]" />
              Privacy
            </h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-gray-400" />
                <div>
                  <span className="block">Profile Visibility</span>
                  <span className="text-sm text-gray-500">Let recruiters find you</span>
                </div>
              </div>
              <Switch 
                checked={settings.profileVisible}
                onChange={() => toggleSetting('profileVisible')}
              />
            </div>
            
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-400" />
                <div>
                  <span className="block">Show Salary Range</span>
                  <span className="text-sm text-gray-500">Display your expected salary</span>
                </div>
              </div>
              <Switch 
                checked={settings.showSalaryRange}
                onChange={() => toggleSetting('showSalaryRange')}
              />
            </div>
          </div>
        </Card>

        {/* App Settings */}
        <Card className="p-0 bg-white rounded-xl overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#0078D7]" />
              App Settings
            </h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Moon className="w-5 h-5 text-gray-400" />
                <div>
                  <span className="block">Dark Mode</span>
                  <span className="text-sm text-gray-500">Switch to dark theme</span>
                </div>
              </div>
              <Switch 
                checked={settings.darkMode}
                onChange={() => toggleSetting('darkMode')}
              />
            </div>
            
            <button
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-400" />
                <div className="text-left">
                  <span className="block">Language</span>
                  <span className="text-sm text-gray-500">English (US)</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </Card>

        {/* Support Section */}
        <Card className="p-0 bg-white rounded-xl overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0078D7]" />
              Support
            </h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            <button
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-gray-400" />
                <span>Help Center</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            
            <button
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span>Contact Support</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            
            <button
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-400" />
                <span>Privacy Policy</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            
            <button
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-gray-400" />
                <span>Terms of Service</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </Card>

        {/* Logout */}
        <Card className="p-4 bg-white rounded-xl">
          <Button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </Button>
        </Card>

        {/* App Version */}
        <div className="text-center py-4">
          <p className="text-sm text-gray-500">JobMatch AI v1.0.0</p>
        </div>
      </div>
    </div>
  );
}

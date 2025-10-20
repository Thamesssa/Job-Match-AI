'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function CandidateDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome to your Dashboard
        </h1>
        <p className="text-gray-600 mb-4">
          Find your dream job with AI-powered matching and personalized recommendations.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/jobs">
            <Button>
              Browse Jobs
            </Button>
          </Link>
          <Link href="/candidate/profile">
            <Button variant="outline">
              Update Profile
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl">📄</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Applications</h3>
              <p className="text-2xl font-bold text-indigo-600">12</p>
              <p className="text-sm text-gray-500">This month</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl">👀</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Profile Views</h3>
              <p className="text-2xl font-bold text-green-600">48</p>
              <p className="text-sm text-gray-500">This week</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl">⭐</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Match Score</h3>
              <p className="text-2xl font-bold text-yellow-600">85%</p>
              <p className="text-sm text-gray-500">Average</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Applied to Senior Frontend Developer at TechCorp
                </p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Your profile was viewed by StartupXYZ
                </p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Updated your resume
                </p>
                <p className="text-sm text-gray-500">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recommended Jobs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recommended Jobs</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-gray-900">Full Stack Developer</h3>
              <p className="text-sm text-gray-600">InnovateTech Solutions</p>
              <p className="text-sm text-gray-500 mt-1">Cape Town, South Africa • Full-time</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm font-medium text-green-600">95% match</span>
                <Button size="sm">View Job</Button>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-gray-900">React Developer</h3>
              <p className="text-sm text-gray-600">Digital Solutions Inc</p>
              <p className="text-sm text-gray-500 mt-1">Johannesburg, South Africa • Remote</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm font-medium text-green-600">88% match</span>
                <Button size="sm">View Job</Button>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <Link href="/jobs">
              <Button variant="outline">View All Jobs</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
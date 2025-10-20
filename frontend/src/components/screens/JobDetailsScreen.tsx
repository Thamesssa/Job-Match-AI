'use client';

import { Job } from '@/lib/types';

interface JobDetailsScreenProps {
  job: Job;
  onNavigate: (screen: string) => void;
}

export default function JobDetailsScreen({ job, onNavigate }: JobDetailsScreenProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="p-4">
        <button
          onClick={() => onNavigate('home')}
          className="mb-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          title="Go back"
        >
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{job.company}</p>
        <p className="text-gray-500 dark:text-gray-500 mb-6">{job.location}</p>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h2>
            <p className="text-gray-600 dark:text-gray-400">{job.description}</p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="pt-6">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
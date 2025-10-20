'use client';

import { useState, useEffect } from 'react';
import { Job } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface JobListingsScreenProps {
  onNavigate: (screen: string, data?: any) => void;
}

export default function JobListingsScreen({ onNavigate }: JobListingsScreenProps) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setJobs([
        {
          id: '1',
          title: 'Senior Frontend Developer',
          company: 'TechCorp Solutions',
          location: 'Cape Town, South Africa',
          jobType: 'FULL_TIME',
          experienceLevel: 'SENIOR',
          salaryMin: 70000,
          salaryMax: 90000,
          salaryCurrency: 'ZAR',
          description: 'We are looking for a Senior Frontend Developer to join our team...',
          requirements: ['React', 'TypeScript', '5+ years experience'],
          skills: ['React', 'TypeScript', 'Next.js'],
          postedAt: new Date(),
          updatedAt: new Date(),
          isActive: true
        },
        {
          id: '2',
          title: 'Full Stack Developer',
          company: 'StartupHub',
          location: 'Johannesburg, South Africa',
          jobType: 'FULL_TIME',
          experienceLevel: 'MID_LEVEL',
          salaryMin: 60000,
          salaryMax: 80000,
          salaryCurrency: 'ZAR',
          description: 'Join our growing team as a Full Stack Developer...',
          requirements: ['Node.js', 'React', '3+ years experience'],
          skills: ['Node.js', 'React', 'MongoDB'],
          postedAt: new Date(),
          updatedAt: new Date(),
          isActive: true
        },
        {
          id: '3',
          title: 'DevOps Engineer',
          company: 'CloudTech Ltd',
          location: 'Remote, South Africa',
          jobType: 'FULL_TIME',
          experienceLevel: 'SENIOR',
          salaryMin: 85000,
          salaryMax: 110000,
          salaryCurrency: 'ZAR',
          description: 'Looking for an experienced DevOps Engineer...',
          requirements: ['AWS', 'Docker', 'Kubernetes'],
          skills: ['AWS', 'Docker', 'Terraform'],
          postedAt: new Date(),
          updatedAt: new Date(),
          isActive: true
        }
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm p-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Find Your Dream Job</h1>
        <Input
          placeholder="Search jobs, companies, locations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm animate-pulse">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-1"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onNavigate('job-details', job)}
              >
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">{job.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{job.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">{job.location}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {job.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    R{job.salaryMin?.toLocaleString()} - R{job.salaryMax?.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-500">2 days ago</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
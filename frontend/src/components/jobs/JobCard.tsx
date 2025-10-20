'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { formatCurrency, formatRelativeTime } from '@/lib/utils';
import { Job } from '@/lib/types';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const getJobTypeLabel = (jobType: string) => {
    const labels: Record<string, string> = {
      'FULL_TIME': 'Full-time',
      'PART_TIME': 'Part-time',
      'CONTRACT': 'Contract',
      'REMOTE': 'Remote'
    };
    return labels[jobType] || jobType;
  };

  const getExperienceLevelLabel = (level: string) => {
    const labels: Record<string, string> = {
      'ENTRY': 'Entry Level',
      'MID': 'Mid Level',
      'SENIOR': 'Senior Level',
      'EXECUTIVE': 'Executive'
    };
    return labels[level] || level;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <Link href={`/jobs/${job.id}`}>
                <h2 className="text-xl font-semibold text-gray-900 hover:text-indigo-600 cursor-pointer">
                  {job.title}
                </h2>
              </Link>
              <p className="text-gray-600 mt-1">{job.company}</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                <span>📍 {job.location}</span>
                <span>💼 {getJobTypeLabel(job.jobType)}</span>
                <span>📊 {getExperienceLevelLabel(job.experienceLevel)}</span>
                <span>⏰ {formatRelativeTime(new Date(job.postedAt || job.createdAt))}</span>
              </div>
            </div>
            
            <div className="text-right">
              {job.salaryMin && job.salaryMax && (
                <p className="text-lg font-semibold text-green-600">
                  {formatCurrency(job.salaryMin)} - {formatCurrency(job.salaryMax)}
                </p>
              )}
            </div>
          </div>
          
          <p className="text-gray-700 mt-3 line-clamp-2">
            {job.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {job.skills.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {skill}
              </span>
            ))}
            {job.skills.length > 4 && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                +{job.skills.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
        <div className="flex space-x-3">
          <Button size="sm" variant="outline">
            💾 Save
          </Button>
          <Link href={`/jobs/${job.id}`}>
            <Button size="sm" variant="outline">
              View Details
            </Button>
          </Link>
        </div>
        <Button size="sm">
          Apply Now
        </Button>
      </div>
    </div>
  );
}
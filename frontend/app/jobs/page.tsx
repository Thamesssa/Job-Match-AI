'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { formatCurrency, formatRelativeTime } from '@/lib/utils';

// Mock job data
const mockJobs = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'Cape Town, South Africa',
    jobType: 'FULL_TIME',
    experienceLevel: 'SENIOR',
    salaryMin: 60000,
    salaryMax: 90000,
    salaryCurrency: 'ZAR',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    description: 'We are looking for a Senior Frontend Developer to join our growing team...',
    postedAt: '2024-01-15T10:00:00Z',
    active: true
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'InnovateTech',
    location: 'Johannesburg, South Africa',
    jobType: 'REMOTE',
    experienceLevel: 'MID',
    salaryMin: 45000,
    salaryMax: 70000,
    salaryCurrency: 'ZAR',
    skills: ['Node.js', 'React', 'PostgreSQL', 'Docker'],
    description: 'Join our remote-first team and help build the next generation of web applications...',
    postedAt: '2024-01-14T09:30:00Z',
    active: true
  },
  {
    id: '3',
    title: 'React Developer',
    company: 'Digital Solutions Inc',
    location: 'Durban, South Africa',
    jobType: 'CONTRACT',
    experienceLevel: 'MID',
    salaryMin: 35000,
    salaryMax: 55000,
    salaryCurrency: 'ZAR',
    skills: ['React', 'JavaScript', 'CSS', 'Redux'],
    description: '6-month contract position for an experienced React developer...',
    postedAt: '2024-01-13T14:15:00Z',
    active: true
  }
];

interface JobFilters {
  search: string;
  location: string;
  jobType: string;
  experienceLevel: string;
}

export default function JobListingsPage() {
  const [filters, setFilters] = useState<JobFilters>({
    search: '',
    location: '',
    jobType: '',
    experienceLevel: ''
  });
  
  const [jobs] = useState(mockJobs);

  const handleFilterChange = (field: keyof JobFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const filteredJobs = jobs.filter(job => {
    return (
      (filters.search === '' || 
       job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
       job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
       job.skills.some(skill => skill.toLowerCase().includes(filters.search.toLowerCase()))
      ) &&
      (filters.location === '' || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.jobType === '' || job.jobType === filters.jobType) &&
      (filters.experienceLevel === '' || job.experienceLevel === filters.experienceLevel)
    );
  });

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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Dream Job</h1>
          <p className="text-gray-600">
            Discover opportunities that match your skills and interests
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Input
              placeholder="Search jobs, companies, skills..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
            />
            
            <Input
              placeholder="Location"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            />
            
            <select
              className="rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              value={filters.jobType}
              onChange={(e) => handleFilterChange('jobType', e.target.value)}
            >
              <option value="">All Job Types</option>
              <option value="FULL_TIME">Full-time</option>
              <option value="PART_TIME">Part-time</option>
              <option value="CONTRACT">Contract</option>
              <option value="REMOTE">Remote</option>
            </select>
            
            <select
              className="rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              value={filters.experienceLevel}
              onChange={(e) => handleFilterChange('experienceLevel', e.target.value)}
            >
              <option value="">All Experience Levels</option>
              <option value="ENTRY">Entry Level</option>
              <option value="MID">Mid Level</option>
              <option value="SENIOR">Senior Level</option>
              <option value="EXECUTIVE">Executive</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
          </p>
          <select className="rounded-md border border-gray-300 px-3 py-2 text-sm">
            <option>Sort by: Most Recent</option>
            <option>Sort by: Salary (High to Low)</option>
            <option>Sort by: Salary (Low to High)</option>
            <option>Sort by: Company Name</option>
          </select>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
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
                        <span>⏰ {formatRelativeTime(new Date(job.postedAt))}</span>
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
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <Button variant="outline" disabled>
              Previous
            </Button>
            <Button variant="outline">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import { Input } from '@/components/ui/Input';
import { JobFilters } from '@/lib/types';

interface JobFilterProps {
  filters: JobFilters;
  onFilterChange: (field: keyof JobFilters, value: string) => void;
}

export default function JobFilter({ filters, onFilterChange }: JobFilterProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Input
          placeholder="Search jobs, companies, skills..."
          value={filters.search || ''}
          onChange={(e) => onFilterChange('search', e.target.value)}
        />
        
        <Input
          placeholder="Location"
          value={filters.location || ''}
          onChange={(e) => onFilterChange('location', e.target.value)}
        />
        
        <select
          className="rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          value={filters.jobType || ''}
          onChange={(e) => onFilterChange('jobType', e.target.value)}
          aria-label="Job Type Filter"
        >
          <option value="">All Job Types</option>
          <option value="FULL_TIME">Full-time</option>
          <option value="PART_TIME">Part-time</option>
          <option value="CONTRACT">Contract</option>
          <option value="REMOTE">Remote</option>
        </select>
        
        <select
          className="rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          value={filters.experienceLevel || ''}
          onChange={(e) => onFilterChange('experienceLevel', e.target.value)}
          aria-label="Experience Level Filter"
        >
          <option value="">All Experience Levels</option>
          <option value="ENTRY">Entry Level</option>
          <option value="MID">Mid Level</option>
          <option value="SENIOR">Senior Level</option>
          <option value="EXECUTIVE">Executive</option>
        </select>
      </div>
    </div>
  );
}
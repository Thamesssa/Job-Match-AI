import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { MapPin, DollarSign, Briefcase, Filter, Search } from 'lucide-react';

interface JobListingsScreenProps {
  onNavigate: (screen: string, jobId?: string) => void;
}

const mockJobs = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    salary: '$120k - $160k',
    type: 'full-time',
    sector: 'Technology',
    isNew: true,
    description: 'We are looking for a Senior Frontend Developer to join our dynamic team...'
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'StartupXYZ',
    location: 'Remote',
    salary: '$90k - $130k',
    type: 'full-time',
    sector: 'Product',
    isNew: false,
    description: 'Join our growing startup as a Product Manager...'
  },
  {
    id: '3',
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'New York, NY',
    salary: '$80k - $110k',
    type: 'contract',
    sector: 'Design',
    isNew: true,
    description: 'Create amazing user experiences with our design team...'
  }
];

export default function JobListingsScreen({ onNavigate }: JobListingsScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !selectedLocation || job.location.includes(selectedLocation);
    const matchesType = !selectedType || job.type === selectedType;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b sticky top-0 z-10">
        <h1 className="text-2xl mb-4">Find Your Dream Job</h1>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search for jobs, companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-3 w-full rounded-xl border-gray-200"
          />
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center justify-between">
          <Button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg"
          >
            <Filter className="w-4 h-4" />
            Filters
          </Button>
          <span className="text-sm text-gray-600">{filteredJobs.length} jobs found</span>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mt-4 space-y-3 p-4 bg-gray-50 rounded-xl">
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0078D7]"
              >
                <option value="">All Locations</option>
                <option value="San Francisco">San Francisco</option>
                <option value="New York">New York</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Job Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0078D7]"
              >
                <option value="">All Types</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Job List */}
      <div className="px-6 py-4 space-y-4">
        {filteredJobs.map((job) => (
          <Card
            key={job.id}
            className="p-5 bg-white rounded-xl border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onNavigate('job-details', job.id)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg mb-1">{job.title}</h3>
                <p className="text-gray-600 mb-2">{job.company}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {job.salary}
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {job.type}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge className="bg-[#0078D7]/10 text-[#0078D7] rounded-full">
                    {job.sector}
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-700 rounded-full capitalize">
                    {job.type}
                  </Badge>
                  {job.isNew && (
                    <Badge className="bg-[#4CAF50] text-white rounded-full">
                      New
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-sm line-clamp-2">
              {job.description}
            </p>
          </Card>
        ))}

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}

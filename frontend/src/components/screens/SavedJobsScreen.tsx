import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { MapPin, DollarSign, Briefcase, Bookmark, Trash2, ExternalLink } from 'lucide-react';

interface SavedJobsScreenProps {
  onNavigate: (screen: string, jobId?: string) => void;
}

interface SavedJob {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  type: string;
  sector: string;
  isNew?: boolean;
  savedDate: string;
  description: string;
}

const mockSavedJobs: SavedJob[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    salary: '$120k - $160k',
    type: 'full-time',
    sector: 'Technology',
    isNew: true,
    savedDate: '2024-01-15',
    description: 'We are looking for a Senior Frontend Developer to join our dynamic team...'
  },
  {
    id: '2',
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'New York, NY',
    salary: '$80k - $110k',
    type: 'contract',
    sector: 'Design',
    isNew: false,
    savedDate: '2024-01-12',
    description: 'Create amazing user experiences with our design team...'
  },
  {
    id: '3',
    title: 'Product Manager',
    company: 'StartupXYZ',
    location: 'Remote',
    salary: '$90k - $130k',
    type: 'full-time',
    sector: 'Product',
    isNew: false,
    savedDate: '2024-01-10',
    description: 'Join our growing startup as a Product Manager...'
  }
];

export default function SavedJobsScreen({ onNavigate }: SavedJobsScreenProps) {
  const [savedJobs, setSavedJobs] = useState(mockSavedJobs);
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const [isSelectionMode, setIsSelectionMode] = useState(false);

  const toggleJobSelection = (jobId: string) => {
    setSelectedJobs(prev => 
      prev.includes(jobId)
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const removeSavedJob = (jobId: string) => {
    setSavedJobs(prev => prev.filter(job => job.id !== jobId));
    setSelectedJobs(prev => prev.filter(id => id !== jobId));
  };

  const removeSelectedJobs = () => {
    setSavedJobs(prev => prev.filter(job => !selectedJobs.includes(job.id)));
    setSelectedJobs([]);
    setIsSelectionMode(false);
  };

  const toggleSelectionMode = () => {
    setIsSelectionMode(!isSelectionMode);
    setSelectedJobs([]);
  };

  const formatSavedDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Saved yesterday';
    if (diffDays < 7) return `Saved ${diffDays} days ago`;
    return `Saved on ${date.toLocaleDateString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl">Saved Jobs</h1>
          {savedJobs.length > 0 && (
            <Button
              onClick={toggleSelectionMode}
              className="text-sm px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              {isSelectionMode ? 'Cancel' : 'Select'}
            </Button>
          )}
        </div>

        {isSelectionMode && (
          <div className="flex items-center justify-between bg-[#0078D7]/10 px-4 py-3 rounded-lg">
            <span className="text-sm text-[#0078D7]">
              {selectedJobs.length} job{selectedJobs.length !== 1 ? 's' : ''} selected
            </span>
            {selectedJobs.length > 0 && (
              <Button
                onClick={removeSelectedJobs}
                className="text-sm px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Remove Selected
              </Button>
            )}
          </div>
        )}

        <p className="text-gray-600">
          {savedJobs.length} saved job{savedJobs.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Jobs List */}
      <div className="px-6 py-4 space-y-4">
        {savedJobs.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Bookmark className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg mb-2">No saved jobs yet</h3>
            <p className="text-gray-600 mb-6">
              Start saving jobs you're interested in to view them here
            </p>
            <Button
              onClick={() => onNavigate('home')}
              className="bg-[#0078D7] text-white px-6 py-3 rounded-xl hover:bg-[#0078D7]/90"
            >
              Browse Jobs
            </Button>
          </div>
        ) : (
          savedJobs.map((job) => (
            <Card
              key={job.id}
              className={`p-5 bg-white rounded-xl border-gray-200 hover:shadow-md transition-all ${
                isSelectionMode ? 'cursor-pointer' : ''
              } ${
                selectedJobs.includes(job.id) ? 'ring-2 ring-[#0078D7] border-[#0078D7]' : ''
              }`}
              onClick={() => {
                if (isSelectionMode) {
                  toggleJobSelection(job.id);
                } else {
                  onNavigate('job-details', job.id);
                }
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    {isSelectionMode && (
                      <div className="mt-1">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          selectedJobs.includes(job.id)
                            ? 'bg-[#0078D7] border-[#0078D7]'
                            : 'border-gray-300'
                        }`}>
                          {selectedJobs.includes(job.id) && (
                            <div className="w-2 h-2 bg-white rounded-sm" />
                          )}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <h3 className="text-lg mb-1">{job.title}</h3>
                      <p className="text-gray-600 mb-2">{job.company}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        {job.salary && (
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
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

                      <p className="text-xs text-gray-500">
                        {formatSavedDate(job.savedDate)}
                      </p>
                    </div>
                  </div>
                </div>

                {!isSelectionMode && (
                  <div className="flex items-center gap-2 ml-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate('job-details', job.id);
                      }}
                      className="p-2 text-gray-400 hover:text-[#0078D7] rounded-lg hover:bg-gray-50"
                      title="View job"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeSavedJob(job.id);
                      }}
                      className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              <p className="text-gray-700 text-sm line-clamp-2">
                {job.description}
              </p>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

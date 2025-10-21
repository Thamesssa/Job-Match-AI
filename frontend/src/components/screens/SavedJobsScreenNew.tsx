import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { BookmarkCheck, MapPin, Clock, Eye, Trash2, Heart } from 'lucide-react';
import { mockJobs, Job } from '@/lib/data/mockData';

interface SavedJobsScreenProps {
  onNavigate: (screen: string, data?: unknown) => void;
}

export const SavedJobsScreen: React.FC<SavedJobsScreenProps> = ({ onNavigate }) => {
  const [savedJobs, setSavedJobs] = useState<Job[]>(
    mockJobs.filter(job => job.saved)
  );

  const handleRemoveJob = (jobId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedJobs(savedJobs.filter(job => job.id !== jobId));
    // onRemoveJob logic handled locally
  };

  const getJobTypeColor = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'part-time':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'contract':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'remote':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Saved Jobs
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {savedJobs.length} jobs saved
              </p>
            </div>
            <div className="text-red-500">
              <Heart className="h-6 w-6 fill-current" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {savedJobs.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BookmarkCheck className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No saved jobs yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Jobs you save will appear here for easy access later
            </p>
            <Button
              onClick={() => onNavigate('jobs')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Browse Jobs
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {savedJobs.map((job) => (
              <Card
                key={job.id}
                className="cursor-pointer hover:shadow-lg transition-shadow duration-200 border border-gray-200 dark:border-gray-700"
                onClick={() => onNavigate('job-details', job)}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {job.company}
                      </p>
                    </div>
                    <button
                      onClick={(e) => handleRemoveJob(job.id, e)}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-red-500"
                      title="Remove from saved jobs"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.posted}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className={getJobTypeColor(job.type)}>
                      {job.type.charAt(0).toUpperCase() + job.type.slice(1).replace('-', ' ')}
                    </Badge>
                    {job.requirements.slice(0, 2).map((req, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                    {job.requirements.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{job.requirements.length - 2} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                      {job.salary}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate('job-details', job);
                        }}
                        className="flex items-center space-x-1"
                      >
                        <Eye className="h-4 w-4" />
                        <span>View</span>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle apply action
                        }}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
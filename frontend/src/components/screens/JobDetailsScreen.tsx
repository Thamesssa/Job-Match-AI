import { useState } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { ArrowLeft, MapPin, DollarSign, Bookmark, Building, CheckCircle, Send } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  type: string;
  sector?: string;
  isNew?: boolean;
  description: string;
}

interface JobDetailsScreenProps {
  job: Job;
  onNavigate: (screen: string) => void;
}

export default function JobDetailsScreen({ job, onNavigate }: JobDetailsScreenProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

  const handleApply = () => {
    setHasApplied(true);
    setTimeout(() => {
      setHasApplied(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 py-4 flex items-center justify-between border-b sticky top-0 bg-white z-10">
        <div className="flex items-center">
          <button onClick={() => onNavigate('home')} className="mr-4">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-lg">Job Details</h1>
        </div>
        <button
          onClick={() => setIsSaved(!isSaved)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Bookmark className={`w-6 h-6 ${isSaved ? 'fill-[#0078D7] text-[#0078D7]' : 'text-gray-400'}`} />
        </button>
      </div>

      <div className="px-6 py-6 space-y-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#0078D7] to-[#4CAF50] rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <Building className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl mb-2">{job.title}</h2>
          <p className="text-lg text-gray-600 mb-3">{job.company}</p>
          
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {job.location}
            </div>
            {job.salary && (
              <>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  {job.salary}
                </div>
              </>
            )}
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
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

        <Card className="p-5 rounded-xl bg-gray-50">
          <h3 className="text-lg mb-3">About the Role</h3>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </Card>

        {hasApplied && (
          <Card className="p-5 rounded-xl bg-[#4CAF50]/10 border-[#4CAF50]/30">
            <div className="flex items-center gap-3">
              <div className="bg-[#4CAF50] p-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm mb-1">Application Submitted!</p>
                <p className="text-xs text-gray-600">
                  We will notify you when the employer reviews your application
                </p>
              </div>
            </div>
          </Card>
        )}

        <div className="pt-4 space-y-3">
          <Button
            onClick={handleApply}
            disabled={hasApplied}
            className="w-full bg-[#4CAF50] hover:bg-[#4CAF50]/90 text-white py-6 rounded-xl flex items-center justify-center gap-2"
          >
            {hasApplied ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Applied Successfully
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Apply Now
              </>
            )}
          </Button>
          
          <p className="text-xs text-center text-gray-500">
            Your profile and resume will be sent to {job.company}
          </p>
        </div>
      </div>
    </div>
  );
}

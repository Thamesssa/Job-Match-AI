'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { formatCurrency, formatRelativeTime } from '@/lib/utils';

// Mock job data (in a real app, this would come from an API)
const mockJobData: Record<string, any> = {
  '1': {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'Cape Town, South Africa',
    jobType: 'FULL_TIME',
    experienceLevel: 'SENIOR',
    salaryMin: 60000,
    salaryMax: 90000,
    salaryCurrency: 'ZAR',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
    requirements: [
      '5+ years of experience with React and TypeScript',
      'Strong knowledge of modern JavaScript (ES6+)',
      'Experience with Next.js and server-side rendering',
      'Proficiency in CSS and CSS-in-JS solutions',
      'Experience with version control (Git)',
      'Strong problem-solving and debugging skills',
      'Excellent communication and teamwork abilities'
    ],
    description: `We are looking for a Senior Frontend Developer to join our growing team at TechCorp Solutions. 
    
As a Senior Frontend Developer, you will be responsible for developing and maintaining high-quality web applications using React, TypeScript, and other modern technologies. You'll work closely with our design and backend teams to create exceptional user experiences.
    
This is an excellent opportunity to work on challenging projects and contribute to the technical direction of our products. We offer a collaborative work environment, competitive compensation, and opportunities for professional growth.`,
    benefits: [
      'Competitive salary and performance bonuses',
      'Medical aid and retirement fund',
      'Flexible working hours and remote work options',
      'Professional development budget',
      'Modern office with free snacks and coffee',
      '20 days annual leave plus public holidays'
    ],
    postedAt: '2024-01-15T10:00:00Z',
    active: true,
    companyInfo: {
      name: 'TechCorp Solutions',
      industry: 'Technology',
      size: '50-200 employees',
      website: 'https://techcorp.example.com',
      description: 'TechCorp Solutions is a leading software development company specializing in web and mobile applications for enterprise clients.'
    }
  }
};

export default function JobDetailPage() {
  const params = useParams();
  const jobId = params.id as string;
  const [showApplyModal, setShowApplyModal] = useState(false);
  
  const job = mockJobData[jobId];
  
  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Job Not Found</h1>
          <p className="text-gray-600 mb-4">The job you're looking for doesn't exist or has been removed.</p>
          <Link href="/jobs">
            <Button>Back to Job Listings</Button>
          </Link>
        </div>
      </div>
    );
  }

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
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/jobs" className="hover:text-indigo-600">
            Jobs
          </Link>
          <span>›</span>
          <span className="text-gray-900">{job.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                  <p className="text-xl text-gray-600 mb-4">{job.company}</p>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center">
                      📍 {job.location}
                    </span>
                    <span className="flex items-center">
                      💼 {getJobTypeLabel(job.jobType)}
                    </span>
                    <span className="flex items-center">
                      📊 {getExperienceLevelLabel(job.experienceLevel)}
                    </span>
                    <span className="flex items-center">
                      ⏰ {formatRelativeTime(new Date(job.postedAt))}
                    </span>
                  </div>
                </div>
                
                {job.salaryMin && job.salaryMax && (
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">
                      {formatCurrency(job.salaryMin)} - {formatCurrency(job.salaryMax)}
                    </p>
                    <p className="text-sm text-gray-500">per month</p>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-3">
                <Button onClick={() => setShowApplyModal(true)}>
                  Apply Now
                </Button>
                <Button variant="outline">
                  💾 Save Job
                </Button>
                <Button variant="outline">
                  📤 Share
                </Button>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
              <div className="prose prose-gray max-w-none">
                {job.description.split('\n').map((paragraph: string, index: number) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-2">
                {job.requirements.map((requirement: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits & Perks</h2>
              <ul className="space-y-2">
                {job.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to Apply?</h3>
              <Button className="w-full mb-3" onClick={() => setShowApplyModal(true)}>
                Apply Now
              </Button>
              <Button variant="outline" className="w-full mb-4">
                💾 Save for Later
              </Button>
              
              <div className="border-t pt-4">
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex justify-between">
                    <span>Job Type:</span>
                    <span className="font-medium">{getJobTypeLabel(job.jobType)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Experience:</span>
                    <span className="font-medium">{getExperienceLevelLabel(job.experienceLevel)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Posted:</span>
                    <span className="font-medium">{formatRelativeTime(new Date(job.postedAt))}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About {job.companyInfo.name}</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-500">Industry:</span>
                  <p className="font-medium">{job.companyInfo.industry}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Company Size:</span>
                  <p className="font-medium">{job.companyInfo.size}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Website:</span>
                  <a 
                    href={job.companyInfo.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    Visit Website
                  </a>
                </div>
                <p className="text-gray-700 text-sm mt-3">
                  {job.companyInfo.description}
                </p>
              </div>
            </div>

            {/* Similar Jobs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Similar Jobs</h3>
              <div className="space-y-3">
                <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
                  <Link href="/jobs/2">
                    <h4 className="font-medium text-gray-900 hover:text-indigo-600">
                      Full Stack Developer
                    </h4>
                    <p className="text-sm text-gray-600">InnovateTech</p>
                    <p className="text-sm text-gray-500">Johannesburg • Remote</p>
                  </Link>
                </div>
                <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
                  <Link href="/jobs/3">
                    <h4 className="font-medium text-gray-900 hover:text-indigo-600">
                      React Developer
                    </h4>
                    <p className="text-sm text-gray-600">Digital Solutions Inc</p>
                    <p className="text-sm text-gray-500">Durban • Contract</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Apply for {job.title}
            </h3>
            <p className="text-gray-600 mb-6">
              To apply for this position, you'll need to complete your profile and upload your resume.
            </p>
            <div className="flex space-x-3">
              <Button onClick={() => setShowApplyModal(false)} variant="outline">
                Cancel
              </Button>
              <Link href="/candidate/profile">
                <Button onClick={() => setShowApplyModal(false)}>
                  Complete Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
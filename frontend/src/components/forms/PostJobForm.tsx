'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { JobPostForm } from '@/lib/types';

interface PostJobFormProps {
  onSubmit: (data: JobPostForm) => void;
  initialData?: Partial<JobPostForm>;
  isLoading?: boolean;
}

export default function PostJobForm({ onSubmit, initialData, isLoading = false }: PostJobFormProps) {
  const [formData, setFormData] = useState<JobPostForm>({
    title: initialData?.title || '',
    company: initialData?.company || '',
    location: initialData?.location || '',
    jobType: initialData?.jobType || 'FULL_TIME',
    experienceLevel: initialData?.experienceLevel || 'MID',
    salaryMin: initialData?.salaryMin,
    salaryMax: initialData?.salaryMax,
    salaryCurrency: initialData?.salaryCurrency || 'ZAR',
    description: initialData?.description || '',
    requirements: initialData?.requirements || [],
    skills: initialData?.skills || []
  });
  
  const [skillInput, setSkillInput] = useState('');
  const [requirementInput, setRequirementInput] = useState('');

  const handleInputChange = (field: keyof JobPostForm, value: string | number | undefined) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }));
      setSkillInput('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const addRequirement = () => {
    if (requirementInput.trim() && !formData.requirements.includes(requirementInput.trim())) {
      setFormData(prev => ({
        ...prev,
        requirements: [...prev.requirements, requirementInput.trim()]
      }));
      setRequirementInput('');
    }
  };

  const removeRequirement = (requirementToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.filter(req => req !== requirementToRemove)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium text-gray-900">Basic Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Job Title *"
            placeholder="e.g. Senior Frontend Developer"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            required
          />
          <Input
            label="Company Name *"
            placeholder="e.g. TechCorp Solutions"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            required
          />
        </div>
        
        <Input
          label="Location *"
          placeholder="e.g. Cape Town, South Africa"
          value={formData.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
          required
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Type *
            </label>
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              value={formData.jobType}
              onChange={(e) => handleInputChange('jobType', e.target.value)}
              required
            >
              <option value="FULL_TIME">Full-time</option>
              <option value="PART_TIME">Part-time</option>
              <option value="CONTRACT">Contract</option>
              <option value="REMOTE">Remote</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Experience Level *
            </label>
            <select
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              value={formData.experienceLevel}
              onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
              required
            >
              <option value="ENTRY">Entry Level</option>
              <option value="MID">Mid Level</option>
              <option value="SENIOR">Senior Level</option>
              <option value="EXECUTIVE">Executive</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Salary Information */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium text-gray-900">Salary Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Minimum Salary (ZAR)"
            type="number"
            placeholder="e.g. 50000"
            value={formData.salaryMin?.toString() || ''}
            onChange={(e) => handleInputChange('salaryMin', e.target.value ? parseInt(e.target.value) : undefined)}
          />
          <Input
            label="Maximum Salary (ZAR)"
            type="number"
            placeholder="e.g. 80000"
            value={formData.salaryMax?.toString() || ''}
            onChange={(e) => handleInputChange('salaryMax', e.target.value ? parseInt(e.target.value) : undefined)}
          />
        </div>
      </div>
      
      {/* Job Description */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium text-gray-900">Job Details</h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Description *
          </label>
          <textarea
            className="w-full min-h-[150px] rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            placeholder="Describe the role, responsibilities, and what you're looking for in a candidate..."
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            required
          />
        </div>
      </div>
      
      {/* Requirements */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium text-gray-900">Requirements</h2>
        
        <div className="flex space-x-2">
          <Input
            placeholder="Enter a requirement and press Add"
            value={requirementInput}
            onChange={(e) => setRequirementInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addRequirement();
              }
            }}
          />
          <Button type="button" variant="outline" onClick={addRequirement}>
            Add Requirement
          </Button>
        </div>
        
        {formData.requirements.length > 0 && (
          <div className="space-y-2">
            {formData.requirements.map((requirement, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md">
                <span className="text-sm">{requirement}</span>
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeRequirement(requirement)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Skills */}
      <div className="space-y-4">
        <h2 className="text-lg font-medium text-gray-900">Required Skills</h2>
        
        <div className="flex space-x-2">
          <Input
            placeholder="Enter a skill and press Add"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addSkill();
              }
            }}
          />
          <Button type="button" variant="outline" onClick={addSkill}>
            Add Skill
          </Button>
        </div>
        
        {formData.skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {formData.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700"
              >
                {skill}
                <button
                  type="button"
                  className="ml-2 text-indigo-500 hover:text-indigo-700"
                  onClick={() => removeSkill(skill)}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Submit Buttons */}
      <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
        <Button type="button" variant="outline" disabled={isLoading}>
          Save as Draft
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Posting...' : 'Post Job'}
        </Button>
      </div>
    </form>
  );
}
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function CandidateProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+27 123 456 789',
    location: 'Cape Town, South Africa',
    title: 'Full Stack Developer',
    summary: 'Experienced full stack developer with 5+ years of experience building web applications using React, Node.js, and PostgreSQL.',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    experience: [
      {
        title: 'Senior Frontend Developer',
        company: 'TechCorp',
        duration: '2022 - Present',
        description: 'Led the development of multiple React applications'
      }
    ]
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log('Saving profile:', profileData);
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
            <p className="text-gray-600 mt-1">
              Keep your profile up to date to attract the right opportunities
            </p>
          </div>
          <div className="flex space-x-3">
            {isEditing ? (
              <>
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  Save Changes
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)}>
                Edit Profile
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Personal Information</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              value={profileData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              disabled={!isEditing}
            />
            <Input
              label="Last Name"
              value={profileData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              disabled={!isEditing}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Email"
              type="email"
              value={profileData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              disabled={!isEditing}
            />
            <Input
              label="Phone"
              value={profileData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              disabled={!isEditing}
            />
          </div>
          <Input
            label="Location"
            value={profileData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            disabled={!isEditing}
          />
        </div>
      </div>

      {/* Professional Information */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Professional Information</h2>
        </div>
        <div className="p-6 space-y-4">
          <Input
            label="Professional Title"
            value={profileData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            disabled={!isEditing}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Professional Summary
            </label>
            <textarea
              className={`w-full min-h-[100px] rounded-md border border-gray-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${!isEditing ? 'bg-gray-50' : ''}`}
              value={profileData.summary}
              onChange={(e) => handleInputChange('summary', e.target.value)}
              disabled={!isEditing}
            />
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Skills</h2>
            {isEditing && (
              <Button size="sm" variant="outline">
                Add Skill
              </Button>
            )}
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2">
            {profileData.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700"
              >
                {skill}
                {isEditing && (
                  <button
                    className="ml-2 text-indigo-500 hover:text-indigo-700"
                    onClick={() => {
                      const newSkills = profileData.skills.filter((_, i) => i !== index);
                      setProfileData(prev => ({ ...prev, skills: newSkills }));
                    }}
                  >
                    ×
                  </button>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Resume Section */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Resume</h2>
            <Button size="sm" variant="outline">
              Upload New Resume
            </Button>
          </div>
        </div>
        <div className="p-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <div className="text-gray-500">
              <span className="text-2xl block mb-2">📄</span>
              <p className="text-sm">No resume uploaded yet</p>
              <Button className="mt-3" size="sm">
                Upload Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { Progress } from '../ui/Progress';
import { Card } from '../ui/Card';
import { User, MapPin, Briefcase, GraduationCap, Upload, CheckCircle } from 'lucide-react';

interface ProfileSetupScreenProps {
  onNavigate: (screen: string) => void;
}

export default function ProfileSetupScreen({ onNavigate }: ProfileSetupScreenProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  const [profileData, setProfileData] = useState({
    // Step 1: Basic Info
    fullName: '',
    location: '',
    phone: '',
    
    // Step 2: Professional Info
    currentRole: '',
    experience: '',
    skills: '',
    
    // Step 3: Education
    education: '',
    certifications: '',
    
    // Step 4: Preferences
    jobTypes: [] as string[],
    salaryRange: '',
    remotePref: ''
  });

  const handleInputChange = (field: string, value: string | string[]) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const toggleJobType = (type: string) => {
    setProfileData(prev => ({
      ...prev,
      jobTypes: prev.jobTypes.includes(type)
        ? prev.jobTypes.filter(t => t !== type)
        : [...prev.jobTypes, type]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete setup
      onNavigate('home');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipStep = () => {
    nextStep();
  };

  const progress = (currentStep / totalSteps) * 100;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-5">
            <div className="text-center mb-6">
              <User className="w-12 h-12 text-[#0078D7] mx-auto mb-3" />
              <h2 className="text-xl mb-2">Basic Information</h2>
              <p className="text-gray-600">Let us know who you are</p>
            </div>

            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={profileData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="Enter your full name"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="location">Location *</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="location"
                  value={profileData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="City, State/Country"
                  className="pl-10 mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={profileData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="mt-1"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-5">
            <div className="text-center mb-6">
              <Briefcase className="w-12 h-12 text-[#0078D7] mx-auto mb-3" />
              <h2 className="text-xl mb-2">Professional Background</h2>
              <p className="text-gray-600">Tell us about your experience</p>
            </div>

            <div>
              <Label htmlFor="currentRole">Current Role/Title</Label>
              <Input
                id="currentRole"
                value={profileData.currentRole}
                onChange={(e) => handleInputChange('currentRole', e.target.value)}
                placeholder="e.g., Senior Software Engineer"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="experience">Years of Experience</Label>
              <select
                id="experience"
                value={profileData.experience}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                className="mt-1 w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0078D7]"
              >
                <option value="">Select experience level</option>
                <option value="0-1">0-1 years</option>
                <option value="2-3">2-3 years</option>
                <option value="4-5">4-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div>
              <Label htmlFor="skills">Key Skills</Label>
              <textarea
                id="skills"
                value={profileData.skills}
                onChange={(e) => handleInputChange('skills', e.target.value)}
                placeholder="e.g., JavaScript, React, Node.js, Python..."
                rows={3}
                className="mt-1 w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0078D7] resize-none"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-5">
            <div className="text-center mb-6">
              <GraduationCap className="w-12 h-12 text-[#0078D7] mx-auto mb-3" />
              <h2 className="text-xl mb-2">Education & Certifications</h2>
              <p className="text-gray-600">Share your academic background</p>
            </div>

            <div>
              <Label htmlFor="education">Education</Label>
              <textarea
                id="education"
                value={profileData.education}
                onChange={(e) => handleInputChange('education', e.target.value)}
                placeholder="e.g., Bachelor's in Computer Science, University Name, 2020"
                rows={3}
                className="mt-1 w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0078D7] resize-none"
              />
            </div>

            <div>
              <Label htmlFor="certifications">Certifications (Optional)</Label>
              <textarea
                id="certifications"
                value={profileData.certifications}
                onChange={(e) => handleInputChange('certifications', e.target.value)}
                placeholder="e.g., AWS Certified Developer, Google Cloud Professional..."
                rows={3}
                className="mt-1 w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0078D7] resize-none"
              />
            </div>

            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="flex items-start gap-3">
                <Upload className="w-5 h-5 text-[#0078D7] mt-1" />
                <div>
                  <h3 className="text-sm mb-1">Upload Resume (Optional)</h3>
                  <p className="text-xs text-gray-600 mb-3">
                    PDF, DOC, or DOCX files up to 5MB
                  </p>
                  <Button className="text-sm px-4 py-2 bg-[#0078D7] text-white rounded-lg">
                    Choose File
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        );

      case 4:
        return (
          <div className="space-y-5">
            <div className="text-center mb-6">
              <CheckCircle className="w-12 h-12 text-[#4CAF50] mx-auto mb-3" />
              <h2 className="text-xl mb-2">Job Preferences</h2>
              <p className="text-gray-600">Help us find your perfect match</p>
            </div>

            <div>
              <Label>Preferred Job Types</Label>
              <div className="mt-2 grid grid-cols-2 gap-3">
                {['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship', 'Remote'].map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleJobType(type)}
                    className={`p-3 rounded-xl border text-sm transition-colors ${
                      profileData.jobTypes.includes(type)
                        ? 'bg-[#0078D7] text-white border-[#0078D7]'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-[#0078D7]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="salaryRange">Expected Salary Range</Label>
              <select
                id="salaryRange"
                value={profileData.salaryRange}
                onChange={(e) => handleInputChange('salaryRange', e.target.value)}
                className="mt-1 w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0078D7]"
              >
                <option value="">Select salary range</option>
                <option value="30k-50k">$30k - $50k</option>
                <option value="50k-70k">$50k - $70k</option>
                <option value="70k-100k">$70k - $100k</option>
                <option value="100k-150k">$100k - $150k</option>
                <option value="150k+">$150k+</option>
              </select>
            </div>

            <div>
              <Label htmlFor="remotePref">Remote Work Preference</Label>
              <select
                id="remotePref"
                value={profileData.remotePref}
                onChange={(e) => handleInputChange('remotePref', e.target.value)}
                className="mt-1 w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0078D7]"
              >
                <option value="">Select preference</option>
                <option value="remote-only">Remote Only</option>
                <option value="hybrid">Hybrid</option>
                <option value="on-site">On-site</option>
                <option value="no-preference">No Preference</option>
              </select>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return profileData.fullName && profileData.location;
      case 2:
        return true; // Optional step
      case 3:
        return true; // Optional step
      case 4:
        return profileData.jobTypes.length > 0;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl">Complete Your Profile</h1>
          <span className="text-sm text-gray-600">
            {currentStep} of {totalSteps}
          </span>
        </div>
        
        <Progress value={progress} className="w-full h-2" />
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <Card className="max-w-md mx-auto p-6 bg-white rounded-2xl">
          {renderStep()}

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8">
            {currentStep > 1 && (
              <Button
                onClick={prevStep}
                className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200"
              >
                Back
              </Button>
            )}
            
            <Button
              onClick={skipStep}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200"
            >
              Skip
            </Button>
            
            <Button
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex-1 py-3 bg-[#0078D7] text-white rounded-xl hover:bg-[#0078D7]/90 disabled:opacity-50"
            >
              {currentStep === totalSteps ? 'Complete' : 'Next'}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { 
  FileText, 
  CheckCircle, 
  Star, 
  Clock, 
  Target, 
  Eye,
  Download,
  Share,
  ChevronRight,
  Lightbulb,
  Award
} from 'lucide-react';

interface ResumeTipsScreenProps {
  onNavigate: (screen: string) => void;
}

interface Tip {
  id: string;
  category: 'structure' | 'content' | 'formatting' | 'keywords' | 'ats';
  title: string;
  description: string;
  importance: 'high' | 'medium' | 'low';
  timeToImplement: string;
  isCompleted?: boolean;
}

const resumeTips: Tip[] = [
  {
    id: '1',
    category: 'structure',
    title: 'Use a Clear Header Section',
    description: 'Include your name, phone, email, and LinkedIn profile prominently at the top.',
    importance: 'high',
    timeToImplement: '5 min'
  },
  {
    id: '2',
    category: 'content',
    title: 'Quantify Your Achievements',
    description: 'Use numbers, percentages, and metrics to demonstrate your impact and results.',
    importance: 'high',
    timeToImplement: '15 min'
  },
  {
    id: '3',
    category: 'keywords',
    title: 'Include Relevant Keywords',
    description: 'Match job posting keywords to improve ATS compatibility and ranking.',
    importance: 'high',
    timeToImplement: '10 min'
  },
  {
    id: '4',
    category: 'formatting',
    title: 'Keep It to 1-2 Pages',
    description: 'Focus on most relevant experience and achievements. Quality over quantity.',
    importance: 'medium',
    timeToImplement: '20 min'
  },
  {
    id: '5',
    category: 'ats',
    title: 'Use Standard Section Headers',
    description: 'Use conventional headers like "Experience", "Education", "Skills" for ATS parsing.',
    importance: 'medium',
    timeToImplement: '5 min'
  },
  {
    id: '6',
    category: 'content',
    title: 'Tailor for Each Job',
    description: 'Customize your resume for each application to highlight relevant skills.',
    importance: 'high',
    timeToImplement: '10 min'
  }
];

export default function ResumeTipsScreen({ onNavigate }: ResumeTipsScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [completedTips, setCompletedTips] = useState<string[]>([]);

  const categories = [
    { id: 'all', label: 'All Tips', icon: FileText },
    { id: 'structure', label: 'Structure', icon: Target },
    { id: 'content', label: 'Content', icon: Star },
    { id: 'formatting', label: 'Format', icon: Eye },
    { id: 'keywords', label: 'Keywords', icon: Lightbulb },
    { id: 'ats', label: 'ATS', icon: Award }
  ];

  const filteredTips = selectedCategory === 'all' 
    ? resumeTips 
    : resumeTips.filter(tip => tip.category === selectedCategory);

  const toggleTipCompletion = (tipId: string) => {
    setCompletedTips(prev => 
      prev.includes(tipId)
        ? prev.filter(id => id !== tipId)
        : [...prev, tipId]
    );
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const completionRate = Math.round((completedTips.length / resumeTips.length) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b">
        <h1 className="text-2xl mb-4">Resume Tips</h1>
        
        {/* Progress Card */}
        <Card className="p-4 bg-gradient-to-r from-[#0078D7] to-[#4CAF50] text-white rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg mb-1">Your Progress</h3>
              <p className="text-white/80 text-sm">
                {completedTips.length} of {resumeTips.length} tips completed
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl mb-1">{completionRate}%</div>
              <div className="w-16 h-2 bg-white/30 rounded-full">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-300"
                  style={{ width: `${completionRate}%` }}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Category Filter */}
      <div className="px-6 py-4 bg-white border-b">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#0078D7] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tips List */}
      <div className="px-6 py-4 space-y-4">
        {filteredTips.map((tip) => {
          const isCompleted = completedTips.includes(tip.id);
          
          return (
            <Card
              key={tip.id}
              className={`p-5 bg-white rounded-xl border transition-all ${
                isCompleted 
                  ? 'border-green-200 bg-green-50/30' 
                  : 'border-gray-200 hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => toggleTipCompletion(tip.id)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isCompleted
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-300 hover:border-[#0078D7]'
                  }`}
                >
                  {isCompleted && <CheckCircle className="w-4 h-4 text-white" />}
                </button>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className={`text-lg ${isCompleted ? 'line-through text-gray-600' : 'text-gray-900'}`}>
                      {tip.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Badge className={`text-xs ${getImportanceColor(tip.importance)}`}>
                        {tip.importance}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {tip.timeToImplement}
                      </div>
                    </div>
                  </div>
                  
                  <p className={`text-gray-600 mb-3 ${isCompleted ? 'line-through' : ''}`}>
                    {tip.description}
                  </p>
                  
                  {!isCompleted && (
                    <Button
                      onClick={() => toggleTipCompletion(tip.id)}
                      className="text-sm px-4 py-2 bg-[#0078D7] text-white rounded-lg hover:bg-[#0078D7]/90"
                    >
                      Mark as Done
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-4 space-y-3">
        <Card className="p-4 bg-white rounded-xl">
          <h3 className="text-lg mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#0078D7]" />
            Quick Actions
          </h3>
          
          <div className="space-y-3">
            <button className="w-full p-3 flex items-center justify-between bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-gray-600" />
                <span>Download Resume Template</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            
            <button 
              onClick={() => onNavigate('profile')}
              className="w-full p-3 flex items-center justify-between bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-gray-600" />
                <span>Review Your Profile</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            
            <button className="w-full p-3 flex items-center justify-between bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <Share className="w-5 h-5 text-gray-600" />
                <span>Get Resume Review</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </Card>

        {/* Achievement */}
        {completionRate >= 50 && (
          <Card className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8" />
              <div>
                <h3 className="text-lg mb-1">Great Progress! 🎉</h3>
                <p className="text-white/90 text-sm">
                  You've completed {completionRate}% of resume tips. Keep going!
                </p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

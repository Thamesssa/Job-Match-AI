import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ChevronRight, Star, Users, Briefcase, TrendingUp, CheckCircle } from 'lucide-react';

interface WelcomeScreenProps {
  onNavigate: (screen: string) => void;
}

const features = [
  {
    icon: Star,
    title: 'AI-Powered Matching',
    description: 'Our advanced AI finds the perfect job matches based on your skills and preferences.'
  },
  {
    icon: Users,
    title: 'Connect with Recruiters',
    description: 'Get discovered by top recruiters and hiring managers in your industry.'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Access personalized insights and tips to accelerate your career development.'
  },
  {
    icon: Briefcase,
    title: 'Easy Application',
    description: 'Apply to multiple jobs with one click using your optimized profile.'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    content: 'Found my dream job in just 2 weeks! The AI matching is incredible.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    content: 'The platform made job hunting so much easier. Highly recommended!',
    rating: 5
  },
  {
    name: 'Emily Davis',
    role: 'UX Designer',
    content: 'Connected with amazing companies I never would have found otherwise.',
    rating: 5
  }
];

export default function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0078D7] to-[#4CAF50]">
      <div className="px-6 py-8">
        {/* Logo and Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-white rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
            <div className="text-4xl">💼</div>
          </div>
          <h1 className="text-4xl text-white mb-4">Welcome to JobMatch AI</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Your intelligent job search companion that connects talent with opportunity
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 bg-white/95 backdrop-blur-sm rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0078D7] to-[#4CAF50] rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <Card className="p-6 bg-white/95 backdrop-blur-sm rounded-2xl mb-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl text-[#0078D7] mb-1">10K+</div>
              <div className="text-sm text-gray-600">Jobs Posted</div>
            </div>
            <div>
              <div className="text-2xl text-[#4CAF50] mb-1">5K+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
            <div>
              <div className="text-2xl text-[#FF9500] mb-1">95%</div>
              <div className="text-sm text-gray-600">Match Accuracy</div>
            </div>
          </div>
        </Card>

        {/* Testimonials */}
        <Card className="p-6 bg-white/95 backdrop-blur-sm rounded-2xl mb-8">
          <h3 className="text-lg mb-4 text-center">What Our Users Say</h3>
          
          <div className="text-center">
            <div className="mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 inline-block fill-current" />
              ))}
            </div>
            
            <p className="text-gray-700 mb-4 italic">
              "{testimonials[currentTestimonial].content}"
            </p>
            
            <div>
              <div className="text-sm">{testimonials[currentTestimonial].name}</div>
              <div className="text-xs text-gray-500">{testimonials[currentTestimonial].role}</div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-[#0078D7]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </Card>

        {/* Quick Setup Guide */}
        <Card className="p-6 bg-white/95 backdrop-blur-sm rounded-2xl mb-8">
          <h3 className="text-lg mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#4CAF50]" />
            Get Started in 3 Easy Steps
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-[#0078D7] text-white rounded-full flex items-center justify-center text-sm">
                1
              </div>
              <div>
                <div className="text-sm mb-1">Create Your Profile</div>
                <div className="text-xs text-gray-600">Add your skills, experience, and preferences</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-[#0078D7] text-white rounded-full flex items-center justify-center text-sm">
                2
              </div>
              <div>
                <div className="text-sm mb-1">Get AI Recommendations</div>
                <div className="text-xs text-gray-600">Our AI will find perfect job matches for you</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-[#4CAF50] text-white rounded-full flex items-center justify-center text-sm">
                3
              </div>
              <div>
                <div className="text-sm mb-1">Apply & Connect</div>
                <div className="text-xs text-gray-600">Apply with one click and connect with recruiters</div>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA Buttons */}
        <div className="space-y-4">
          <Button
            onClick={() => onNavigate('register')}
            className="w-full bg-white text-[#0078D7] py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            Get Started - It's Free
            <ChevronRight className="w-5 h-5" />
          </Button>
          
          <Button
            onClick={() => onNavigate('login')}
            className="w-full bg-white/20 backdrop-blur-sm text-white border border-white/30 py-4 rounded-2xl hover:bg-white/30 transition-all duration-200"
          >
            Already have an account? Sign In
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white/70 text-sm">
          <p>Join thousands of professionals finding their dream jobs</p>
        </div>
      </div>
    </div>
  );
}

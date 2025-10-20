'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Find Your Dream Job with{' '}
              <span className="text-indigo-600">AI-Powered</span> Matching
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with opportunities that perfectly match your skills, experience, and career goals. 
              Our advanced AI technology ensures you find the right fit every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/jobs">
                <Button size="lg" className="text-lg px-8 py-3">
                  🔍 Find Jobs
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                  📝 Post a Job
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Job Match AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI technology with intuitive design 
              to revolutionize the way you search for jobs and find talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Smart AI Matching
              </h3>
              <p className="text-gray-600">
                Our advanced algorithms analyze your skills, experience, and preferences 
                to match you with the most relevant opportunities.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Instant Applications
              </h3>
              <p className="text-gray-600">
                Apply to multiple jobs with one click. Our platform auto-fills applications 
                with your profile information and tailored cover letters.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Real-time Analytics
              </h3>
              <p className="text-gray-600">
                Track your application progress, get insights on market trends, 
                and receive personalized recommendations to improve your profile.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Targeted Opportunities
              </h3>
              <p className="text-gray-600">
                Receive curated job recommendations based on your career goals, 
                salary expectations, and preferred work environment.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Direct Communication
              </h3>
              <p className="text-gray-600">
                Connect directly with hiring managers and recruiters through our 
                built-in messaging system for faster hiring decisions.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Privacy Protection
              </h3>
              <p className="text-gray-600">
                Your data is secure with enterprise-grade encryption. Control your 
                privacy settings and decide who can view your profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Professionals Across South Africa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">10K+</div>
              <div className="text-indigo-200">Active Job Seekers</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-indigo-200">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">2K+</div>
              <div className="text-indigo-200">Jobs Posted Monthly</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-indigo-200">Match Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of professionals who have found their dream jobs through Job Match AI. 
              Get started today and discover opportunities that match your unique profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup?type=candidate">
                <Button size="lg" className="text-lg px-8 py-3">
                  Join as Job Seeker
                </Button>
              </Link>
              <Link href="/signup?type=recruiter">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                  Join as Employer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Jobs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Job Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Discover some of the exciting positions recently posted on our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Sample Job Cards */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Senior Frontend Developer</h3>
                  <p className="text-gray-600">TechCorp Solutions</p>
                </div>
                <span className="text-green-600 font-medium">R60K - R90K</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Cape Town, South Africa • Full-time</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">TypeScript</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">Next.js</span>
              </div>
              <Link href="/jobs/1">
                <Button size="sm" className="w-full">View Details</Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Full Stack Developer</h3>
                  <p className="text-gray-600">InnovateTech</p>
                </div>
                <span className="text-green-600 font-medium">R45K - R70K</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Johannesburg, South Africa • Remote</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">Node.js</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">PostgreSQL</span>
              </div>
              <Link href="/jobs/2">
                <Button size="sm" className="w-full">View Details</Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">React Developer</h3>
                  <p className="text-gray-600">Digital Solutions Inc</p>
                </div>
                <span className="text-green-600 font-medium">R35K - R55K</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">Durban, South Africa • Contract</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">JavaScript</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">CSS</span>
              </div>
              <Link href="/jobs/3">
                <Button size="sm" className="w-full">View Details</Button>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link href="/jobs">
              <Button size="lg" variant="outline">
                View All Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
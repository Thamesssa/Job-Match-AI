export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  salary: string;
  description: string;
  requirements: string[];
  posted: string;
  saved?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'candidate' | 'recruiter';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'job' | 'message' | 'application' | 'system';
}

export interface ResumeTip {
  id: string;
  title: string;
  description: string;
  category: 'skills' | 'experience' | 'education' | 'format';
  completed: boolean;
}

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'full-time',
    salary: '$120,000 - $160,000',
    description: 'We are looking for a Senior Frontend Developer to join our team...',
    requirements: ['React', 'TypeScript', 'Next.js', '5+ years experience'],
    posted: '2 days ago',
    saved: false
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'DataFlow Solutions',
    location: 'Remote',
    type: 'remote',
    salary: '$100,000 - $140,000',
    description: 'Join our backend team to build scalable APIs and microservices...',
    requirements: ['Java', 'Spring Boot', 'PostgreSQL', '3+ years experience'],
    posted: '1 day ago',
    saved: true
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: 'Innovation Labs',
    location: 'New York, NY',
    type: 'full-time',
    salary: '$90,000 - $130,000',
    description: 'Looking for a versatile developer to work on both frontend and backend...',
    requirements: ['React', 'Node.js', 'MongoDB', '4+ years experience'],
    posted: '3 days ago',
    saved: false
  },
  {
    id: '4',
    title: 'UI/UX Designer',
    company: 'Creative Studio',
    location: 'Los Angeles, CA',
    type: 'contract',
    salary: '$70 - $90/hour',
    description: 'Design beautiful and intuitive user interfaces for our mobile app...',
    requirements: ['Figma', 'Adobe Creative Suite', 'User Research', '3+ years experience'],
    posted: '1 week ago',
    saved: true
  }
];

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: '/images/avatar.jpg',
  role: 'candidate'
};

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Job Match',
    message: 'A new Senior Frontend Developer position matches your profile',
    time: '2 hours ago',
    read: false,
    type: 'job'
  },
  {
    id: '2',
    title: 'Application Update',
    message: 'Your application for Backend Engineer at DataFlow Solutions has been viewed',
    time: '1 day ago',
    read: false,
    type: 'application'
  },
  {
    id: '3',
    title: 'Profile Tip',
    message: 'Add more skills to your profile to get better job matches',
    time: '2 days ago',
    read: true,
    type: 'system'
  },
  {
    id: '4',
    title: 'Message from Recruiter',
    message: 'TechCorp Inc. recruiter wants to connect with you',
    time: '3 days ago',
    read: true,
    type: 'message'
  }
];

export const mockResumeTips: ResumeTip[] = [
  {
    id: '1',
    title: 'Add Technical Skills',
    description: 'List your programming languages, frameworks, and tools',
    category: 'skills',
    completed: true
  },
  {
    id: '2',
    title: 'Quantify Your Achievements',
    description: 'Use numbers and metrics to show your impact',
    category: 'experience',
    completed: false
  },
  {
    id: '3',
    title: 'Include Education Details',
    description: 'Add your degree, certifications, and relevant coursework',
    category: 'education',
    completed: true
  },
  {
    id: '4',
    title: 'Optimize Resume Format',
    description: 'Use a clean, ATS-friendly format with consistent styling',
    category: 'format',
    completed: false
  },
  {
    id: '5',
    title: 'Add Project Experience',
    description: 'Include personal projects and open-source contributions',
    category: 'experience',
    completed: false
  }
];
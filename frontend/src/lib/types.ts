// User types
export interface User {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: 'USER' | 'ADMIN';
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthUser extends User {
  token: string;
}

// Job types
export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  location: string;
  jobType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'REMOTE';
  experienceLevel: 'ENTRY' | 'MID' | 'SENIOR' | 'EXECUTIVE';
  salaryMin?: number;
  salaryMax?: number;
  salaryCurrency: string;
  skills: string[];
  requirements: string[];
  sourceUrl?: string;
  source: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  postedAt?: string;
}

export interface JobFilters {
  search?: string;
  location?: string;
  jobType?: string;
  experienceLevel?: string;
  salaryMin?: number;
  salaryMax?: number;
  skills?: string[];
  company?: string;
}

// Resume types
export interface Resume {
  id: string;
  userId: string;
  fileName: string;
  content: string;
  parsedData?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
  summary?: string;
  skills: string[];
  experience?: string;
  education?: string;
  fileType: string;
  fileSize: number;
  filePath: string;
  processed: boolean;
  createdAt: string;
  updatedAt: string;
  processedAt?: string;
}

// Application types
export interface JobApplication {
  id: string;
  jobId: string;
  userId: string;
  resumeId: string;
  status: 'PENDING' | 'REVIEWED' | 'INTERVIEW' | 'REJECTED' | 'ACCEPTED';
  coverLetter?: string;
  appliedAt: string;
  updatedAt: string;
  job?: Job;
  user?: User;
  resume?: Resume;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: 'candidate' | 'recruiter';
}

export interface JobPostForm {
  title: string;
  company: string;
  description: string;
  location: string;
  jobType: string;
  experienceLevel: string;
  salaryMin?: number;
  salaryMax?: number;
  salaryCurrency: string;
  skills: string[];
  requirements: string[];
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType;
  badge?: string | number;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
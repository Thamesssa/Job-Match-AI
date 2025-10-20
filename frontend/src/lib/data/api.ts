import { getAuthHeaders } from '../auth';
import { Job, JobFilters, Resume, JobApplication, PaginatedResponse } from '../types';

// Base API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

/**
 * Base API request function with error handling
 */
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// Job API functions
export const jobApi = {
  /**
   * Get paginated list of jobs with optional filters
   */
  async getJobs(
    page: number = 0,
    size: number = 20,
    filters: JobFilters = {}
  ): Promise<PaginatedResponse<Job>> {
    const searchParams = new URLSearchParams({
      page: page.toString(),
      size: size.toString(),
      ...Object.entries(filters).reduce((acc, [key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (Array.isArray(value)) {
            acc[key] = value.join(',');
          } else {
            acc[key] = value.toString();
          }
        }
        return acc;
      }, {} as Record<string, string>),
    });

    return apiRequest<PaginatedResponse<Job>>(`/jobs?${searchParams}`);
  },

  /**
   * Get job by ID
   */
  async getJob(id: string): Promise<Job> {
    return apiRequest<Job>(`/jobs/${id}`);
  },

  /**
   * Create a new job posting
   */
  async createJob(jobData: Partial<Job>): Promise<Job> {
    return apiRequest<Job>('/jobs', {
      method: 'POST',
      body: JSON.stringify(jobData),
    });
  },

  /**
   * Update existing job
   */
  async updateJob(id: string, jobData: Partial<Job>): Promise<Job> {
    return apiRequest<Job>(`/jobs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(jobData),
    });
  },

  /**
   * Delete job
   */
  async deleteJob(id: string): Promise<void> {
    return apiRequest<void>(`/jobs/${id}`, {
      method: 'DELETE',
    });
  },

  /**
   * Get recommended jobs for user
   */
  async getRecommendedJobs(limit: number = 10): Promise<Job[]> {
    return apiRequest<Job[]>(`/jobs/recommended?limit=${limit}`);
  },
};

// Resume API functions
export const resumeApi = {
  /**
   * Get user's resumes
   */
  async getResumes(): Promise<Resume[]> {
    return apiRequest<Resume[]>('/resumes');
  },

  /**
   * Get resume by ID
   */
  async getResume(id: string): Promise<Resume> {
    return apiRequest<Resume>(`/resumes/${id}`);
  },

  /**
   * Upload new resume
   */
  async uploadResume(file: File): Promise<Resume> {
    const formData = new FormData();
    formData.append('file', file);

    return apiRequest<Resume>('/resumes/upload', {
      method: 'POST',
      body: formData,
      headers: {
        // Don't set Content-Type, let browser set it with boundary
        ...getAuthHeaders(),
      },
    });
  },

  /**
   * Delete resume
   */
  async deleteResume(id: string): Promise<void> {
    return apiRequest<void>(`/resumes/${id}`, {
      method: 'DELETE',
    });
  },
};

// Job Application API functions
export const applicationApi = {
  /**
   * Get user's job applications
   */
  async getApplications(): Promise<JobApplication[]> {
    return apiRequest<JobApplication[]>('/applications');
  },

  /**
   * Apply for a job
   */
  async applyForJob(
    jobId: string,
    resumeId: string,
    coverLetter?: string
  ): Promise<JobApplication> {
    return apiRequest<JobApplication>('/applications', {
      method: 'POST',
      body: JSON.stringify({
        jobId,
        resumeId,
        coverLetter,
      }),
    });
  },

  /**
   * Withdraw job application
   */
  async withdrawApplication(id: string): Promise<void> {
    return apiRequest<void>(`/applications/${id}`, {
      method: 'DELETE',
    });
  },

  /**
   * Get application by ID
   */
  async getApplication(id: string): Promise<JobApplication> {
    return apiRequest<JobApplication>(`/applications/${id}`);
  },
};

// Search API functions
export const searchApi = {
  /**
   * Search jobs with text query
   */
  async searchJobs(
    query: string,
    page: number = 0,
    size: number = 20
  ): Promise<PaginatedResponse<Job>> {
    const searchParams = new URLSearchParams({
      q: query,
      page: page.toString(),
      size: size.toString(),
    });

    return apiRequest<PaginatedResponse<Job>>(`/search/jobs?${searchParams}`);
  },

  /**
   * Get job suggestions based on user's resume
   */
  async getJobSuggestions(resumeId: string): Promise<Job[]> {
    return apiRequest<Job[]>(`/search/suggestions?resumeId=${resumeId}`);
  },
};
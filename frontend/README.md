# Job Match AI - Frontend Application

A modern job matching platform built with Next.js 15, TypeScript, and Tailwind CSS. This application uses AI-powered matching to connect job seekers with their ideal opportunities and helps recruiters find the perfect candidates.

## 🏗️ Project Structure

The project follows a clean, organized structure following Next.js 15 App Router conventions:

```
job-match-ai/
├── 📂 app/                    # Next.js App Router directory
│   ├── (auth)/               # Route Group for Authentication
│   │   ├── login/
│   │   │   └── page.tsx     # Route: /login
│   │   └── signup/
│   │       └── page.tsx     # Route: /signup
│   │
│   ├── (dashboard)/          # Route Group for Dashboard (with shared layout)
│   │   ├── layout.tsx       # Shared dashboard layout (sidebar, header)
│   │   ├── candidate/       # Candidate-specific routes
│   │   │   ├── page.tsx     # Route: /candidate (Dashboard Home)
│   │   │   └── profile/
│   │   │       └── page.tsx # Route: /candidate/profile
│   │   └── recruiter/       # Recruiter-specific routes
│   │       ├── page.tsx     # Route: /recruiter (Dashboard Home)
│   │       └── post-job/
│   │           └── page.tsx # Route: /recruiter/post-job
│   │
│   ├── jobs/
│   │   ├── page.tsx         # Route: /jobs (Job Listings)
│   │   └── [id]/            # Dynamic Route
│   │       └── page.tsx     # Route: /jobs/[id] (Individual Job Page)
│   │
│   ├── page.tsx             # Route: / (Marketing Landing Page)
│   ├── layout.tsx           # Root Layout (<html>, <body>, Global Providers)
│   ├── loading.tsx          # Global Loading UI
│   └── error.tsx            # Global Error Boundary UI
│
├── 📂 components/            # Reusable UI components
│   ├── ui/                  # Atomic design system components
│   │   ├── Button.tsx       # Reusable button component
│   │   └── Input.tsx        # Reusable input component
│   ├── layout/              # High-level structural components
│   │   ├── Header.tsx       # Site header with navigation
│   │   └── Footer.tsx       # Site footer
│   ├── jobs/                # Job-specific components
│   │   ├── JobCard.tsx      # Individual job listing card
│   │   └── JobFilter.tsx    # Job filtering component
│   └── forms/               # Reusable form components
│       └── PostJobForm.tsx  # Job posting form
│
├── 📂 lib/                   # Business logic, utilities, and data layers
│   ├── data/
│   │   └── api.ts           # API client/wrappers (jobs, resumes, applications)
│   ├── auth.ts              # Authentication helpers (login, logout, token management)
│   ├── types.ts             # TypeScript interfaces (Job, User, Application, etc.)
│   └── utils.ts             # General utility functions (formatting, slugs, etc.)
│
├── 📂 styles/               # CSS files
│   └── globals.css          # Global styles with Tailwind CSS
│
├── 📂 public/               # Static assets
│   └── images/              # Image assets
│
├── 📂 backend/              # Spring Boot backend (separate application)
│
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🚀 Features

### For Job Seekers
- **AI-Powered Job Matching**: Advanced algorithms match your skills with relevant opportunities
- **Comprehensive Profile Management**: Build detailed profiles with skills, experience, and preferences
- **Resume Upload & Parsing**: Upload resumes and let AI extract key information
- **Application Tracking**: Monitor all your job applications in one place
- **Personalized Dashboard**: View recommended jobs, application status, and profile analytics

### For Recruiters
- **Smart Candidate Matching**: Find candidates that perfectly match job requirements
- **Easy Job Posting**: Post jobs with detailed requirements and automatic skill tagging
- **Application Management**: Review applications with AI-powered candidate scoring
- **Analytics Dashboard**: Track job performance, application rates, and hiring metrics
- **Direct Communication**: Built-in messaging system for candidate communication

### Technical Features
- **Modern UI/UX**: Clean, responsive design built with Tailwind CSS
- **Type Safety**: Full TypeScript implementation for better developer experience
- **Performance Optimized**: Next.js 15 with App Router for optimal loading speeds
- **Mobile Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Server-side rendering and proper meta tags for better search visibility

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **State Management**: React Hooks + Context API
- **HTTP Client**: Fetch API with custom wrapper
- **Authentication**: JWT-based authentication
- **Backend**: Spring Boot (Java 21)
- **Database**: PostgreSQL with pgvector for AI features

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd job-match-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the following variables in `.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8080/api
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏃‍♂️ Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## 🎨 Design System

### Colors
- **Primary**: Indigo (branding, CTAs, links)
- **Success**: Green (positive states, salaries)
- **Warning**: Yellow (pending states)
- **Error**: Red (errors, destructive actions)
- **Neutral**: Gray scale (text, backgrounds, borders)

### Typography
- **Primary Font**: Geist Sans (modern, clean)
- **Monospace Font**: Geist Mono (code, technical content)

### Components
All components follow atomic design principles:
- **Atoms**: Button, Input, etc. (basic building blocks)
- **Molecules**: JobCard, JobFilter, etc. (simple component combinations)
- **Organisms**: Header, Footer, etc. (complex UI sections)

## 🔐 Authentication Flow

1. **User Registration**: Choose role (candidate/recruiter) and create account
2. **Email Verification**: Verify email address (future implementation)
3. **Profile Setup**: Complete profile with relevant information
4. **Dashboard Access**: Access role-specific dashboard and features

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🧪 Testing

```bash
# Unit Tests
npm run test

# E2E Tests
npm run test:e2e

# Coverage
npm run test:coverage
```

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Images**: Optimized with Next.js Image component

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Manual Deployment
1. Build the application: `npm run build`
2. Start the production server: `npm run start`
3. Ensure environment variables are properly set

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@jobmatchai.com or create an issue in the GitHub repository.

## 🗺️ Roadmap

- [ ] Real-time notifications
- [ ] Video interview scheduling
- [ ] Advanced analytics dashboard
- [ ] Mobile application (React Native)
- [ ] AI-powered resume optimization
- [ ] Salary negotiation assistant
- [ ] Company culture matching
- [ ] Skills assessment tests

---

**Job Match AI** - Connecting talent with opportunity through the power of AI.

# Clipmasters - Video Production Agency Website

## Overview
A modern, responsive one-page website for Clipmasters, a video production agency specializing in Visual Sales Letters (VSLs) and launch videos for startups and SaaS companies. Built with React, TypeScript, and Express.js using a modern tech stack with PostgreSQL database integration.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Full-Stack Architecture
The application follows a monorepo structure with a clear separation between client and server components:
- **Frontend**: React SPA with TypeScript and Vite
- **Backend**: Express.js API server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI Framework**: shadcn/ui components with Tailwind CSS
- **Build Tool**: Vite for frontend, esbuild for backend

### Directory Structure
```
├── client/              # React frontend application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utility functions
├── server/              # Express.js backend
├── shared/              # Shared TypeScript definitions
└── attached_assets/     # Static assets and content
```

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui components for consistent design
- **Styling**: Tailwind CSS with custom Apple-inspired color palette
- **State Management**: TanStack Query for server state, React hooks for local state
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Custom scroll reveal animations and CSS transitions

### Backend Architecture
- **API Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle for type-safe database operations
- **Storage**: Configurable storage layer (currently in-memory, extensible to PostgreSQL)
- **Validation**: Zod schemas for runtime type checking
- **Development**: Hot reloading with Vite integration

### Database Schema
Contact management system with the following structure:
- **contacts table**: Stores lead information (name, email, company, message, package type)
- **Schema validation**: Drizzle-zod integration for type-safe operations

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data validated using Zod schemas
3. API request sent to `/api/contact` endpoint
4. Server validates data and stores in database
5. Success/error response sent back to client
6. UI updates with toast notification

### Content Management
- Static content served from attached assets
- Dynamic content rendered through React components
- Scroll-based animations triggered via Intersection Observer API

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives (@radix-ui/*)
- **State Management**: TanStack React Query
- **Styling**: Tailwind CSS, class-variance-authority
- **Forms**: React Hook Form with Hookform resolvers
- **Icons**: Lucide React
- **Animations**: Custom CSS animations with utility classes

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL support (@neondatabase/serverless)
- **Validation**: Zod for schema validation
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Full type safety across the stack
- **Database Migrations**: Drizzle Kit for schema management
- **Code Quality**: ESLint, Prettier (implicit via tooling)

## Deployment Strategy

### Production Build Process
1. Frontend builds to `dist/public` using Vite
2. Backend bundles to `dist/index.js` using esbuild
3. Static assets served directly by Express in production
4. Database migrations run via `db:push` script

### Environment Configuration
- **Development**: Uses Vite dev server with API proxy
- **Production**: Single Express server serves both API and static files
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Key Features
- **Responsive Design**: Mobile-first approach with desktop optimizations
- **Performance**: Optimized images, lazy loading, and efficient bundle splitting
- **SEO**: Semantic HTML structure with proper meta tags
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Analytics Ready**: Structured for easy integration of tracking scripts

### Third-Party Integrations
- **Calendly**: External booking integration for strategy calls
- **Neon Database**: PostgreSQL hosting (via @neondatabase/serverless)
- **Replit**: Development environment integration with banner and cartographer plugins
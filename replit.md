# Overview

This is a full-stack React application built with TypeScript featuring an age calculator interface. The application uses a monorepo structure with a React frontend and Express backend, integrated with PostgreSQL database through Drizzle ORM. The main functionality includes calculating age based on birth date input and displaying animated age statistics with visual elements like particle backgrounds.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for the user interface
- **Vite** as the build tool and development server
- **Tailwind CSS** for styling with a dark theme configuration
- **Shadcn/ui** component library for consistent UI components
- **Wouter** for client-side routing
- **React Query** (@tanstack/react-query) for server state management
- **Framer Motion** for animations and transitions
- **React Hook Form** with Zod validation for form handling

## Backend Architecture
- **Express.js** server with TypeScript
- **RESTful API** structure with routes prefixed under `/api`
- **Middleware-based** request/response handling with logging
- **In-memory storage** implementation with interface for database abstraction
- **Session management** using connect-pg-simple for PostgreSQL sessions

## Database Layer
- **Drizzle ORM** for database operations and schema management
- **PostgreSQL** as the primary database (configured for Neon serverless)
- **Type-safe** database queries with Drizzle's TypeScript integration
- **Migration system** using Drizzle Kit for schema changes
- **Zod schemas** for runtime validation integrated with database models

## Development Architecture
- **Monorepo structure** with shared types between client and server
- **Hot module replacement** in development via Vite
- **TypeScript path mapping** for clean imports (@/, @shared/)
- **ESM modules** throughout the codebase
- **Development middleware** with error overlays and debugging tools

## UI Component System
- **Radix UI primitives** as the foundation for accessible components
- **Class Variance Authority** for component variant management
- **CSS custom properties** for theming and consistent design tokens
- **Responsive design** with mobile-first approach
- **Animation system** using Framer Motion for smooth transitions

# External Dependencies

## Database
- **Neon Database** - Serverless PostgreSQL hosting
- **Drizzle ORM** - Type-safe database toolkit
- **connect-pg-simple** - PostgreSQL session store

## UI Framework
- **Radix UI** - Headless component primitives
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

## Development Tools
- **Vite** - Build tool and development server
- **TypeScript** - Type checking and compilation
- **ESBuild** - Fast bundling for production builds
- **PostCSS** - CSS processing with Autoprefixer

## Runtime Libraries
- **React Query** - Server state management
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation
- **Date-fns** - Date utility functions
- **Wouter** - Lightweight routing
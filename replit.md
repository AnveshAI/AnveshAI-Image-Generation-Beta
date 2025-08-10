# Overview

Anvesh AI is a full-stack AI image generation web application built with React, Express, and TypeScript. The application allows users to generate images from text prompts using AI services, display them in a gallery, and manage the generated content. It features a modern UI with dark/light theme support, responsive design using Tailwind CSS and shadcn/ui components, and a clean architectural separation between client and server.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming support
- **Theme System**: Custom theme provider with localStorage persistence for dark/light mode switching

## Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Development Setup**: tsx for running TypeScript in development with hot reloading
- **API Design**: RESTful endpoints for image generation and retrieval
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request logging and performance monitoring

## Data Storage
- **Database**: PostgreSQL configured via Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema definition
- **Development Fallback**: In-memory storage implementation for development without database
- **Connection**: Neon Database serverless for PostgreSQL hosting

## Data Models
- **Generated Images**: Stores prompt, image URL, optional base64 data, and creation timestamp
- **Schema Validation**: Zod schemas for request/response validation and type safety

## External Dependencies
- **Database**: Neon Database serverless PostgreSQL instance
- **AI Services**: Placeholder implementation for AI image generation (designed to integrate with services like Hugging Face)
- **Image Storage**: Currently uses external URLs (placeholder images from picsum.photos for demo)
- **Development Tools**: Replit integration with cartographer plugin and runtime error modal

## Key Design Decisions
- **Monorepo Structure**: Shared schema between client and server in `/shared` directory
- **Type Safety**: End-to-end TypeScript with shared types and Zod validation
- **Responsive Design**: Mobile-first approach with glassmorphism design elements
- **Performance**: Optimized with React Query caching and Vite bundling
- **Accessibility**: Radix UI components provide built-in accessibility features
- **Development Experience**: Hot reloading, error overlays, and comprehensive tooling setup
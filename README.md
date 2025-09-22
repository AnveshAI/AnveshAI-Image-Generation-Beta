
# AnveshAI - Free AI Image Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express.js-404D59?logo=express)](https://expressjs.com/)

> Generate unlimited high-quality AI images for free. No signup required, completely free forever.

![AnveshAI Screenshot](attached_assets/anvesh-ai-5ca8368d-1442-49b6-86f5-c0eac8e1c2b2.jpg)

## ✨ Features

- 🎨 **AI-Powered Image Generation** - Create stunning images from text prompts
- 🆓 **Completely Free** - No limits, no subscriptions, no hidden fees
- 🚀 **No Registration Required** - Start creating immediately
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- 🌙 **Dark/Light Theme** - Comfortable viewing in any environment
- 💾 **Persistent Storage** - Your images are saved and never lost
- 🔌 **RESTful API** - Developer-friendly API for integration
- ⚡ **Lightning Fast** - Optimized performance with intelligent fallbacks
- 🎯 **High Quality** - 1024x1024 resolution images with enhanced prompts

## 🚀 Quick Start

### Prerequisites

- Node.js 20 or higher
- PostgreSQL database (optional - falls back to in-memory storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnveshAI/Anvesh-Image-Generation-Beta.git
   cd Anvesh-Image-Generation-Beta
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5000`

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **TanStack React Query** - Server state management
- **Wouter** - Lightweight routing

### Backend
- **Express.js** - Fast, minimalist web framework
- **TypeScript** - End-to-end type safety
- **Drizzle ORM** - Type-safe database operations
- **PostgreSQL** - Reliable database storage
- **Zod** - Schema validation

### Deployment
- **Replit** - Cloud development and hosting platform
- **Neon Database** - Serverless PostgreSQL

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Backend Express application
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API route definitions
│   └── storage.ts          # Database operations
├── shared/                 # Shared types and schemas
└── README.md
```

## 🔌 API Documentation

### Generate Image

**POST** `/api/generate`

Generate a new AI image from a text prompt.

```bash
curl -X POST http://localhost:5000/api/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "A beautiful sunset over mountains"}'
```

**Response:**
```json
{
  "id": "123",
  "prompt": "A beautiful sunset over mountains",
  "imageUrl": "https://example.com/image.jpg",
  "createdAt": "2025-01-02T10:30:00Z"
}
```

### Get Images

**GET** `/api/images`

Retrieve all generated images.

```bash
curl http://localhost:5000/api/images
```

### Get Single Image

**GET** `/api/images/:id`

Retrieve a specific image by ID.

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type check
- `npm run db:push` - Push database schema

### Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/anveshai

# Server
PORT=5000
NODE_ENV=development

# AI Service Configuration
# Add your AI service API keys here
```

## 🎨 UI Components

The application uses a comprehensive set of UI components built on top of Radix UI:

- **Forms** - Input, textarea, select, checkbox, radio
- **Navigation** - Breadcrumbs, pagination, navigation menu
- **Feedback** - Toast notifications, alerts, progress bars
- **Layout** - Cards, separators, tabs, accordions
- **Overlays** - Dialogs, popovers, tooltips, sheets

## 🔒 Privacy & Security

- **No Personal Data Collection** - We don't collect names, emails, or phone numbers
- **Secure Storage** - Images are stored securely with persistent URLs
- **No Tracking** - Minimal analytics for service improvement only
- **Open Source** - Full transparency with open source code

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ for the creative community
- Powered by state-of-the-art AI models
- UI components by [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/AnveshAI/Anvesh-Image-Generation-Beta/issues)
- **Discussions**: [GitHub Discussions](https://github.com/AnveshAI/Anvesh-Image-Generation-Beta/discussions)

## 🌟 Show Your Support

If you find this project helpful, please consider giving it a ⭐ on GitHub!

---

**Made with ❤️ by the AnveshAI team**

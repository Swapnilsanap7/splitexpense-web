# SplitExpense

A modern expense-splitting web application built with Next.js that simplifies group expense management and settlement calculations.

## 🚧 Development Status

**Current Implementation:** Frontend-only application with authentication
**Next Phase:** Backend API and database integration (in development)

### What's Working
- ✅ Modern Next.js 15 frontend with App Router
- ✅ Firebase Authentication (guest login implemented)
- ✅ Responsive dashboard with placeholder UI
- ✅ Professional component architecture

### What's Coming Next
- 🔄 Backend API development in progress
- 🔄 Database schema and data persistence
- 🔄 Real expense splitting functionality
- 🔄 Group management and member invitations
- 🔄 Payment integration and settlement tracking

## 🛠️ Tech Stack

**Frontend**
- Next.js 15.2.1 (App Router)
- React 19.0.0
- TailwindCSS 4.0
- Framer Motion for animations

**Authentication & Services**
- Firebase 12.6.0 (Authentication, Firestore ready)
- Firebase Analytics

**Development Tools**
- ESLint with Next.js configuration
- Lucide React icons

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js                 # Landing page
│   ├── layout.js               # Root layout
│   ├── dashboard/page.js       # User dashboard (post-login)
│   ├── contact/page.js         # Contact page
│   ├── context/AuthContext.js  # Authentication state management
│   └── components/             # Reusable UI components
│       ├── Navbar.js           # Navigation component
│       ├── Hero.js             # Landing page hero section
│       ├── Features.js         # Feature showcase
│       ├── Footer.js           # Site footer
│       ├── ThemeToggle.js      # Dark/light mode toggle
│       └── [other components]  # Additional UI components
├── lib/
│   └── firebase.js             # Firebase configuration & initialization
└── globals.css                 # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Development Setup

1. **Clone and Install**
```bash
git clone https://github.com/Swapnilsanap7/splitexpense-web.git
cd splitexpense-web
npm install
```

2. **Environment Configuration**
Create `.env.local` with your Firebase config:
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

3. **Run Development Server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Access Application**
Open [http://localhost:3000](http://localhost:3000) in your browser

### Production Build

```bash
npm run build
npm run start
```

## 🔐 Authentication

Currently supports Firebase Authentication with guest login functionality. After successful authentication, users are redirected to the dashboard.

**Note:** Backend user management and persistent sessions are planned for the next development phase.

## 📊 Dashboard Features

The current dashboard includes:
- User authentication status
- Placeholder expense statistics
- Quick action buttons (UI ready, backend pending)
- Recent activity feed (awaiting API integration)
- Feature preview section

**Important:** All expense-related functionality displays placeholder data until backend APIs are implemented.

## 🔮 Planned Backend Implementation

### Phase 1: API Development
- RESTful API with Express.js/Fastify or similar
- User management and secure session handling
- Expense CRUD operations
- Group management endpoints

### Phase 2: Database Integration
- User profiles and authentication data
- Expense records and categories
- Group memberships and permissions
- Settlement calculations and history

### Phase 3: Advanced Features
- Real-time expense splitting calculations
- Push notifications for group activities
- Payment gateway integration
- Receipt scanning and OCR
- Expense analytics and reporting

## 🚀 Deployment

### Vercel (Recommended)
This project is optimized for Vercel deployment:

```bash
# Deploy to Vercel
npm run build
```

Connect your GitHub repository to Vercel for automatic deployments.

### Alternative Platforms
- **Netlify:** Supports Next.js with build command `npm run build`
- **Railway:** Direct deployment from GitHub
- **Docker:** Dockerfile can be added for containerized deployment

### Environment Variables
Ensure all `NEXT_PUBLIC_FIREBASE_*` variables are configured in your deployment platform.

## 📄 License

This project is private and proprietary. All rights reserved.


---

**Status Update:** 
Frontend authentication implemented ✅
Backend development in progress 🔄
Full functionality coming soon 🚀


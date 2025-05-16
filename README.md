# HR Management Dashboard

A modern HR Management Dashboard built with Next.js, TypeScript, and Tailwind CSS.

## Live Demo
[View Live Demo](https://frontend-dashboard-4qgy7nvqy-ram-charans-projects-33516711.vercel.app)

## Features

- 🔐 User Authentication with Context API and LocalStorage
- 📊 Interactive Dashboard with Statistics
- 👥 Employee Management System
- 📋 Candidate Tracking with ATS Scores
- 📱 Fully Responsive Design
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Context API for State Management
- Heroicons

## Project Structure

```
frontend-assignment/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── dashboard/      # Dashboard pages
│   │   └── page.tsx        # Login page
│   ├── components/         # Reusable components
│   │   ├── ui/            # UI components
│   │   └── ...            # Other components
│   ├── contexts/          # Context providers
│   ├── constants/         # Constants and configurations
│   └── types/            # TypeScript types
├── public/               # Static assets
└── tailwind.config.js   # Tailwind configuration
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/ramcharan0308/frontend-dashboard.git
cd frontend-assignment
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with default settings

### Deploying to Netlify

1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com)
3. Connect your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `out`

## Development Approach

### Architecture
- Used Next.js App Router for modern routing
- Implemented Context API for state management
- Created reusable UI components for consistency
- Used TypeScript for type safety

### Components
- Created atomic UI components (Button, Input, Card, Badge)
- Implemented compound components for complex features
- Used proper prop typing with TypeScript
- Added loading states and error handling

### Styling
- Used Tailwind CSS for all styling
- Created consistent color schemes and spacing
- Implemented responsive design patterns
- Added smooth transitions and animations

### State Management
- Used Context API for authentication
- Implemented LocalStorage for persistence
- Added loading and error states
- Created mock data for demonstration

## Features

### Authentication
- Login with email
- Persistent sessions with localStorage
- Protected routes
- Loading states and error handling

### Dashboard
- Overview statistics
- Recent activities
- Employee management
- Payroll tracking

### Employee Management
- Employee list view
- Search and filter functionality
- Employee details modal
- Status tracking

## Performance Optimizations

1. Component Code Splitting
2. Lazy Loading for Routes
3. Image Optimization
4. Proper TypeScript Usage
5. Minimized Re-renders

## Future Improvements

- Add unit tests with Jest and React Testing Library
- Implement real authentication
- Add more interactive features
- Optimize performance further
- Add dark mode support
- Implement data persistence
- Add more data visualization

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.

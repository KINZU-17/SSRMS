# Student Request Management System (SSRMS)

A visually appealing web application for managing student requests, built with React, Vite, and TailwindCSS. The system provides separate portals for students and administrators with a modern, intuitive interface.

## Features

- **Modern UI/UX**: Clean, professional design with thoughtful spacing, typography, and color schemes
- **Role-based Access**: Separate interfaces for students and administrators
- **Request Submission**: Students can submit various types of requests with form validation
- **Request Management**: Administrators can view, manage, and process requests
- **Dashboard Overview**: Visual summary of requests and statistics with color-coded metrics
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode Support**: Automatic dark/light mode based on system preference
- **Interactive Elements**: Hover effects, loading states, and visual feedback on all interactive components

## Tech Stack

- **Frontend**: React 19, React Router DOM
- **Build Tool**: Vite
- **Styling**: TailwindCSS 4 (utility-first approach with custom design system)
- **State Management**: React Hooks
- **Linting**: ESLint with React plugins

## Visual Enhancements

The application features a comprehensive design system including:

- **Custom Button Components**: Professionally styled buttons with variants (primary, secondary, success, warning, danger, ghost) including hover effects, focus states, and loading indicators
- **Enhanced Card Components**: Elevated cards with shadows, borders, rounded corners, and proper spacing
- **Improved Form Elements**: Better input fields, selects, and textareas with proper labels, validation states, and focus rings
- **Modern Layout System**: Flexible grid layouts, proper spacing, and responsive design breakpoints
- **Color-coded Status Indicators**: Visual distinction between pending (yellow), approved (green), and rejected (red) requests
- **Sidebar Navigation**: Collapsible navigation with active state indicators and hover effects
- **Loading States**: Visual feedback during asynchronous operations
- **Dark Mode**: Automatic adaptation to system preferences with carefully crafted dark mode colors

## Project Structure

```
src/
├── components/
│   ├── Button.jsx          # Custom button component with variants and styling
│   ├── Input.jsx           # Enhanced form input component
│   ├── Card.jsx            # Base card component (styled via props)
│   ├── PortalLayout.jsx    # Role-based layout with sidebar and header
│   └── Sidebar.jsx         # Navigation sidebar with active states
├── pages/
│   ├── Admin/
│   │   ├── AdminHome.jsx       # Admin dashboard with stats overview
│   │   ├── AllRequests.jsx     # View all requests in table format
│   │   └── ManageRequests.jsx  # Manage individual requests with actions
│   ├── Student/
│   │   ├── StudentHome.jsx     # Student dashboard with metrics
│   │   ├── SubmitRequest.jsx   # Form to submit new request
│   │   └── MyRequests.jsx      # View student's requests with filtering
│   └── RoleSelector.jsx        # Role selection page
├── services/
│   └── api.js                # API service functions
├── hooks/
│   └── useRequests.js        # Custom hook for request management
├── utils/
│   └── formatter.js          # Utility functions
├── App.jsx                   # Main application router
├── main.jsx                  # Entry point
└── index.css                 # Global TailwindCSS import
```

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd SSRMS
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

## Usage

1. After starting the development server, visit `http://localhost:5173` (or the port shown in terminal)
2. Select your role (Student or Administrator) on the Role Selector page
3. Navigate through the portal using the sidebar
4. Students can submit requests via the Submit Request page with enhanced form validation
5. Administrators can view and manage requests in the Admin section with color-coded status indicators

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## Collaborators

This project was developed by a team of four members:
- **Louis** - Contributed to component development and UI/UX design
- **James** - Worked on backend integration and API services
- **Robby** - Focused on state management and request handling logic
- **Crystal** - Responsible for testing, documentation, and project coordination

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Vite team for the excellent build tool
- React team for the frontend library
- TailwindCSS for the utility-first CSS framework
- Headless UI for inspiration on accessible components
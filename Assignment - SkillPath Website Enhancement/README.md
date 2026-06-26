# SkillPath Website Enhancement Assignment

A modern, responsive multi-page React application built for the **SkillPath Website Enhancement** assignment. This project demonstrates core React fundamentals such as reusable components, state management, routing, and modern UI design.

## Features & Requirements Met

### 🚀 Pages and Routing
Implemented with `react-router-dom`:
- **Landing Page (`/`)**: Combines a Hero Section, Feature Cards, Testimonials, and a Call-to-Action banner into a single scrolling page.
- **About Page (`/about`)**: Introduces the platform's purpose, mission, and key features.
- **Contact Page (`/contact`)**: Features a fully controlled form.
- **Not Found Page (`*`)**: A custom 404 page providing a clear path back to the home page for invalid routes.

### 🧩 Reusable Components
- `Navbar.jsx`: Dynamic navigation using `NavLink` for active link states.
- `Footer.jsx`: Persistent application footer with navigation and external links.
- `HeroSection.jsx`: The primary landing page hook with a modern glassmorphism design.
- `FeatureCard.jsx`: Reusable component demonstrating the usage of `props` to dynamically pass icons, titles, and descriptions.
- `TestimonialSection.jsx`: A mapped grid displaying a list of student reviews.
- `CTABanner.jsx`: A focused banner prompting user enrollment.

### ⚛️ React Concepts Used
- **Component Reusability**: Breaking down the UI into logical, independent pieces.
- **State Management**: Using `useState` on the Contact page to manage form inputs, submission state, and error handling.
- **Controlled Forms**: Contact form fields are controlled entirely by React state.
- **Event Handling**: Handling form submissions and preventing default page reloads (`e.preventDefault()`).
- **Conditional Rendering**: Displaying success or error alerts based on the form's submission state.

### 🎨 Design & Styling
Built entirely with **Vanilla CSS** for maximum control and flexibility. Features include:
- A custom design system (variables for spacing, primary/secondary colors).
- Premium visual aesthetics (glassmorphism, gradient text, clean typography).
- Responsive grid and flexbox layouts to ensure mobile-readiness.
- Micro-animations (fade-in transitions, hover effects on buttons and cards).

## Getting Started

Follow these steps to run the project locally.

### Prerequisites
- Node.js (v16.x or newer)
- npm (Node Package Manager)

### Installation

1. Navigate to the project directory:
   ```bash
   cd "Assignment - SkillPath Website Enhancement"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit the local address provided (usually `http://localhost:5173/`).

## Project Structure

```
├── public/                 # Static public assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── CTABanner.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   └── TestimonialSection.jsx
│   ├── pages/              # Application Routes/Pages
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── LandingPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── App.jsx             # Main Router Setup
│   ├── App.css             # Component-specific styles
│   ├── index.css           # Global CSS variables & typography
│   └── main.jsx            # Application Entry Point
├── index.html              # HTML template
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## Technologies Used
- React (Vite)
- React Router DOM
- Lucide React (Icons)
- Vanilla CSS

# JobTrack — Job Application Tracker

JobTrack is a React-based job application tracker built as a learning project.

The goal of this project is to practice React concepts by building a real-world application step by step, starting with basic JSX and components and eventually adding routing, backend data, testing, deployment, TypeScript, and AI features.

## 🚀 Project Goal

Build a complete job application management system where users can:

- Add job applications
- View all applications
- Search and filter jobs
- Track application status
- View job details
- Edit applications
- Delete applications
- Store application data through a backend
- Test React components
- Deploy the application online

---

## 🛠️ Technologies

### Current

- React
- JavaScript
- JSX
- CSS
- Vite
- ESLint

### Planned

- React Router
- REST API
- Backend
- Data fetching
- Data mutation
- Vitest
- Git & GitHub
- Deployment
- TypeScript
- AI integration

---

## 📚 React Concepts Practiced

This project follows a structured learning path.

### 1. React Basics

- JSX
- JavaScript expressions in JSX
- Rendering elements
- Basic React structure

### 2. Components & Props

- Functional components
- Reusable components
- Props
- Component composition

### 3. State & Events

- `useState`
- Event handlers
- Form handling
- User interactions
- Conditional rendering

### 4. CSS & Hooks

- Component styling
- Responsive design
- React Hooks
- UI states

### 5. Vite Setup

- Vite
- Project structure
- Development server
- ESLint

### 6. React Router

- Multiple pages
- Routes
- Navigation
- Dynamic routes
- URL parameters

### 7. Backend & Data Fetching

- API requests
- `fetch()`
- `useEffect`
- Loading states
- Error handling

### 8. Data Mutation

- POST
- PUT/PATCH
- DELETE
- Updating backend data

### 9. Testing

- Vitest
- Component testing
- User interaction testing

### 10. Deployment

- Production build
- Git
- GitHub
- Deployment
- Basic AWS concepts

### 11. Advanced Topics

- React 19
- TypeScript with React
- AI with React

---

## 📁 Project Structure

The project will gradually grow into:

```text
job-tracker/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   ├── StatCard.jsx
│   │   └── JobCard.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Applications.jsx
│   │   ├── JobDetails.jsx
│   │   ├── AddApplication.jsx
│   │   └── Settings.jsx
│   │
│   ├── hooks/
│   │
│   ├── services/
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## 🎨 Main Pages

### Dashboard

The dashboard provides an overview of job applications.

It will include:

- Total applications
- Applied jobs
- Interview jobs
- Rejected jobs
- Recent applications

### Applications

Displays all job applications with:

- Job title
- Company
- Application date
- Status
- Skills
- Actions

### Job Details

Displays detailed information about a selected application.

### Add Application

A form for adding a new job application.

Example fields:

```text
Job Title
Company
Application Date
Status
Job Link
Notes
```

### Settings

User/application preferences and profile settings.

---

## 📊 Application Status

Job applications can have different statuses:

- Applied
- Interview
- Offer
- Rejected
- Withdrawn

---

## 🧩 Example Job Data

```js
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "ABC Company",
    status: "Interview",
    date: "2026-09-28",
  },
  {
    id: 2,
    title: "Shopify Developer",
    company: "XYZ Agency",
    status: "Applied",
    date: "2026-09-30",
  },
];
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project:

```bash
cd job-tracker
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown in your terminal.

---

## 🧪 Testing

Testing will be added later using Vitest.

Example:

```bash
npm run test
```

---

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 📈 Learning Progress

- [x] React project created with Vite
- [x] ESLint configured
- [ ] Build Dashboard
- [ ] Create reusable components
- [ ] Practice props
- [ ] Add state
- [ ] Add event handlers
- [ ] Add CSS
- [ ] Add React Router
- [ ] Connect backend
- [ ] Fetch application data
- [ ] Add data mutation
- [ ] Add Vitest tests
- [ ] Deploy application
- [ ] Learn React 19 features
- [ ] Convert project to TypeScript
- [ ] Add AI functionality

---

## 🎯 Purpose

This project is primarily a **React learning project**.

Instead of only following tutorials, the application is being built from scratch to understand how React concepts work in a real-world project.

The project will evolve as new React concepts are learned.

---

## 👨‍💻 Author

**Zumar Arshad**

Frontend & WordPress Developer

Learning and building with:

- React
- JavaScript
- WordPress
- Shopify
- TypeScript

---

## 📌 Status

🚧 **Currently in development**

The project is being built step by step while learning React.

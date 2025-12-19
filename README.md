# The Wild Oasis

The Wild Oasis is a modern, responsive hotel management and booking dashboard built as a full‑stack web application. It focuses on clean UI, smooth user experience, and real‑world features like authentication, bookings, cabins, and analytics.

## Live Demo

Link :- `https://the-wild-oasis-gaurav-borse.netlify.app/`

## Features

- Secure authentication (login & logout)
- Cabin management (add, edit, delete cabins)
- Booking management with status tracking
- Guest management
- Dashboard with charts and statistics
- Light and dark theme support

## How to Navigate the App

1. **Login Page**
   Enter valid credentials to access the dashboard.
   demo mail :- "gaurav@123.com",
   demo pass :- 2205

2. **Dashboard**
   Overview of bookings, sales, occupancy rate, and recent activity.

3. **Bookings**
   View all bookings, filter by status, check booking details, and update booking states.

4. **Cabins**
   Manage cabins including price, capacity, and availability.

5. **Users**
   We can able to create new users only when a user is already authenticated.

6. **Settings**
   Update application preferences like account details.

## 🛠️ Technologies Used

### Frontend

- React (Vite)
- React Router
- Styled Components
- Recharts (for charts)
- React Query (TanStack Query)
- React Forms
- React Icons

### Backend & Auth

- Supabase (Authentication & Database)

### Deployment

- Netlify
- Vercel

## 📂 Project Structure

```
root
│── public/
│── src/
│   │──context         # Reusable DarkMode Context
│   ├── features/      # Bookings, cabins, auth, dashboard
│   ├── services/      # Supabase & API logic
│   ├── ui/            # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Route-level pages
│   └── App.jsx
│── index.html
│── netlify.toml
│── vite.config.js
```

## 🔐 Authentication Flow

- User logs in using email & password
- Supabase creates a session
- Session is cached using React Query
- Protected routes are accessible only when authenticated

## Learning Outcomes

- Real‑world React architecture
- State management with React Query
- Supabase authentication & database handling
- Error boundaries and performance optimization

## 👤 Author

Developed by **Gaurav Borse** as a full‑stack React project from "Jonas schmedtmann's" course.

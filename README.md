# Cadenza Orchestra Planner

A personal event planner for orchestra musicians. Cadenza helps players and ensembles schedule, view and keep track of their calls: rehearsals, sectionals, concerts and meetings.

Built with React, Vite, React Router, React-Bootstrap and the Context API as the HyperionDev Level 2 - Front End Development React Capstone Project.

## Features

- **Registration**: create an account with name, email, username and password. Every field is validated: none may be empty, the email must be in a valid format, usernames must be unique and contain no spaces, and passwords need at least 6 characters.
- **Login**: sign in with your username _or_ email. Protected pages send you to the login screen first, then back to the page you wanted.
- **Dashboard**:
  - Upcoming calls in date order, grouped by month and generated with `array.map()`.
  - A summary showing how many calls are coming up and what the next one is.
  - Past calls kept in a section you can show or hide.
- **Event management**:
  - Add calls with an engagement name, date, call time, venue and notes. New calls must be in the future.
  - Edit any call. Past calls can be edited too, e.g. to add notes after a concert.
  - Delete calls, with a confirmation box to prevent accidents.
  - Every change updates the app's state immediately, so the dashboard always matches the saved data.
- **Fixed header navigation** with links to Dashboard, Add Call and Help, plus an account menu. On phones the links fold into a ☰ menu.
- **Help page** explaining how to navigate the app, register, and create, edit and delete calls, with tips for organising rehearsals and concerts.
- **Responsive design**: works on phones, tablets and computers. On phones, each call's notes are tucked behind a 💬 **Show notes** button to keep the list compact.

## Tech stack

| Area             | Tool                                          |
| ---------------- | --------------------------------------------- |
| UI library       | React 19                                      |
| Build tool       | Vite                                          |
| Routing          | React Router DOM 7                            |
| Styling          | React-Bootstrap 2, Bootstrap 5 and custom CSS |
| State management | React Context API                             |
| Storage          | Browser `localStorage`                        |
| Code checking    | ESLint                                        |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) version 20.19 or later
- npm (installed together with Node.js)

### Installation and running the app

1. Open a terminal in this project folder (the folder containing `package.json`).

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the address shown in the terminal (usually <http://localhost:5173>) in your browser.

5. Choose **Register** to create an account, then use **Add Call** to schedule your first event.

### Available scripts

| Command           | What it does                                       |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Starts the development server.                     |
| `npm run build`   | Builds an optimised production version in `dist/`. |
| `npm run preview` | Serves the production build locally.               |
| `npm run lint`    | Checks the code with ESLint.                       |

## Project structure

```text
cadenza-orchestra-planner/
├── public/                    # Favicon, app icons and link-preview image
├── src/
│   ├── assets/                # Cadenza logo files
│   ├── components/            # Reusable building blocks
│   │   ├── AuthCard.jsx             # Shared layout for Log in and Register
│   │   ├── ConfirmDeleteModal.jsx   # "Delete call?" confirmation box
│   │   ├── EventCard.jsx            # One call on the dashboard
│   │   ├── EventForm.jsx            # Shared form for adding and editing calls
│   │   ├── HeaderNav.jsx            # Fixed navigation header
│   │   ├── ProtectedRoute.jsx       # Pages for logged-in users only
│   │   └── PublicOnlyRoute.jsx      # Pages for logged-out users only
│   ├── contexts/              # Context API
│   │   ├── AuthContext.js
│   │   ├── AuthProvider.jsx         # Accounts, login state, register/login/logout
│   │   ├── EventsContext.js
│   │   └── EventsProvider.jsx       # Calls, plus add/update/delete actions
│   ├── hooks/                 # useAuth() and useEvents()
│   ├── pages/                 # One component per page (route)
│   ├── styles/app.css         # Cadenza theme on top of Bootstrap
│   ├── utils/                 # Validation, date formatting and localStorage helpers
│   ├── App.jsx                # Header, layout and routes
│   └── main.jsx               # Entry point: router and context providers
├── index.html
└── package.json
```

## How state is managed

Two context providers wrap the whole app in `main.jsx`:

- **`AuthProvider`** stores the registered users and the logged-in user, and provides `register`, `login` and `logout`.
- **`EventsProvider`** stores all calls, shows each user only their own calls, splits them into upcoming and past, and provides `addEvent`, `updateEvent`, `deleteEvent` and `getEventById`.

Components read this information with the `useAuth()` and `useEvents()` hooks. Both providers save to `localStorage`, so accounts and calls survive a page refresh.

## Notes and limitations

- This is a front-end-only demonstration. Accounts and calls are stored in the browser's `localStorage` on one device, and passwords are **not** encrypted. A real version would use a back-end server, a database and securely hashed passwords.
- Clearing the browser's data removes all accounts and calls.

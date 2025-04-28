# Task Management Application - Frontend (React)

This repository contains the frontend client for the MERN Task Management application. It provides the user interface for interacting with the backend API, allowing users to register, log in, and manage their tasks.

## Features

*   User Registration & Login Interface
*   Displays user-specific tasks
*   Form for adding new tasks (with title, optional description, priority)
*   Ability to mark tasks as 'Completed' or 'Active'
*   Ability to delete tasks
*   Filtering tasks by status (All, Active, Completed)
*   Responsive design for various screen sizes
*   (Optional: List any unique features you added, e.g., Sorting, Due Dates, Search, Tags, Drag & Drop)

## Tech Stack

*   **Framework/Library:** React (using Functional Components and Hooks)
*   **Build Tool:** Vite
*   **Language:** JavaScript (ES6+)
*   **Routing:** React Router DOM v6
*   **State Management:** React Context API (for Authentication), `useState`/`useEffect` (for component-level state like tasks)
*   **API Communication:** Axios (with interceptors for JWT handling)
*   **Styling:** CSS3 (or specify if you used CSS Modules, Tailwind CSS, Styled Components, etc.)
*   (Optional: Add any other significant libraries like `date-fns`, `react-beautiful-dnd`, etc.)

## Architecture & Technical Choices

*   **Framework (React):** Chosen for its component-based architecture, declarative UI approach, strong community support, and efficient rendering using the Virtual DOM. Functional components with Hooks (`useState`, `useEffect`, `useContext`, `useCallback`) were primarily used for state management and side effects, aligning with modern React practices.
*   **Build Tool (Vite):** Selected for its extremely fast development server startup and Hot Module Replacement (HMR), significantly improving the development experience compared to older bundlers.
*   **Routing (React Router DOM):** Used to create a Single Page Application (SPA) experience, enabling navigation between different views (Login, Register, Dashboard) without full page reloads.
*   **State Management (Context API + Local State):** The Context API provides an efficient way to manage global application state like user authentication status across components. For state specific to components or pages (like the list of tasks, form inputs, filters), component-level state managed by `useState` was sufficient for this application's scale, avoiding the complexity of larger state management libraries like Redux or Zustand.
*   **API Communication (Axios):** Axios was chosen for its ease of use, Promise-based nature (integrating well with `async/await`), and convenient features like automatic JSON transformation and interceptors. An interceptor was configured to automatically attach the JWT `Authorization` header to outgoing requests after login.
*   **Styling:** (Explain your choice - e.g., "Plain CSS was used for simplicity and direct control...", or "CSS Modules were used to scope styles locally to components...", etc.)
*   **Component Structure:** The application is structured into `pages` (top-level views), reusable `components`, `api` (for Axios configuration and calls), `context` (for Auth state), `hooks` (custom hooks like `useAuth`), and `routing` (for protected routes), promoting code organization and reusability.

## Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js) or [yarn](https://yarnpkg.com/)

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SheikhAltamash/FSD_Asingment_frontend.git
    cd FSD_Asingment_frontend.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Create Environment File:**
    Create a `.env` file in the **root** of the frontend project directory.

4.  **Configure Environment Variables:**
    Add the following variable to your `.env` file, replacing the placeholder URL with the actual **URL where your backend API is running**:
    ```env
    VITE_API_URL=http://localhost:8080/api
    ```
    *   `VITE_API_URL`: The base URL for the backend API server. **Crucially, this must start with `VITE_` for Vite to expose it to the frontend code.**

## Running the Application Locally

1.  **Ensure the Backend API is Running:** The backend server (from the separate backend repository) must be running and accessible at the URL specified in `VITE_API_URL`.

2.  **Start the Frontend Development Server:**
    ```bash
    npm run dev
    ```
    This command will start the Vite development server.

3.  **Open the Application:**
    Open your web browser and navigate to the local URL provided by Vite (usually `http://localhost:5174` or similar).

## Environment Variables

*   `VITE_API_URL`: Specifies the base URL of the backend API. This is essential for the frontend to know where to send requests for login, registration, tasks, etc. **Remember to restart the Vite development server (`npm run dev`) if you modify the `.env` file.**

## Backend Requirement

This frontend application **requires** the corresponding [Task Management Backend API](https://github.com/SheikhAltamash/FSD_Asingment_backend) to be running and accessible. Please follow the setup instructions in the backend repository's README file.

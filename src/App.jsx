import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import useAuth from "./hooks/useAuth"; // Import useAuth hook
import ProtectedRoute from "./routing/ProtectedRoute"; // Import ProtectedRoute
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import "./index.css"; // Ensure styles are imported

// --- Helper Component for Public Routes ---
const PublicRoute = ({ children }) => {
  const { token, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }
  return token ? <Navigate to="/" replace /> : children;
};

// --- Main App Component ---
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* --- Public Routes --- */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />

          {/* --- Protected Routes --- */}
          {/* Wrap the parent route with ProtectedRoute */}
          <Route path="/" element={<ProtectedRoute />}>
            {/* Nest the Dashboard route inside */}
            {/* 'index' makes it the default route for '/' */}
            <Route index element={<Dashboard />} />
            {/* Add other protected routes here if needed */}
            {/* e.g., <Route path="profile" element={<Profile />} /> */}
          </Route>

          {/* --- Fallback Route --- */}
          {/* Consider if '/' is always the right fallback or if it should be '/login' */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";

import FloatingShape from "./components/FloatingShape";
import Layout from "./components/Layout";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ContactUsPage from "./pages/ContactUsPage";
import StudentForm from "./pages/StudentForm";
import AdminPanel from "./pages/AdminPanel";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

import LoadingSpinner from "./components/LoadingSpinner";
import { Toaster } from "react-hot-toast";

const ADMIN_EMAIL = "2023021002@mmmut.ac.in";

// Protected Route Component
const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!user?.isVerified) return <Navigate to="/verify-email" replace />;
  if (adminOnly && user.email !== ADMIN_EMAIL) return <Navigate to="/" replace />;

  return children;
};

// Redirect already authenticated users away from auth routes
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  const isAdmin = user?.email === ADMIN_EMAIL;

  if (isAuthenticated && user?.isVerified) {
    return <Navigate to={isAdmin ? "/admin" : "/dashboard"} replace />;
  }

  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth(); // Check auth status only once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#1F2833] to-[#45A29E] text-white relative overflow-hidden">
      {/* Floating Background Shapes */}
      <FloatingShape color="bg-indigo-500" size="w-64 h-64" top="-5%" left="10%" delay={0} />
      <FloatingShape color="bg-cyan-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
      <FloatingShape color="bg-purple-500" size="w-32 h-32" top="40%" left="-10%" delay={2} />

      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/about" element={<About />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student-form"
            element={
              <ProtectedRoute>
                <StudentForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminPanel />
              </ProtectedRoute>
            }
          />

          {/* Auth Routes */}
          <Route
            path="/signup"
            element={
              <RedirectAuthenticatedUser>
                <SignUpPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/login"
            element={
              <RedirectAuthenticatedUser>
                <LoginPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route path="/verify-email" element={<EmailVerificationPage />} />
          <Route
            path="/forgot-password"
            element={
              <RedirectAuthenticatedUser>
                <ForgotPasswordPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/reset-password/:token"
            element={
              <RedirectAuthenticatedUser>
                <ResetPasswordPage />
              </RedirectAuthenticatedUser>
            }
          />

          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>

      <Toaster />
    </div>
  );
}

export default App;

import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date"; // Ensure this utility exists and works
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate for redirection
import { useEffect } from "react"; // Added for auth check

const DashboardPage = () => {
  const { user, logout, isAuthenticated, isCheckingAuth } = useAuthStore();
  const navigate = useNavigate(); // For redirecting after logout or if unauthenticated

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isCheckingAuth && !isAuthenticated) {
      toast.error("Please log in to access the dashboard");
      navigate("/login");
    }
  }, [isAuthenticated, isCheckingAuth, navigate]);

  const handleLogout = () => {
    toast.success("Logged out successfully");
    logout();
    navigate("/login"); // Redirect to login page after logout
  };

  // Show a loading state while checking authentication
  if (isCheckingAuth) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-300 text-xl">Loading...</p>
      </div>
    );
  }

  // If user is null or undefined, don't render the dashboard content
  if (!user) {
    return null; // This won't be reached due to the useEffect redirect, but added as a safeguard
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
    >
      <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
        Dashboard
      </h2>

      <div className="space-y-6">
        <motion.div
          className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-green-400 mb-3">
            Profile Information
          </h3>
          <p className="text-gray-300">Name: {user.name || "N/A"}</p>
          <p className="text-gray-300">Email: {user.email || "N/A"}</p>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-green-400 mb-3">
            Account Activity
          </h3>
          <p className="text-gray-300">
            <span className="font-bold">Joined: </span>
            {user.createdAt
              ? new Date(user.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "N/A"}
          </p>
          <p className="text-gray-300">
            <span className="font-bold">Last Login: </span>
            {user.lastLogin ? formatDate(user.lastLogin) : "N/A"}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
            font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Logout
        </motion.button>
      </motion.div>

      <div className="mt-8 p-4 bg-gray-800 bg-opacity-60 rounded-lg border border-gray-700 shadow-md flex justify-center">
        <p className="text-sm text-gray-400">
          Register yourself for freshers Passes{" "}
          <Link to={"/student-form"} className="text-green-400 hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default DashboardPage;

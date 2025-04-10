import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signup, error, isLoading, setUserEmail } = useAuthStore();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const isMMMUTEmail = /^2023021[a-zA-Z0-9._%+-]*@mmmut\.ac\.in$/.test(email);
    setIsEmailValid(isMMMUTEmail);

    if (!name || !email || !password || name.length < 4 || password.length < 6) {
      return;
    }

    if (!isMMMUTEmail) {
      toast.error("Email must start with 2023021 and end with @mmmut.ac.in.");
      return;
    }

    try {
      await signup(email, password, name);
      setUserEmail(email);
      toast.success("Account created successfully. Please verify your email.");
      navigate("/verify-email");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Create Account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-4">
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />

          <Input
            icon={Mail}
            type="email"
            placeholder="College Email Address"
            value={email}
            onChange={(e) => {
              const val = e.target.value;
              setEmail(val);
              setIsEmailValid(/^2023021[a-zA-Z0-9._%+-]*@mmmut\.ac\.in$/.test(val));
            }}
            className={!isEmailValid ? "border-red-500 focus:ring-red-500" : ""}
          />
          {!isEmailValid && (
            <p className="text-sm text-red-400 -mt-2">
              Email must start with 2023021 and end with @mmmut.ac.in.
            </p>
          )}

          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <PasswordStrengthMeter password={password} />

          <motion.button
            className="mt-4 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Loader className="animate-spin mx-auto" size={24} /> : "Sign Up"}
          </motion.button>
        </form>
      </div>

      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link to={"/login"} className="text-green-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage;

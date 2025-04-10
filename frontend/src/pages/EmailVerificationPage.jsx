// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useAuthStore } from "../store/authStore";
// import { toast } from "react-hot-toast";

// const EmailVerificationPage = () => {
//   const [code, setCode] = useState(["", "", "", "", "", ""]);
//   const inputRefs = useRef([]);
//   const navigate = useNavigate();

//   const { error, isLoading, verifyEmail, resendOTP, userEmail } = useAuthStore();
//   const [isResending, setIsResending] = useState(false);

//   // ✅ Redirect if userEmail doesn't exist
//   useEffect(() => {
//     if (!userEmail) {
//       toast.error("Please signup first");
//       navigate("/signup");
//     }
//   }, [userEmail, navigate]);

//   // ✅ Show single backend error
//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//     }
//   }, [error]);

//   const handleChange = (index, value) => {
//     if (!/^[0-9]*$/.test(value)) return;

//     const newCode = [...code];
//     newCode[index] = value;
//     setCode(newCode);

//     if (value && index < 5) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && code[index] === "" && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const paste = e.clipboardData.getData("text").trim();
//     if (!/^\d+$/.test(paste)) return;

//     const pastedCode = paste.slice(0, 6).split("");
//     const newCode = [...code];

//     pastedCode.forEach((digit, idx) => {
//       newCode[idx] = digit;
//       if (inputRefs.current[idx]) {
//         inputRefs.current[idx].value = digit;
//       }
//     });

//     setCode(newCode);
//     const nextIndex = pastedCode.length >= 6 ? 5 : pastedCode.length;
//     inputRefs.current[nextIndex]?.focus();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const verificationCode = code.join("");

//     if (verificationCode.length !== 6) {
//       toast.error("Enter the full 6-digit code");
//       return;
//     }

//     try {
//       await verifyEmail(verificationCode);
//       toast.success("Email verified successfully");
//       navigate("/");
//     } catch (error) {
//       console.error(error);
//       // error toast already shown via store
//     }
//   };

//   const handleResendOTP = async () => {
//     if (!userEmail) {
//       toast.error("No email found, please signup again");
//       navigate("/signup");
//       return;
//     }

//     try {
//       setIsResending(true);
//       await resendOTP(userEmail);
//       toast.success("Resend OTP successful");
//     } catch (error) {
//       toast.error("Failed to resend OTP");
//       console.error(error);
//     } finally {
//       setIsResending(false);
//     }
//   };

//   return (
//     <div className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="p-8"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
//           Verify Your Email
//         </h2>
//         <p className="text-center text-gray-300 mb-6">
//           Enter the 6-digit code sent to{" "}
//           <span className="text-green-400 font-semibold">{userEmail}</span>
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="flex justify-between">
//             {code.map((digit, index) => (
//               <input
//                 key={index}
//                 ref={(el) => (inputRefs.current[index] = el)}
//                 type="text"
//                 maxLength="1"
//                 value={digit}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//                 onPaste={handlePaste}
//                 className="w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-green-500 focus:outline-none"
//               />
//             ))}
//           </div>

//           {/* ❌ Remove inline error — toast will show it instead */}
//           {/* {error && <p className="text-red-500 font-semibold mt-2">{error}</p>} */}

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             disabled={isLoading || code.some((digit) => !digit)}
//             className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50"
//           >
//             {isLoading && !isResending ? "Verifying..." : "Verify Email"}
//           </motion.button>

//           <p className="text-center text-gray-400 text-sm">
//             Didn't receive the code?{" "}
//             <button
//               type="button"
//               onClick={handleResendOTP}
//               disabled={isResending}
//               className="text-green-400 hover:text-green-500 font-semibold underline focus:outline-none disabled:opacity-50"
//             >
//               {isResending ? "Resending..." : "Resend OTP"}
//             </button>
//           </p>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default EmailVerificationPage;
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-hot-toast";

const EmailVerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const { error, isLoading, verifyEmail, resendOTP, userEmail } = useAuthStore();
  const [isResending, setIsResending] = useState(false);

  // ✅ Redirect if userEmail doesn't exist
  useEffect(() => {
    if (!userEmail) {
      toast.error("Please signup first");
      navigate("/signup");
    }
  }, [userEmail, navigate]);

  // ✅ Show single backend error
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleChange = (index, value) => {
    if (!/^[0-9]*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(paste)) return;

    const pastedCode = paste.slice(0, 6).split("");
    const newCode = [...code];

    pastedCode.forEach((digit, idx) => {
      newCode[idx] = digit;
      if (inputRefs.current[idx]) {
        inputRefs.current[idx].value = digit;
      }
    });

    setCode(newCode);
    const nextIndex = pastedCode.length >= 6 ? 5 : pastedCode.length;
    inputRefs.current[nextIndex]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");

    if (verificationCode.length !== 6) {
      toast.error("Enter the full 6-digit code");
      return;
    }

    try {
      await verifyEmail(verificationCode);
      toast.success("Email verified successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleResendOTP = async () => {
    if (!userEmail) {
      toast.error("No email found, please signup again");
      navigate("/signup");
      return;
    }

    try {
      setIsResending(true);
      await resendOTP(userEmail);
      toast.success("Resend OTP successful");
    } catch (error) {
      toast.error("Failed to resend OTP");
      console.error(error);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Verify Your Email
        </h2>

        <p className="text-center text-gray-300 mb-2">
          Enter the 6-digit code sent to{" "}
          <span className="text-green-400 font-semibold">{userEmail}</span>
        </p>
        <p className="text-center text-sm text-gray-400 mb-6">
          If you don't see the email, check your spam folder.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-green-500 focus:outline-none"
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading || code.some((digit) => !digit)}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50"
          >
            {isLoading && !isResending ? "Verifying..." : "Verify Email"}
          </motion.button>

          <p className="text-center text-gray-400 text-sm">
            Didn't receive the code?{" "}
            <button
              type="button"
              onClick={handleResendOTP}
              disabled={isResending}
              className="text-green-400 hover:text-green-500 font-semibold underline focus:outline-none disabled:opacity-50"
            >
              {isResending ? "Resending..." : "Resend OTP"}
            </button>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default EmailVerificationPage;

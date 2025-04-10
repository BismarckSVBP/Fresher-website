// // import { create } from "zustand";
// // import axios from "axios";

// // const API_URL =
// //   import.meta.env.MODE === "development"
// //     ? "http://localhost:5000/api/auth"
// //     : "/api/auth";

// // axios.defaults.withCredentials = true;

// // export const useAuthStore = create((set) => ({
// //   user: null,
// //   userEmail: null, // ✅ email used for verification/resend
// //   isAuthenticated: false,
// //   error: null,
// //   isLoading: false,
// //   isCheckingAuth: true,
// //   message: null,

// //   setUserEmail: (email) => set({ userEmail: email }), // ✅ function to store email

// //   signup: async (email, password, name) => {
// //     set({ isLoading: true, error: null });
// //     try {
// //       const response = await axios.post(`${API_URL}/signup`, {
// //         email,
// //         password,
// //         name,
// //       });
// //       set({
// //         user: response.data.user,
// //         isLoading: false,
// //       });
// //     } catch (error) {
// //       set({
// //         error: error.response?.data?.message || "Error signing up",
// //         isLoading: false,
// //       });
// //       throw error;
// //     }
// //   },

// //   resendOTP: async (email) => {
// //     set({ isLoading: true, error: null });
// //     try {
// //       const response = await axios.post(`${API_URL}/resend-otp`, { email });
// //       set({
// //         message: response.data.message || "OTP resent successfully",
// //         isLoading: false,
// //       });
// //       return response.data;
// //     } catch (error) {
// //       set({
// //         error: error.response?.data?.message || "Error resending OTP",
// //         isLoading: false,
// //       });
// //       throw error;
// //     }
// //   },

// //   verifyEmail: async (code) => {
// //     set({ isLoading: true, error: null });
// //     try {
// //       const response = await axios.post(`${API_URL}/verify-email`, { code });
// //       set({
// //         user: response.data.user,
// //         isAuthenticated: true,
// //         isLoading: false,
// //       });
// //       return response.data;
// //     } catch (error) {
// //       set({
// //         error: error.response?.data?.message || "Error verifying email",
// //         isLoading: false,
// //       });
// //       throw error;
// //     }
// //   },

// //   login: async (email, password) => {
// //     set({ isLoading: true, error: null });
// //     try {
// //       const response = await axios.post(`${API_URL}/login`, {
// //         email,
// //         password,
// //       });
// //       set({
// //         isAuthenticated: true,
// //         user: response.data.user,
// //         error: null,
// //         isLoading: false,
// //       });
// //     } catch (error) {
// //       set({
// //         error: error.response?.data?.message || "Error logging in",
// //         isLoading: false,
// //       });
// //       throw error;
// //     }
// //   },

// //   logout: async () => {
// //     set({ isLoading: true, error: null });
// //     try {
// //       await axios.post(`${API_URL}/logout`);
// //       set({
// //         user: null,
// //         isAuthenticated: false,
// //         error: null,
// //         isLoading: false,
// //         userEmail: null,
// //       });
// //     } catch (error) {
// //       set({ error: "Error logging out", isLoading: false });
// //       throw error;
// //     }
// //   },

// //   checkAuth: async () => {
// //     set({ isCheckingAuth: true, error: null });
// //     try {
// //       const response = await axios.get(`${API_URL}/check-auth`);
// //       set({
// //         user: response.data.user,
// //         isAuthenticated: true,
// //         isCheckingAuth: false,
// //       });
// //     } catch (error) {
// //       set({ error: null, isCheckingAuth: false, isAuthenticated: false });
// //     }
// //   },

// //   forgotPassword: async (email) => {
// //     set({ isLoading: true, error: null });
// //     try {
// //       const response = await axios.post(`${API_URL}/forgot-password`, {
// //         email,
// //       });
// //       set({ message: response.data.message, isLoading: false });
// //     } catch (error) {
// //       set({
// //         isLoading: false,
// //         error:
// //           error.response?.data?.message || "Error sending reset password email",
// //       });
// //       throw error;
// //     }
// //   },

// //   resetPassword: async (token, password) => {
// //     set({ isLoading: true, error: null });
// //     try {
// //       const response = await axios.post(`${API_URL}/reset-password/${token}`, {
// //         password,
// //       });
// //       set({ message: response.data.message, isLoading: false });
// //     } catch (error) {
// //       set({
// //         isLoading: false,
// //         error: error.response?.data?.message || "Error resetting password",
// //       });
// //       throw error;
// //     }
// //   },
// // }));

// // export const useContactStore = create((set) => ({
// //   error: null,
// //   isLoading: false,
// //   message: null,

// //   contactUs: async (email, name, message) => {
// //     set({ isLoading: true, error: null, message: null });

// //     try {
// //       const response = await axios.post(`${API_URL}/contact-us`, {
// //         email,
// //         name,
// //         message,
// //       });

// //       set({
// //         message: response.data.message || "Query sent successfully!",
// //         isLoading: false,
// //       });

// //       return response.data;
// //     } catch (error) {
// //       console.error("ContactUs Error:", error);
// //       set({
// //         error: error.response?.data?.message || "Error sending query",
// //         isLoading: false,
// //       });

// //       throw error;
// //     }
// //   },
// // }));


// import { create } from "zustand";
// import axios from "axios";

// import { API_BASE_URL } from "../config";

// axios.defaults.withCredentials = true;

// // ✅ Auth Store
// export const useAuthStore = create((set) => ({
//   user: null,
//   userEmail: null,
//   isAuthenticated: false,
//   error: null,
//   isLoading: false,
//   isCheckingAuth: true,
//   message: null,

//   setUserEmail: (email) => set({ userEmail: email }),

//   signup: async (email, password, name) => {
//     set({ isLoading: true, error: null });
//     try {
//       const response = await axios.post(`${API_BASE_URL}/signup`, {
//         email,
//         password,
//         name,
//       });
//       set({
//         user: response.data.user,
//         isLoading: false,
//       });
//     } catch (error) {
//       set({
//         error: error.response?.data?.message || "Error signing up",
//         isLoading: false,
//       });
//       throw error;
//     }
//   },

//   resendOTP: async (email) => {
//     set({ isLoading: true, error: null });
//     try {
//       const response = await axios.post(`${API_BASE_URL}/resend-otp`, { email });
//       set({
//         message: response.data.message || "OTP resent successfully",
//         isLoading: false,
//       });
//       return response.data;
//     } catch (error) {
//       set({
//         error: error.response?.data?.message || "Error resending OTP",
//         isLoading: false,
//       });
//       throw error;
//     }
//   },

//   verifyEmail: async (code) => {
//     set({ isLoading: true, error: null });
//     try {
//       const response = await axios.post(`${API_BASE_URL}/verify-email`, { code });
//       set({
//         user: response.data.user,
//         isAuthenticated: true,
//         isLoading: false,
//       });
//       return response.data;
//     } catch (error) {
//       set({
//         error: error.response?.data?.message || "Error verifying email",
//         isLoading: false,
//       });
//       throw error;
//     }
//   },

//   login: async (email, password) => {
//     set({ isLoading: true, error: null });
//     try {
//       const response = await axios.post(`${API_BASE_URL}/login`, {
//         email,
//         password,
//       });
//       set({
//         isAuthenticated: true,
//         user: response.data.user,
//         error: null,
//         isLoading: false,
//       });
//     } catch (error) {
//       set({
//         error: error.response?.data?.message || "Error logging in",
//         isLoading: false,
//       });
//       throw error;
//     }
//   },

//   logout: async () => {
//     set({ isLoading: true, error: null });
//     try {
//       await axios.post(`${API_BASE_URL}/logout`);
//       set({
//         user: null,
//         isAuthenticated: false,
//         error: null,
//         isLoading: false,
//         userEmail: null,
//       });
//     } catch (error) {
//       set({ error: "Error logging out", isLoading: false });
//       throw error;
//     }
//   },

//   checkAuth: async () => {
//     set({ isCheckingAuth: true, error: null });
//     try {
//       const response = await axios.get(`${API_BASE_URL}/check-auth`);
//       set({
//         user: response.data.user,
//         isAuthenticated: true,
//         isCheckingAuth: false,
//       });
//     } catch (error) {
//       set({ error: null, isCheckingAuth: false, isAuthenticated: false });
//     }
//   },

//   forgotPassword: async (email) => {
//     set({ isLoading: true, error: null });
//     try {
//       const response = await axios.post(`${API_BASE_URL}/forgot-password`, {
//         email,
//       });
//       set({ message: response.data.message, isLoading: false });
//     } catch (error) {
//       set({
//         isLoading: false,
//         error:
//           error.response?.data?.message || "Error sending reset password email",
//       });
//       throw error;
//     }
//   },

//   resetPassword: async (token, password) => {
//     set({ isLoading: true, error: null });
//     try {
//       const response = await axios.post(`${API_BASE_URL}/reset-password/${token}`, {
//         password,
//       });
//       set({ message: response.data.message, isLoading: false });
//     } catch (error) {
//       set({
//         isLoading: false,
//         error: error.response?.data?.message || "Error resetting password",
//       });
//       throw error;
//     }
//   },
// }));

// // ✅ Contact Store
// export const useContactStore = create((set) => ({
//   error: null,
//   isLoading: false,
//   message: null,

//   contactUs: async (email, name, message) => {
//     set({ isLoading: true, error: null, message: null });

//     try {
//       const response = await axios.post(`${API_BASE_URL}/contact-us`, {
//         email,
//         name,
//         message,
//       });

//       set({
//         message: response.data.message || "Query sent successfully!",
//         isLoading: false,
//       });

//       return response.data;
//     } catch (error) {
//       console.error("ContactUs Error:", error);
//       set({
//         error: error.response?.data?.message || "Error sending query",
//         isLoading: false,
//       });

//       throw error;
//     }
//   },
// }));
// src/store.jsx
import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { API_BASE_URL } from "../config";

axios.defaults.withCredentials = true;

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      userEmail: null,
      isAuthenticated: false,
      error: null,
      isLoading: false,
      isCheckingAuth: true,
      message: null,

      setUserEmail: (email) => set({ userEmail: email }),

      signup: async (email, password, name) => {
        set({ isLoading: true, error: null });
        try {
          const res = await axios.post(`${API_BASE_URL}/signup`, { email, password, name });
          set({ user: res.data.user, isLoading: false });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error signing up",
            isLoading: false,
          });
          throw error;
        }
      },

      resendOTP: async (email) => {
        set({ isLoading: true, error: null });
        try {
          const res = await axios.post(`${API_BASE_URL}/resend-otp`, { email });
          set({ message: res.data.message || "OTP resent successfully", isLoading: false });
          return res.data;
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error resending OTP",
            isLoading: false,
          });
          throw error;
        }
      },

      verifyEmail: async (code) => {
        set({ isLoading: true, error: null });
        try {
          const res = await axios.post(`${API_BASE_URL}/verify-email`, { code });
          set({ user: res.data.user, isAuthenticated: true, isLoading: false });
          return res.data;
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error verifying email",
            isLoading: false,
          });
          throw error;
        }
      },

      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const res = await axios.post(`${API_BASE_URL}/login`, { email, password });
          set({ user: res.data.user, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error logging in",
            isLoading: false,
          });
          throw error;
        }
      },

      logout: async () => {
        set({ isLoading: true, error: null });
        try {
          await axios.post(`${API_BASE_URL}/logout`);
          set({
            user: null,
            isAuthenticated: false,
            userEmail: null,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          set({ error: "Error logging out", isLoading: false });
          throw error;
        }
      },

      checkAuth: async () => {
        set({ isCheckingAuth: true, error: null });
        try {
          const res = await axios.get(`${API_BASE_URL}/check-auth`);
          set({
            user: res.data.user,
            isAuthenticated: true,
            isCheckingAuth: false,
          });
        } catch {
          set({ isAuthenticated: false, isCheckingAuth: false });
        }
      },

      forgotPassword: async (email) => {
        set({ isLoading: true, error: null });
        try {
          const res = await axios.post(`${API_BASE_URL}/forgot-password`, { email });
          set({ message: res.data.message, isLoading: false });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error sending reset password email",
            isLoading: false,
          });
          throw error;
        }
      },

      resetPassword: async (token, password) => {
        set({ isLoading: true, error: null });
        try {
          const res = await axios.post(`${API_BASE_URL}/reset-password/${token}`, { password });
          set({ message: res.data.message, isLoading: false });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Error resetting password",
            isLoading: false,
          });
          throw error;
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        userEmail: state.userEmail,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export const useContactStore = create((set) => ({
  error: null,
  isLoading: false,
  message: null,

  contactUs: async (email, name, message) => {
    set({ isLoading: true, error: null, message: null });
    try {
      const res = await axios.post(`${API_BASE_URL}/contact-us`, { email, name, message });
      set({ message: res.data.message || "Query sent successfully!", isLoading: false });
      return res.data;
    } catch (error) {
      console.error("ContactUs Error:", error);
      set({
        error: error.response?.data?.message || "Error sending query",
        isLoading: false,
      });
      throw error;
    }
  },
}));

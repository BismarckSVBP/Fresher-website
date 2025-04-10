import { create } from "zustand";
import { persist } from "zustand/middleware"; // Import persist middleware
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
          const response = await axios.post(`${API_BASE_URL}/signup`, {
            email,
            password,
            name,
          });
          set({
            user: response.data.user,
            isLoading: false,
          });
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
          const response = await axios.post(`${API_BASE_URL}/resend-otp`, { email });
          set({
            message: response.data.message || "OTP resent successfully",
            isLoading: false,
          });
          return response.data;
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
          const response = await axios.post(`${API_BASE_URL}/verify-email`, { code });
          set({
            user: response.data.user,
            isAuthenticated: true,
            isLoading: false,
          });
          return response.data;
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
          const response = await axios.post(`${API_BASE_URL}/login`, {
            email,
            password,
          });
          set({
            isAuthenticated: true,
            user: response.data.user,
            error: null,
            isLoading: false,
          });
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
            error: null,
            isLoading: false,
            userEmail: null,
          });
        } catch (error) {
          set({ error: "Error logging out", isLoading: false });
          throw error;
        }
      },

      checkAuth: async () => {
        set({ isCheckingAuth: true, error: null });
        try {
          const response = await axios.get(`${API_BASE_URL}/check-auth`);
          set({
            user: response.data.user,
            isAuthenticated: true,
            isCheckingAuth: false,
          });
        } catch (error) {
          set({ error: null, isCheckingAuth: false, isAuthenticated: false, user: null });
        }
      },

      forgotPassword: async (email) => {
        set({ isLoading: true, error: null });
        try {
          const response = await axios.post(`${API_BASE_URL}/forgot-password`, {
            email,
          });
          set({ message: response.data.message, isLoading: false });
        } catch (error) {
          set({
            isLoading: false,
            error:
              error.response?.data?.message || "Error sending reset password email",
          });
          throw error;
        }
      },

      resetPassword: async (token, password) => {
        set({ isLoading: true, error: null });
        try {
          const response = await axios.post(`${API_BASE_URL}/reset-password/${token}`, {
            password,
          });
          set({ message: response.data.message, isLoading: false });
        } catch (error) {
          set({
            isLoading: false,
            error: error.response?.data?.message || "Error resetting password",
          });
          throw error;
        }
      },
    }),
    {
      name: "auth-storage", // Key for localStorage
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }), // Only persist user and isAuthenticated
    }
  )
);

// Call checkAuth on initialization
useAuthStore.getState().checkAuth();

export const useContactStore = create((set) => ({
  error: null,
  isLoading: false,
  message: null,

  contactUs: async (email, name, message) => {
    set({ isLoading: true, error: null, message: null });

    try {
      const response = await axios.post(`${API_BASE_URL}/contact-us`, {
        email,
        name,
        message,
      });

      set({
        message: response.data.message || "Query sent successfully!",
        isLoading: false,
      });

      return response.data;
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

// import express from "express";
// import {
//   login,
//   logout,
//   signup,
//   verifyEmail,
//   forgotPassword,
//   resetPassword,
//   checkAuth,
//   resendVerificationCode,
//   contactUs
// } from "../controllers/auth.controller.js";

// import { verifyToken } from "../middleware/verifyToken.js";
// import { registerStudent } from "../controllers/student.controller.js";
// import { upload, uploadImage } from "../controllers/cloudinary.js";
// import { getAllStudents } from "../controllers/getstudent.controller.js";
// const router = express.Router();

// // Auth routes
// router.get("/check-auth", verifyToken, checkAuth);
// router.post("/signup", signup);
// router.post("/login", login);
// router.post("/logout", logout);
// router.post("/resend-otp", resendVerificationCode);
// router.post("/verify-email", verifyEmail);
// router.post("/forgot-password", forgotPassword);
// router.post("/reset-password/:token", resetPassword);
// router.post("/contact-us", contactUs);

// // Student registration
// router.post("/submit", registerStudent);

// // Image upload
// router.post("/upload", upload.single("image"), uploadImage);

// router.get("/student", getAllStudents);

// export default router;
import express from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
  forgotPassword, 
  resetPassword,
  checkAuth,
  resendVerificationCode,
  contactUs
} from "../controllers/auth.controller.js";

import { verifyToken } from "../middleware/verifyToken.js";
import { registerStudent } from "../controllers/student.controller.js";
import { upload, uploadImage } from "../controllers/cloudinary.js";
import { getAllStudents } from "../controllers/getstudent.controller.js";

const router = express.Router();

// ✅ Auth routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/resend-otp", resendVerificationCode);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/contact-us", contactUs);

// ✅ Protected route to check authentication
router.get("/check-auth", verifyToken, checkAuth);

// ✅ Student registration
router.post("/submit", registerStudent);

// ✅ Image upload route
router.post("/upload", upload.single("image"), uploadImage);

// ✅ Get all students
router.get("/student", getAllStudents);

export default router;

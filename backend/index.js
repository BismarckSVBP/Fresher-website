// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import path from "path";

// import { connectDB } from "./db/connectDB.js";

// import authRoutes from "./routes/auth.route.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;
// const __dirname = path.resolve();

// app.use(cors({ origin: "https://fresher-website.vercel.app", credentials: true }));

// app.use(express.json()); // allows us to parse incoming requests:req.body
// app.use(cookieParser()); // allows us to parse incoming cookies

// app.use("/api/auth", authRoutes);

// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(path.join(__dirname, "/frontend/dist")));

// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// 	});
// }

// app.listen(PORT, () => {
// 	connectDB();
// 	console.log("Server is running on port: ", PORT);
// });
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();


if (!process.env.CLIENT_URL) {
	console.error("⚠️ CLIENT_URL is not set in the environment variables.");
	process.exit(1);
}

app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true,
		optionsSuccessStatus: 200,
	})
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api", authRoutes); // Optional: Use "/api" to avoid conflicts

// Connect to database once
connectDB().then(() => console.log("✅ Database connected successfully!")).catch(err => {
	console.error("❌ Database connection failed:", err);
	process.exit(1);
});

// ✅ Export a function for Vercel
export default app;

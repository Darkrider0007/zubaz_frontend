import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

const corsOptions = {
  origin: [
    "http://localhost:3000", // For local development
    "https://zubaz-frontend-git-main-rohan-gopes-projects-8c7bd45a.vercel.app", // Add your Vercel domain
  ],
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(cookieParser());

//routes import
import healthCheckRouter from "./routes/healthcheck.routes.js";
import userRouter from "./routes/user.routes.js";
import templateRoute from "./routes/template.routes.js";

//router declaration
app.use("/api/v1/healthCheck", healthCheckRouter);
app.use("/api/v1/userRouter", userRouter);
app.use("/api/v1/template", templateRoute);

// http://localhost:8000/api/v1/healthCheck/
// http://localhost:8000/api/v1/userRouter/register

export { app };

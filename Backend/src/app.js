import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(cors());

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

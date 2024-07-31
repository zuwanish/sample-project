import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import userRouter from "../routes/user.routes.js";
const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// app.use("/api/v1/users", userRouter);

export { app };

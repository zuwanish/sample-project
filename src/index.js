import { connectDB } from "../database/index.js";
import { app } from "./app.js";
import dotenv from "dotenv";

const port = process.env.PORT || 8080;

dotenv.config({
    path: "./env",
});

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Process is running at ${port}`);
        });
    })
    .catch((err) => {
        console.log("MONGO FAILED", err);
    });

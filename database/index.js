import mongoose, { connect } from "mongoose";

import dotenv from "dotenv";
dotenv.config({
    path: "./env",
});

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_URI}/${process.env.MONGO_DB_NAME}`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log(
            `\nMONGO DB CONNECTED! HOST: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.error("MONGO CONNECTION FAILED: ", error);
        process.exit(1);
    }
};

import express from "express";
import dotenv from "dotenv";
import paymentRoutes from "../src/routes/paymentRoutes.js";
import connectDb from "./config/db.js";
import limitRate from "./middlewares/rateLimiter.js";

dotenv.config();

connectDb();

const app = express();

app.use(express.json());

app.use(limitRate)

app.use('/api/payments', paymentRoutes);


export default app;
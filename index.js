import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./src/routes/UserRoute.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", ""],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const PORT = process.env.PORT;
app.use(bodyParser.json());

// Routes
app.use("/users", userRoutes);
// app.use("/products", productRoutes);

// Database Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

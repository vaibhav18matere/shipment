import express from "express";
import { router as customerRoutes } from "../routes/customer"
const app = express();
app.use(express.json());

app.use("/api/v1", customerRoutes);

export default app;

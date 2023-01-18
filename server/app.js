import express from "express";
import cors from "cors";
import postsRoutes from "./routes/posts.routes.js";
import laborDocumentsRoutes from "./routes/laborDocuments.routes.js";
import employeesRoutes from "./routes/employees.routes.js";

const app = express();
//midleware
app.use(express.json());
app.use(cors());
//routes 
app.use(postsRoutes);
app.use(laborDocumentsRoutes);
app.use(employeesRoutes)

export default app
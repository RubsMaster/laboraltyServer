import express from "express";
import cors from "cors";
import postsRoutes from "./routes/admin/posts.routes.js";
import laborDocumentsRoutes from "./routes/admin/laborDocuments.routes.js";
import employeesRoutes from "./routes/admin/employees.routes.js";
import accountantRoutes from "./routes/admin/accountant.routes.js";
import authRoutes from "./routes/admin/auth.routes.js";
import adminRoutes from "./routes/admin/admin.routes.js";

const app = express();
//midleware
app.use(express.json());
app.use(cors());
//routes 
app.use(postsRoutes);
app.use(laborDocumentsRoutes);
app.use(employeesRoutes);
app.use(accountantRoutes);
app.use(authRoutes);
app.use(adminRoutes);

export default app
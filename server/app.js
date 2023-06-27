import express from "express";
import cors from "cors";
import postsRoutes from "./routes/admin/posts.routes.js";
import laborDocumentsRoutes from "./routes/admin/laborDocuments.routes.js";
import employeesRoutes from "./routes/admin/employees.routes.js";
import usersRoutes from "./routes/admin/users.routes.js";
// import authRoutes from "./routes/admin/auth.routes.js";
import adminRoutes from "./routes/admin/admin.routes.js";
import credentialRoutes from "./routes/credential.routes.js";
import consultantRoutes from "./routes/accountant/consultants.routes.js"

import clientRoutes from "./routes/accountant/clients.routes.js";

const app = express();
//midleware
app.use(express.json());
app.use(cors());
//routes 
app.use(postsRoutes);
app.use(laborDocumentsRoutes);
app.use(employeesRoutes);
app.use(usersRoutes);
// app.use(authRoutes);
app.use(adminRoutes);
app.use(clientRoutes);
app.use(credentialRoutes);
app.use(consultantRoutes);


export default app
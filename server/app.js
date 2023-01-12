import express from "express";

import postsRoutes from "./routes/posts.routes.js";
import laborDocumentsRoutes from "./routes/laborDocuments.routes.js";
import employeesRoutes from "./routes/employees.routes.js";

const app = express();
//midleware
app.use(express.json());

//routes 
app.use(postsRoutes);
app.use(laborDocumentsRoutes);
app.use(employeesRoutes)

export default app
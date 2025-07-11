require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");

const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router")
const blogRoute = require("./router/blog-router");
const adminRouter = require('./router/admin-router')
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// ✅ Enable CORS - Place this at the very top
app.use(cors({
  origin:["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
}));

// ✅ Parse incoming JSON
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/admin",adminRouter);
app.use("/api/data", blogRoute);

// ✅ Error handler
app.use(errorMiddleware);

//admin service
app.use("/api/admin", serviceRoute);

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});

require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs"); 
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router")

const adminRouter = require('./router/admin-router')

const teamRouter = require ('./router/team-route')
const testimonialRouter = require ('./router/testimonial-routes')
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const path = require("path");
//  Enable CORS - Place this at the very top
app.use(cors({
  origin:["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
}));
// img uploaad
const uploadsPath = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath);
  console.log(" 'uploads' folder created automatically");
}

app.use("/uploads", express.static(uploadsPath));
app.use(express.json());

//  Routes
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/admin",adminRouter);
app.use("/api/teamMeber",teamRouter);
app.use("/api/testimonialData",testimonialRouter);

//  Error handler
app.use(errorMiddleware);

//admin service
app.use("/api/admin", serviceRoute);

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});

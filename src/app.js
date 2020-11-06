import express, { json, Router } from "express";
import morgan from "morgan";

// Importing routes
import sucursalRoutes from "./routes/adm/xadmsucm";
import relacionadoRoutes from "./routes/adm/xadmrelm";
import solicitudRoutes from "./routes/pre/epresolm";

const bcrypt = require("bcrypt");

// App init
const app = express();

// Middlewares
app.use(morgan("dev")); // Show requests on console (debug)
app.use(json()); // Understand json requests

app.set("view engine", "ejs"); // Set up ejs for rendering
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.render("index"); // main view -> /view/index.ejs
});

app.get("/users/register", (req, res) => {
  res.render("register"); // main view -> /view/index.ejs
});

app.get("/users/login", (req, res) => {
  res.render("login"); // main view -> /view/index.ejs
});

app.get("/users/dashboard", (req, res) => {
  res.render("dashboard", { user: "Maxly" }); // main view -> /view/index.ejs
});

app.post("/users/register", async (req, res) => {
  try {
    let { username, email, password, password2 } = req.body;
    let errors = [];
  
    console.log({
      username,
      email,
      password,
      password2,
    });
  
    if (!username || !email || !password || !password2) {
      errors.push({ message: "Please enter all fields" });
    }
  
    if (password.length < 6) {
      errors.push({ message: "Password must be a least 6 characters long" });
    }
  
    if (password !== password2) {
      errors.push({ message: "Passwords do not match" });
    }
  
    if (errors.length > 0) {
      res.render("register", { errors, username, email, password, password2 });
    } else {
      let hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
    }
  } catch (error) {
      console.log(error);
      res.status(500).json({
          message: "Revisa bien.. algo salió mal."
      })
  }
});

app.use("/api/sucursales", sucursalRoutes);
app.use("/api/relacionados", relacionadoRoutes);
app.use("/api/solicitudes", solicitudRoutes);

export default app;

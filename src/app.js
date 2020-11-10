import express, { json, Router } from "express";
import morgan from "morgan";
import { pool } from './database/db_string';


// Importing routes
import sucursalRoutes from "./routes/adm/xadmsucm";
import relacionadoRoutes from "./routes/adm/xadmrelm";
import solicitudRoutes from "./routes/pre/epresolm";

const bcrypt = require("bcrypt");
const session = require("express-session");
const flash = require("express-flash");
const passport = require("passport");

const initializePassport = require("./passportConfig");

initializePassport(passport);

// App init
const app = express();

// Middlewares
app.use(morgan("dev")); // Show requests on console (debug)
app.use(json()); // Understand json requests

app.set("view engine", "ejs"); // Set up ejs for rendering
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// API users routes.
app.get("/", (req, res) => {
  res.render("index"); // main view -> /view/index.ejs
});

app.get("/users/register", checkAuthenticated,(req, res) => {
  res.render("register"); // main view -> /view/index.ejs
});

app.get("/users/login", checkAuthenticated, (req, res) => {
  res.render("login"); // main view -> /view/index.ejs
});

app.get("/users/dashboard", checkNotAuthenticated, (req, res) => {
  res.render("dashboard", { user: req.user.username }); // main view -> /view/index.ejs
});

// logout
app.get("/users/logout", (req, res) => {
    req.logout();
    req.flash("success_msg", "Se ha cerrado la sesión.");
    res.redirect("/users/login");
})

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
      errors.push({ message: "Favor llenar los campos requeridos." });
    }

    if (password.length < 6) {
      errors.push({ message: "Contraseña debe tener al menos 6 caracteres válidos. " });
    }

    if (password !== password2) {
        res.sendStatus(404);
        errors.push({ message: "Contreseñas no coinciden." });
    }

    if (errors.length > 0) {
      res.render("register", { errors, username, email, password, password2 });
    } else {
        let hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        pool.query(
            `SELECT * FROM users WHERE email = $1`,
             [email], 
             (err, results) => {
                if (err) { throw err; }
                console.log(results.rows);

                if (results.rows.length > 0) {
                    errors.push({
                        message: "El email ya está registrado."

                    });
                    res.render("register", { errors });
                } else {
                    pool.query(
                        `INSERT INTO users(username, email, password)
                        VALUES ($1, $2, $3)
                        RETURNING id, password`,
                        [username, email, hashedPassword],
                        (err, results) => {
                            if (err) {
                                throw err;
                            }
                        console.log(results.rows);
                        req.flash('success_msg', "Registado exitosamente.")
                        res.redirect("/users/login");
                        }
                    )
                }
            }
        )
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Revisa bien.. algo salió mal.",
    });
  }
});

app.post(
    "/users/login",
    passport.authenticate("local", {
        successRedirect: "/users/dashboard",
        failureRedirect: "/users/login",
        failureFlash: true
    })
)

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/users/dashboard");
    }
    next();
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("success_msg", "No estás autorizado, favor de acceder.")
    return res.redirect("/users/login");
}

// API routes
app.use("/api/sucursales", sucursalRoutes);
app.use("/api/relacionados", relacionadoRoutes);
app.use("/api/solicitudes", solicitudRoutes);

export default app;

import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config/config";
import authRoutes from "./routes/auth.routes";
import specialRoutes from "./routes/special.routes";

import passport from "passport";
import passportMiddleware from "./middlewares/passport";
//inicialización
const app = express();

//configuraciones
app.set("port", config.PORT);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
passport.use(passportMiddleware);

//routes
app.get("/", (req, res) => {
   return res.send(`apirest http://localhost:${app.get("port")}`);
});
app.use(authRoutes);

app.use(specialRoutes);

export default app;

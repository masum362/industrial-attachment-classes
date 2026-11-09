import express from "express";
import data from "../data.json" with { type: "json" };
import userRouter from './routes/user.route.js'
import homeRouter from './routes/home.route.js'
import authRouter from './routes/auth.route.js'


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));




const securityMiddleware = (req, res, next) => {
  return res
    .status(404)
    .json({ message: "ar vule o ei basar dike paw baraibay caio" });
  next();
};

app.use(homeRouter)
app.use(userRouter)
app.use(authRouter)




app.get("/dashboard", (req, res) => {
  const data = req.body;
  console.log(data);
  return res.json({ message: "dashboard access successfully" });
});


export default app
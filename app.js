import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewars/error.js";
import cors from "cors";

export const app = express();

config({
    path: "./data/config.env",
})


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URI],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}));
app.use("/users", userRouter);
app.use("/task", taskRouter);

app.get("/", (req, res) => {
    res.send("Hello")
})

app.use(errorMiddleware);
import express from "express";
import { newTask,getAllTask, updateTask, deleteTask } from "../controllers/task.js";
import {isAuthenticated} from "../middlewars/auth.js"

const router=express.Router();

router.post("/new",isAuthenticated,newTask);
router.get("/my",isAuthenticated,getAllTask);

router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask);

export default router;
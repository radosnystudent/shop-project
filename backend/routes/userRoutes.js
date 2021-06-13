import express from "express";

import {
    authUser,
    getUserProfile,
    registerUser,
    updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const Router = express.Router();

Router.route("/").post(registerUser);
Router.post("/login", authUser);
Router.route("/profile")
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

export default Router;

import express from "express";
import { addOrderItems, getOrderById } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const Router = express.Router();

Router.route("/").post(protect, addOrderItems);
Router.route("/:id").get(protect, getOrderById);

export default Router;

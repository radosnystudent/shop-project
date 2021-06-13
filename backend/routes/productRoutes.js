import express from "express";
import {
    getProducts,
    getProductById,
} from "../controllers/productController.js";

const Router = express.Router();

Router.route("/").get(getProducts);
Router.route("/:id").get(getProductById);

export default Router;

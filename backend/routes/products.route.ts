import express from "express";
import { fetchProductsListController } from "../controllers/fetchProductsList.controller";
import { fetchProductController } from "../controllers/fetchProduct.controller";
import { addProductController } from "../controllers/addProduct.controller";
import { deleteProductController } from "../controllers/deleteProduct.controller";
import { editProductController } from "../controllers/editProduct.controller";
import { fetchProductsListV2Controller } from "../controllers/fetchProductsList.controller-v2";

const router = express.Router();

export const productsRoutes = () => {
  router.get("/products", fetchProductsListController);
  router.get("/products/v2", fetchProductsListV2Controller);
  router.get("/products/:id", fetchProductController);

  router.post("/products", addProductController);

  router.put("/products/:id", editProductController);

  router.delete("/products/:id", deleteProductController);

  return router;
};

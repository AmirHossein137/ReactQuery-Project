import { Request, Response } from "express";
import { readFile } from "../utils/readFile";
import { ProductsDataTypes } from "../types/general";
import { throwError } from "../utils/throwError";

export const fetchProductController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;

  
  try {
    const productsList = readFile<ProductsDataTypes>("data/products-backup.json");

    const responseData = productsList?.data?.find(
      (product) => product.id.toString() === id
    );

    if (!responseData) {
      throwError("محصولی یافت نشد", 404);
    }

    response.status(200).json(responseData);
  } catch (error: any) {
    response
      .status(error?.code ?? 500)
      .json({ message: error?.message ?? "error" });
  }
};

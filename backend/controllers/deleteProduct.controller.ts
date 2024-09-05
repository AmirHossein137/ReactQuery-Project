import { Request, Response } from "express";
import fs from "fs";
import { readFile } from "../utils/readFile";
import { ProductsDataTypes } from "../types/general";

export const deleteProductController = async (
  request: Request,
  response: Response
) => {
  try {
    const { id } = request.params;

    const productsList = readFile<ProductsDataTypes>(
      "data/products-backup.json"
    );

    const newProductList = productsList?.data?.filter(
      (product) => product?.id.toString() !== id
    );

    fs.writeFileSync(
      "data/products-backup.json",
      JSON.stringify({ data: newProductList }, undefined, 4)
    );

    response.status(200).json({ message: "محصول باموفقیت حذف شد" });
  } catch (error: any) {
    response
      .status(error?.code ?? 500)
      .json({ message: error?.message ?? "مشکلی پیش آمده" });
  }
};

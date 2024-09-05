import { Request, Response } from "express";
import fs from "fs";
import { readFile } from "../utils/readFile";
import { ProductsDataTypes } from "../types/general";

export const editProductController = async (
  request: Request,
  response: Response
) => {
  try {
    const { id } = request.params;
    const { title, image, price, text } = request.body;

    const productsList = readFile<ProductsDataTypes>(
      "data/products-backup.json"
    );

    const newProductList = productsList?.data?.map((product) => {
      if (product.id.toString() === id) {
        return {
          title,
          image,
          price,
          text,
          id: id,
        };
      }

      return product;
    });

    fs.writeFileSync(
      "data/products-backup.json",
      JSON.stringify({ data: newProductList }, undefined, 4)
    );

    response.status(200).json({ message: "محصول باموفقیت ویرایش شد" });
  } catch (error: any) {
    response
      .status(error?.code ?? 500)
      .json({ message: error?.message ?? "مشکلی پیش آمده" });
  }
};

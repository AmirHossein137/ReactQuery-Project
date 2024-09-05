import { Request, Response } from "express";
import fs from "fs";
import { readFile } from "../utils/readFile";
import { ProductsDataTypes } from "../types/general";
import { v4 } from "uuid";

export const addProductController = async (
  request: Request,
  response: Response
) => {
  try {
    const { title, image, price, text } = request.body;

    const productsList = readFile<ProductsDataTypes>(
      "data/products-backup.json"
    );

    const newProduct = {
      title,
      image,
      price,
      text,
      id: v4(),
    };

    fs.writeFileSync(
      "data/products-backup.json",
      JSON.stringify(
        { data: [...productsList?.data, newProduct] },
        undefined,
        4
      )
    );

    response.status(200).json({ message: "محصول جدید باموفقیت افزوده شد" });
  } catch (error: any) {
    response
      .status(error?.code ?? 500)
      .json({ message: error?.message ?? "مشکلی پیش آمده" });
  }
};

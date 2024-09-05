import { Request, Response } from "express";
import { readFile } from "../utils/readFile";
import { paginate } from "../utils/paginate";
import { ProductsDataTypes } from "../types/general";

export const fetchProductsListV2Controller = async (
  request: Request,
  response: Response
) => {
  try {
    const pageNumber = Number(request?.query?.pageNumber);
    const pageSize = Number(request?.query?.pageSize ?? 4);

    const productsList = readFile<ProductsDataTypes>("data/products-backup.json");

    response.status(200).json(
      pageNumber
        ? {
            data: paginate(productsList?.data, pageSize, pageNumber),
            totalPages: Math.ceil(productsList?.data?.length / pageSize),
            currentPage: pageNumber,
          }
        : productsList
    );
  } catch (error: any) {
    response.status(500).json(error?.message);
  }
};

import { Request, Response } from "express";
import { readFile } from "../utils/readFile";
import { paginate } from "../utils/paginate";
import { ProductsDataTypes } from "../types/general";

export const fetchProductsListController = async (
  request: Request,
  response: Response
) => {
  try {
    const productsList = readFile<ProductsDataTypes>(
      "data/products-backup.json"
    );

    const pageNumber = Number(request?.query?.pageNumber);
    const pageSize = Number(request?.query?.pageSize ?? 4);
    const totalPages = Math.ceil(productsList?.data?.length / pageSize);

    const paginatedData = paginate(
      productsList?.data?.reverse(),
      pageSize,
      pageNumber
    );

    setTimeout(() => {
      response.status(200).json(
        pageNumber
          ? {
              data: paginatedData,
              totalPages: totalPages,
              currentPage: pageNumber,
              lastPage: pageNumber !== 1 ? pageNumber - 1 : undefined,
              nextPage: pageNumber !== totalPages ? pageNumber + 1 : undefined,
            }
          : productsList
      );
    }, 1500);
  } catch (error: any) {
    response.status(500).json(error?.message);
  }
};

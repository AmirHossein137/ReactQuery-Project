export type SingleProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  text: string;
};

export type ProductsDataTypes = {
  data: SingleProduct[];
};

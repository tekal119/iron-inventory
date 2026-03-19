export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  image_url: string;
  brand: string;
  weight: number;
  flavor: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
};

export type CSVImportPreview = {}; // Further definition needed

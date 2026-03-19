// types/index.ts

// TypeScript types for products, categories, and CSV imports

// Product type
export type Product = {
    id: number;
    name: string;
    price: number;
    categoryId: number;
    inStock: boolean;
};

// Category type
export type Category = {
    id: number;
    name: string;
};

// CSV import type
export type CSVImport = {
    productName: string;
    price: number;
    categoryName: string;
};

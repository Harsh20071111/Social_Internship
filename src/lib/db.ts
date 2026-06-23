import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "src", "lib", "db.json");

export interface Product {
  id: string;
  sku: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
  benefits: string[];
  imageUrl?: string;
  images: string[];
  price?: number;
  factoryId: string;
  categoryId: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export interface Factory {
  id: string;
  name: string;
  location: string;
  description: string;
}

export interface DBData {
  products: Product[];
  categories: Category[];
  factories: Factory[];
}

export function readDB(): DBData {
  try {
    if (!fs.existsSync(dbPath)) {
      // Return default empty structure if file doesn't exist
      return { products: [], categories: [], factories: [] };
    }
    const rawData = fs.readFileSync(dbPath, "utf-8");
    return JSON.parse(rawData) as DBData;
  } catch (error) {
    console.error("Error reading database:", error);
    return { products: [], categories: [], factories: [] };
  }
}

export function writeDB(data: DBData): void {
  try {
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing to database:", error);
  }
}

export function getProducts(): Product[] {
  const db = readDB();
  return db.products || [];
}

export function getProductById(id: string): Product | undefined {
  const db = readDB();
  return db.products.find((p) => p.id === id);
}

export function getProductBySku(sku: string): Product | undefined {
  const db = readDB();
  return db.products.find((p) => p.sku.toLowerCase() === sku.toLowerCase());
}

export function createProduct(productData: Omit<Product, "id">): Product {
  const db = readDB();
  const newProduct: Product = {
    ...productData,
    id: `prod-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  db.products.push(newProduct);
  writeDB(db);
  return newProduct;
}

export function updateProduct(id: string, productData: Partial<Product>): Product | undefined {
  const db = readDB();
  const index = db.products.findIndex((p) => p.id === id);
  if (index === -1) return undefined;

  const updatedProduct: Product = {
    ...db.products[index],
    ...productData,
    id, // Ensure ID cannot be changed
    updatedAt: new Date().toISOString(),
  };

  db.products[index] = updatedProduct;
  writeDB(db);
  return updatedProduct;
}

export function deleteProduct(id: string): boolean {
  const db = readDB();
  const initialLength = db.products.length;
  db.products = db.products.filter((p) => p.id !== id);
  if (db.products.length === initialLength) return false;
  
  writeDB(db);
  return true;
}

export function getCategories(): Category[] {
  const db = readDB();
  return db.categories || [];
}

export function getFactories(): Factory[] {
  const db = readDB();
  return db.factories || [];
}

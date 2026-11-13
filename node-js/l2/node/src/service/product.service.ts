import fs from "fs";
import { IncomingMessage, ServerResponse } from "http";
import path from "path";
import { IProduct } from "../types/product";

const dbPath = path.join(process.cwd(), "./src/database/data.json");

export const productService = (req: IncomingMessage, res: ServerResponse) => {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);  
};

export const createProduct = (payload: IProduct[]) => {
  fs.writeFileSync(dbPath, JSON.stringify(payload));
}
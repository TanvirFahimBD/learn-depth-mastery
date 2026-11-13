import fs from "fs";
import { IncomingMessage, ServerResponse } from "http";
import path from "path";

const dbPath = path.join(process.cwd(), "./src/database/data.json");

const productService = (req: IncomingMessage, res: ServerResponse) => {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);  
};

export default productService;

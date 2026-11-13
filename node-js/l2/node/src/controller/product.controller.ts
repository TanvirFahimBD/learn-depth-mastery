import { IncomingMessage, ServerResponse } from "http";
import {createProduct, productService} from "../service/product.service";
import { IProduct } from '../types/product';
import { bodyParser } from "../utils/parseBody";

const productController = async (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    const urlParams = url?.split("/");    
    const id = urlParams && urlParams[1] === "products" ?  Number(urlParams[2])  : null;

    if(method === 'GET' && url === '/products'){
        const products = productService(req, res);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Successfully product data get", data: products }));

    }
    else if(method === 'GET' && id !== null){
        const products = productService(req, res);

        const singleProduct = products.find((p: IProduct) => p.id === id);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Successfully product data get", data: singleProduct }));

    }
    else if(method === 'POST' && url === "/products"){
        const products = productService(req, res);

        const body = await bodyParser(req);

        const newProdcut = {
            id: Date.now(),
            ...body
        }
        
        products.push(newProdcut);

        
        createProduct(products);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Successfully product created", data: products }));

    }


//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ message: "Product route" }));
};

export default productController;

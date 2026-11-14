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
    else if(method === 'PUT' &&  id !== null){
        const products = productService(req, res);
        const productIndex = products.findIndex((p: IProduct) => p.id === id);

        if(productIndex<0){
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Product not found"}));
        }else{
            const body = await bodyParser(req);
            products[productIndex] = {id: id, ...body};
            const updatedProduct = products[productIndex];
            createProduct(products);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Successfully product updated", data: updatedProduct }));
        }      
        
    }
    else if(method === 'DELETE' &&  id !== null){
        const products = productService(req, res);
        const productIndex = products.findIndex((p: IProduct) => p.id === id);

        if(productIndex<0){
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Product not found"}));
        }else{
            products.splice(productIndex,1);
            createProduct(products);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Successfully product delete" }));
        }      
        
    }


    //   res.writeHead(200, { "Content-Type": "application/json" });
    //   res.end(JSON.stringify({ message: "Product route" }));
};

export default productController;

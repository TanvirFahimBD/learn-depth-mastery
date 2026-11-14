import { IncomingMessage, ServerResponse } from "http";
import {createProduct, productService} from "../service/product.service";
import { IProduct } from '../types/product';
import { bodyParser } from "../utils/parseBody";
import { sendResponse } from "../utils/sendResponse";

const productController = async (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    const urlParams = url?.split("/");    
    const id = urlParams && urlParams[1] === "products" ?  Number(urlParams[2])  : null;

    if(method === 'GET' && url === '/products'){
        try{
            const products = productService(req, res);
            sendResponse(res, true, 200, "Successfully product data get", products); 
        }catch(error){
            sendResponse(res, false, 500, "Internal Server Error"); 
        }      
    }
    else if(method === 'GET' && id !== null){
        try{            
            const products = productService(req, res);

            const singleProduct = products.find((p: IProduct) => p.id === id);

            sendResponse(res, true, 200, "Successfully product data get", singleProduct); 
        }catch(error){
            sendResponse(res, false, 500, "Internal Server Error"); 
        } 
    }
    else if(method === 'POST' && url === "/products"){
        try{  
            const products = productService(req, res);
            const body = await bodyParser(req);
            const newProdcut = {
                id: Date.now(),
                ...body
            }
            products.push(newProdcut);
            createProduct(products);            
            sendResponse(res, true, 201, "Successfully product created", products); 
        }catch(error){
            sendResponse(res, false, 500, "Internal Server Error"); 
        } 
    }
    else if(method === 'PUT' &&  id !== null){
        try{            
            const products = productService(req, res);
            const productIndex = products.findIndex((p: IProduct) => p.id === id);

            if(productIndex<0){
                throw new Error("Product not found");
            }else{
                const body = await bodyParser(req);
                products[productIndex] = {id: id, ...body};
                const updatedProduct = products[productIndex];
                createProduct(products); 
                sendResponse(res, true, 200, "Successfully product updated", updatedProduct); 
            }      

        }catch(error){
            sendResponse(res, false, 500, "Internal Server Error"); 
        }         
    }
    else if(method === 'DELETE' &&  id !== null){
        try{            
            const products = productService(req, res);
            const productIndex = products.findIndex((p: IProduct) => p.id === id);

            if(productIndex<0){
                throw new Error("Product not found")
            }else{
                products.splice(productIndex,1);
                createProduct(products);
                sendResponse(res, true, 200, "Successfully product deleted"); 
            }      
        }catch(error){
            sendResponse(res, false, 500, "Internal Server Error"); 
        }        
    }
};

export default productController;

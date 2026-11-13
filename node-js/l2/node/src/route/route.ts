import { IncomingMessage, ServerResponse} from "http";
import productController from "../controller/product.controller";

const routeHandler = (req: IncomingMessage, res: ServerResponse) => { 
    const url = req.url; 
    const method = req.method;

    if(url === '/'){
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify({message:"Root route"}));        
    }

    else if(url.startsWith('/products')){
        productController(req, res);        
    }

    else{
        res.writeHead(404, {"Content-Type": "application/json"})
        res.end(JSON.stringify({message:"Route is not defined"}));        
    }

}

export default routeHandler;
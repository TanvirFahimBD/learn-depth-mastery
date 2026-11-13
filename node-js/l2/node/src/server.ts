import {createServer, IncomingMessage, ServerResponse, Server} from "http";

const port = 5000;

//IncomingMessage : request type
//ServerResponse : response type
//Server : server type
const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    // console.log("Request", req);    
    // console.log("Response", res);    

    // console.log(req.url);    
    // console.log(req.method); // "/home", "/about"

    const url = req.url; // "/home", "/about"
    const method = req.method; //"GET", "POST", "PUT"


    if(url === '/'){
        // res.writeHead(200, {"Content-Type": "text/plain"})
        // res.end("this is root route");        

        //writeHead - send data function with status & content type
        res.writeHead(200, {"Content-Type": "application/json"})

        //send time raw json can't be send. covert it to json string
        res.end(JSON.stringify({message:"Root route"}));        
    }

    else if(url.startsWith('/product')){
        // res.writeHead(200, {"Content-Type": "text/plain"})
        // res.end("this is root route");        

        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify({message:"Product route"}));        
    }

    else{
        res.writeHead(404, {"Content-Type": "application/json"})
        res.end(JSON.stringify({message:"Route is not defined"}));        
    }

})

server.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})
import {createServer} from "http";

const port = 5000;
const server = createServer((req: Request, res: Response) => {
    console.log(req);    
})

server.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})
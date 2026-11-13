import { IncomingMessage } from "http";

export const bodyParser = (req: IncomingMessage) : Promise<any> => {
    let body = "";
    return new Promise((resolve, reject)=>{
        req.on("data", (chunk) => {
            body += chunk;
        })
        req.on("end", () => {
            try{
                resolve(body);
            }catch(error){
                reject(error);
            }
        })
    })
}
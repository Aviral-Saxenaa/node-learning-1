import http from 'http';

import fs from 'fs';

const home=fs.readFileSync('index.html','utf8');

const port=2000||process.env.port;
const hostname='localhost';

const server=http.createServer((req,res)=>{
        if(req.url=='/'){
                // console.log('HOME PAGE');
               return res.end(home);
        }
        else if(req.url=='/contact'){
                // console.log('CONTACT PAGE');
               return res.end("CONTACT PAGE");
        }
        else if(req.url=='/services'){
                // console.log('SERVICE PAGE');
               return res.end("SERVICE PAGE");
        }
        else if(req.url=='/about'){
                // console.log('ABOUT PAGE');
               return res.end("ABOUT PAGE");
        }
        else{
               return res.end('<h1>404 page not found</h1>');
        }
})

server.listen(port,hostname,()=>{
        console.log(`server created on http://${hostname}:${port}`);
})


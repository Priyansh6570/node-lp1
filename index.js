const http = require('http');
const fs = require('fs');

const PORT = 2000; //process.env.PORT
const hostName = "localhost";
const Home = fs.readFileSync('./public/index.html');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        return res.end(Home);
    }
    if(req.url === '/about'){
        return res.end(fs.readFileSync('./public/about.html'));
    }
    if(req.url === '/contact'){
        return res.end(fs.readFileSync('./public/contact.html'));
    }
    if(req.url === '/services'){
        return res.end(fs.readFileSync('./public/services.html'));
    }
    else{
        return res.end(fs.readFileSync('./public/notFound.html'));
    }
})
server.listen(PORT, hostName, ()=>{
    console.log(`Server is Operating in https://${hostName}:${PORT}`);
})
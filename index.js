const http = require("http");

const monitorRam = require("./monitorRam");

const port = 3000;
const host = "http://localhost";

const server = http.createServer((request, response) => {
    const url = request.url;

    if(url === "/statusRam"){
        response.end(JSON.stringify(monitorRam, null, 3))
    }else{
        response.end("<h1>Bem vindo a pagina inicial =D.<br/>Digite /statusRam na url.")
    }
})

server.listen(port, () => {
    console.log(`serlvidor em funcionamento ${host}:${port}`)
})
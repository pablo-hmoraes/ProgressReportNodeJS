const fs = require("fs");
const server = require("http").createServer();

server.on("request", (request, response) => {
    // Solution 1: Streams
    const readable = fs.createReadStream('test.txt');

    // o evento "data" é emitido quando há um novo chunk de dado a ser lido
    readable.on("data", chunk => {
      response.write(chunk);
    });
    
    // o evento "end" é emitido quando não há mais dados a serem lidos 
    readable.on("end", () => {
      response.end();
    });

    readable.on("error", err => {
      console.log(err);
      response.statusCode = 500;
      response.end("Arquivo não encontrado!");
    });

    /*  
    O método pipe cria um pipeline entre duas streams diferentes.
    Nesse caso é útil pois a stream de leitura é muito mais rápida do que o método de escrito do response. Portanto, usamos 
    o pipe para conectar o output de uma readable stream no input de uma writeble stream de forma eficiente.
    */
    const readablePipe = fs.createReadStream('test.txt');
    readablePipe.pipe(response);
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Observando...");
});

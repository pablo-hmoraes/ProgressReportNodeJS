let http = require('http');

/*
Criando um webserver simples
*/

// a função requestHandler é resposável por enviar as respostas ao cliente baseado nas requisições feitas por ele
const requestHandler = function (request, response) {
    // os comandos if agem como "router", executando ações baseado no endpoint
    if (request.url === '/') {
        response.writeHead(200);
        response.end('Bem-vindo!');
    } else if (request.url === '/api') {
        response.writeHead(200);
        response.end('Aqui estão os dados pedidos.');
    } else {
        response.writeHead(404);
        response.end('Rota não encontrada');
    }
}

const server = http.createServer(requestHandler);

let port = 8000;

// função que fica observando constantemente por requisições
server.listen(port, '127.0.0.1', () => {
    console.log(`Observando requisições na port ${port}`);
});


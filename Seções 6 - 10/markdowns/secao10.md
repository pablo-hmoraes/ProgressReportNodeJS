# Autenticação, Autorização e Segurança

### 1. Autenticação

Autenticação é o ato de verificar se o usuário que está tentando acessar um recurso é realmente quem ele diz ser. 

Uma maneira de autenticação é utilizar **JWT (JSON Web Token)**. O JWT é uma solução stateless de autenticação. O funcionamento do JWT pode ser resumido da seguinte forma: 
- O cliente manda uma requisição POST ao servidor para realizar o login
- Depois o servidor checa se o usuário
existe e se a senha está correta. Se sim, ele cria um JWT único para aquele usuário que fica salvo no banco de dados. 
- Depois o servidor envia o JWT para o usuário, que o armazena em um cookie e o deixa salvo no seu armazenamento local. 
- Depois de logado, quando o usuário realizar alguma requisição, como GET, ele enviará seu JWT para o servidor, que irá checar a validade dele. Se o JWT for válido, o servidor processa a requisição e envia a resposta ao cliente.

![funcionamento jwt](./imagens/jwt.png)


### 2. Autorização

A autorização é o ato de verificar se o usuario é elegível a acessar certa rota ou recurso do aplicativo, mesmo se estiver logado. 

Para controlar quais usuários tem acesso a quais recursos, é desejável criarmos um sistema de _roles_ ou papéis. 

Com uma lógica de papéis implementada, fica simples de criar um middleware que checa se certo usuário tem acesso ou não ao recurso e realiza as operações necessárias para cada caso.


### 3. Segurança

Segurança diz respeito aos mecanismos que implementamos em nosso aplicativo para que ele seja resistente à ataques. 

Algumas boas práticas de segurança que podem ser obtidas com Node.js: 
- Criptografe senhas e tokens de mudança de senha.**Nunca deixe dados sensíves em plain text** 
- Para combater ataques do tipo _brute force_:
    - use bcrypt (faz request de login ser lento)
    - implemente rate-limiting
    - implemente um limite máximo de tentativas de login
- Para combater ataques _XSS (Cross Site Scripting)_:
    - armazene os JWTs em cookies HTTPOnly
    - utilize data sanitizers
    - utilize headers de HTTP especiais (helmet)
contra ataques _DOS (Deny of Service)_:
    - implemente rate limiting
    - limite o tamanho do payload da requisição

Alguns dos modules que podem ser obtidos no `npm` para melhorar a segurança da nossa API:

- **Rate Limiting:** Usa o `express-rate-limit` para limitar o número de requisições que um determinado IP pode enviar para nossa API. Nela podemos usar um middleware e especificar a rota que queremos aplicar o rate-limiter.

- **Helmet:** é um module que nos ajuda a manter a segurança através da configuração de alguns campos de header do HTTP. Ele age como um middleware, automaticamente adicionando ou removendo headers HTTP de acordo com a requisição recebida.

- **Data Sanitization:** é o ato de limpar os dados que chegam à aplicação, retirando códigos maliciosos, para combater **noSQL injections**. Para realizar data sanitization com express, usamos os packages `xss-clean` e `mongoSanitize` e invocamos o middleware de ambos.



# Express e Construção da API

### 1. Express

Express é um _minimal Node.js framework_, o que significa que ele é construído "por cima" do Node.js (uma abstração).

O express contém um conjunto de funcionalidade robustas, como roteamento complexo, fácil gerenciamento de requests e 
responses, middleware, etc. Além disso, express facilita a organização do nosso projeto na arquitetura **MVC (Model 
View Controller)**.

Para usar o express, como qualquer outro 3rd party module, é preciso instalá-lo com o npm no terminal

`npm install express`

Depois, basta fazer a requisição do module no código

```javascript
const app = require('express')
```


### 2. RESTful APIs

**REST (Representational State Transfer)** é uma arquitetura de software que impõe condições de como uma API deveria funcionar.  

Para uma API ser considerada RESTful, ela precisa: 
- Ter uma arquitetura cliente-servidor constituída de clientes, servidores e recursos; com requisições tratadas através de HTTP 
- Ter uma comunicação cliente-servidor _stateless_, o que significa que nenhuma informação do cliente é salva entre requisições GET e cada requisição é separada e desconectada das outras. 
- Ter uma interface uniforme entre componentes, para que a informação seja transferida de uma maneira padronizada.
- Um sistema em camadas que organiza cada tipo de servidor (aqueles responsáveis por segurança, carregamento de dados, etc.) envolvido na recuperação da informação requisitada em hierarquias, invisíveis ao cliente.


### 3. Middleware

Quando o servidor recebe uma requisição, o express cria dois objetos: um objeto **request** e um objeto **response**. Esses objetos serão manipulados — de acordo com o nosso código — e irão gerar a resposta que será enviada ao cliente. Para processar os dados e manipular esses objetos, o express usa algo chamado **middleware**. 

Um middleware é uma função que será executada entre a chegada da requisição e o envio da resposta. 

É dito que todo o middleware do nosso código é chamado de **middleware stack**, onde a ordem dos middleware na stack é definida pela ordem que definimos no código.

![middleware](./imagens/middleware.png)

Assim como os modules, podemos criar nossos próprios middleware ou usar middleware de terceiros.


### 4. Variáveis de Ambiente

Aplicativos Node.js podem executar em diferentes ambientes. Os mais importantes são: o **ambiente de produção** e o 
**ambiente de desenvolvimento**. Dependendo do ambiente que estamos, usamos diferentes bancos de dados, configurações de 
segurança, etc. 

Existe uma variável global que define o ambiente do programa e o express coloca o valor dessa variável, por padrão, como
desenvolvimento.

Para verificar o ambiente que está, basta usar o método `.get('env')` do express. Para ver todas as variáveis de ambiente, basta usar `process.env`.

Podemos alterar o ambiente que estamos de várias formas. Uma delas é utilizando o terminal. O exemplo abaixo coloca o programa no ambiente de desenvolvimento e atribui um valor para a variável arbitrária PORT_NUMBER.

`NODE_ENV = development PORT_NUMBER = 3000 node app.js`

Porém, podem existir inúmeras variáveis de ambiente que queremos definir. Logo, definí-las dessa maneira não seria o mais prático.

Então, o que é fazemos é criar um arquivo de configuração. Temos que criar um arquivo com a extensão `.env` e utilizar um module para o Node.js reconhecer esse arquivo. O module que foi usado nesse curso foi o `dotenv`.





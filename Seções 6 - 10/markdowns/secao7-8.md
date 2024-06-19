# MongoDB e Mongoose

### 1. MongoDB

MongoDB é um banco de dados do tipo NoSQL. No MongoDB, cada banco de dados pode conter uma ou mais **collections** e 
cada collection pode conter um ou mais estruturas chamadas **documents**.

O MongoDB usa documentos para armazenar os dados, sendo esses documentos estruturados no formato **BSON**, que é bem semelhante ao JSON. Diferente do JSON, os valores de um documento BSON possuem tipos. Outra diferença chave é que os
documentos BSON possuem um campo ID, que é gerado automáticamente e age como uma chave primária.   

![MongoDB documents](./imagens/mongodb.png)

É possível usar o MongoDB através da linha de comando, usando o Mongo Shell, ou utilizar a interface gráfica do aplicativo
MongoDB Compass. 

Podemos criar um **cluster** na plataforma MongoDB Atlas e, e partir dali, criar bancos de dados remotos para usar na nossa aplicação.

### 2. Conectando a aplicação ao MongoDB

Primeiro, precisamos conectar o cluster criado no Atlas localmente ou usando o MongoDB Compass. Para conectar com o Compass é preciso copiar a **connection string** encontrada no Atlas e utilizá-la para criar uma nova conexão no Compass.

![connect to compass](./imagens/connect%20to%20compass.png)

Depois de colar essa string no Compass, ele estará conectado ao banco de dados remoto do Atlas. 

Agora temos que conectar nosso banco de dados à nossa aplicação. Para fazer isso temos que baixar o mongoose usando o npm

```
npm i mongoose@5
```

Depois, basta utilizar o método `mongoose.connect()` passando a connection string como argumento.

### 3. Mongoose

Mas o que é o mongoose? O mongoose é um **ODM (Object Data Modeling)**, que nada mais é do que uma abstração do MongoDB que nos permite escrever código Node.js que interage com o banco de dados. 

O mongoose possui uma schema, que é onde modelamos os dados a partir da descrição da estrutura dos dados, valores padrões e validações. O mongoose cria um _wrapper_ para esse schema, que provê uma interface para o banco de dados para realizarmos operações CRUD (Create, Read, Update, Delete).

Os modelos são como esqueletos e podemos criar modelos a partir dos schemas.

Utilizando o método `mongoose.Schema()` definimos os atributos do schema, como nome, nota, valor, etc. Além disso, podemos definir certas _validações_ para esses campos, como `required` para dizer que o campo é obrigatório e `unique` para dizer que o campo deve ser único no banco de dados.  

Após criar o schema, podemos criar um documento a partir dele usando o método `mongoose.model()`. Com o documento criado, é possível acessar os seus métodos para realizarmos operações CRUD no banco de dados. 

### 4. MVC

O **MVC (Model View Controller)** é uma arquitetura de software que separa a aplicação em 3 componentes: 
- **Model:** Corresponde a toda a lógica de dados que o usuário pode manipular.  
- **View:** Define como o dados da aplicação devem ser exibidos ao usuário.
- **Controller:** Contém a lógica que faz a mediação entre a view e o model. O controller é responsável por chamar métodos do model que irão manipular os dados, baseado na entrada recebida pela view.

![mvc](./imagens/mvc.png)

O MVC no contexto da nossa API:
- O aplicativo recebe uma request;
- A request chega em um dos roteadores e o roteador encaminha a request para o handler específico, que está no controller;
- O controller então, baseado na requisição, pode precisar comunicar com o model para fazer modificações nos dados.
- Após o controller receber os dados necessários do model, ele envia para a view para ser mostrado ao usuário.

Um conceito importante de MVC é  o de **fat models/thin controllers**. Esse conceito diz que devemos deixar a maior parte da lógica do programa no modelo e manter os controllers simples e sucintos. 


### 4. CRUD com mongoose

Após criarmos um documento, temos acesso aos métodos do seu model, que são utilizados para realizar as operações CRUDs.

Aqui estão alguns dos métodos mais notórios: 

- `model.create()` para criar um documento e salvar no banco de dados 
- `model.find()` para ler todos os dados;
- `model.findById()` para ler o item com determinado id;
- `model.findByIdAndUpdate()` para atualizar um documento;
- `model.findByIdAndDelete()` para deletar o documento;

O restante dos métodos podem ser encontrados na [documentação](https://mongoosejs.com/docs/api/model.html) do mongoose.

### 5. Melhorando a API

#### Querying

A query é a string de texto digitada na nossa API para especificar certos critérios que a informação deve satisfazer.   

É importante tratar diversos tipos de queries, pois isso torna nossa API mais robusta e com mais funcionalidades.

Exemplo de uma query de API: 

```
.../api/v1/tours?sort=price,ratingsAverage
```

Na URL acima, o `?` indica o início de uma query e sort diz que devemos mostrar os dados de forma ordenada pelo campo `price` e, caso os preços sejam iguais, ordenar por `ratingsAverage`.

Podemos tratar as queries usando as **query middleware**. Definimos as _features_ que a API irá cobrir como métodos de uma classe e depois utilizamos os métodos dessa classe para manipular o parâmetro `query` da requisição. Após esse parâmetro ser modificado, receberemos os dados baseados no que foi especificado na query.


#### Aggregation Pipeline

Aggregation pipeline consiste em um ou mais estágios para o processamento de documentos. Cada estágio realiza uma operaçao no dados de entrada. Por exemplo, um estágio pode filtrar e agrupar documentos e calcular valores. Os documentos que são o output de um estágio se tornam o input do próximo estágio, até o fim do pipeline.

Alguns dos estágios mais comuns são:
- `$match`: filtras os documentos de acordo com a expressão especificada.
- `$group`: agrupa os documentos de acordo com a expressão especificada e aplica expressões de acumulador, como soma, média, máximo, etc.  
- `$sort`: ordena os documentos e o os retorna em ordem.

#### Outros Middlewares

Existem outros dois tipos de middleware que podem melhorar a nossa API: documents middleware e query middleware.

- **Document Middleware:** são funções que são executadas durante estágios específicos do ciclo de vida de um documento. Existem dois tipos, chamados hooks: 
    - **Pre middleware**: executa antes da operação ser executada
    - **Post middleware**: executa após da operação ser executada

Esses hooks podem ser atrelados às operações dos documentos, como `save()` ou `remove()` e vão ser executadas antes ou após tais operações.

- **Query Middleware:** são semelhantes aos documents middleware, mas são executadas quando chamamos `exec()` ou `then()` em um objeto query, ou damos `await` em um objeto query.





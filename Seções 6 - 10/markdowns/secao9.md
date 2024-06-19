# Tratamento de Erros

O tratamento de erros é uma parte muito importante de uma aplicação e é essencial termos formas eficientes e simples para realizar essa tarefa em nosso código.

### 1. Global Error Handling Middleware

Uma forma elegante para tratar erros em Node.js é a de criar uma classe de erro e implementar um controller para tratar esses erros. No controller iremos cobrir os possíveis erros que nossa aplicação pode obter, capturá-los e lançar o objeto da classe erro com o contexto para o usuário. 

Exportamos esse tratador de erros como um middleware de erros, ou seja, só será executado quando ocorrer um erro. Para criar um middleware de erro, basta colocar `err` como primeiro parâmetro do middleware que o express já reconhece como middleware de erro.

Como o middleware de erro ainda é um middleware, ele está no middleware stack e, por consequência, possui a função `next()`. Dessa forma, quando um erro acontece não queremos que o programa prossiga e nenhum outro middleware da stack seja executado. Para evitar isso, basta chamarmos a função `next()` de um middleware passando qualquer argumento que o express irá assumir que este argumento é um erro e não irá executar o restante dos middlewares da stack.  

### Capturando Erros em Funções Assíncronas 

Para evitar a repetição de blocos `try-catch` e código duplicado, podemos criar um _wrapper_ para as funções assíncronas. Basicamente criamos uma função chamada `catchAsync` que irá receber um função assíncrona como argumento. O `catchAsync` irá retornar uma função e essa função será atribuída à função que desejamos.


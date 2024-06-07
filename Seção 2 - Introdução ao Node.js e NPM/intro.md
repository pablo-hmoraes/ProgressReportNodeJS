# Introdução ao Node.js
### 1. O que é? 
O Node.js é um ambiente de execução de JavaScript. Ele é _open-source_ e multiplataforma. A principal utilidade do Node.js é permitir a execução de códigos JavaScript fora de navegadores. Essas características tornam o Node.js uma ótima tecnologia para a programação _back-end_. 

### 2. Modules

_Modules_ são pedaços de códigos reutilizáveis. São basicamente arquivos `.js` que são exportados e podem ser utilizados em outros programas, permitindo os desenvolvedores a aderirem ao princípio **DRY (Don't Repeat Yourself)**. 

Para utilizar um _module_, basta usar a palavra-chave `require` e passar como argumento o _module_ desejado.

```javascript

const httpModule = require('http');
```

Existem três tipos de _modules_ em Node.js: _core modules_, _local modules_ e _3rd party modules_.

##### Core modules 

São _modules_ próprios do Node.js já embutidos na instalação do mesmo. Alguns _core modules_ interessantes em que o Node.js oferece: 

| **Nome** | **Descrição** |
| - | - |
| http | provê uma implementação de cliente/servidor |
| fs | usado para gerenciar arquivos |
| url | provê utilidades para resolver e fazer parsing de URL's |


##### Local modules

São _modules_ criados e escritos localmente pelo próprio desenvolvedor. Para utilizar um _local module_, basta criar um arquivo `.js` com código que deseja exportar. Após isso, é necessário realizar a exportação, que pode ser feita usando `module.exports` ou `exports`. Usamos o `module.exports` quando queremos exportar apenas uma função ou objeto, enquanto o `exports` é utilizado para exportar múltiplos objetos ou funções. 


##### 3rd Party Modules

São _modules_ disponíveis online e que podem ser instalados utilizando o **NPM (Node Package Manager)**. Alguns _3rd party modules_ populares foram utilizados nesse curso, como o _express_ e o _Mongoose_.


### NPM 

O **npm** é o gerenciador de pacotes e dependências padrão do Node.js e já é instalado junto com o mesmo. O **npm** possui uma **CLI (Command Line Interface)**, por onde instalamos os pacotes e as dependências dos nossos programas Node.js. 

Para instalar uma dependência (programas necessários para a aplicação funcionar), basta utilizar o comando

`npm install <package name>`

Para instalar dependências de desenvolvedores ou _dev dependencies_ — que são ferramentas utilizadas durante o desenvolvimento, mas que não são imperativas para o funcionamento do programa —, basta utilizar o comando 

`npm install <package name> --save-dev`





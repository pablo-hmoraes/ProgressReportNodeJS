# JavaScript Assíncrono

### 1. Callback Hell
O JavaScript é _single-threaded_, o que torna a programação síncrona, escrevendo o código de uma forma procedimental e top-down, algo não desejado quando programamos em JavaScript. Isso acontece devido ao funcionamento do Event Loop, onde códigos bloqueantes, como leitura de I/O, afetam negativamente a performance da aplicação. Por isso, o uso de callbacks é muito utilizado quando programando em Node.js, pois permitem a execução assíncrona do JavaScript pelo Event Loop. Porém, uma consequência do uso de callbacks é o chamado **callback hell**, que ocorre quando temos callbacks dentro de callbacks, formando uma espécia de pirâmide. 

```javascript
asyncOperation1((result1) => {
    asyncOperation2((result1, result2) => {
        asyncOperation3((result2, result3) => {
            // mais calbacks aninhados
        });  
    });
});
```
O código acima é uma exemplo de callback hell. Perceba que é muito difícil de compreender o que está acontecendo e, consequentemente, de modificar esse código. A alternativa para esse problema é o uso de **promises**.

### 2. Promises

Em JavaScript, uma **promise** é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. A promise pode ser entendida como um representante de um valor ainda não conhecido. Ela nos permite associar _handlers_ com o eventual sucesso ou falha de operações assíncronas. 

Uma promise está em um desses três estados:

- **pending:** estado inicial, nem rejeitado nem aceito.
- **fulfilled:** a operação foi finalizada com sucesso.
- **rejected:** a operação falhou.

Em suma, promises podem ser consideradas _syntatic sugar_, já que tudo que pode ser feito com promises pode também ser obtido com callbacks. Porém é inegável que o código abaixo (é possível encadear uma promise em outra) é bem mais legível e desejável do que um callback hell.

```javascript

myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });   
```

### 3. Async/Await

Promises já são consideradas _syntatic sugar_, pois deixam o nosso código mais intuitivo, porém é possível deixá-lo ainda mais fácil de compreender, fazendo com que fique com uma estrutura semelhante a um código síncrono. 

Com async/await é possível guardar o resultado de uma função assíncrona em uma variável decorando as funções com o prefixo `async` — o que faz com que a função retorne uma promise — e depois usando o prefixo `await` para fazer com que a função seja "esperada", ou seja, que a promise saia do estado de _pending_. 







 


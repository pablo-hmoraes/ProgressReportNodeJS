const fs = require('fs');
const superagent = require('superagent');

/* 
Exemplo usando promises 
*/

/* 
Função que retorna uma promise.
Caso aconteça um erro, retornarmos reject() e casa a operação suceda, retornamos o que é passado para resolve()
*/
const readFilePromise = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err)
                return reject(`error: ${err.message}`);
            resolve(data);
        });
    });
}

const writeFilePromise = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`${__dirname}/txts/output.txt`, data, err => {
            if (err) 
                reject('erro');
            
            resolve('sucesso');
        });
    }); 
};

/*
Função onde iremos consumir a promise.
A callback dentro de then() é executada caso a promise fique no estado fulfilled.
Como pode ser visto, podemos aninhar as promises. 
*/  
readFilePromise(`${__dirname}/txts/input.txt`)
    .then(data => {
    console.log(`Breed: ${data}`);

    return superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    })
    .then(res => {
        console.log(res.body.message);    

        return writeFilePromise(`${__dirname}/txts/output.txt`, res.body.message)
    })
    .then(() => {
        console.log('Imagem salva!');
    })
    .catch(err => {
        console.log(err);
});
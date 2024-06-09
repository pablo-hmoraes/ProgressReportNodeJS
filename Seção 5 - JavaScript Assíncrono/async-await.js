const fs = require('fs');
const superagent = require('superagent');


/*
As duas funções abaixo são as mesmas do exemplo usando promises.
Porém, invés de chamarmos essas duas funções e aninharmos o resultado das promises, podemos utilizar o async-await
para deixar o código mais intuitivo.  
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
Função declarada com async e dentro dela usamos o await antes de chamarmos as funções acima, fazendo com 
que o Node.js aguarde o resultado da operação, igual uma promise convencional.
*/
const getData = async () => {
    try {
        const data = await readFilePromise(`${__dirname}/txts/input.txt`); 
    
        console.log(`Breed: ${data}`);
        
        const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);
    
        await writeFilePromise(`${__dirname}/txts/output.txt`, res.body.message);
    } catch (err) {
        console.log(err.message);
    }
}

getData();
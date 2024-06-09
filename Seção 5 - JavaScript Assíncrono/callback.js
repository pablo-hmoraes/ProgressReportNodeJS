/*
Mostrando como o mesmo resultado pode ser obtido utilizando callbacks, promises e async/await
*/

const fs = require('fs');
const superagent = require('superagent');


// exemplo usando apenas callbacks
fs.readFile(`${__dirname}/txts/input.txt`, (err, data) => {
    if (err)
        return console.log("arquivo não encontrado.");

    /* 
    O superagent é um module disponível no npm 
    Aqui ela foi utilizada para fazer uma requsição HTTP de forma simples    
    No método get passamos o URL que desejamos fazer a requisição e encadeamos com o método end, que executa a callback
    assim que a requisição é finalizada.   
    */
    superagent
        .get(`https://dog.ceo/api/breed/${data}/images/random`)
        .end((err, res) => {
            if (err)
                return console.log(err.message);

            const finalData = res.body.message;
            console.log(`dado escrito no arquivo: ${finalData}`);

            fs.writeFile(`${__dirname}/txts/output.txt`, finalData, err => {
                if (err)
                    return console.log(err.message);
                
                console.log("dados salvo no arquivo");
            });
        }) 
});



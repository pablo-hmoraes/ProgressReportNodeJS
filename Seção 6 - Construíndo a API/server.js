/*
Apenas inicializa o servidor, de acordo com as variáveis de ambiente especificadas
*/

const dotenv = require('dotenv');
const app = require('./app');

// especifica ao dotenv o caminho para o arquivo de configuração de variáveis de ambiente
dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

/* 
Esquema de roteamento do programa.
Aqui está a lógica da URL, ou seja,o que deve ser feito com os dados e que dados devem ser mostrados, a depender do 
endpoint determinado pelo cliente.
*/

const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

// verifica se o parâmetro ID é válido 
router.param('id', tourController.checkID);


/* 
Com o método router() do express, precisamos apenas passar um "router handler" para cada método que representa um tipo
de requisição HTTP. Nesse caso, passamos os router handlers são as funções do controller.
*/
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;

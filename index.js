const express = require ('express');
var moment = require('moment');
const { t001_transaction } = require('./sequelize')

const cors = require("cors");
const nodeEnv = process.env.NODE_ENV || "development";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:false }))
app.use(cors(nodeEnv));
const PORT = process.env.PORT || 3000;


// todas transacciones
/**
 * @api {put} /tasks/:id Update a task
 * @apiGroup Tasks
 * @apiParam {id} id Task id
 * @apiParam {String} title Task title
 * @apiParam {Boolean} done Task is done?
 * @apiParamExample {json} Input
 *    {
 *      "title": "Work",
 *      "done": true
 *    }
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 204 No Content
 * @apiErrorExample {json} Update error
 *    HTTP/1.1 500 Internal Server Error
 */
app.get('/listar', (req, res) => {
  t001_transaction.findAll()
    .then (transacction => {
      res.send(transacction)
    })
});

// Crear transacciones
app.post('/crear', (req, res) => {
  t001_transaction.create({
    VA_DESCRIPTION: req.body.VA_DESCRIPTION,
    FE_CREATE_ON: moment(),
    VA_AMOUNT: req.body.VA_AMOUNT
  }). then(transacction=> {
    res.json('Transaccion Creada');
  })
  console.log(req.body)
});

//leer Transaccion
app.get('/buscar/:id', (req, res) => {
  let TransactionId = req.params.id 
  t001_transaction.findOne({ where : {NU_ID : TransactionId}})
      .then (transacction => {
        res.json(transacction)
      })
  });

// actualizar transaccion
app.put('/buscar/:id', (req, res) => {
  let TransactionId = req.params.id 
  let NewDats = req.body
t001_transaction.findOne({ where : {
  NU_ID : TransactionId}})
    .then (transacction => {
      transacction.update(NewDats)
      .then(NewTransac => {
        res.json(NewTransac)
      })
    })
});

//Borrar Transaccion
app.delete('/borrar/:id', (req, res) => {
  let TransactionId = req.params.id 
  t001_transaction.destroy({where : {
    NU_ID : TransactionId}})
      .then(()=> {
      res.json('Transaccion Eliminada')
      })
});
 app.listen(PORT, () => console.log(`Server running in port ${PORT}`));



const express = require ('express');
var moment = require('moment');
const cors = require("cors");
const nodeEnv = process.env.NODE_ENV || "development";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:false }))
app.use(cors(nodeEnv));
const PORT = process.env.PORT || 3000;
const { t001_transaction } = require('./sequelize')
const transactionController = require('./controllers/listar.controller');
const LISTARCONTROLLER = new transactionController();

app.use(express.static('public'));

// todas transacciones
app.get('/listar', async (req, res) => {
  let list = await LISTARCONTROLLER.listar();
  if( list )
    res.send(list);
  else 
    res.send('Error al listar')
});

// Crear transacciones
app.post('/crear', async (req, res) => {
let trans = await LISTARCONTROLLER.crear({
  VA_DESCRIPTION: req.body.VA_DESCRIPTION,
  FE_CREATE_ON: moment(),
  VA_AMOUNT: req.body.VA_AMOUNT
});
if( trans)
     res.json('Transaccion Creada');
else 
    res.json('transaccion Fallida')
});

//leer Transaccion
app.get('/buscar/:id', async (req, res) => {
  let TransactionId = req.params.id 
  let buscar = await LISTARCONTROLLER.buscar(TransactionId);
      if (buscar)
        res.json(buscar)
      else 
        res.send('No exite')
  });

// actualizar transaccion
app.put('/buscar/:id', async (req, res) => {
  let TransactionId = req.params.id 
  let buscar = await LISTARCONTROLLER.buscar(TransactionId);
  if (buscar){
    buscar.dataValues = req.body;
    buscar.NU_ID = TransactionId;
    let upd = await LISTARCONTROLLER.actualizar(buscar.dataValues);
    if(upd.length)
      res.json(upd);
    else
      res.json('Error al actualizar')
  }else
    res.json('Transaccion no encontrada')
});

//Borrar Transaccion
app.delete('/borrar/:id', async (req, res) => {
  let TransactionId = req.params.id 
  let deelete = await LISTARCONTROLLER.borrar(TransactionId)
      if (deelete)
        res.json('Transaccion Eliminada')
      else
        res.send('No existe la Transaccion')
});
 app.listen(PORT, () => console.log(`Server running in port ${PORT}`));



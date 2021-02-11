
const { Sequelize,DataTypes,QueryTypes,Op } = require('sequelize');
const TransaccionaModel = require('./models/t001_transaction')


const sequelize = new Sequelize('yasta', 'sa', 'Abcd1234.', {
    dialect: 'mssql',
    host:'127.0.0.1',
    port:'49716',
    dialectOptions: {
      "options": {
      validateBulkLoadParameters: true
      }
      }
  })


const t001_transaction = TransaccionaModel (sequelize,Sequelize)


sequelize.sync()
  .then(() => {
      console.log ('tablas creadas')
  })

module.exports = {
    t001_transaction
}
module.exports = (sequelize, type) => {
  const t001_transaction = sequelize.define('t001_transaction',{
      NU_ID : {
          type: type.INTEGER,
          primaryKey:true,
          autoIncrement:true
      },
      VA_DESCRIPTION : {
          type: type.STRING,
          allowNull: false
      },
      FE_CREATE_ON : {
          type: type.DATE,
          allowNull: true
          
          
        
      },
      VA_AMOUNT : {
          type: type.FLOAT,
          allowNull: false
      }
  },{
      timestamps:false
  })
  return t001_transaction
  }

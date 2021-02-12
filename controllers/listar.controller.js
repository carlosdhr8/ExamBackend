const { t001_transaction } = require('../sequelize')

class transactionController {
    constructor(){}
    /**
        * @api {get} /listar/ Consultar listado
        * @apiGroup listar
        * @apiSuccessExample {json} Success
        *    HTTP/1.1 200 OK
        * [
    {
        "NU_ID": 6,
        "VA_DESCRIPTION": "exp",
        "FE_CREATE_ON": "2021-02-03T19:14:19.000Z",
        "VA_AMOUNT": 1004
    },
    {
        "NU_ID": 8,
        "VA_DESCRIPTION": "udp",
        "FE_CREATE_ON": "2021-02-03T20:07:30.000Z",
        "VA_AMOUNT": 50000000.23
    }
]
        * @apiErrorExample {json} Update error
        *    Error al listar
    */
    async listar() {
        try {
            return await t001_transaction.findAll();
        } catch (error) {
            console.log( error );
        }
    }
    
        /**
        * @api {post} /crear/ Crear transacion
        * @apiParam {date}   [FE_CREATE_ON]     fecha de la transaccion 
        * @apiParam {String} [VA_DESCRIPTION]   Descripcion de la Transaccion
        * @apiParam {Number} [VA_AMOUNT]        Monto de la transaccion
        * @apiGroup crear
        * @apiSuccessExample {json} Success
        *    HTTP/1.1 200 OK
        *  Transaccion Creada
        * @apiErrorExample {json} Update error
        *   Transaccion Fallida
    */
    async crear( transaction ) {
        try {
            return await t001_transaction.create( transaction )
        } catch (error) {
            console.log( error );
        }
    }
     /**
        * @api {put} /buscar/:NU_ID/ actualizar transacion
        * @apiParam {number} [NU_ID]            Id de la transaccion que se actualizara
        * @apiParam {String} [VA_DESCRIPTION]   Descripcion de la Transaccion
        * @apiParam {Number} [VA_AMOUNT]        Monto de la transaccion
        * @apiGroup actualizar
        * @apiSuccessExample {json} Success
        *    HTTP/1.1 200 OK
        *  [
    {
        "NU_ID": 6,
        "VA_DESCRIPTION": "exp",
        "FE_CREATE_ON": "2021-02-03T19:14:19.000Z",
        "VA_AMOUNT": 1004
    }]
        * @apiErrorExample {json} Update error
        *   Transaccion no encontrada
    */
    async actualizar( transaction ) {
        try {
            return await t001_transaction.update( transaction, {
                where: {
                    NU_ID: transaction.NU_ID
                }
            })
            
        } catch (error) {
            console.log( error );
        }
    } 

    async buscar( id ) {
        try {
            return await t001_transaction.findOne({ where : {NU_ID : id}})
        } catch (error) {
            console.log( error );
        }
    }
         /**
        * @api {delete} /borrar/:NU_ID/ Borrar Transaccion
        * @apiParam {number} [NU_ID]            Id de la transaccion que se borrara
        * @apiGroup borrar
        * @apiSuccessExample {json} Success
        *    HTTP/1.1 200 OK
        *  Transaccion Eliminada
        * @apiErrorExample {json} Update error
        *   No existe la Transaccion 
    */

     async borrar( TransactionId ) {
        try {
            return await t001_transaction.destroy({where : {NU_ID : TransactionId}})
        } catch (error) {
            console.log( error );
        }
    } 
}

module.exports = transactionController;
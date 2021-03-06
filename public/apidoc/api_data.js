define({ "api": [
  {
    "type": "put",
    "url": "/buscar/:NU_ID/",
    "title": "actualizar transacion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "NU_ID",
            "description": "<p>Id de la transaccion que se actualizara</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "VA_DESCRIPTION",
            "description": "<p>Descripcion de la Transaccion</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "VA_AMOUNT",
            "description": "<p>Monto de la transaccion</p>"
          }
        ]
      }
    },
    "group": "actualizar",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n[\n   {\n       \"NU_ID\": 6,\n       \"VA_DESCRIPTION\": \"exp\",\n       \"FE_CREATE_ON\": \"2021-02-03T19:14:19.000Z\",\n       \"VA_AMOUNT\": 1004\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "Transaccion no encontrada",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/listar.controller.js",
    "groupTitle": "actualizar",
    "name": "PutBuscarNu_id"
  },
  {
    "type": "delete",
    "url": "/borrar/:NU_ID/",
    "title": "Borrar Transaccion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "NU_ID",
            "description": "<p>Id de la transaccion que se borrara</p>"
          }
        ]
      }
    },
    "group": "borrar",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\nTransaccion Eliminada",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "No existe la Transaccion",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/listar.controller.js",
    "groupTitle": "borrar",
    "name": "DeleteBorrarNu_id"
  },
  {
    "type": "post",
    "url": "/crear/",
    "title": "Crear transacion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "FE_CREATE_ON",
            "description": "<p>fecha de la transaccion</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "VA_DESCRIPTION",
            "description": "<p>Descripcion de la Transaccion</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "VA_AMOUNT",
            "description": "<p>Monto de la transaccion</p>"
          }
        ]
      }
    },
    "group": "crear",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\nTransaccion Creada",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "Transaccion Fallida",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/listar.controller.js",
    "groupTitle": "crear",
    "name": "PostCrear"
  },
  {
    "type": "get",
    "url": "/listar/",
    "title": "Consultar listado",
    "group": "listar",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n[\n    {\n        \"NU_ID\": 6,\n        \"VA_DESCRIPTION\": \"exp\",\n        \"FE_CREATE_ON\": \"2021-02-03T19:14:19.000Z\",\n        \"VA_AMOUNT\": 1004\n    },\n    {\n        \"NU_ID\": 8,\n        \"VA_DESCRIPTION\": \"udp\",\n        \"FE_CREATE_ON\": \"2021-02-03T20:07:30.000Z\",\n        \"VA_AMOUNT\": 50000000.23\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "Error al listar",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/listar.controller.js",
    "groupTitle": "listar",
    "name": "GetListar"
  }
] });

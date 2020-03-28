const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/** 
 * rotas e recursos
 */

 /**
  * métodos http:
  * 
  * GET: Listar ou buscar uma informação do back-end
  * POST: criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: deletar uma infromação no back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados na rota após o simbolo de ? (filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: corpo da requisição, usado para criar ou alterar recursos
   */
 


app.listen(3333);
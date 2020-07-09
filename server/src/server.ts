import express from 'express';
import routes from './routes';

//Request Param: Parâmetros que vem na própria rota que identificam um recurso.
//Query Param: Parâmetros quue vem na própria rota, geralmente usado para paginação, filtros e etc....
//Request Body: Parâmetros para  criação/atualização de informações.

const app = express();

app.use(express.json())
app.use(routes);


app.listen(3333)
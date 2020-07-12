import express from 'express';
import routes from './routes';
import path from 'path';

//Request Param: Parâmetros que vem na própria rota que identificam um recurso.
//Query Param: Parâmetros quue vem na própria rota, geralmente usado para paginação, filtros e etc....
//Request Body: Parâmetros para  criação/atualização de informações.

const app = express();

app.use(express.json())
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))) //Função usada para acessar arquivos estáticos (pdf, img, word,....)

app.listen(3333)

// Pesquisar Service Pattern 
// Pesquisar Data mapper
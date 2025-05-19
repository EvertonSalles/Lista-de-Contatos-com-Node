//importar as bibliotecas/ferramentas
import express from 'express'; 
import helmet from 'helmet';
import router from './routes';



const server = express(); 

server.use(helmet()); //para protecao
server.use(express.json()); //para utilizar o json como comunicação padrao do servidor
server.use(express.urlencoded({ extended : true})); 

server.use('/', router); //na raiz do projeto, vai ter o router

server.listen(3000, () => {
    console.log('Servidor rodando: http://localhost:3000/')
})// para escutar uma porta especifica

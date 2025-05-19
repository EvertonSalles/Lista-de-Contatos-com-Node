import express from 'express';
import { createContact, deleteContact, getContacts } from '../services/conctact';

const router = express.Router();

router.post('/contato', async (req, res) => {
    const { name } = req.body;
    if(!name || name.length < 2){
        res.json({ error: 'Nome precisa ter pelo meos 2 caracteres.'});//se der errado, ja vai parar por aqui
        return
    }
    //processamento dos dados

await createContact(name);
    res.status(201).json({ contato: name});
});//metodo post, usa o status 202 para mostrar que deu certo

router.get('/contatos', async (req, res) =>{
  let list = await getContacts();

res.json({ contatos: list});
})

router.delete('/contato', async (req, res) =>{
    const { name }  = req.query;
    if(!name){
        res.json({ error: 'Precisa mandar um nome para excluir'})
        return 
}
      await deleteContact(name as string);

      res.json({contato: name});
});//para apagar o nome de um array



export default router;
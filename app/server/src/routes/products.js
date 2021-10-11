import { Router } from 'express';
import db from '../services/authfirebase';

const router =  Router();

router.get('/', (req, res) => {
    console.log("route /");
    res.send({"home":"You're in home"});
});

router.post('/create-product',async (req,res)=>{
    console.log(req.body);
    const newProduct = { 
        name: req.body.name,
        price: req.body.price,
    }
    const yu = await db.collection("sales").add(newProduct);
    console.log(yu);
    res.send({name: "Hola Mundo"});
});

router.delete('/delete/:id', async (req,res)=>{
    console.log(req.params.id); 
    const resd = await db.collection('sales').doc(req.params.id).delete();
    res.send({"mgs":"Deleted","rd":resd}); 
});

export default router;  
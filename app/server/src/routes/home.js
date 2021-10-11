//Para usar síntaxis ES6 en adelante debemos instalar babel y configurarlo en el .babelrc
import { Router } from 'express';
const router = Router();

router.get("/", (req, res) => {
  res.send({"msg":"Hola Mundo"});
});

export default router;

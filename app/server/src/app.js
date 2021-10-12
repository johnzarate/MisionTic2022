import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(express.json());
//settings
const port = 7027;
app.set("port", port);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));


//routes
app.use('/api/v1/products',require('./routes/products/products').default);

export default app;
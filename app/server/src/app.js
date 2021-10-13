import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(express.json());
//settings
const port = 4304;
app.set("port", port);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//this is used for rquest info from a server to each other
app.use(cors());


//routes
app.use('/api/v1/products',require('./routes/products/products').default);

export default app;
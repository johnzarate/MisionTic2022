import express from 'express';
import morgan from 'morgan';
import home from './routes/home';


const app = express();
app.use(express.json());
//settings
const port = 6059;
app.set("port", port);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));


//routes
app.use(home);
app.use('/products',require('./routes/products').default);

export default app;
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

const app = express();
app.use(express.json());
//settings
const port = 4304;
app.set("port", port);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//this middleware is very important, because it is the checker of the jwt
const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        //In this url are the valid tokesm that audeince have created
        jwksUri: 'https://dev-w8mlenzq.us.auth0.com/.well-known/jwks.json'
  }),
  //audience is the API endpoint that gives Auth0 and return tokens
  audience: 'https://authtokenthunder/',
  //This is the url where is used the service of Google, etc
  issuer: 'https://dev-w8mlenzq.us.auth0.com/',
  algorithms: ['RS256']
});

//this is used for rquest info from a server to each other
app.use(cors());

//this is very important because here check the validation of the token
app.use(jwtCheck);


//routes
app.use('/api/v1/products',require('./routes/products/products').default);

export default app;
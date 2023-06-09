import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// imports
import home from './routes/homeRoute.js';
import ticket from './routes/passagensRoute.js';
import host from './routes/hospedagensRoute.js';


// routes
app.use(home);
app.use(ticket);
app.use(host);


app.listen(process.env.PORT, () => {
    console.log('Server is running at port: ' + process.env.PORT);
})
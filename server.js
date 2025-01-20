const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 4000;
const host = process.env.HOST || 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());

// app.use(cors({
//     origin: ['localhost:3000'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true
// }));

app.use(express.json());

const uri = 'mongodb://esolution:superadmin%401992@100.42.187.184:27017/esolutionedulk?authSource=esolutionedulk';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected!');
    } catch (error) {
        console.log('MongoDB Error: ', error);
    }
}

connect();

const server = app.listen(port, host, () => {
    console.log(`Server running on port ${server.address().port}`);
});

app.use('/api', router);
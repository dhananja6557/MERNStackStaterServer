const express = require('express');
const app = express();
const cors = require('cors');

const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://esolution:Dhana@1992@esolution.l8jbzny.mongodb.net/?retryWrites=true&w=majority&appName=eSolution';

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

app.use('./api', router);
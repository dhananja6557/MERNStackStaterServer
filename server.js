const app = require('./app');
const port = 3001;
const host = 'localhost';

const server = app.listen(port, host, () => {
    console.log(`Server running on port ${server.address().port}`);
});
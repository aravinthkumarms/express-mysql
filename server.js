const express = require('express');
const bodyParser = require('body-parser'); // for parsing the body of the request
const cors = require('cors'); // for allowing cross-origin requests
const router = require('./routes/personalDetailRoute.js');

const app = express(); // create an instance of express
var corOptions = {
    origin: 'http://localhost:5000',
};  // port to listen on




app.use('/api', router); // use the router


// middleware

app.use(cors()); // enable cors

app.use(bodyParser.json()); // support json encoded bodies

app.use(express.urlencoded({ extended: true })); // support encoded bodies

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
}); // start the server

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
})
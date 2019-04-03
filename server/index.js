const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();

const port = 4000;

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then((dbInstance) =>{
    app.set('db', dbInstance);
}).catch((error) =>{
    console.log(error);
})






app.listen(port, () => console.log(`Helo is listening on port ${4000}`));
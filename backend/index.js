const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
var cors = require('cors');

let app = express();

app.use(bodyParser.urlencoded({  extended:false  }));
app.use(bodyParser.json());
app.use(expressValidator());

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));


consign().include('routes').include('utils').into(app);

app.listen(3001, '127.0.0.1', () => {

    console.log('servidor rodando! http://localhost:3001');

}); 
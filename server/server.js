const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const { PORT } = require('./config/basic');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Settingan session
require('./config/session')(app);

//Routes
require('./routes/route-prefixes')(app);

//Menjalankan server
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT || 3001}`);
});
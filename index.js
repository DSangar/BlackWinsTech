const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());

// My Routes
const routes = require('./routes/allroutes');


// dotenv
env.config();
const PORT = process.env.PORT;
const DB= process.env.MONGO;


app.use(express.json());

mongoose.connect(DB,{})
.then(() => { 
    console.log('Database is connected'+DB);
}).catch((err) => { 
    console.log('Database is not connected');
});

app.use("/contact",routes);


app.listen(PORT, () => {
    console.log(`Server is runn ing on port ${PORT}`);
});


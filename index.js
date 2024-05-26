const express = require('express');
// const mongoose = require('mongoose');

const app = express()

const PORT = 3000;

const baseRouter = require('./src/routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(baseRouter)

// try {
//     mongoose.connect('mongodb://localhost:27017/eventdb')
// }catch(err) {
//     console.log("Failed while connecting to mongodb");
// }

app.listen(PORT, (err) => {
    if(err) {
        return console.log('Something went wrong', err);
    }
    console.log(`listening on port ${PORT}`);
});
require("dotenv").config();
const mongoose = require('mongoose');

const app = require('./app');
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(con => {
    console.log(`Banco conectado: ${con.connection.host}`);
})

const port = process.env.port || 4500;
app.listen(port, '127.0.0.1', () => {
    console.log(`Server started on port ${port}`);
});
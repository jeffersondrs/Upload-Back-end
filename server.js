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

const PORT = process.env.PORT || 4500;
app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server started on port ${port}`);
});
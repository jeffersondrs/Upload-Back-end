require('dotenv').config({ path: 'CONFIG.ENV' });
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

let PORT = process.env.PORT || 4500;
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});
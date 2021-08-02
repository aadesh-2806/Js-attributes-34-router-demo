const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelter')
const dogRoutes = require('./routes/dogs')
const adminRoutes = require('./routes/admin')

app.use('/shelters',  shelterRoutes);//all route controlled by this
app.use('/dogs',  dogRoutes);
app.use('/admin' , adminRoutes);

app.listen(3000, ()=>{
    console.log('Serving on Port 3000');
})     
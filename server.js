const express = require('express');
const app = express();
const roomsRoute = require('./routes/roomsRoutes');
const usersRoute = require('./routes/userRoutes');
const bookingsRoute = require('./routes/bookingRoutes')
const mongoose = require("mongoose");
const cors = require('cors');

app.use(express.json());
app.use(cors()); 
app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute); 
app.use('/api/bookings', bookingsRoute); 

const port = process.env.PORT || 5000;

main()
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb+srv://Nitesh:Nitesh%40123@cluster0.6tifeca.mongodb.net/");
}

app.listen(port, () => console.log(`Server is running at port ${port}`));

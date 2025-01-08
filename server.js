require("dotenv").config();

const express= require('express');
const connectToDb = require("./database/db");
const bookRoutes = require("./routes/book-routes")
const app = express();


const PORT = process.env.PORT || 3000;

//connect to our database

connectToDb()

//middleware express.json() built in middleware
app.use(express.json());

//routes 

app.use("/api/books",bookRoutes);



app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})


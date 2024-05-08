const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bookRoute = require('./route/bookRoutes');
const cors = require('cors')
dotenv.config();

const app = express()
app.use(cors());

const PORT = process.env.PORT || 4000
const URI = process.env.MONGODBURI;

// connect to mongodb
mongoose.connect(URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
  });


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// define routes
app.use('/book',bookRoute);

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
})
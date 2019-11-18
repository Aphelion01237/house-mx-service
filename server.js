// server.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const events = require('./routes/api/events');
const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/events', events);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));

// const express = require("express");

// const mongoose = require("mongoose");
// const routes = require("./routes/api/events");
// const app = express();
// const PORT = process.env.PORT || 3001;

// // routes
// const events = require('./routes/api/events');

// // Configure body parsing for AJAX requests
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Init Middleware
// app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('Hello world!'));

// // use Routes
// app.use('/api/events', events);

// // Connect to the Mongo DB
// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb+srv://easyHouse:easyHouse2019@test-maintenance-9tvze.mongodb.net/test?retryWrites=true&w=majority",
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true
//   }
// );

// // Start the API server
// app.listen(PORT, () =>
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
// );

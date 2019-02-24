const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const multer = require ("multer");
const routes = require("./routes");

const books = require("./routes/api/books");
//db Config
const db = require("./config/keys").mongoURI;
const app = express();
const port  = process.env.PORT || 5000;

// bodyParser Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(routes);
//tried this, because I cannot get server running,error cannot find routes//app.use("/", routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

//Connect to Mongo
mongoose
    .connect(db)
    .then(()  => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

//use Routes
app.use("/api/books", books);    
    


app.listen(PORT, () => console.log("Server started on PORT ${port}"));
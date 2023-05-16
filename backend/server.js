const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();


const app = express();

const SERVICE = require("./routes/Service/ServiceRoute")


// Body parser middleware
app.use(bodyParser.json());
app.use(cors());

app.use(
    express.urlencoded({
        extended: false,
    })
);

//route middleware
app.use(SERVICE);



app.use(express.json());
// DB Config
const db = config.get("mongoURI");
// Connect to MongoDB
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB successfully connected"))
    .catch((err) => console.log(err));

const port = process.env.PORT || 8002;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

const express = require('express');
const app = express(); 
// const cors = require('cors');
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const morgan = require("morgan")
const helmet = require("helmet")
const authRouter = require("./routes/auth")
const bodyParser = require('body-parser');
const notesRouter = require("./routes/notes");
const empdetRouter = require("./routes/empdet");
const remarksRouter = require("./routes/remarks");
const documentRouter = require("./routes/docs");
dotenv.config()

//! App Middleware  
app.use(express(express.json()))
// app.use(cors());
app.use(morgan("common")) //* Morgan helps developers log details about incoming HTTP requests, which can be useful for debugging and monitoring the performance of their applications.
app.use(helmet())
app.use(bodyParser.json()); // To parse JSON bodies

//! MongoDb Connection

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true
}).then(()=>{
    console.log("mongoDb database connected");
}).catch((error) =>{
    console.log(error);
});

app.use("/api/auth/",authRouter);
app.use("/api/notes/",notesRouter);
app.use("/api/empdet/",empdetRouter);
app.use("/api/remarks/",remarksRouter);
app.use("/api/docs",documentRouter);

app.listen(8000, '0.0.0.0',()=>{
    console.log("app is running on the port")
})


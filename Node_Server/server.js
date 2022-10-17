import express from 'express';
import allRoutes from './src/route/restRoute.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
// Setup the port for the server
const port = 4000;


//set connection between the API and mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://JaegyeomKim:jk%40157600@cluster0.clqb6qh.mongodb.net/UserDataSet?retryWrites=true&w=majority', {
    //avoid errors
    useNewUrlParser: true,
    useUnifiedTopology: true
});



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");    
    next();
  });


  
//parse requests and make it redable for our API
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





//call the allRoute function and send app which initializes express
allRoutes(app);

// When a get request is made to / or the default page 
// display a message.
app.get('/', (req, res) =>
    res.send(`Your node and express server is running on port: ${port}`)
);

//print a message to the cli
app.listen(port, () => {
    console.log("restAPI is running on port: " + port);
});
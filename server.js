// require express module for application
const express = require('express');
// require express middleware cors (cross-origin-resource-sharing)
const cors =require('cors')

const hostname = 'localhost';
const port = 5000;

const app = express();

// cors - mechanism that allows a server to indicate any origins other than its own from which a browser should permit loading resources
app.use(cors())

// parses incoming requests with JSON and puts parsed data in req.body
app.use(express.json())

// app.get() function routes the HTTP GET Requests to the path which is being specified with the specified callback functions. intended for binding the middleware to your application.
app.get('/',(req,res)=>{
    res.send("API is running")
})

//  app.post() function routes the HTTP POST requests to the specified path with the specified callback functions
app.post('/subscribe', (req,res)=>{
    console.log(req.body)
    res.send("Thanks for subscribing")
})

// bind and listen to the connections on the specified host and port
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// require express module for application
const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use((req,res)=>{
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html')
    res.end();
});

// points to the public folder for static files
app.use(express.static(__dirname + '/public'));

// bind and listen to the connections on the specified host and port
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

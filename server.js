//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./app'));

/*
app.get('/*', (req, res) =>
    res.sendFile('app.component.html', {root: 'app/'}),
);
*/

// Serve only the static files form the dist directory    
app.use(express.static(__dirname + '/src/app'));
console.log("TESTE CARREGAR: " + __dirname)

app.get('/*', function(req,res) {  
    res.sendFile(path.join(__dirname+'/src/app/app.component.html'));   
});  

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
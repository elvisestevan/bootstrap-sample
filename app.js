var express = require('express');
var app = express();

var http = require('http').Server(app);

//Modulo nativo do NodeJS para resolver caminhos
var path = require('path');

var port = process.env.PORT;

app.use(express.static(path.resolve(__dirname, 'public')));

//Seta a rota do index
app.get('/', function(req, res) {
  res.render('index.html');
});

http.listen(port, function(){
  console.log(("Servidor rodando na porta " + port));
});
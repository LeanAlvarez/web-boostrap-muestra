const express = require('express'); //requiero express
const bodyParser = require('body-parser');
const path = require('path'); //modulo que ya viene instalado en node
const app = express();//inicializacion de express

//imports
const routes = require('./routes/index');


//settings
app.set('port', process.env.PORT || 3000);//setea el puerto en el que va a escuchar el servidor
app.set('views', path.join(__dirname, 'views'));//une los directorios
app.set('view engine', 'ejs');//seteo ejs


//middlewares
app.use((req, res, next) => {
  console.log(`${req.url} - ${req.method}`); //muestra los request de url y el metodo
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Rutas
app.use(routes); //utiliza el enrutador dnd estan las rutas ya definidas

//Archivos estaticos

app.use(express.static(path.join(__dirname, 'public')));


//inicializacion del servidor
app.listen(app.get('port'), () => {
  console.log('Funcionando en puerto', app.get('port'));
});

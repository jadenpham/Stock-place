var express = require('express');
var app = express();
var bodyParser = require("body-parser");
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
// const bcrypt = require('bcrypt');
require('./backend/models/item.js');
require('./backend/config/mongoose.js');

var routes = require('./backend/config/routes.js');
routes(app);

app.listen(8000, function(req,res){
    console.log("listening on 8000");
})
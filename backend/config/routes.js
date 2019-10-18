var items = require('../controllers/items.js');
var path = require('path');

module.exports = function(app){
    app.post("/register", (req,res)=>{
        items.register(req,res);
    })
    app.post("/create", (req, res) =>{
        items.create(req,res);
    })
    app.get('/all', (req, res) =>{
        items.all(req, res);
    })
    app.get('/one/:id', (req, res)=>{
        items.one(req,res);
    })
    app.post('/login', (req,res)=>{
        console.log('Testing in routes.js')
        items.login(req,res);
    })
    app.post('/addItemToDb', (req, res)=>{
        console.log('here in routes');
        items.addToCart(req, res);
    })
    app.get('/validate',(req,res)=>{
        console.log('Testing In Route.JS In Validate')
        items.validate(req,res)
    })
    app.all("*", (req, res, next) =>{
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
  
}